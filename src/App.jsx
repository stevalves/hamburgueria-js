import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { DashBoard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <DashBoard />
    </div>
  );
}

export default App;
