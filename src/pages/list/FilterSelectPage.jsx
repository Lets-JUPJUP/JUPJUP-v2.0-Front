import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import LongBtn from "../../components/common/LongBtn";
import Filters from "../../components/list/Filters";
import refresh from "../../assets/icons/refresh.svg";
import { useRecoilState, useResetRecoilState } from "recoil";
import { filterPersistState, filterState } from "../../services/store/filter";
import { useNavigate } from "react-router-dom";

const FilterSelectPage = () => {
  //임시 필터 선택
  const [filter, setFilter] = useRecoilState(filterState);
  //임시 필터 초기화
  const resetFilter = () => {
    setFilter({
      allGender: true,
      withPet: true,
      allAge: false,
      districts: [],
      excludeClosedRecruitment: true,
    });
  };

  //로컬 스토리지 저장 필터
  const [filterPersist, setFilterPersist] = useRecoilState(filterPersistState);

  //로컬 스토리지 저장 필터 업데이트
  const updateFilter = () => {
    setFilterPersist(filter);
    navigate("/list");
  };

  const navigate = useNavigate();
  return (
    <>
      <Header isBack={true} isNoti={true} title="필터 선택" />

      <Wrapper>
        <Filters />
      </Wrapper>

      <Refresh onClick={() => resetFilter()}>
        <img src={refresh} />
        <div className="text">전체 초기화</div>
      </Refresh>

      <Gap>
        <LongBtn text={"완료"} onClick={() => updateFilter()} />
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
