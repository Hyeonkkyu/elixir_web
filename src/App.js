import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Mysteria from './components/Mysteria';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Login from './pages/Login';
import Join from './pages/Join';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import FindPwCheck from './pages/FindPwCheck';
import FindPwChange from './pages/FindPwChange';
import BoardWrite from './pages/BoardWrite';
import BoardContent from './pages/BoardContent';
import BookContent from './pages/BookContent';
import AdminPage from './pages/AdminPage';

import './css/main.scss';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/bookInfo' element={<BookContent />} />
        <Route path='/mysteria' element={<Mysteria />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/write' element={<BoardWrite />} />
        <Route path='/news/new/notice' element={<BoardContent />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/findid' element={<FindId />} />
        <Route path='/findpw' element={<FindPw />} />
        <Route path='/findpw/check' element={<FindPwCheck />} />
        <Route path='/findpw/changepw' element={<FindPwChange />} />
        <Route path='/adminpage' element={<AdminPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App