import React from "react";
import styled from "styled-components";
import bookmark from "../../assets/post/bookmark.svg";
import right from "../../assets/post/right.svg";

const Footer = ({ isParticipate = true, isFail = true }) => {
  return (
    <Gap>
      <Wrapper $isParticipate={!isFail && isParticipate}>
        <div className="top">
          <div className="time">모집 마감까지 00시간 00분</div>
          <div className="btns">
            <img src={bookmark} />
            {!isFail && (
              <>
                {isParticipate ? (
                  <div className="btn participate">신청 완료</div>
                ) : (
                  <div className="btn">참여 신청</div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="bottom">
          <div className="people">00 / 00 참여중</div>
          <img src={right} />
        </div>
      </Wrapper>
    </Gap>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 88px;
  flex-shrink: 0;
  background: ${(props) =>
    props.$isParticipate ? "var(--main)" : "rgba(9, 9, 10, 0.8)"};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 12px 20px;
  gap: 2px;
  color: var(--white);

  .time {
    font-size: 18px;
    font-weight: 600;
  }

  .btn {
    border-radius: 4px;
    background: var(--main);
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .participate {
    background: var(--light);
    color: var(--main);
  }

  .btns {
    display: flex;
    gap: 8px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom {
    display: flex;
    gap: 8px;

    img {
      margin-top: 1px;
    }
  }
`;

const Gap = styled.div`
  margin-bottom: 88px;
`;
