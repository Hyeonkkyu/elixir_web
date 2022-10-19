import React, { useRef, useState } from 'react';
// import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import DaumAddress from './DaumAddress';
import '../css/join.scss';
import DateSelecter from './DateSelecter';

function App() {

  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  {/*react-hook-form@7 사용시 (import{errors})를 {formState: {erros}}로 변경하여 사용해야한다. */ }

  const password = useRef();
  password.current = watch("user_pw");

  const onSubmit = (data) => {
    console.log('data', data)
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
          {errors.user_id && errors.user_id.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.user_id && errors.user_id.type === "pattern"
            && <p className='message'>이메일 형식이 아닙니다.</p>}
          <input
            name="user_id"
            type='text'
            // react-hook-form@7 사용시 ref={register} 대신 {...register("value")}를 사용해야한다.
            {...register("user_id", {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
            placeholder="이메일"
          />
        </div>

        <div className='inputBox'>
          <label>이름</label>
          {errors.user_name && errors.user_name.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.user_name && errors.user_name.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="user_name"
            type='text'
            {...register("user_name", {
              required: true,
              maxLength: 11
            })}
            placeholder="이름"
          />
        </div>

        <div className='inputBox'>
          <label>닉네임</label>
          {errors.user_nickname && errors.user_nickname.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.user_nickname && errors.user_nickname.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="user_nickname"
            type='text'
            {...register("user_nickname", {
              required: true,
              maxLength: 10
            })}
            placeholder="닉네임"
          />
        </div>

        <div className='inputBox'>
          <label>비밀번호</label>
          {errors.user_pw && errors.user_pw.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.user_pw && errors.user_pw.type === "minLength"
            && <p className='message'>비밀번호는 6자 이상 입력해주세요.</p>}
          <input
            name="user_pw"
            type='password'
            {...register("user_pw", {
              required: true,
              minLength: 6
            })}
            placeholder="비밀번호"
          />
        </div>

        <div className='inputBox'>
          <label>비밀번호 확인</label>
          {errors.passwordConfirm && errors.passwordConfirm.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.passwordConfirm && errors.passwordConfirm.type === "validate"
            && <p className='message'>비밀번호가 일치하지 않습니다.</p>}
          <input
            name="passwordConfirm"
            type='password'
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === password.current
            })}
            placeholder="비밀번호 확인"
          />
        </div>

        <div className='inputBox'>
          <label>휴대전화번호</label>
          {errors.user_phone && errors.user_phone.type === "required"
            && <p className='message'>필수입력란입니다.</p>}
          {errors.user_phone && errors.user_phone.type === "pattern"
            && <p className='message'>휴대전화번호 양식이 아닙니다.</p>}
          <input
            name="user_phone"
            type='text'
            {...register("user_phone", {
              required: true,
              pattern: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/
            })}
            placeholder="휴대전화번호"
          />
        </div>

        <div className='inputBox'>
          <label>생일</label>
          {/* {errors.user_birth && errors.user_birth.type === "required"
            && <p className='message'>필수입력란입니다.</p>} */}
          <div className='birthDateBox'>
            <input
              name="user_birth"
              id='birthDate'
              type='text'
              readOnly={true}
              {...register("user_birth", {
                required: true,
              })}
              placeholder="생년월일"
            />
            <DateSelecter />
          </div>
        </div>

        {/* 카카오 주소 받기 완성해두기 */}
        <div className='inputBox'>
          <label>주소</label>
          <div className='postCodeBox'>
            <input
              name="user_add_post"
              id='daumPostCode'
              type='text'
              readOnly={true}
              {...register("user_add_post", {
                required: true,
              })}
              placeholder="우편번호"
            />
            <DaumAddress className="addBtn" />
          </div>

          {/* {errors.user_add && errors.user_add.type === "required"
            && <p className='message'>필수입력란입니다.</p>} */}
          <input
            name="user_add"
            id='daumAdd'
            type='text'
            readOnly={true}
            {...register("user_add", {
              required: true,
            })}
            placeholder="주소"
          />
          {errors.user_add_detail && errors.user_add_detail.type === "maxLength"
            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
          <input
            name="user_add_detail"
            type='text'
            {...register("user_add_detail", {
              required: true,
              maxLength: 50
            })}
            placeholder="상세주소"
          />
        </div>

        <input type="submit" value="회원가입" />

      </form>
    </section>
  );
}

export default App;