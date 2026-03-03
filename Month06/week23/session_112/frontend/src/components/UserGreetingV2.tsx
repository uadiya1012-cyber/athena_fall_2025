import { useUser } from "../context/UserContext";

export function UserGreetingV2() {
  const { state, logout } = useUser();
  if (!state.user) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div>
        <strong>{state.user.username}</strong>
        <span style={{ marginLeft: "8px", color: "#6b7280", fontSize: "14px" }}>
          {state.user.role}
        </span>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
