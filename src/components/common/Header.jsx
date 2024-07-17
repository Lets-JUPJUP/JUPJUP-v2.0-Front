import React from "react";

import back from "../../assets/icons/back.svg";
import noti from "../../assets/icons/noti.svg";
import home from "../../assets/icons/home.svg";
import share from "../../assets/icons/share.svg";
import alert from "../../assets/icons/alert.svg";

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
    <div class="w-full h-15 p-5 flex justify-between items-center ">
      <div class="w-6">
        {isBack && <img src={back} />}
        {isHome && <img src={home} />}
      </div>
      <div>
        <div class="text-lg font-semibold text-black">{title}</div>
        {subtitle && <div>{subtitle}</div>}
      </div>
      <div class="w-6">
        {isNoti && <img src={noti} />}
        {isShare && <img src={share} />}
        {isAlert && <img src={alert} />}
      </div>
    </div>
  );
};

export default Header;
