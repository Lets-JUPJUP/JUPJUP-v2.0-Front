import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";

import LongBtn from "../../components/common/LongBtn";
import Form from "../../components/post/Form";

const WritePage = () => {
  return (
    <>
      <Header isBack={true} title={"플로거 모집하기"} isNoti={true} />
      <Wrapper>
        <Form />
      </Wrapper>

      <Bottom>
        <LongBtn text={"다음"} />
      </Bottom>
    </>
  );
};

export default WritePage;

const Wrapper = styled.div`
  padding: 12px 20px 59.6px;
`;

const Bottom = styled.div`
  margin-bottom: 40px;
`;
