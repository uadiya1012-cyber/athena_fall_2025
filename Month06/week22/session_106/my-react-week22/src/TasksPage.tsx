import AdvancedTasksLab from "./components/AdvancedTasksLab";

interface Props {
    onLogout: () => void;
}

export const TasksPage = ({ onLogout }: Props) => {

    return (
        <div>
            <h2>Tasks</h2>
            <button onClick={onLogout}>Logout</button>
            <AdvancedTasksLab />
        </div>
    )
}
