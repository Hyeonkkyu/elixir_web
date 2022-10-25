import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import '../css/booklist.css';

const BookList = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [items, setItems] = useState(5);

    //setState의 무한데이터로딩을 멈추기위해 useEffect와 빈 배열을 사용하여 해결
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/product/selectBooks',
        })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, [])

    const handlePageChange = (page) => { setPage(page); };

    console.log(items * (page - 1), items * (page - 1) + items)

    return (
        <div className='bookList'>
            <ul className='list'>
            {data.slice(
                items * (page - 1),
                items * (page - 1) + items
            ).map((it, i) => {
                return (
                    <li key={i}>
                        <Link to={'/books/bookInfo?bookInfoNum=' + it.book_code}>
                        <figure>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/${it.book_img}`} />
                        </figure>
                        <h3>{it.book_title}</h3>
                        <p>{it.book_writer}</p>
                        </Link>
                    </li>
                )
            })
            }
            </ul>
            <Pagination
                activePage={page}
                itemsCountPerPage={items}
                totalItemsCount={data.length - 1}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </div>
    )
}

export default BookList