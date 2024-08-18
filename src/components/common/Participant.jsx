import React from "react";
import styled from "styled-components";
import profile from "../../assets/mypage/profile.svg";
import host from "../../assets/icons/host.svg";
import thumbs from "../../assets/icons/thumbs.svg";
import { getKorGender } from "../../services/translate/gender";

const Participant = ({ participant, isThumb, isHost = false }) => {
  return (
    <Wrapper>
      <div className="left">
        <img className="profile" src={participant.profileImageUrl || profile} />
        <div className="nickname">{participant.nickname}</div>
        {isThumb && (
          <div className="grey">
            {participant.age}세, {getKorGender(participant.gender)}
          </div>
        )}
        {isHost && <img className="host" src={host} />}
      </div>

      {isThumb ? (
        <img className="thumbs" src={thumbs} />
      ) : (
        <div className="grey">
          {participant.age}세, {getKorGender(participant.gender)}
        </div>
      )}
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

  .profile {
    width: 40px;
    border-radius: 4px;
  }
`;
