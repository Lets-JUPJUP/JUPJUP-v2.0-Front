import React, { useEffect, useState } from "react";
import styled from "styled-components";

import map_grey from "../../assets/icons/map_grey.svg";
import map_color from "../../assets/icons/map_color.svg";
import profile_grey from "../../assets/icons/profile_grey.svg";
import profile_color from "../../assets/icons/profile_color.svg";
import plog_grey from "../../assets/icons/plog_grey.svg";
import plog_color from "../../assets/icons/plog_color.svg";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isNoGap = false }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    if (currentUrl.includes("map")) {
      setSelected(1);
    } else if (currentUrl.includes("list")) {
      setSelected(2);
    } else if (currentUrl.includes("mypage")) {
      setSelected(3);
    }
  }, [currentUrl]);

  return (
    <Gap $isNoGap={isNoGap}>
      <Wrapper>
        {selected == 1 ? (
          <img src={map_color} />
        ) : (
          <img src={map_grey} onClick={() => navigate("/map")} />
        )}
        {selected == 2 ? (
          <img src={plog_color} />
        ) : (
          <img src={plog_grey} onClick={() => navigate("/list")} />
        )}
        {selected == 3 ? (
          <img src={profile_color} />
        ) : (
          <img src={profile_grey} onClick={() => navigate("/mypage")} />
        )}
      </Wrapper>
    </Gap>
  );
};

export default NavBar;

const Wrapper = styled.div`
  z-index: 99;
  position: fixed;
  bottom: 0;
  background-color: var(--white);

  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 57px;
  padding: 3px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.04),
    0px -2px 20px 0px rgba(0, 0, 0, 0.06);
`;

const Gap = styled.div`
  margin-bottom: ${(props) => (props.$isNoGap ? "0px" : "101px")};
`;
