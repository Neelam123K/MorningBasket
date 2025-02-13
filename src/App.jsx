import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideBar />} />
      </Routes>
    </div>
  );
}

export default App;
