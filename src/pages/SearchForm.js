import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ searchInput, setSearchInput, setSearch }) => {
    const navigate = useNavigate();

    const handlerSearch = (e) => {
        setSearch({ search: searchInput });
        navigate('/search?search' + searchInput)
    }
    const handlerInput = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <input type='text' onChange={handlerInput} placeholder='도서명 또는 작가명을 입력해주세요.' />
            <button onClick={handlerSearch}><i className='xi-search'></i></button>
        </div>
    )
}

export default SearchForm