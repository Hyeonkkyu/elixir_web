import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../css/join.scss';
import ImageUploader from './ImageUploader';

const ProductUpload = () => {

    return (
        <div>
            <ImageUploader />
        </div>
    );
    
}

export default ProductUpload;