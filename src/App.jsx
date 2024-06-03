import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Nav from './components/NAV/Nav'
import Home from './components/Home';
import Products from './components/Products';
import Middle1 from './components/Middle1';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Feedback from './components/Feedback';
import About from './components/About';
import Faq from './components/Faq';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Home/>
    <Products/>
    <Middle1/>
    <About/>
    <Faq/>
    <Feedback/>
    <Connect/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App