import React from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';
import '../css/header.scss';

const Header = () => {

    function UserInfo() {
        const isLogin = sessionStorage.getItem("token");
        const logOut = () => {
            sessionStorage.removeItem("token");
            window.location.href = "/";
        };
        if (isLogin == null) {
            return (
                <Link to="/login">
                    <p>로그인</p>
                </Link>
            )
        } else if (jwt(isLogin)['user_role'] == "ROLE_USER") {
            console.log(jwt(isLogin));
            return (
                <>
                    <p>{jwt(isLogin)['nickname']} 님 반갑습니다!</p>
                    <button onClick={logOut}>로그아웃</button>
                </>
            )
        } else if (jwt(isLogin)['user_role'] == "ROLE_ADMIN") {
            return (
                <>
                    <p>관리자님 반갑습니다!</p>
                    <button onClick={logOut}>로그아웃</button>
                </>
            )
        } else {
            console.log(jwt(isLogin)['user_role']);
        }
    };

    return (
        <header className="Header">
            {/* <div className="banner">
                <strong>[공지] 2022년 엘릭시르 미스터리 대상 작품 공모</strong>
            </div> */}
            <div className="top">
                <div className="inner">
                <div className='sns'>
                    <a href="mailto:hoyha@munhak.com"><i className='xi-mail'/></a>
                    <a href="http://www.facebook.com/elixirmystery/" target='_blank'><i className='xi-facebook'/></a>
                    <a href="http://twitter.com/mysteryis" target='_blank'><i className='xi-twitter'/></a>
                </div>
                <div className="user">
                    <UserInfo />
                </div>
                </div>
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
                            <Link to="/about" activeclassname='active'>
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link to="/books" activeclassname='active'>
                                BOOKS
                            </Link>
                        </li>
                        <li>
                            <Link to="/mysteria" activeclassname='active'>
                                MYSTERIA
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" activeclassname='active'>
                                NEWS
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" activeclassname='active'>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header