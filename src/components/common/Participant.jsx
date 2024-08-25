import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/mypage/profile.svg";
import host from "../../assets/icons/host.svg";
import thumbs from "../../assets/icons/thumbs.svg";
import thumbs_color from "../../assets/icons/thumbs_color.svg";
import { getKorGender } from "../../services/translate/gender";
import { useNavigate } from "react-router-dom";

const Participant = ({
  participant,
  isThumb,
  setThumbTargets,
  thumbTargets,
}) => {
  const [thumbState, setThumbState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isThumb && thumbTargets.includes(participant.memberId)) {
      setThumbState(true);
    }
  }, []);

  const toggleThumb = () => {
    thumbState
      ? setThumbTargets((prev) =>
          prev.filter((id) => id !== participant.memberId)
        )
      : setThumbTargets((prev) => [...prev, participant.memberId]);

    setThumbState(!thumbState);
  };

  return (
    <Wrapper>
      <div
        className="left"
        onClick={() => navigate(`/user/${participant.memberId}`)}
      >
        <img className="profile" src={participant.profileImageUrl || profile} />
        <div className="nickname">{participant.nickname}</div>
        {isThumb && (
          <div className="grey">
            {participant.age}세, {getKorGender(participant.gender)}
          </div>
        )}
        {participant.host && <img className="host" src={host} />}
      </div>

      {isThumb ? (
        thumbState ? (
          <img className="thumbs" src={thumbs_color} onClick={toggleThumb} />
        ) : (
          <img className="thumbs" src={thumbs} onClick={toggleThumb} />
        )
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
    height: 40px;
    border-radius: 4px;
  }
`;
