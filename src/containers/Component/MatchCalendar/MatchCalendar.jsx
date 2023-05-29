import React, { useEffect, useState } from 'react';
import getMatchList from '../../../apis/matchAPI';
import { MatchCalendar, Image, Button } from './index.style';
import CalendarComponent from '../Calendar/Calendar';
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

  const filteredRows = rows.filter((row) => row.date === '10/03');

  return (
    <div>
      <MatchCalendar>
        <div className="calendar">
          <CalendarComponent />
        </div>
        <div className="lists">
          {filteredRows.map((row) => (
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
