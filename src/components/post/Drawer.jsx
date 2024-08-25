import React from "react";
import styled from "styled-components";

import xgrey from "../../assets/post/xgrey.svg";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { postGetJoinList } from "../../services/api/post";
import { useParams } from "react-router-dom";
import Participant from "../common/Participant";

const Drawer = ({ setIsOpen, maxMember }) => {
  const { id } = useParams();
  const { data: list } = useGetInitialData(postGetJoinList, id);
  console.log(list);
  return (
    <>
      <Bg
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <Wrapper>
        <Top>
          <img
            src={xgrey}
            className="btn"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="title">플로깅 참여자</div>
          {list ? (
            <div className="count">
              {list.length} / {maxMember}
            </div>
          ) : (
            <div className="count">00 / {maxMember}</div>
          )}
        </Top>

        {list && (
          <Bottom>
            {list.map((participant) => {
              return <Participant participant={participant} isThumb={false} />;
            })}
          </Bottom>
        )}
      </Wrapper>
    </>
  );
};

export default Drawer;

const Top = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  position: relative;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
  }

  .count {
    color: var(--main);
    margin-top: 4px;
  }
`;

const Bottom = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 40px;
  background-color: var(--white);

  color: var(--grey500);
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bg = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100%;
  max-width: 700px;
  top: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  max-height: 70%;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  max-width: 700px;
  bottom: 0;

  z-index: 101;
`;
