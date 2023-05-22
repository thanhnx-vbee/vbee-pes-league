import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMatch = styled.div`
  margin-top: 0px;
  display: flex;
  width: 1080px;
  .components {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .component {
    border-radius: 10px;
    justify-content: center;
    display: flex;
    background-color: #eee;
    height: 255px;
    width: 350px;
    margin-bottom: 10px;
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin-left: 25%;
        height: 40px;
        background-color: #000;
        text-align: center;
        p {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
      }
      .info {
        margin-top: 10px;
        border-bottom: 3px dashed #000;
        display: flex;
        height: 140px;
        justify-content: space-around;
        .home {
          font-weight: 700;
          width: 33.33%;
          margin-left: 10px;
          }

        .date {
          font-weight: bold;
          font-size: 25px;
          color: #000;
          width: 33.33%
        }

        .away{
          font-weight: 700;
          width: 33.33%;
          margin-right: 10px;
          }
        }

      .result {
          margin-right: 20px;
          margin-top: -5px;
        }
      }
    }
  }
`;

const Image = styled.img`
  height: 50px;
  weight: auto;
  border-radius: 50%;
`;

const Button = styled(NavLink)`
  margin-top: 13px;
  color: #000;
  display: flex;
  float: right;
  align-items: center;
  padding: 0px 16px;
  font-size: 20px;
  font-weight: 700;
  background-color: #fccd54;
  height: 100%;
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    color: #000;
    background-color: #ccc;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const MatchCalendar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { MainMatch, MatchCalendar, Image, Button };
