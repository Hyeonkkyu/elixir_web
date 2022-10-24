import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchForm = ({ searchInput, setSearchInput, search, setSearch }) => {
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
            <input type='text'value="도서 정보를 입력해주세요." onChange={handlerInput}/>
            <button onClick={handlerSearch}><i className='xi-search'></i></button>
        </div>
    )
}

export default SearchForm