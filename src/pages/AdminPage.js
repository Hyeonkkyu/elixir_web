import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'

const AdminPage = () => {
  return (
    <section className='AdminPage'>
        <div className='admin_sec'>
          <Slider
          slidesToShow={5}
          arrows={false}
          dots={true}
          slidesToScroll={5}
          ref={MS}>

          </Slider>
        </div>
        <div className='admin_sec'>공지사항 리스트와 등록 버튼</div>
        <div className='admin_sec'>회사 정보 수정 및 업데이트</div>
        <div className='admin_sec'>베너...?</div>
    </section>
  )
}

export default AdminPage