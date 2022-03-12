import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import App from './App';
import About from "./about/About"
import Tech from "./technology/tech"
import "./index.css"

function Main() {
  return (
    <>
      <BrowserRouter class="links">
      <Link className='link' to="/">Home</Link>
      <Link className='link0' to="/about">About</Link>
      <Link className='link1' to="/technology">Technology</Link>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/technology" element={<Tech />}/>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default Main