import React from 'react'

const NewBook = () => {
	return (
		<section className='newBook sectionPadding'>
			<div className='inner'>
				<h2>NEW BOOK</h2>
				<p>새로 발간된 책을 소개합니다.</p>
				<div className='newBookSlider'>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1660884136399_300.jpeg`} alt="" />
						</figure>
						{/* <h3>잠 못 드는 밤의 궁궐 기담</h3>
				<p>현찬양</p> */}
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1660884136399_300.jpeg`} alt="" />
						</figure>
						{/* <h3>잠 못 드는 밤의 궁궐 기담</h3>
				<p>현찬양</p> */}
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1660884136399_300.jpeg`} alt="" />
						</figure>
						{/* <h3>잠 못 드는 밤의 궁궐 기담</h3>
				<p>현찬양</p> */}
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1660884136399_300.jpeg`} alt="" />
						</figure>
						{/* <h3>잠 못 드는 밤의 궁궐 기담</h3>
				<p>현찬양</p> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default NewBook