import React from 'react';
import {
  StyledFooter,
  FooterLeft,
  FooterLeftContent,
  FooterContent,
  Ul,
  FooterRight,
  LogoFooter,
} from './index.style';
import footerLogo from './img/FooterLogo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLeft>
        <LogoFooter src={footerLogo} />
        <FooterLeftContent>Copyright © 2023 by FOOTBALL</FooterLeftContent>
      </FooterLeft>
      <FooterContent>
        <Ul>
          <li>Về chúng tôi</li>
          <li>Chính sách</li>
          <li>Điều khoản</li>
        </Ul>
        <Ul>
          <li>Tin tức</li>
          <li>Liên hệ</li>
          <li>Thành viên</li>
        </Ul>
      </FooterContent>
      <FooterRight>
        Mọi trận đấu cho dù giải nhỏ cho tới các giải đấu lớn thì FOOTBALL đều
        cung cấp đầy đủ link xem trực tiếp bóng đá online với độ phân giải và
        chất lượng cao nhất. Ngoài việc xem bóng đá trực tuyến, chúng tôi còn
        gửi tới bạn đọc lịch thi đấu bóng đá, kết quả bóng đá và soi kèo bóng đá
        với tỷ lệ chiến thắng cao. Chúc bạn đọc xem bóng đá vui vẻ và luôn ủng
        hộ FOOTBALL
      </FooterRight>
    </StyledFooter>
  );
};

export default Footer;
