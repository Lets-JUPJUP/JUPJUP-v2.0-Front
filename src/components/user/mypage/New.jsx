import React from "react";
import styled from "styled-components";
import right from "../../../assets/mypage/right.svg";
import Item from "../../list/Item";
import useGetInitialData from "../../../services/hooks/useGetInitialData";
import { postGetCompletePost } from "../../../services/api/post";

const New = () => {
  const { data } = useGetInitialData(postGetCompletePost);

  return (
    data && (
      <Wrapper>
        <div className="title">최근 완료한 플로깅</div>
        <>
          <div className="divider" />
          <Item item={data} />
          <div className="divider" />
        </>

        <div className="review-btn">
          다른 플로깅 리뷰하기
          <img src={right} />
        </div>
      </Wrapper>
    )
  );
};

export default New;

const Wrapper = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .review-btn {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: end;

    color: var(--grey500);

    img {
      margin-top: 1px;
    }
  }
`;
