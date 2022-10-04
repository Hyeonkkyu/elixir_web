import React from 'react'
import YouTube from 'react-youtube'

const Video = () => {
  return (
    <section className='Video sectionPadding'>
      <div className='inner'>
        <h2>장르하는 사람들</h2>
        <p>미스터리 장르가 여전히 유효한 이유</p>
        <div className="movie">
          <YouTube
            className='youtube'
            videoId={"l9uMVggWRbg"}
            opts={{
              playerVars: {
                width: "1000",
                // height: "315",
                autoplay: 1, //
                rel: 0, //관련 동영상 표시하지 않음
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
              }
            }}
            onEnd={(e) => { e.target.stopVideo(0); }} />
        </div>
        <div className='contents'>
          <h3 className='tit'>'미스터리 잡지 한 권이 만들어지기까지 한 달간의 여정을 따라가다’</h3>
          <p className='desc'>문학동네의 인터뷰 시리즈 ‘장르하는 사람들’의 세 번째 주인공은 격월간 미스터리 잡지 &lt;미스테리아&gt;의 김용언 편집장입니다.</p>
          <p className='desc'>&lt;미스테리아&gt;는 2015년 창간 이후 누적 독자 1500명을 넘으며, 미스터리 장르 애호가들의 꾸준한 사랑을 받은 잡지입니다.</p>
          <p className='desc'>매 호 특집 기사와 칼럼, 단편소설을 통해 미스터리 장르를 프리즘 삼아 한국 사회를 비추고 있는데요. &lt;미스테리아&gt; 38호 한 권이 만들어지기까지, ‘2021 엘릭시르 미스터리 대상 회의’ 등 잡지 한 권의 제작 여정을 따라가봤습니다.</p>
        </div>
      </div>
    </section>
  )
}

export default Video