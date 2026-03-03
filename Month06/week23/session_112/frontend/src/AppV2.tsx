import { UserProvider, useUser } from "./context/UserContext";
import { PageV2 } from "./components/PageV2";
import { LoginForm } from "./components/LoginForm";

function AppContent() {
  const { state } = useUser();
  if (!state.user) return <LoginForm />;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "0 20px",
      }}
    >
      <PageV2 />
    </div>
  );
}

function AppV2() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default AppV2;
