import React from 'react'

const About = () => {
  return (
    <section className='About inner'>
      <h2>ABOUT</h2>
      <h3>엘릭시르</h3>
      <div className='des'>엘릭시르는 (주)문학동네 출판그룹의 장르소설 전문 브랜드입니다. 미스터리, 판타지, SF, 호러 등 다양한 해외 소설을 소개하는 동시에 한국 작가를 적극적으로 발굴하여 독서의 즐거움을 넓혀가고 있습니다. 2015년에는 미스터리 전문 잡지 《미스테리아 MYSTERIA》를 창간하며 신인 작가 발굴에도 힘을 기울이고 있습니다. 이제 창립 10년이 된 엘릭시르는 매년 꾸준히 성장하며 독자들의 관심을 받아 한국 장르소설 출판사 가운데 단연 두각을 나타내고 있습니다.<br/>
      ‘엘릭시르(Elixir)’란 ‘현자의 돌’ 또는 ‘철학자의 돌’로 불리는 물질로, 납과 같은 금속을 황금으로 바꾸는 매개물이자 불로불사의 생명을 주는 영약으로도 알려져 있습니다. 연금술사에게는 꿈의 물질이었지요. 우리는 작가를 흔히 ‘언어의 연금술사’라 부릅니다. 엘릭시르라는 이름에 연금술사(작가)들의 꿈을 현실에서 구현하고자 하는 마음을 담았습니다.</div>
      <div className='elixirSeries'>
        <div className='seriesBox'>
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/img/image_1655796150814_500.png`} alt="" />
          </figure>
          <h4>미스테리아</h4>
          <p>≪미스테리아≫는 엘릭시르에서 격월간 발행하는 미스터리 전문 매거진입니다.  단행본에서는 쉽게 만나기 힘든 국내외 미스터리 작가들의 단편부터  미스터리라는 장르를 여러 측면에서 폭넓게 즐길 수 있는 기사들이 준비되어 있습니다.</p>
          {/* <button>자세히 보기</button> */}
        </div>
        <div className='seriesBox'>
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/img/image_1607432391146_500.jpeg`} alt="" />
          </figure>
          <h4>미스터리 책장 시리즈</h4>
          <p>미스터리의 거장으로 불리는 작가의 명작들을 모은 추리소설 전집입니다. 추리소설 황금기의 작품부터, 윌리엄 아이리시의 『환상의 여인』, 셜리 잭슨의 『제비뽑기』 등 다채로운 색깔의 미스터리를 소개하는 데 주력하고 있습니다.</p>
          {/* <button>자세히 보기</button> */}
        </div>
        <div className='seriesBox'>
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/img/image_1607432398017_500.jpeg`} alt="" />
          </figure>
          <h4>엘릭시르 미스터리 대상</h4>
          <p>엘릭시르는 2017년 ‘엘릭시르 미스터리 대상’을 신설하여 국내 미스터리 작가를 발굴에 박차를 가하기 시작했습니다.</p>
          {/* <button>자세히 보기</button> */}
        </div>
      </div>
    </section>
  )
}

export default About