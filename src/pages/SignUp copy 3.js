import React, { useState, useRef } from 'react'
import '../css/signup.css';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    nickname: ''
  });
  const emailInput = useRef();

  const { email, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // const onReset = () => {
  //   setInputs({
  //     name: '',
  //     nickname: ''
  //   });
  //   nameInput.current.focus();
  // };

  return (
    <div>
      <input name="email" placeholder="이메일" onChange={onChange} value={email} ref={emailInput} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      {/* <button onClick={onReset}>초기화</button> */}
      <div>
        <b>값: </b>
        {email} ({nickname})
      </div>
    </div>
  );
}

export default SignUp