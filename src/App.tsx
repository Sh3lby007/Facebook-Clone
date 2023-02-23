import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
        {/* Sidebar */}
        <SideBar />
        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
