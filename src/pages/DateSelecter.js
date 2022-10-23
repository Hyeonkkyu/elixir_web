import React, { useState, useRef } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import moment from 'moment';
// import '../css/dateselecter.css'
// registerLocale("ko", ko);
import "react-datepicker/dist/react-datepicker.css";

const DateSelecter = () => {

    const [startDate, setStartDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = moment(startDate).format('YYYY-MM-DD');

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);

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
                    locale="ko"
                    selected={startDate}
                    // onChange={(date) => setStartDate(date)}
                    onChange={handleChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    inline />
                // console.log(DatePicker),
            )}
        </>
    );
};

export default DateSelecter