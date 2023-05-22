import React from 'react';
import { Website, Image, Button } from './index.style';
import LogoWeb1 from '../img/logoWeb_1.png';

const WebsiteComponent = () => {
  return (
    <Website>
      <div className="webList">
        <div className="left">
          <Image src={LogoWeb1} />
        </div>
        <div className="center">
          <p className="webTitle">8xBet</p>
          <p className="webSubTitle">
            TẶNG NGAY 50% THƯỞNG CHÀO MỪNG THÀNH VIÊN MỚI NẠP LẦN ĐẦU. Bảo hiểm
            cược đầu tiên Thể thao – Hoàn tiền cược 100%
          </p>
        </div>
        <div className="right">
          <Button to="https://8xbet165.com/#/">Xem ngay</Button>
        </div>
      </div>
    </Website>
  );
};

export default WebsiteComponent;
