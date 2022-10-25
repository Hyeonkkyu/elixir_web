import React, { Component } from 'react'
import BookList from './BookList'

const Books = () => {

    return (
      <section className='Books inner'>
        <h2>New Release</h2>
        <div className='newRelease'>
          <div className='left'>
            <figure>
              <img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} />
            </figure>
            <button className='buyBtn'>구매하기</button>
          </div>
          <div className='right'>
            <h3>인사이트 밀</h3>
            <p>요네자와 호노부</p>
            <strong>요네자와 호노부의 본격 미스터리 성찬</strong>
            <p>“다른 사람을 살해했을 경우,  다른 사람에게 살해되었을 경우,  다른 사람을 살해한 사람을 지목했을 경우,  다른 사람을 살해한 사람을 지목한 사람을 도왔을 경우,  여러분은 더욱 많은 보수를 받으실 수 있습니다.”<br />
              시급 11만 2천엔. 보통 아르바이트 비용의 100배도 넘는 금액이다. 열두 명의 참가자는 각자의 이유로 이 수상하면서도 혹할 수밖에 없는 아르바이트에 지원한다. 어떤 사람은 장난삼아, 어떤 사람은 진짜인지 확인하기 위해, 어떤 사람은 단순히 돈이 필요해서, 어떤 사람은 자신의 재능을 시험하기 위해, 어떤 사람은 차를 갖고 싶어서. 의심과 궁금증을 품은 사람은 있었지만 어떤 일이 벌어질지는 아무도 예측하지 못했다. 그렇게 ‘암귀관’에 들어선 그들은 7일간의 데스 매치를 벌이게 된다.
            </p> 
          </div>
        </div>
        <div className='bookList'>
          <div className='listNav'>
            {/* <select name="selectbox">
              <option value="전체" selected="selected">전체</option>
              <option value="국내서">국내서</option>
              <option value="해외서">해외서</option>
              <option value="오름차순">오름차순</option>
              <option value="내림차순">내림차순</option>
            </select> */}
          </div>
          <BookList />
        </div>
      </section> 
    )
  }

  export default Books