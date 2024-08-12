import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { filterState } from "../../services/store/filter";
import FilterBtn from "./FilterBtn";
import { district, getKorDistrict } from "../../services/translate/district";

const Filters = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const { allGender, withPet, allAge, districts, excludeClosedRecruitment } =
    filter;

  const updateDistrictArr = (districtKey) => {
    setFilter((prev) => {
      //이미 선택된 지역구라면 삭제
      if (prev.districts.includes(districtKey)) {
        return {
          ...prev,
          districts: prev.districts.filter((item) => item !== districtKey),
        };
      } else {
        //아직 선택 되지 않은 지역구면 추가
        return {
          ...prev,
          districts: [...prev.districts, districtKey],
        };
      }
    });
  };

  //선택된 지역인지 확인
  const checkActiveDistrict = (districtKey) => {
    return districts.includes(districtKey);
  };

  //원하는 값으로 배열 업데이트
  const handleChange = (property, value) => {
    setFilter((prev) => ({ ...prev, [property]: value }));
  };

  // 지역구 가나다 묶음
  const chunkSizes = [8, 1, 3, 1, 5, 4, 3];

  const groupedDistricts = [];
  let index = 0;
  chunkSizes.forEach((size) => {
    groupedDistricts.push(district.slice(index, index + size));
    index += size;
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Wrapper>
      <div className="section">
        <div className="title">기본 설정</div>
        <div className="btns">
          <FilterBtn
            $isActive={excludeClosedRecruitment}
            onClick={() =>
              handleChange(
                "excludeClosedRecruitment",
                !excludeClosedRecruitment
              )
            }
            text={"모집 마감 제외"}
          />
          <FilterBtn
            $isActive={withPet}
            onClick={() => handleChange("withPet", !withPet)}
            text={"반려동물 동반 가능"}
          />
        </div>
      </div>

      <div className="section">
        <div className="title">참여 연령</div>
        <div className="btns">
          <FilterBtn
            $isActive={allAge}
            onClick={() => handleChange("allAge", true)}
            text={"연령 무관"}
          />
          <FilterBtn
            $isActive={!allAge}
            onClick={() => handleChange("allAge", false)}
            text={"내 연령 포함"}
          />
        </div>
      </div>

      <div className="section">
        <div className="title">참여 성별 & 동물</div>
        <div className="btns">
          <FilterBtn
            $isActive={allGender}
            onClick={() => handleChange("allGender", true)}
            text={"성별 무관"}
          />
          <FilterBtn
            $isActive={!allGender}
            onClick={() => handleChange("allGender", false)}
            text={"내 성별 포함"}
          />
        </div>
      </div>

      <div className="section">
        <div className="title">시작 위치</div>
        <div className="container">
          {groupedDistricts.map((group, index) => (
            <div className="btns" key={index}>
              {group.map((item) => (
                <FilterBtn
                  isDistrict={true}
                  key={item.key}
                  $isActive={checkActiveDistrict(item.key)}
                  onClick={() => updateDistrictArr(item.key)}
                  text={getKorDistrict(item.key)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    color: var(--black);

    font-size: 16px;
    font-weight: 600;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
