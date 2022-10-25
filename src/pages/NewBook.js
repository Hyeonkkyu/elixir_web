import React from 'react'
import { Link } from 'react-router-dom';
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
							<Link to="/books/bookInfo?bookInfoNum=1">
								<img src={`${process.env.PUBLIC_URL}/assets/img/image_1664413579745_1000.jpg`} alt="" />
							</Link>
						</figure>
					</div>
					<div className='product'>
						<figure>
							<Link to="/books/bookInfo?bookInfoNum=2">
								<img src={`${process.env.PUBLIC_URL}/assets/img/image_1660884191436_1000.jpeg`} alt="" />
							</Link>
						</figure>
					</div>
					<div className='product'>
						<figure>
							<Link to="/books/bookInfo?bookInfoNum=3">
								<img src={`${process.env.PUBLIC_URL}/assets/img/image_1658200909989_1000.jpeg`} alt="" />
							</Link>
						</figure>
					</div>
					<div className='product'>
						<figure>
							<Link to="/books/bookInfo?bookInfoNum=4">
								<img src={`${process.env.PUBLIC_URL}/assets/img/image_1656477734384_1000.jpeg`} alt="" />
							</Link>
						</figure>
					</div>
					<div className='product'>
						<figure>
							<Link to="/books/bookInfo?bookInfoNum=5">
								<img src={`${process.env.PUBLIC_URL}/assets/img/image_1656478177999_1000.jpeg`} alt="" />
							</Link>
						</figure>
					</div>
				</div>
				{/* <div className='search'>
					<SearchFrom/>
				</div> */}
			</div>
		</section>
	)
}

export default NewBook