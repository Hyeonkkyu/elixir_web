import React from 'react'
import '../css/signup.css';

const SignUp = () => {

  const handlerList = () => {
    //유효성 검사
    const RegExp = {
      email: /[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$/,

      pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}])[a-zA-Z0-9]{6,}$/,

      name: /^[ㄱ-ㅎ가-힣]*$/,

      nickname: /^[ㄱ-ㅎ가-힣]*$/,

      phone: /^\\d{2,3}-\\d{3,4}-\\d{4}$/,
    }

  //   if (todo.title.length < 5) {
  //     alert('5자 이상 입력해주세요.');
  //     setTodo({
  //         title: "",
  //     });
  //     ipref.current.focus()
  //     return;
  // }
  // if (!RegExp.en.test(todo.title)) {
  //     alert("영어만 입력해주세요.");
  //     setTodo({
  //         title: "",
  //     })
  //     ipref.current.focus()
  //     return;
  // }
  }

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