import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import '../css/findid.scss';

const FindId = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        axios({
            method: 'post',
            url: '/api/user/findId',
            data: data
        }
            , { withCredentials: true }
        )
            .then((response) => {
                //js에서는 null 체크가 값을 통째로 넣어서 있으면 true, 없으면 false로 반환해준다.
                if (response.data) {
                    alert(`아이디는 ${response.data}입니다.`);
                    window.location.href = "/login";
                } else {
                    alert('내용과 일치하는 회원정보가 없습니다.');
                }
            })
            .catch((error) => {
                alert('에러가 발생했습니다.\n다시 한 번 시도해주세요.');
            })
    }

    return (
        <section className='FindId'>
                <h2>아이디 찾기</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="submit" value="아이디 찾기" />
                </form>
        </section>
    )
}

export default FindId