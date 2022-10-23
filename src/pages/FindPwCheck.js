import React, { useRef } from 'react'
import axios from 'axios';
import jwt from 'jwt-decode';
import { useForm } from 'react-hook-form';

//DB단에서 돌려준 id값과 이메일의 본인인증번호를 확인하고 맞으면 비밀번호 변경 페이지로, 틀리면 현재 화면에서 인증 번호를 다시 확인해서 돌려주라고 할 것

const FindPwCheck = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const auth = sessionStorage.getItem("shortToken");

    axios.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${auth}`;

    const onSubmit = async (data) => {
        axios({
            method: 'post',
            url: '/api/user/checkPw',
            data: data
        }
            , { withCredentials: true }
        )
            .then((response) => {
                //js에서는 null 체크가 값을 통째로 넣어서 있으면 true, 없으면 false로 반환해준다.
                if (response.data) {
                    alert(`인증이 완료되었습니다.`);
                    window.location.replace('/findpw/changepw')
                } else {
                    alert('인증번호가 잘못 입력되었습니다. \n 확인 후 다시 입력해주세요.');
                }
            })
            .catch((error) => {
                alert('에러가 발생했습니다.\n다시 한 번 시도해주세요.');
            })
    }

    return (
        <section className='FPcheckNum'>
            <h2>본인 인증 번호 확인</h2>
            <p>이메일로 발송된 본인 인증 번호를 입력해주세요. 인증번호는 발급 후 5분 뒤 만료됩니다.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputBox'>
                    <label>본인 인증 번호</label>
                    {errors.insertNumber && errors.insertNumber.type === "required"
                        && <p className='message'>필수입력란입니다.</p>}
                    {errors.insertNumber && errors.insertNumber.type === "length"
                        && <p className='message'>인증번호는 5자입니다.</p>}
                    <input
                        name="insertNumber"
                        type='number'
                        {...register("insertNumber", {
                            required: true,
                            length: 5
                        })}
                        placeholder="인증번호"
                    />
                </div>
                <input type="submit" value="확인" />
            </form>
        </section>
    )
}

export default FindPwCheck