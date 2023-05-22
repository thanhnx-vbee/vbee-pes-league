import React from 'react';
import MatchCalendarList from '@src/containers/Component/MatchCalendar/MatchCalendar';
import WebList from '@src/containers/Component/Website/Website';
import { Background, Content } from './index.style';
import content from '../img/main_page_1.png';
import MatchComponent from '../../Component/MatchComponent/MatchComponent';

const HomePage = () => {
  return (
    <Content>
      <Background src={content} />
      <div className="matchMain">
        <p className="title">Trận đấu tâm điểm</p>
        <p className="subTitle">chia sẻ ngay</p>
      </div>
      <div className="componentList">
        <MatchComponent />
      </div>
      <div className="matchMain">
        <div className="matchMainLeft">
          <p className="titleLeft">Lịch trực tiếp</p>
          <MatchCalendarList />
        </div>
        <div className="matchMainRight">
          <p className="titleRight">Website uy tín</p>
          <WebList />
        </div>
      </div>
    </Content>
  );
};

export default HomePage;
