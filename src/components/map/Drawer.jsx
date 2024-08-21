import React, { useEffect, useState } from "react";
import styled from "styled-components";

import xgrey from "../../assets/post/xgrey.svg";
import status1 from "../../assets/map/status1.svg";
import status2 from "../../assets/map/status2.svg";
import status3 from "../../assets/map/status3.svg";
import colorstatus1 from "../../assets/map/colorstatus1.svg";
import colorstatus2 from "../../assets/map/colorstatus2.svg";
import colorstatus3 from "../../assets/map/colorstatus3.svg";

import LongBtn from "../common/LongBtn";
import right from "../../assets/post/right.svg";
import useFetch from "../../services/hooks/useFetch";
import { mapGetFeedback, mapPostFeedback } from "../../services/api/map";
import useGetInitialData from "../../services/hooks/useGetInitialData";

const Drawer = ({ setIsOpen, target }) => {
  const { error: postError, fetchData: postFeedback } =
    useFetch(mapPostFeedback);

  const {
    data: feedbacks,
    error,
    loading,
  } = useGetInitialData(mapGetFeedback, target.id);

  const [code, setCode] = useState(undefined);

  useEffect(() => {
    if (
      feedbacks &&
      (feedbacks.feedbackCode == 1 ||
        feedbacks.feedbackCode == 2 ||
        feedbacks.feedbackCode == 3)
    ) {
      setCode(feedbacks.feedbackCode);
    }
  }, [feedbacks]);

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
          <div className="name">{target.name}</div>
          <div className="address">{target.address}</div>

          <div className="divider" />

          <div className="review">관리 상태 리뷰</div>
          {feedbacks && (
            <Status>
              <div className="status" onClick={() => setCode(0)}>
                {code == 0 ? <img src={colorstatus1} /> : <img src={status1} />}
                <div className="text">관리 필요</div>
                {/* <div className="cnt">{}</div> */}
              </div>

              <div className="status" onClick={() => setCode(1)}>
                {code == 1 ? <img src={colorstatus2} /> : <img src={status2} />}
                <div className="text">보통</div>
                {/* <div className="cnt">{}</div> */}
              </div>

              <div className="status" onClick={() => setCode(2)}>
                {code == 2 ? <img src={colorstatus3} /> : <img src={status3} />}
                <div className="text">우수</div>
                {/* <div className="cnt">{}</div> */}
              </div>
            </Status>
          )}
        </Top>

        <Bottom>
          <div className="inquiry">
            민원 접수하기
            <img className="right" src={right} />
          </div>
          <LongBtn
            text={"완료"}
            onClick={() => {
              postFeedback({
                trashCanId: target.id, // 쓰레기통 id
                feedbackCode: code, // 피드백 코드
              });

              alert("피드백이 저장되었습니다.");
              setIsOpen(false);
            }}
          />
        </Bottom>
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

  .name {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }

  .review {
    margin-top: 38px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .btn {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .address {
    margin-top: 4px;
    color: var(--grey500);
    text-align: center;
    font-size: 12px;
  }
`;

const Status = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 77px;

  .status {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    margin-top: 8px;
  }
`;

const Bottom = styled.div`
  padding-bottom: 40px;
  background-color: var(--white);

  color: var(--grey500);
  font-size: 12px;

  .inquiry {
    display: flex;
    gap: 4px;
    width: 100%;
    justify-content: center;
    margin-bottom: 12px;
  }

  .right {
    margin-top: 1px;
  }
`;

const Bg = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 101;

  .divider {
    height: 1px;
    width: 100%;
    background-color: var(--grey300);
    margin-top: 12px;
  }
`;
