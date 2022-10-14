import React from 'react'
import '../css/signup.css';

const SignUp = () => {
  const handlerList = () => {
    //유효성 검사
    const RegExp = {
      //이메일 형식으로만
      email: /[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/,

      // 6자 이상, 영문, 숫자, 특수문자(?)를 포함
      pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}])[a-zA-Z0-9]{6,}$/,
    }

    if (!RegExp.email(document.getElementById('user_id').value)) {
      alert("영어만 입력해주세요.");
    }
  }
  const setUserId = () => {

    console.log(document.getElementById('user_id').value)


  }
  const setUserPw = () => {
    console.log(document.getElementById('user_pw').value)
  }

  return (
    <section className='SignUp'>
      <form action="" method='POST'>
        <div className='inputBox'>
          <input id="user_id" type="text" name="user_id" placeholder="아이디" onChange={setUserId} />
          <label htmlFor="user_id">아이디</label>
        </div>
        <div className='inputBox'>
          <input id="user_pw" type="text" name="user_pw" placeholder="비밀번호" onChange={setUserPw} />
          <label htmlFor="user_pw">비밀번호</label>
        </div>
        <input type="submit" value="로그인" />
      </form>
    </section>
  )
}

export default SignUp