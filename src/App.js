import React from 'react';
import './App.css';
import TopHeader from "./components/TopHeader";
import MembersHeader from "./components/MembersHeader";

function App() {
  return (
      <div className="main">
        <TopHeader />
        <MembersHeader />
      </div>

  );
}

export default App;
