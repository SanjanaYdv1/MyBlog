import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="fixed w-full h-screen overflow-auto"> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;