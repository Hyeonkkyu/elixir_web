import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const BookContent = () => {

    const [data, setData] = useState({});

    const [searchParams] = useSearchParams();

    const query = searchParams.get('bookInfoNum');

    useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'get',
            url: '/api/product/selectBook',
            params: {
                book_code: query
            }

        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, [])

    return (
        <section className='BookContent inner'>
            <div className='left'>
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/assets/img/${data.book_img}`} />
                </figure>
                    <a href={data.book_url} target="_blank" className="buyBtn">구매하기</a>
            </div>
            <div className='right'>
                <h3 className='tit'>{data.book_title}</h3>

                <div>
                    <p className='writer'>{data.book_writer} /</p>
                    <p className='translatoriter'>{data.book_translator}</p>
                </div>

                <div className='des'>{data.book_info}</div>
            </div>
        </section>
    )
}

export default BookContent