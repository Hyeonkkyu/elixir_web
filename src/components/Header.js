import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="banner">
                <strong>[공지] 2022년 엘릭시르 미스터리 대상 작품 공모</strong>
            </div>
            <div className="menu inner">
                <h1 className="logo">
                    <Link to="/">
                        ELIXIR
                    </Link>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/about">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link to="/books">
                                BOOKS
                            </Link>
                        </li>
                        <li>
                            <Link to="/mysteria">
                                MYSTERIA
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                NEWS
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="user">
                    <Link to="/login">
                        로그인
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header