import React, { useState, useRef } from 'react'
import '../css/signup.css';

const SignUp = () => {

  // regular expression
  const RegExp = {
    // 6자 이상, 영문, 숫자를 포함
    id: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/,

    // 6자 이상, 영문, 숫자, 특수문자(?)를 포함
    pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}])[a-zA-Z0-9]{6,}$/,

    // 한글만 가능
    ko: /^[ㄱ-ㅎ가-힣]*$/,

    //이메일 형식으로만
    email: /[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/,

    //핸드폰번호인지에 대한 형식검사. 반드시 앞자리가 010,010,016~9사이를 충족해야 하며, 각 부분에 대한 자리수도 충족시켜야 한다. "-"는 허용하지 않는다.
    ph: /^01(?:0|1|[6-9])(?:\\d{3}|\\d{4})\\d{4}$/,

    //전화번호인지에 대한 형식검사. 각 연결부는 "-"로 구분되어야 한다. 각 부분에 대한 자리수도 충족시켜야 한다. "-"는 허용하지 않는다.
    tel: /^\\d{2,3}-\\d{3,4}-\\d{4}$/,
  };

  // (!RegExp.en.test(todo.title))


  let InputEmail = document.getElementById('email');
  // let IputName = document.getElementById('name').value;
  // let InputPassword = document.getElementById('password').value;
  // let InputPasswordCheck = document.getElementById('passwordCheck').value;
  // let JoinButton = document.getElementById('joinButton').value;

  let InputSuccessMessage = document.getElementById('successMessage');
  let InputFailMessage = document.getElementById('failMessage');

  // JoinButton.disabled = true;


  InputEmail.onkeyup = function () {
    if (RegExp.email(InputEmail.value)) {
      InputSuccessMessage.classList.remove('hide')

      InputFailMessage.classList.add('hide')
    } else {
      InputSuccessMessage.classList.add('hide')

      InputFailMessage.classList.remove('hide')
    }
  }

  // InputEmail.addEventListener('keyup', button)


  return (
    <section className='SingUp inner'>
      <h2>SIGNUP</h2>
      <form action="" method='POST'>
        <div className='inputBox'>
          <input type="text" id="name" name="name" placeholder="이름" />
          <label for="name">
            이름
          </label>
        </div>
        <div className='inputBox'>
          <input type="email" id="email" name="email" placeholder="이메일" />
          <label for="email">
            <div className='baiscMessage'>이메일</div>
            <div className='failMessage hide'>이메일 양식이 아닙니다.</div>
            <div className='successMessage hide'>올바른 이메일 주소입니다.</div>
          </label>
        </div>
        <div className='inputBox'>
          <input type="password" id="password" name="password" placeholder="비밀번호" />
          <label for="password">비밀번호</label>
        </div>
        <div className='inputBox'>
          <input type="text" id="passwordCheck" name="password" placeholder="비밀번호 확인" />
          <label for="password">비밀번호 확인</label>
        </div>
      </form>
    </section>
  )
}

export default SignUp