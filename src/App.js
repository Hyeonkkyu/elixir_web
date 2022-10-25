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
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import FindPwCheck from './pages/FindPwCheck';
import FindPwChange from './pages/FindPwChange';
import BoardWrite from './pages/BoardWrite';
import BoardContent from './pages/BoardContent';
import Test from './pages/Test';
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
        <Route path='/books/bookInfo' element={<Books />} />
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
        <Route path='/test' element={<Test />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App