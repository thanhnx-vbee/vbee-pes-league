import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MatchCalendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: -70px;
  .calendar {
    display: flex;
    background: #eee;
    width: 100%;
    .live {
      background-color: #fff;
      padding: 10px 12px;
      font-weight: 900;
      font-size: 20px;
      margin-left: 20px;
      border-radius: 10px;
    }
    .circle {
      display: flex;
      align-items: center;
      width: 16px;
      height: 16px;
      padding: 5px;
      margin-left: -10px;
      font-size: 15px;
      padding: 3px;
      color: #ddd;
      background-color: #fff;
      border-radius: 50%;
    }
    .subCalendarList {
      margin-left: 5px;
      width: 80%;
      display: flex;
      justify-content: space-around;
      .subCalendar {
        text-align: center;
        font-size: 18px;
        font-weight: 900;
        .number {
          margin-bottom: 0px;
        }
        .day {
          margin-top: 0px;
        }
        .today {
          color: #09ae3e;
          margin-top: 0px;
        }
        .todayNumber {
          color: #09ae3e;
          margin-bottom: 0px;
        }
      }
    }
  }
  .lists {
    width: 100%;
    .matchList {
      .head {
        display: flex;
        height: 49px;
        background-color: #09ae3e;
        .headTitle {
          font-size: 20px;
          margin-top: 10px;
          color: #fff;
        }
      }
      .match {
        background-color: #eee;
        display: flex;
        justify-content: space-around;

        display: flex;
        .date {
          margin-top: 10px;
          font-size: 25px;
          color: #000;
          font-weight: bold;
        }
        .teamList {
          margin-left: -100px;
          display: flex;
          flex-direction: column;
          .team {
            display: flex;
          }
        }
        .resultList {
          margin-right: -100px;
          display: flex;
          flex-direction: column;
          .result {
            display: flex;
          }
        }

        .live {
          display: flex;
          flex-direction: column;
          .subLive {
            display: flex;
          }
        }
      }
    }
  }
`;

const Image = styled.img`
  margin-top: 8px;
  margin-left: 30px;
  margin-right: 10px;
  height: 35px;
  weight: auto;
  border-radius: 50%;
`;

const Button = styled(NavLink)`
  margin-top: 75px;
  color: #000;
  display: flex;
  float: right;
  align-items: center;
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 700;
  background-color: #fccd54;
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    color: #fff;
    background-color: red;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export { MatchCalendar, Button, Image };
