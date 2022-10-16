import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import Books from './pages/Books';
import Mysteria from './pages/Mysteria';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Join from './pages/Join';
import Footer from './components/Footer';
import './css/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/mysteria' element={<Mysteria />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App