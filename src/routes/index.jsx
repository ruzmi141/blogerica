import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../view/about";
import Home from "../view/home/home";

export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    );
  }