import { UserGreetingV2 } from "./UserGreetingV2";

export function HeaderV2() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        background: "#1f2937",
        color: "white",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ fontSize: "20px", margin: 0 }}>My App</h1>
      <UserGreetingV2 />
    </header>
  );
}
