import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import FilterHeader from "../../components/list/FilterHeader";
import Item from "../../components/list/Item";
import NavBar from "../../components/common/NavBar";
import writebtn from "../../assets/post/writebtn.svg";
import { useNavigate } from "react-router-dom";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { postGetList } from "../../services/api/post";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterPersistState, filterState } from "../../services/store/filter";

const PloggingListPage = () => {
  const navigate = useNavigate();
  const filters = useRecoilValue(filterPersistState);
  const { data: list, error } = useGetInitialData(postGetList, filters);
  console.log(list);
  return (
    <>
      <Header isHome={true} isNoti={true} title="플로깅하기" />
      <Wrapper>
        <FilterHeader />

        <List>
          {list &&
            list.map((item) => {
              return <Item item={item} key={item.id} />;
            })}
        </List>
        <div className="btn" onClick={() => navigate("/write/1")}>
          <img src={writebtn} />
        </div>
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

  .btn {
    position: fixed;
    right: 20px;
    bottom: 109px;
    border-radius: 16px;
    width: 69px;
    height: 69px;
    box-sizing: border-box;
    background: var(--main);
    justify-content: center;
    padding: 8px 12px;

    /* shadow */
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  }
`;

const List = styled.div`
  margin-top: 12px;
`;
