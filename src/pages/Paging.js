import React from 'react'
import Pagination from "react-js-pagination";
import '../css/booklist.css';

const Paging = ({ page, count, setPage }) => {
    const [page, setPage] = useState(1);
    
    return (
        <div className='BookList'>
            <Pagination
                // 현재 페이지
                activePage={page}
                // 한 페이지당 보여줄 리스트 아이템의 개수
                itemsCountPerPage={10}
                // 총 아이템의 개수
                totalItemsCount={count}
                // Paginator 내에서 보여줄 페이지의 범위
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                // 페이지가 바뀔 때 핸들링해줄 함수
                onChange={handlePageChange}
            />
        </div>
  )
}

export default Paging