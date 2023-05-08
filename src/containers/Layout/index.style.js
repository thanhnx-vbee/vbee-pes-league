import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #09ae3e;
  height: 60px;
  text-align: center;
  align-items: center;
`;

const AppBar = styled.div`
  flex-grow: 1;
  max-width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  color: #ffffff;
  background-color: #09ae3e;
`;

const StyledFooter = styled.div`
  flex-grow: 1;
  height: 100px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeft = styled.div`
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  margin-left: 50px;
  flex: 1;
`;

const FooterLeftContent = styled.div`
  margin: 0px 0px 0px 25px;
`;

const FooterContent = styled.div`
  flex: 2;
  margin: 0px;
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-right: 30px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const FooterRight = styled.div`
  display: flex;
  flex: 6;
  font-weight: 300;
  font-size: 16px;
  margin-right: 50px;
`;

const HeadLogo = styled.div`
  display: flex;
`;

const Logo = styled.img`
  height: 40px;
  weight: auto;
  margin-left: 50px;
`;

const LogoFooter = styled.img`
  weight: auto;
  height: 40px;
`;

const HeadRight = styled.div`
  margin-right: 50px;
  display: flex;
`;

const SelectList = styled.select`
  margin-top: 7px;
  padding: 0px 3px 5px;
  text-decoration: none !important;
  font-size: 20px;
  font-weight: 700;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #fff;
  font-family: 'Vbee';
  border-bottom: 3px solid #000;
  background-color: #09ae3e;
`;

const Avatar = styled.img`
  margin-top: 5px;
  margin-left: 20px;
  border: 1px solid #000;
  border-radius: 6px;
  height: 40px;
  weight: 40px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SubItem = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  text-decoration: none;
  &:hover {
    color: #000;
    background-color: #ccc;
  }
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const MenuItem = styled.option`
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
  background-color: #ccc;
  color: #000;
  font-weight: 700;
  list-style: none;
`;

export {};

export {
  Wrapper,
  Toolbar,
  AppBar,
  StyledFooter,
  FooterLeft,
  FooterLeftContent,
  FooterContent,
  Ul,
  FooterRight,
  HeadLogo,
  Logo,
  LogoFooter,
  HeadRight,
  SelectList,
  Avatar,
  ListItem,
  SubItem,
  MenuItem,
  // Active,
};
