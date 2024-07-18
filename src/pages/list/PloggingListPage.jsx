import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Filter from "../../components/list/Filter";
import Item from "../../components/list/Item";
import NavBar from "../../components/common/NavBar";

const PloggingListPage = () => {
  return (
    <>
      <Header isHome={true} isNoti={true} title="플로깅하기" />
      <Wrapper>
        <Filter />

        <List>
          <Item />
          <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
        </List>
      </Wrapper>
      <NavBar />
    </>
  );
};

export default PloggingListPage;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  margin-top: 12px;
`;
