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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/access/:name/:code" element={<Home />} />
        <Route exact path="/couple/admin" element={<Admin />} />
      </Routes>
      {currentPath[2] === "admin" ? null : <Footer />}
    </div>
  );
}

export default App;
