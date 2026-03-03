import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { User } from "../types/User";
import { userApi } from "../services/userApi";

// Define the state
interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

type UserAction = 
| { type: 'SET_LOADING'}
| { type: 'SET_ERROR'; payload: string }
| { type: 'SET_USER'; payload: User }
| { type: 'CLEAR_USER' };

function userReducer(state: UserState, action: UserAction): UserState {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: true, error: null};
        case 'SET_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'SET_USER':
            return { user: action.payload, loading: false, error: null };
        case 'CLEAR_USER':
            return { ...initialState };
        default:
            return state;
    }
}

interface UserContextType {
    state: UserState;
    login: (username: string) => Promise<void>;
    logout: () => void;
    updateRole: (role: string) => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const login = async (username: string) => {
        dispatch({ type: 'SET_LOADING'});
        try {
            const user = await userApi.login(username);
            dispatch({ type: 'SET_USER', payload: user });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
        }
    }

    const logout = () => {
        dispatch({ type: 'CLEAR_USER' });
    }

    const updateRole = async (role: string) => {
        if (!state.user) return;
        try {
            const updateUser = await userApi.updateProfile(state.user.id, { role });
            dispatch({ type: 'SET_USER', payload: updateUser });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
        }
    }

    const refreshProfile = async () => {
        if (!state.user) return;
        dispatch({ type: 'SET_LOADING'});
        try {
            const user = await userApi.getProfile(state.user.id);
            dispatch({ type: 'SET_USER', payload: user });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
        }
    }

    return (
        <UserContext.Provider value={{ state, login, logout, updateRole, refreshProfile }}>
            {children}
        </UserContext.Provider>
    );
}

// custom hook for using the user context
export function useUser(): UserContextType {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a <UserProvider>');
    }
    return context;
}

    
