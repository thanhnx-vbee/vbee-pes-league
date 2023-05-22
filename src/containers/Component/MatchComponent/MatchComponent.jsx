/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import getMatchList from '../../../apis/matchAPI';
import { MainMatch, Image, Button } from './index.style';
import homeImg from '../img/thu_1.png';

const MatchComponent = () => {
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
      <MainMatch>
        <div className="components">
          {rows.slice(0, 6).map((row) => (
            <div className="component" key={row._id}>
              <div className="content">
                <div className="title">
                  <p>{row.groupStage}</p>
                </div>
                <div className="info">
                  <div className="home">
                    <Image src={homeImg} />
                    <p className="name"> {row.homeId.name}</p>
                  </div>
                  <div className="date">{row.date}</div>
                  <div className="away">
                    <Image src={homeImg} />
                    <p className="name"> {row.awayId.name}</p>
                  </div>
                </div>
                <div className="result">
                  <Button to="/result">Result</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainMatch>
    </div>
  );
};

export default MatchComponent;
