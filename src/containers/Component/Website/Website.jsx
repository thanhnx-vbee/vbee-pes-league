import React from 'react';
import { Website, Image, Button } from './index.style';
import LogoWeb1 from '../img/logoWeb_1.png';
import LogoWeb2 from '../img/logoWeb_2.png';
import LogoWeb3 from '../img/logoWeb_3.png';
import LogoWeb4 from '../img/logoWeb_4.png';
import LogoWeb5 from '../img/logoWeb_5.png';

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
      <div className="webList">
        <div className="left">
          <Image src={LogoWeb2} />
        </div>
        <div className="center">
          <p className="webTitle">VeboTV</p>
          <p className="webSubTitle">
            Xem trực tiếp bóng đá có bình luận tiếng Việt Nhanh nhất – Nét Nhất
            – Mượt Nhất tại VeboTV
          </p>
        </div>
        <div className="right">
          <Button to="https://8xbet165.com/#/">Xem ngay</Button>
        </div>
      </div>
      <div className="webList">
        <div className="left">
          <Image src={LogoWeb3} />
        </div>
        <div className="center">
          <p className="webTitle">90 Phut</p>
          <p className="webSubTitle">
            Địa chỉ xem bóng đá trực tuyến được nhiều khán giả yêu thích với sự
            tham gia những bình luận viên hài hước như Batman, Cáp Tần, Người
            Thỏ,…
          </p>
        </div>
        <div className="right">
          <Button to="https://8xbet165.com/#/">Xem ngay</Button>
        </div>
      </div>
      <div className="webList">
        <div className="left">
          <Image src={LogoWeb4} />
        </div>
        <div className="center">
          <p className="webTitle">Facebook</p>
          <p className="webSubTitle">
            Group Không Sợ Bóng 2.0 là ngôi nhà dành cho những người yêu thích
            bóng đá cùng tham gia giao lưu, thảo luận
          </p>
        </div>
        <div className="right">
          <Button to="https://8xbet165.com/#/">Xem ngay</Button>
        </div>
      </div>
      <div className="webList">
        <div className="left">
          <Image src={LogoWeb5} />
        </div>
        <div className="center">
          <p className="webTitle">Không Sợ Bóng</p>
          <p className="webSubTitle">
            Kênh Youtube tổng hợp thông tin liên quan đến bóng đá, đời sống bóng
            đá và hậu trường bóng đá HOT nhất!
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
