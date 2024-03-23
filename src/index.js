import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Gallery from "./Pages/Gallery";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Teachers from "./Pages/Teachers";
import Services from "./Pages/services";
import About from "./Pages/About";
import Navbar from './Components/Navbar';
import './index.css';
import Footer from './Components/Footer';



export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Index" element={<Index/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Teachers" element={<Teachers/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/About" element={<About/>} />
    

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
