import React, { useRef } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../css/findpwchange.scss';

//DB단에서 돌려준 id값을 hidden으로 input에 넣어주고 비밀번호를 변경해서 다시 저장해준다. 비밀번호 변경이 완료되면 로그인으로, 실패시 다시 시도하게 알람창

const FindPwChange = () => {

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    const auth = sessionStorage.getItem("shortToken");

    axios.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${auth}`;

    const password = useRef();
    password.current = watch("user_pw");

    const onSubmit = async (data) => {
        axios({
            method: 'post',
            url: '/api/user/changePw',
            data: data
        })
            .then((response) => {
                    alert(`비밀번호가 변경되었습니다.`);
                    sessionStorage.removeItem("shortToken");
                    window.location.replace('/login')
            })
            .catch((error) => {
                alert('에러가 발생했습니다.\n다시 한 번 시도해주세요.');
            })
    }

    return (
        <section className='FindPwChange inner'>
            <h2>비밀번호 변경</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        // placeholder="비밀번호"
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
                        // placeholder="비밀번호 확인"
                    />
                </div>

                <input type="submit" value="비밀번호 변경" />
            </form>
        </section>
    )
}

export default FindPwChange