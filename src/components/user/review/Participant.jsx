import React from "react";
import styled from "styled-components";
import profile from "../../../assets/mypage/profile.svg";
import host from "../../../assets/icons/host.svg";
import thumbs from "../../../assets/icons/thumbs.svg";

const Participant = () => {
  return (
    <Wrapper>
      <div className="left">
        <img className="profile" src={profile} />
        <div className="nickname">닉네임</div>
        <div className="grey">00세, 성별</div>
        <img className="host" src={host} />
      </div>

      <img className="thumbs" src={thumbs} />
    </Wrapper>
  );
};

export default Participant;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .profile .thumbs {
    width: 40px;
  }

  .host {
    width: 18px;
  }

  .nickname {
    font-size: 16px;
    font-weight: 600;
  }

  .grey {
    color: var(--grey500);
  }
`;
