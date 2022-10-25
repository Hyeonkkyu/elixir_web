import React, { useState, useEffect } from 'react'
import moment from 'moment';
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
                console.log(response.data);
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, [])

    return (
        <section className='BookContent'>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/assets/img/${data.book_img}`} />
            </figure>
            <h3>{data.book_title}</h3>
            <p>{data.book_writer}</p>
            <a url={data.book_url}>구매하기</a>
            <div className='des'>{data.book_info}</div>
        </section>
    )
}

export default BookContent