import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";

import LongBtn from "../../components/common/LongBtn";
import Form from "../../components/post/Form";
import { useRecoilState } from "recoil";
import { postFormState } from "../../services/store/postform";

const WritePage = () => {
  const [checkValid, setCheckValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleForm = () => {
    //입력값 유효성 체크 & 요청 바디에 입력값 넣기
    //버튼 클릭으로 checkValid 값 토글 때 마다 Form 컴포넌트 안에서 바디 업데이트
    setCheckValid(!checkValid);
  };

  return (
    <>
      <Header isBack={true} title={"플로거 모집하기"} isNoti={true} />
      <Wrapper>
        <Form setIsActive={setIsActive} checkValid={checkValid} />
      </Wrapper>

      <Bottom>
        <LongBtn text={"다음"} isActive={isActive} onClick={handleForm} />
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
