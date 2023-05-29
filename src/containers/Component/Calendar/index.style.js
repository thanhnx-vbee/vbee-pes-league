import styled from 'styled-components';

const WeekCalendar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .header {
    display: flex;
    background-color: #09ae3e;
    height: 40px;
    width: 100%;
    justify-content: space-between;
    .nav {
      font-size: 25px;
      margin: 0px;
      height: 100%;
      border: none;
      background-color: #09ae3e;
      color: #fff;
      cursor: pointer;
    }
    .dateTime {
      font-size: 30px;
      text-align: center;
      font-weight: 900;
      color: #fff;
      margin-top: -2.5px;
      justify-content: center;
    }
  }
  .weekContainer {
    display: flex;
    width: 100%;
    justify-content: space-around;
    .weekCell {
      font-size: 20px;
      text-align: center;
    }
    .date {
      text-align: center;
    }
    .weekDays {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
  .dayContainer {
    display: flex;
    width: 100%;
    justify-content: space-around;
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

export { WeekCalendar, Image };
