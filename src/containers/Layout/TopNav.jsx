import React from 'react';
import {
  Wrapper,
  Toolbar,
  AppBar,
  HeadLogo,
  Logo,
  HeadRight,
  SelectList,
  Avatar,
  ListItem,
  SubItem,
  MenuItem,
} from './index.style';
import LogoImg from './img/Slice_9.png';
import AvatarImg from './img/thu_1.png';

const TopNav = () => {
  const [value, setValue] = React.useState('en');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <AppBar>
        <Toolbar>
          <HeadLogo>
            <Logo src={LogoImg} />
          </HeadLogo>
          <ListItem>
            {/* <Active href="/">HOME</Active>
            <SubItem href="/match">MATCH</SubItem>
            <SubItem href="/result">RESULT</SubItem> */}
            <SubItem exact to="/">
              HOME
            </SubItem>
            <SubItem to="/match">MATCH</SubItem>
            <SubItem to="/result">RESULT</SubItem>
          </ListItem>
          <HeadRight>
            <SelectList value={value} onChange={handleChange}>
              <MenuItem value="en" selected="selected">
                ENGLISH(UK)
              </MenuItem>
              <MenuItem value="vi">VIETNAMESE</MenuItem>
            </SelectList>
            <Avatar src={AvatarImg} variant="rounded" />
          </HeadRight>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
};

export default TopNav;
