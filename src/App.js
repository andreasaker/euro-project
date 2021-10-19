import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import InsuranceList from "./components/InsuranceList";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      {typeof user.id !== "undefined" ? (
        <div className="content">
          <Navbar user={user} setUser={setUser} />
          <InsuranceList user={user} />
        </div>
      ) : (
        <div className="content">
          <Login setUser={setUser} user={user} />
        </div>
      )}
    </div>
  );
};

export default App;
