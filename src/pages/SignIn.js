import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signin.css';

const SignIn = () => {
    return (
        <section className='SignIn inner'>
            <h2>LOGIN</h2>
            <form action="" method='POST'>
                <div className='inputBox'>
                    <input id="user_id" type="text" name="user_id" placeholder="아이디" />
                    <label for="user_id">아이디</label>
                </div>
                <div className='inputBox'>
                    <input id="user_pw" type="text" name="user_pw" placeholder="비밀번호" />
                    <label for="user_pw">비밀번호</label>
                </div>
                <div className='userConfig'>
                    <div className="findId">아이디 찾기</div>
                    <div className="findPw">비밀번호 찾기</div>
                    <div className="signUp">
                        <Link to="/signup">
                            회원가입
                        </Link>
                    </div>
                </div>
                <input type="submit" value="로그인" />
            </form>
        </section>
    )
}

export default SignIn