import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './Moment.css'

const Moment = () => {
    const defaultValue = {
        year: 2021,
        month: 1,
        day: 14,
    };
    const [selectedDay, setSelectedDay] = useState(defaultValue);

    return (
        <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="#9c88ff" // added this
            calendarClassName="custom-calendar" // and this
            calendarTodayClassName="custom-today-day" // also this
            shouldHighlightWeekends
        />
    );
};

export default Moment;