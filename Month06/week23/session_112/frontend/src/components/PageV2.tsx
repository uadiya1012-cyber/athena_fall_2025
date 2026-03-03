import { HeaderV2 } from "./HeaderV2";
import { SideBarV2 } from "./SideBarV2";

export function PageV2() {
  return (
    <div>
      <HeaderV2 />
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <SideBarV2 />
        <main
          style={{
            flex: 1,
            padding: "16px",
          }}
        >
          <h2>Welcome to the Dashboard</h2>
          <p>
            This is the main content area. Here you can see your courses,
            progress, and more.
          </p>
        </main>
      </div>
    </div>
  );
}
