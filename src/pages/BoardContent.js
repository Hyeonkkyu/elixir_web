import React, { useState, useEffect } from 'react'
import moment from 'moment';
import jwt from 'jwt-decode';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const BoardContent = () => {

    const [data, setData] = useState({});

    const [searchParams] = useSearchParams();

    const query = searchParams.get('noticeNum');

    useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'get',
            url: '/api/admin/selectNotice',
            params: {
                notice_num: query
            }

        })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, []);

    const auth = sessionStorage.getItem("token");

    axios.defaults.headers.common[
        "Authorization"
    ] =    `Bearer ${auth}`;

    function deleteNotice() {

        let yn = window.confirm("게시글을 삭제하시겠습니까?");

        if(yn == false) return;

        axios({ 
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'get',
            url: '/api/admin/deleteNotice',
            params: {
                notice_num: query
            }

        })
            .then((response) => {
                window.location.replace('/news');
            })
            .catch((error) => {
                alert('에러 발생');
            });
    };

    function AdmindeleteBtn() {
        const checkUserRoll = sessionStorage.getItem("token");
        if (checkUserRoll == null) {
          return (
            <>
            </>
          )
        } else if (jwt(checkUserRoll)['user_role'] == "ROLE_ADMIN") {
          return (
            <>
              <button onClick={deleteNotice}>삭제</button>
            </>
          )
        } else {
          return (
            <>
            </>
          )
        }
      }

    return (
        <section className='BoardContent inner'>
            <h2 className='tit'>{data.notice_title}</h2>
            <div className='writeData'>{data.user_name} / {moment(data.notice_date).format('YYYY-MM-DD')}</div>
            <div className='des'>{data.notice_content}</div>
            <div className='btn'>
            <AdmindeleteBtn/>
            </div>
        </section>
    )
}

export default BoardContent