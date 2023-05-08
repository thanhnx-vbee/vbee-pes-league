import React from 'react';
import {
  Background,
  Content,
  MatchMain,
  Title,
  SubTitle,
  ComponentList,
  MatchMainLeft,
  MatchMainRight,
} from './index.style';
import content from '../img/main_page_1.png';
import Component from '../../Component/Component';

const HomePage = () => {
  return (
    <Content>
      <Background src={content} />
      <MatchMain>
        <Title>Trận đấu tâm điểm</Title>
        <SubTitle>chia sẻ ngay</SubTitle>
      </MatchMain>
      <ComponentList>
        <Component />
      </ComponentList>
      <MatchMain>
        <MatchMainLeft>
          <Title>Lịch trực tiếp</Title>
        </MatchMainLeft>
        <MatchMainRight>
          <Title>Website uy tín</Title>
        </MatchMainRight>
      </MatchMain>
    </Content>
  );
};

export default HomePage;
