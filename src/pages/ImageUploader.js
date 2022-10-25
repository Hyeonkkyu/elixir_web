import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../css/join.scss';
import ImageUpload from 'react-image-upload'

const ImageUploader = props => {
    const [pictures, setPictures] = useState([]);
  
    const onDrop = picture => {
      setPictures([...pictures, picture]);
    };

    // axios({
    //     method: 'post',
    //     url: '/api/product/insertProduct',
    //     data: pictures
    //   })
    //     .then((response) => {
    //         alert('업로드 완료');
    //         window.location.href = "/home";
    //     })
    //     .catch((error) => {
    //         alert('실패');
    //     })

    return (
      <ImageUpload
        {...props}
        withIcon={true}
        buttonText='이미지 선택'
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  };

  export default ImageUploader;