// <div className="bg-[#f4f5f6] w-screen h-screen">

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBord from "./Pages/DashBord";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="user" element={<Home />} />
          <Route path="dashboard" element={<DashBord />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
