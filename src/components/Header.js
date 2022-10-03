import React from 'react';
import '../css/header.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="banner">
                <strong>[공지] 2022년 엘릭시르 미스터리 대상 작품 공모</strong>
            </div>
            <div className="menu inner">
                <h1 className="logo">
                    <a href="">ELIXIR</a>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">BOOKS</a></li>
                        <li><a href="">MYSTERIA</a></li>
                        <li><a href="">NEWS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </nav>
                <div className="user">
                    <a href="">로그인</a>
                </div>
            </div>
        </header>
    )
}

export default Header