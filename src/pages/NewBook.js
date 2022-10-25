import React from 'react'
import SearchFrom from './SearchForm';

const NewBook = () => {
	return (
		<section className='newBook sectionPadding'>
			<div className='inner'>
				<h2 className='secTitle'>NEW BOOK</h2>
				<p className='secDesc'>새로 발간된 책을 소개합니다.</p>
				<div className='newBookSlider'>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
						</figure>
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
						</figure>
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
						</figure>
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
						</figure>
					</div>
					<div className='product'>
						<figure>
							<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
						</figure>
					</div>
				</div>
				<div className='search'>
					<SearchFrom/>
				</div>
			</div>
		</section>
	)
}

export default NewBook