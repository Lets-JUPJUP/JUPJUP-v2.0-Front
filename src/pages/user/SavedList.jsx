import React, { useState } from "react";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Item from "../../components/list/Item";
import NavBar from "../../components/common/NavBar";
import FilterTab from "../../components/user/mypage/FilterTab";

//TYPE: A = 내 플로깅 , B = 북마크, C= 댓글 단 글
const SavedList = ({ TYPE = "A" }) => {
  let title = "";
  if (TYPE == "A") title = "내 플로깅";
  if (TYPE == "B") title = "북마크";
  if (TYPE == "C") title = "댓글 단 글";

  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Header isBack={true} isNoti={true} title={title} />

      <Wrapper>
        {TYPE == "A" && (
          <FilterTab
            tabNum={2}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        )}
        <List>
          <Item />
          <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
          <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
        </List>
      </Wrapper>

      <NavBar />
    </>
  );
};

export default SavedList;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const List = styled.div``;
