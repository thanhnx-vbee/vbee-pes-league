import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Website = styled.div`
  display: flex;
  background: #eee;
  .webList {
    display: flex;
    justify-content: space-around;
    .left {
      display: flex;
    }
    .center {
      display: flex;
      flex-direction: column;
      width: 60%;
      .webTitle {
        font-size: 20px;
        font-weight: 900;
        color: #000;
      }
      .webSubTitle {
        font-size: 14px;
        color: #bbb;
        font-weight: 400;
        margin-top: -20px;
      }
    }

    .right {
      display: flex;
      width: 15%;
    }
  }
`;

const Image = styled.img`
  margin-top: 7px;
  margin-left: 30px;
  margin-right: 10px;
  height: 80px;
`;

const Button = styled(NavLink)`
  margin-top: 50px;
  color: #000;
  display: flex;
  float: right;
  align-items: center;
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  background-color: #09ae3e;
  text-decoration: none;
  border-radius: 30px;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;
export { Website, Button, Image };
