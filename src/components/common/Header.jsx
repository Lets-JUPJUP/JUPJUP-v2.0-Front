import React from "react";

import back from "../../assets/icons/back.svg";
import noti from "../../assets/icons/noti.svg";
import home from "../../assets/icons/home.svg";
import share from "../../assets/icons/share.svg";
import alert from "../../assets/icons/alert.svg";
import styled from "styled-components";

const Header = ({
  isBack = false,
  isNoti = false,
  isShare = false,
  isHome = false,
  isAlert = false,
  title = "",
  subtitle = "",
}) => {
  return (
    <Wrapper>
      <Left>
        {isBack && <img src={back} />}
        {isHome && <img src={home} />}
      </Left>
      <Center>
        <div>{title}</div>
        {subtitle && <div>{subtitle}</div>}
      </Center>
      <Right>
        {isNoti && <img src={noti} />}
        {isShare && <img src={share} />}
        {isAlert && <img src={alert} />}
      </Right>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Left = styled.div`
  width: 24px;
`;

const Center = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
const Right = styled.div`
  width: 24px;
`;
