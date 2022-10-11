import React from 'react'
import '../css/signup.css';

const SignUp = () => {

  

  return (
    <section className='SignUp inner'>
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

        {/* <input onChange={handlerInput} name='title' value={todo.title || ''} ref={ipref} />
            <input onChange={handlerInput} name='content' value={todo.content || ''} />
            <button onClick={handlerList}>WRITE</button> */}
      </form>
    </section>
  )
}

export default SignUp