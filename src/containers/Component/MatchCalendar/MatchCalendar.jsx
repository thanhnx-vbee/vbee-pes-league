import React, { useEffect, useState } from 'react';
import getMatchList from '../../../apis/matchAPI';
import { MatchCalendar, Image, Button } from './index.style';
import homeImg from '../img/thu_1.png';

const MatchCalendarList = () => {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const data = await getMatchList();
    setRows(data.result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <MatchCalendar>
        <div className="calendar">
          <p className="live">LIVE</p>
          <p className="circle">48</p>
          <div className="subCalendarList">
            <div className="subCalendar">
              <p className="todayNumber">10</p>
              <p className="today">Today</p>
            </div>
            <div className="subCalendar">
              <p className="number">11</p>
              <p className="day">Saturday</p>
            </div>
            <div className="subCalendar">
              <p className="number">12</p>
              <p className="day">Sunday</p>
            </div>
            <div className="subCalendar">
              <p className="number">13</p>
              <p className="day">Monday</p>
            </div>
            <div className="subCalendar">
              <p className="number">14</p>
              <p className="day">Tuesday</p>
            </div>
            <div className="subCalendar">
              <p className="number">15</p>
              <p className="day">Wednesday</p>
            </div>
            <div className="subCalendar">
              <p className="number">16</p>
              <p className="day">Thursday</p>
            </div>
          </div>
        </div>
        <div className="lists">
          {rows.map((row) => (
            <div className="matchList">
              <div className="head">
                <Image src={homeImg} />
                <p className="headTitle">{row.groupStage}</p>
              </div>
              <div className="match">
                <div className="date">
                  <p>{row.date}</p>
                </div>
                <div className="teamList">
                  <div className="team">
                    <Image src={homeImg} />
                    <p>{row.homeId.name}</p>
                  </div>
                  <div className="team">
                    <Image src={homeImg} />
                    <p>{row.awayId.name}</p>
                  </div>
                </div>
                <div className="resultList">
                  <div className="result">
                    <p>-</p>
                  </div>
                  <div className="result">
                    <p>-</p>
                  </div>
                </div>
                <div className="live">
                  <div className="team">
                    <Button to="/result">Trực tiếp</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MatchCalendar>
    </div>
  );
};

export default MatchCalendarList;
