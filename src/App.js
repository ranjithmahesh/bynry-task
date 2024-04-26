// <div className="bg-[#f4f5f6] w-screen h-screen">

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashBord from "./Pages/DashBord";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="user" element={<Home />} />
        <Route path="dashbord" element={<DashBord />} />
      </Routes>
    </Router>
  );
}

export default App;
