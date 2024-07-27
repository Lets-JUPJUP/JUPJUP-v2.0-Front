import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import SearchMap from "../../components/post/write/SearchMap";
import LongBtn from "../../components/common/LongBtn";

const WritePage2 = () => {
  return (
    <>
      <Header isBack={true} title={"플로거 모집하기"} isNoti={true} />
      <Wrapper>
        <SearchMap />
      </Wrapper>

      <Bottom>
        <LongBtn text={"완료"} />
      </Bottom>
    </>
  );
};

export default WritePage2;

const Wrapper = styled.div`
  padding: 12px 20px 85px;
`;

const Bottom = styled.div`
  margin-bottom: 40px;
`;
