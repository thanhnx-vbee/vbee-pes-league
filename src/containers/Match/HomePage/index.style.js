import styled from 'styled-components';

const Content = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
  .matchMain {
    margin-top: 40px;
    display: flex;
    margin-left: 170px;
    .title {
      margin-left: -70px;
      height: 28px;
      font-weight: 700;
      font-size: 18px;
      padding: 0px 10px;
      border-left: solid 4px;
      border-color: #09ae3e;
    }
    .subTitle {
      font-size: 16px;
      padding-left: 10px;
      border-left: solid 2px;
      border-color: #ccc;
      height: 24px;
      margin-top: 21px;
    }
    .matchMainLeft {
      width: 42%;
      font-weight: 700;
      .titleLeft {
        margin-left: -70px;
        height: 28px;
        font-weight: 700;
        font-size: 18px;
        padding: 0px 10px;
        border-left: solid 4px;
        border-color: #09ae3e;
      }
    }
    .matchMainRight {
      width: 50%;
      font-weight: 700;
      margin-left: 10px;
      .titleRight {
        height: 28px;
        font-weight: 700;
        font-size: 18px;
        padding: 0px 10px;
        border-left: solid 4px;
        border-color: #09ae3e;
      }
    }
  }
  .componentList {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const Background = styled.img`
  max-width: 100vw;
`;

export { Content, Background };
