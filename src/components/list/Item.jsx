import React from "react";
import styled from "styled-components";
import host from "../../assets/icons/host.svg";
import pin from "../../assets/icons/pin.svg";
import calendar from "../../assets/icons/calendar.svg";

const Item = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          플로깅 제목 위치 입니다. 플로깅 제목 위치 입니다. 플로깅 제목 위치
          입니다.
        </div>
        <div className="grey">
          <img src={pin} />
          <div className="location">
            가나다라마바사아 자차카타파하 가나다라마바사아 자차카타파하
            가나다라마바사아 자차카타파하
          </div>
        </div>
        <div className="grey date">
          <img src={calendar} />
          00/00/00 00:00
        </div>
        <div className="tags">
          <img src={host} />
          <Tag>00세~00세</Tag>
          <Tag>반려동물 동반 가능</Tag>
        </div>
      </div>
      <img className="image" src="" />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  padding: 12px 0px;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
  .image {
    width: 84px;
    height: 84px;
    background-color: aliceblue;
  }

  .container {
    width: calc(100% - 88px); //이미지 없을땐 100%로 설정

    .title {
      color: var(--black);
      font-weight: 600;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    .grey {
      color: var(--grey500);
      font-size: 12px;
      font-weight: 300;

      display: flex;
      gap: 4px;
    }

    .location {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  .tags {
    display: flex;
    gap: 8px;
  }
`;

const Tag = styled.div`
  border-radius: 4px;
  background: var(--grey100);
  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 10px;

  color: var(--black);
  font-size: 12px;
  font-weight: 300;
`;
