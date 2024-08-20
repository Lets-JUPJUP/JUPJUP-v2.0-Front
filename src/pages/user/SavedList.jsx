import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Item from "../../components/list/Item";
import NavBar from "../../components/common/NavBar";
import FilterTab from "../../components/user/mypage/FilterTab";

import {
  postGetBookmarkList,
  postGetCommentedList,
  postGetCompleteList,
  postGetRecruitingList,
  postGetSuccessList,
  postGetWholeList,
} from "../../services/api/post";
import useFetch from "../../services/hooks/useFetch";

//TYPE: A = 내 플로깅 , B = 북마크, C= 댓글 단 글
const SavedList = ({ TYPE = "A" }) => {
  const [currentTab, setCurrentTab] = useState(4);
  const [requestFunc, setRequestFunc] = useState(null);

  useEffect(() => {
    if (TYPE === "A") {
      //마이 플로깅
      switch (currentTab) {
        case 1:
          setRequestFunc(() => postGetWholeList);
          break;
        case 2:
          setRequestFunc(() => postGetRecruitingList);
          break;
        case 3:
          setRequestFunc(() => postGetSuccessList);
          break;
        case 4:
          setRequestFunc(() => postGetCompleteList);
          break;
        default:
          setRequestFunc(() => postGetWholeList);
      }
    } else if (TYPE === "B") {
      //북마크한 글 리스트
      setRequestFunc(() => postGetBookmarkList);
    } else if (TYPE === "C") {
      // 댓글단 글 리스트
      setRequestFunc(() => postGetCommentedList);
    }
  }, [TYPE, currentTab]);

  const { data: list, fetchData, loading } = useFetch(requestFunc);

  useEffect(() => {
    if (requestFunc) {
      fetchData();
      console.log(list);
    }
  }, [requestFunc]);

  console.log(list);

  let title = "";
  if (TYPE === "A") {
    title = "내 플로깅";
  } else if (TYPE === "B") {
    title = "북마크";
  } else if (TYPE === "C") {
    title = "댓글 단 글";
  }

  return (
    <>
      <Header isBack={true} isNoti={true} title={title} />

      <Wrapper>
        {TYPE == "A" && (
          <FilterTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
        )}
        <List>
          {list &&
            list.map((item) => {
              return <Item item={item} />;
            })}
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
