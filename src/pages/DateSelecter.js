import React, { useState , useRef} from 'react'
import DatePicker from "react-datepicker";

const DateSelecter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <div className="example-custom-input" onClick={onClick}>
            {value}
            {/* 날짜 선택 */}
        </div>
    );


    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
};

export default DateSelecter