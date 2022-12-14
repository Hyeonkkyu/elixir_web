import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../css/login.css';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        axios({
            method: 'post',
            url: '/api/user/signin',
            data: data
        }
            // axios로 들고온 데이터를 로컬에 추가할 수 있도록 허용
            // 포트 또는 브라우저가 다를 경우 필요함
            , { withCredentials: true }
        )
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`;
                window.location.replace('/');
                // 로그인 하고 보던 화면으로 돌아가야하기 때문에 history.go(-1); 사용
                // 이전페이지 가기. () 안의 값이 현재페이지에 대한 상대좌표.
                // window.history.go(-1);
            })
            .catch((error) => {
                console.log(error);
                alert('이메일 또는 비밀번호를 확인해주세요.');
            })
    }

    return (
        <section className='Login inner'>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit(onSubmit)} method="get" >
                <div className='inputBox'>
                    <input id="user_id" type="email" name="user_id" {...register("user_id")} placeholder="이메일" />
                    <label htmlFor="user_id">이메일</label>
                </div>
                <div className='inputBox'>
                    <input id="user_pw" type="password" name="user_pw" {...register("user_pw")} placeholder="비밀번호" />
                    <label htmlFor="user_pw">비밀번호</label>
                </div>
                <div className='userConfig'>
                    <div className="findId">
                        <Link to="/findid">
                            아이디 찾기
                        </Link>
                    </div>
                    <div className="findPw">
                        <Link to="/findpw">
                            비밀번호 찾기
                        </Link>
                    </div>
                    <div className="signUp">
                        <Link to="/join">
                            회원가입
                        </Link>
                    </div>
                </div>
                <input type="submit" value="로그인" />
            </form>
        </section>
    )
}

export default Login