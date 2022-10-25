import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment';
import '../css/dateselecter.css'
import "react-datepicker/dist/react-datepicker.css";

const DateSelecter = () => {

    // 저 null이 문제인가
    const [startDate, setStartDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = moment(startDate).format('YYYY-MM-DD');

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
        console.log(formatDate);
        document.getElementById("birthDate").value = formatDate;
    };
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };


    return (
        <>
            <button className="example-custom-input"
                onClick={handleClick}>
                날짜 선택
            </button>
            {isOpen && (
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    inline />
            )}
        </>
    );
};

export default DateSelecter