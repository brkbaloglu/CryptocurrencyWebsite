import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Contact from './pages/Contact'
function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="cryptocurrencies" element={<Cryptocurrencies/>}/>
      <Route path="contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
