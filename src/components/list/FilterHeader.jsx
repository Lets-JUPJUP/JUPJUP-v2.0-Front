import React from "react";
import styled from "styled-components";
import filter from "../../assets/icons/filter.svg";
import { useNavigate } from "react-router-dom";
import { filterPersistState } from "../../services/store/filter";
import { useRecoilValue } from "recoil";
import { getKorDistrict } from "../../services/translate/district";

const FilterHeader = () => {
  const navigate = useNavigate();

  const filters = useRecoilValue(filterPersistState);
  const { allGender, withPet, allAge, districts, excludeClosedRecruitment } =
    filters;

  return (
    <Wrapper>
      <img src={filter} onClick={() => navigate("/list/filters")} />
      <div className="scroll-area">
        {excludeClosedRecruitment ? <Option>모집 마감 제외</Option> : <></>}
        {allGender ? <Option>성별 무관</Option> : <Option>내 성별 포함</Option>}
        {allAge ? <Option>연령 무관</Option> : <Option>내 연령 포함</Option>}
        {withPet ? <Option>반려동물 동반 가능</Option> : <></>}
        {districts ? (
          districts.map((el) => {
            return <Option>{getKorDistrict(el)}</Option>;
          })
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

export default FilterHeader;

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  gap: 12px;
  border-top: 1.4px solid var(--grey300);
  border-bottom: 1.4px solid var(--grey300);
  background: var(--white);

  .scroll-area {
    padding: 12px 0px;
    display: flex;
    gap: 8px;
    overflow-x: scroll;
  }
`;

const Option = styled.div`
  flex-shrink: 0;
  color: var(--main);
  font-size: 12px;
  font-weight: 300;

  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 2px solid var(--light);
  background: var(--light);
`;
