import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';

const DaumAddress = () => {
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        let zonecode = data.zonecode;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        document.getElementById("daumAdd").value = fullAddress; // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        document.getElementById("daumPostCode").value = zonecode;
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <button className="addBtn" type='button' onClick={handleClick} >
            주소 검색
        </button>
    );
};

export default DaumAddress;