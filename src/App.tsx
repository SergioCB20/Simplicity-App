import React, { useState } from "react";
import {Home} from "./pages/Home";
import Navbar from "./components/Navbar";
import Workspace from "./pages/Workspace";
import { HashRouter, Route,Routes } from "react-router-dom";
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <HashRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        </Routes>
    </HashRouter>
  );
}

export default App;

