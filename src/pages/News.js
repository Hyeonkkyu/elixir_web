import React from 'react'
import jwt from 'jwt-decode';

const News = () => {

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
          <button>글쓰기</button>
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
          {/* 최신순으로 업로드되게 하기 */}
          <li>
            <div className='no'>1</div>
            <div className='tit'>제5회 엘릭시르 미스터리 대상 심사평</div>
            <div className='wri'>엘릭시르</div>
            <div className='date'>2022.06.10</div>
          </li>
          <li>
            <div className='no'>2</div>
            <div className='tit'>제5회 엘릭시르 미스터리 대상 심사평</div>
            <div className='wri'>엘릭시르</div>
            <div className='date'>2022.06.10</div>
          </li>
          <li>
            <div className='no'>3</div>
            <div className='tit'>제5회 엘릭시르 미스터리 대상 심사평</div>
            <div className='wri'>엘릭시르</div>
            <div className='date'>2022.06.10</div>
          </li>
          <li>
            <div className='no'>4</div>
            <div className='tit'>제5회 엘릭시르 미스터리 대상 심사평</div>
            <div className='wri'>엘릭시르</div>
            <div className='date'>2022.06.10</div>
          </li>
          <li>
            <div className='no'>5</div>
            <div className='tit'>제5회 엘릭시르 미스터리 대상 심사평</div>
            <div className='wri'>엘릭시르</div>
            <div className='date'>2022.06.10</div>
          </li>
          {/* {
            list.map((it, idx) => {
              return (
                <div key={it.id}>
                  {console.log(it.check)}
                  <input type="checkbox" onChange={
                    () => handlerModify(it.id)
                  } />
                  {it.id}
                  {it.title}
                  <strong>{it.comment}</strong>
                  <button onClick={
                    () => handlerDelete(it.id)
                  }>Delete</button>
                </div>
              )
            })
          } */}
        </ul>
      </div>
      <AdminWriteBtn />
    </section>
  )
}

export default News