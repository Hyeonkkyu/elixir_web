import React from 'react'
import axios from 'axios'

const Test = () => {

    const IdReturn = () => {
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${sessionStorage.getItem("token")}`;
        axios({
            method: 'get',
            url: '/api/user/idReturn',
            //   data: data
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <button onClick={IdReturn}>로그인 성공!</button>
        </div>
    )
}

export default Test