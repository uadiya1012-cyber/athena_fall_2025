import { useUser } from "../context/UserContext";

export function UserPanelV2() {
  const { state, updateRole } = useUser();
  if (!state.user) return null;

  return (
    <div
      style={{
        padding: "16px",
        background: "#f0fdf4",
        color: "black",
        borderRadius: "8px",
      }}
    >
      <h3>Profile</h3>
      <p>Name: {state.user.username}</p>
      <p>Email: {state.user.email}</p>
      <p>Role: {state.user.role}</p>
      <div>
        <label>Change Role:</label>
        <select
          value={state.user.role}
          onChange={(e) => updateRole(e.target.value)}
        >
          <option>Student</option>
          <option>Instructor</option>
          <option>Admin</option>
        </select>
      </div>
    </div>
  );
}
