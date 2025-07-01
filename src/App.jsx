import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const token = window.localStorage.getItem("token");
  return (
    <div className="container">
      {token ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;