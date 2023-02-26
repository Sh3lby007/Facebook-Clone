import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/header";
import Login from "./components/Login/Login";
import SideBar from "./components/SideBar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const [count, setCount] = useState(0);
  const user = "";

  // If no user, show the login page
  if (!user) return <Login />;
  // Show app when user is present.
  else
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
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    );
}

export default App;
