import { UserPanelV2 } from "./UserPanelV2";

export function SideBarV2() {
  return (
    <aside
      style={{
        width: "280px",
        padding: "16px",
        background: "#e0f2fe",
        color: "#1f2937",
        borderRadius: "8px",
      }}
    >
      <h2>Sidebar</h2>
      <nav style={{ marginBottom: "16px" }}>
        <p>Dashboard</p>
        <p>Courses</p>
        <p>Settings</p>
      </nav>
      <UserPanelV2 />
    </aside>
  );
}
