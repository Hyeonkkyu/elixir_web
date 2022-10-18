import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { redirect } from 'react-router-dom';
import DaumAddress from './DaumAddress';
// import '../css/join.css';

function App() {



  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  {/*react-hook-form@7 사용시 (import{errors})를 {formState: {erros}}로 변경하여 사용해야한다. */ }
  const [startDate, setStartDate] = useState(new Date());
  const password = useRef();
  password.current = watch("password");

  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");

  const onSubmit = (data) => {
    // console.log('data', data)
    axios({
      method: 'post',
      url: '/api/user/signup',
      data: data
    })
      .then(function (response) {
        alert('회원가입 완료');
      })
      .catch(function (error) {
        alert('회원가입 실패');
      })
  }

  return (
    <section className='Join inner'>
      <h2>JOIN</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='inputBox'>
          <label>이메일</label>
          {errors.email && errors.email.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.email && errors.email.type === "pattern"
            && <p className='message'>이메일 형식이 아닙니다.</p>}
          <input
            name="email"
            type='text'
            // react-hook-form@7 사용시 ref={register} 대신 {...register("value")}를 사용해야한다.
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
          />
        </div>

        <div className='inputBox'>
          <label>이름</label>
          {errors.name && errors.name.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.name && errors.name.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="name"
            type='text'
            {...register("name", {
              required: true,
              maxLength: 11
            })}
          />
        </div>

        <div className='inputBox'>
          <label>닉네임</label>
          {errors.nickname && errors.nickname.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.nickname && errors.nickname.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="nickname"
            type='text'
            {...register("nickname", {
              required: true,
              maxLength: 10
            })}
          />
        </div>

        <div className='inputBox'>
          <label>비밀번호</label>
          {errors.password && errors.password.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.password && errors.password.type === "minLength"
            && <p className='message'>비밀번호는 6자 이상 입력해주세요.</p>}
          <input
            name="password"
            type='password'
            {...register("password", {
              required: true,
              minLength: 6
            })}
          />
        </div>

        <div className='inputBox'>
          <label>비밀번호 확인</label>
          {errors.password_confirm && errors.password_confirm.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.password_confirm && errors.password_confirm.type === "validate"
            && <p className='message'>비밀번호가 일치하지 않습니다.</p>}
          <input
            name="password_confirm"
            type='password'
            {...register("password_confirm", {
              required: true,
              validate: (value) =>
                value === password.current
            })}
          />
        </div>

        <div className='inputBox'>
          <label>휴대전화번호</label>
          {errors.phone && errors.phone.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.phone && errors.phone.type === "pattern"
            && <p className='message'>휴대전화번호 양식이 아닙니다.</p>}
          <input
            name="phone"
            type='text'
            {...register("phone", {
              required: true,
              pattern: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
            })}
          />
        </div>

        <div className='inputBox'>
          <label>생일</label>
          {errors.date && errors.date.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {/* {errors.brith && errors.brith.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>} */}
          {/* <input
            name="brith"
            type='text'
            {...register("brith", {
              required: true,
              maxLength: 11
            })}
          /> */}
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            required={true}
            onChange={date => setStartDate(date)}
          />
        </div>

        {/* 카카오 주소 받기 완성해두기 */}
        <div className='inputBox'>
          <label>주소</label>
          {errors.address && errors.address.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.address && errors.address.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="address"
            type='text'
            {...register("address", {
              required: true,
              maxLength: 11
            })}
          />
          <button onClick={()=>{setPopup(!popup)}}>주소 검색</button>
          {popup && <DaumAddress className="postPopUp" address={address} setAddress={setAddress}/>}
        </div>

        <input type="submit" value="회원가입" />

      </form>
    </section>
  );
}

export default App;