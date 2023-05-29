import React, { useState } from 'react';
import dayjs from 'dayjs';
import { WeekCalendar } from './index.style';

const CalendarComponent = () => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [dayObj, setDayObj] = useState(dayjs());

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, 'week'));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, 'week'));
  };
  return (
    <WeekCalendar>
      <div className="header">
        <div>
          <button type="button" className="nav" onClick={handlePrev}>
            &lt;
          </button>
        </div>
        <div className="dateTime">{dayObj.format('MM/YYYY')}</div>
        <div>
          <button type="button" className="nav" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className="weekContainer">
        {weekDays.map((d) => (
          <div className="weekCell" key={d}>
            {d}
            <div className="date">{dayObj.format('DD')}</div>
          </div>
        ))}
      </div>
    </WeekCalendar>
  );
};

export default CalendarComponent;
