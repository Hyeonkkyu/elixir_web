import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const BoardContent = () => {

    const [searchParams] = useSearchParams();

    const query = searchParams.get('noticeNum');

    console.log(query);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/admin/selectNotice',
            // JSON형식 key:value로 데이터 전송
            data: { notice_num: query }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, [])

    return (
        <section className='BoardContent'>
            {/* <h2 className='tit'>{it.notice_title}</h2>
            <div className='writeData'>{it.user_name} / {moment(it.notice_date).format('YYYY-MM-DD')}</div>
            <div className='des'>{it.notice_content}</div> */}
            ho!
        </section>
    )
}

export default BoardContent