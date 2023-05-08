import styled from 'styled-components';

const Content = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Background = styled.img`
  max-width: 100vw;
`;

const MatchMain = styled.div`
  margin-top: 50px;
  display: flex;
  margin-left: 50px;
`;

const Title = styled.div`
  height: 28px;
  font-weight: 700;
  font-size: 18px;
  padding: 0px 10px;
  border-left: solid 4px;
  border-color: #09ae3e;
`;

const SubTitle = styled.div`
  font-size: 16px;
  padding-left: 10px;
  border-left: solid 2px;
  border-color: #ccc;
  height: 24px;
  margin-top: 3px;
`;

const ComponentList = styled.div`
  display: flex;
  text-align: center;
`;

const MatchMainLeft = styled.div`
  font-weight: 700;
`;

const MatchMainRight = styled.div`
  font-weight: 700;
  margin-left: 50px;
`;

export {};

export {
  Content,
  Background,
  MatchMain,
  Title,
  SubTitle,
  ComponentList,
  MatchMainLeft,
  MatchMainRight,
};
