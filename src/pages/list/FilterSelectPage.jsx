import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import LongBtn from "../../components/common/LongBtn";
import Filters from "../../components/list/Filters";
import refresh from "../../assets/icons/refresh.svg";

const FilterSelectPage = () => {
  return (
    <>
      <Header isBack={true} isNoti={true} title="필터 선택" />

      <Wrapper>
        <Filters />
      </Wrapper>

      <Refresh>
        <img src={refresh} />
        <div className="text">전체 초기화</div>
      </Refresh>

      <Gap>
        <LongBtn text={"완료"} />
      </Gap>
    </>
  );
};

export default FilterSelectPage;

const Wrapper = styled.div`
  padding: 0px 20px;
  margin-top: 12px;
  margin-bottom: 60px;
`;

const Refresh = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  color: var(--grey500);
  margin-bottom: 12px;
`;

const Gap = styled.div`
  margin-bottom: 40px;
`;
