import React from 'react'

const Contact = () => {
  return (
    <section className='Contact inner'>
      <div className='textBox'>
        <h2>CONTACT</h2>
        <p className='tit'>주소</p>
        <p className='desc'>경기도 파주시 회동길 210 문학동네 1층 엘릭시르 편집부 앞</p>
        <p className='tit'>출간작 및 미출간작, 저작권 및 판권, 투고 문의 </p>
        <p className='desc'>hoyah@elmys.co.kr</p>
        <p className='tit'>마케팅 및 &lt;미스테리아&gt; 정기구독 서비스 문의</p>
        <p className='desc'>jkj110570@munhak.com</p>
      </div>
      <figure className='imgBox'>
        <img src={`${process.env.PUBLIC_URL}/assets/img/image_1595912733936_1000.jpg`} alt="" />
      </figure>
    </section>
  )
}

export default Contact