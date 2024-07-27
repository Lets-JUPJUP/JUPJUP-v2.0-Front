import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Item from "../../components/list/Item";

const AlertPage = () => {
  return (
    <>
      <Header title="리뷰하기" isBack={true} isNoti={true} />
      <Wrapper>
        <div className="container">
          <Item />
        </div>
      </Wrapper>
    </>
  );
};

export default AlertPage;

const Wrapper = styled.div`
  .container {
    margin-top: 40px;
    border-top: 1.2px solid var(--grey300);
    border-bottom: 1.2px solid var(--grey300);
    background: var(--white);
  }
`;
