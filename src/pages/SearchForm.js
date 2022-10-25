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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SearchForm = () => {

//     const [search, setSearch] = useState("");
//     const [list, setList] = useState([]);
//     const router = useRouter();
 
//     useEffect(()=>{
//         const userDat
//     })




//     const onChangeSearch = (e) => {
//         e.preventDefault();
//         setSearch(e.target.value);
//     };

//     return (
//         <form onSubmit={e => onSearch(e)}>
//             <input type='text' value={search} placeholder='도서명 또는 작가명을 입력해주세요.' onChange={onChangeSearch} />
//             <button type='submit'><i className='xi-search'></i></button>
//         </form>
//     )
// }

// export default SearchForm