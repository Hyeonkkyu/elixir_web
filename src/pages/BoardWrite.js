import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import jwt from 'jwt-decode';
import axios from 'axios';

const BoardWrite = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const auth = sessionStorage.getItem("token");

    axios.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${auth}`;

    const onSubmit = (data) => {
        console.log('data', data)
        axios({
            method: 'post',
            url: '/api/admin/insertNotice',
            data: data
        })
            .then((response) => {
                alert('게시글이 업로드 되었습니다.');
                window.location.href = "/news";
            })
            .catch((error) => {
                alert('게시글 업로드에 실패하셨습니다. 다시 시도해주세요.');
            })
    }

    if (jwt(sessionStorage.getItem("token"))['user_role'] == "ROLE_ADMIN") {

        return (
            <section className='BoardWrite inner'>
                <h2>관리자 게시글 작성</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputBox'>
                        <label>제목</label>
                        {errors.notice_title && errors.notice_title.type === "required"
                            && <p className='message'>필수입력란입니다.</p>}
                        {errors.notice_title && errors.notice_title.type === "maxLength"
                            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
                        <input
                            name="notice_title"
                            type='text'
                            {...register("notice_title", {
                                required: true,
                                maxLength: 25
                            })}
                            placeholder="25자 이내로 제목을 입력해주세요."
                        />
                    </div>
                    <div className='inputBox'>
                        <label>내용</label>
                        {errors.notice_content && errors.notice_content.type === "required"
                            && <p className='message'>필수입력란입니다.</p>}
                        {errors.notice_content && errors.notice_content.type === "maxLength"
                            && <p className='message'>최대 입력수를 초과하였습니다.</p>}
                        <textarea
                            name="notice_content"
                            type='text'
                            {...register("notice_content", {
                                required: true,
                                maxLength: 1000
                            })}
                            placeholder="1000자 이내로 내용을 입력해주세요."
                        />
                    </div>
                    <div className='submitBox'>
                        <input type="submit" value="작성완료"/>
                    </div>
                </form>
            </section>
        )
    } else {
        alert('잘못된 접근입니다.');
        window.location.href = "/";
    }
}

export default BoardWrite