import React from "react";
import Routes from "./Routes";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes />;
    </AuthContextProvider>
  );
}

export default App;
