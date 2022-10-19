import React, { useState, useRef } from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment';
import '../css/dateselecter.css'

const DateSelecter = () => {
    // const [startDate, setStartDate] = useState(new Date());
    // const ExampleCustomInput = ({ value, onClick }) => (
    //     <div className="example-custom-input" onClick={onClick}>
    //         {value}
    //         {/* 날짜 선택 */}
    //     </div>
    // );

    // return (
    //     <DatePicker
    //         selected={startDate}
    //         onChange={date => setStartDate(date)}
    //         customInput={<ExampleCustomInput />}
    //     />
    // );

    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = moment(startDate).format('YYYY-MM-DD');

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };
    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);

        document.getElementById("birthDate").value = formatDate;
    };



    return (
        <>
            <button className="example-custom-input"
                onClick={handleClick}>
                날짜 선택
            </button>
            {isOpen && (
                <DatePicker
                    dateFormat="yyyy년 MM월 dd일"
                    selected={startDate}
                    onChange={handleChange}
                    // peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    inline />
                // console.log(DatePicker),

            )}
        </>
    );
};

export default DateSelecter