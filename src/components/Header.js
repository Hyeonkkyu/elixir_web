import React from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';
// import UserInfo from './UserInfo';
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
                    로그인
                </Link>
            )
        } else if (jwt(isLogin)['user_role'] == "ROLE_USER") {
            console.log(jwt(isLogin));
            return (
                <div>
                    {/* <div>{jwt(isLogin)['sub']}님 반갑습니다!</div> */}
                    <div>{jwt(isLogin)['nickname']} 님 반갑습니다!</div>
                    <button onClick={logOut}>로그아웃</button>
                </div>
            )
        } else if (jwt(isLogin)['user_role'] == "ROLE_ADMIN") {
            return (
                <div>
                    <div>관리자님 반갑습니다!</div>
                    <button onClick={logOut}>로그아웃</button>
                </div>
            )
        } else {
            console.log(jwt(isLogin)['user_role']);
        }
    };

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
                    <UserInfo />
                </div>
            </div>
        </header>
    )
}

export default Header