import React, { useEffect, useRef, useState } from 'react'

const userData = [
  {id:1, user_id: "test@naver.com", user_pw: "test1234!!", }
]

const SignUp = () => {
  const [user, setUser] = useState([userDate]);
  useEffect(()=> {

  },[])

  const cheackForm = () => {
    //유효성 검사
    const RegExp = {
      //이메일 형식으로만
      email: /[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/,

      //6자 이상, 영문, 숫자, 특수문자(?)를 포함
      pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}])[a-zA-Z0-9]{6,}$/,

      // 한글만 가능
      name: /^[ㄱ-ㅎ가-힣]*$/,

      // 한글만 가능
      nickname: /^[ㄱ-ㅎ가-힣]*$/,

      //핸드폰번호인지에 대한 형식검사. 반드시 앞자리가 010,010,016~9사이를 충족해야 하며, 각 부분에 대한 자리수도 충족시켜야 한다. "-"는 허용하지 않는다.
      phone: /^01(?:0|1|[6-9])(?:\\d{3}|\\d{4})\\d{4}$/,

    }

    // if (!RegExp.en.test(todo.title)) {
    //   alert("영어만 입력해주세요.");
    //   setTodo({
    //     title: "",
    //   })
    //   ipref.current.focus()
    //   return;

    // }

    if (!RegExp.email(user_id)) {

    }
  }

  return (

    <section className='SignUp' >
      hi!!!
      <h2>SIGNUP</h2>
      <form action="" method='POST'>
        <p>아이디</p>
        <div className='inputBox'>
          <input id="user_id" type="text" name="user_id" placeholder="아이디" />
          <label for="user_id">아이디</label>
        </div>
        <p>비밀번호</p>
        <div className='inputBox'>
          <input id="user_pw" type="text" name="user_pw" placeholder="비밀번호" />
          <label for="user_pw">비밀번호</label>
        </div>
        <p>비밀번호 확인</p>
        <div className='inputBox'>
          <input id="user_pw" type="text" name="user_pw" placeholder="비밀번호" />
          <label for="user_pw">비밀번호</label>
        </div>
        <input type="submit" value="로그인" />
      </form>
    </section >
  )
}

export default SignUp