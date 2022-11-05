import React from 'react'
import Slider from 'react-slick';
import jwt from 'jwt-decode';
import 'slick-carousel/slick/slick.css'

const AdminPage = () => {
  const isLogin = sessionStorage.getItem("token");
  if (isLogin == null) {
    return (
      <section className='notFoundPage inner'>
        <strong>
          잘못된 접근입니다.
        </strong>
      </section >
    )
  } else if (jwt(isLogin)['user_role'] == "ROLE_USER") {
    return (
      <section className='notFoundPage inner'>
        <strong>
          잘못된 접근입니다.
        </strong>
      </section >
    )
  } else if (jwt(isLogin)['user_role'] == "ROLE_ADMIN") {
    return (
      <section className='AdminPage inner'>
        <div className='admin_sec'>
          {/* <Slider
            slidesToShow={5}
            arrows={false}
            dots={true}
            slidesToScroll={5}>
  
          </Slider> */}
        </div>
        <div className='admin_sec'>공지사항 리스트와 등록 버튼</div>
        <div className='admin_sec'>회사 정보 수정 및 업데이트</div>
        <div className='admin_sec'>베너...?</div>
      </section>
    )
  }

}

export default AdminPage