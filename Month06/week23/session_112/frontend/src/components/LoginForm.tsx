import { useState, type FormEvent } from "react";
import { useUser } from "../context/UserContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const { login, state } = useUser();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(username.trim());
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        textAlign: "center",
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          disabled={state.loading}
          style={{
            padding: "10px 24px",
            fontSize: "16px",
            borderRadius: "6px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {state.loading ? "Loading..." : "Login"}
        </button>
      </form>
      {state.error && (
        <p style={{ color: "red", marginTop: "12px" }}>{state.error}</p>
      )}
    </div>
  );
}
