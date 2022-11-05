import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt from 'jwt-decode';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import moment from 'moment';

const News = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/admin/selectNotices',
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch((error) => {
        alert('에러 발생');
      });
  }, [])

  const handlePageChange = (page) => { setPage(page); };

  function AdminWriteBtn() {
    const checkUserRoll = sessionStorage.getItem("token");
    if (checkUserRoll == null) {
      return (
        <>
        </>
      )
    } else if (jwt(checkUserRoll)['user_role'] == "ROLE_ADMIN") {
      return (
        <>
          <button>
            <Link to="/news/write">
              글쓰기
            </Link>
          </button>
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
    <section className='News inner'>
      <h2>EVENT & NOTICE </h2>
      <div className='board'>
        <div className='boardHeader'>
          <h3 className='boardNo'>번호</h3>
          <h3 className='boardTitle'>제목</h3>
          <h3 className='boardWriter'>글쓴이</h3>
          <h3 className='boardCreateDate'>등록일</h3>
        </div>
        <ul className='boardBody'>
          {data.slice(
            items * (page - 1),
            items * (page - 1) + items
          ).map((it, i) => {
            return (
              <li key={i}>
                <div className='no'>{it.notice_num}</div>
                <div className='tit'>
                  <Link to={'/news/new/notice?noticeNum=' + it.notice_num}>{it.notice_title}</Link>
                </div>
                <div className='wri'>{it.user_name}</div>
                <div className='date'>{moment(it.notice_date).format('YYYY-MM-DD')}</div>
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className='btn'>
      <AdminWriteBtn />
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={data.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </section>
  )
}

export default News