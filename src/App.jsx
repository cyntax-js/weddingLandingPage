import { useState } from "react";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";

function App() {
  const currentPath = window.location.pathname.split("/");

  return (
    <div className="App">
      {currentPath[2] === "admin" ? null : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access/:name/:code" element={<Home />} />
        <Route path="/couple/admin" element={<Admin />} />
      </Routes>
      {currentPath[2] === "admin" ? null : <Footer />}
    </div>
  );
}

export default App;
