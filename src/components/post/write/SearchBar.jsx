import React from "react";
import styled from "styled-components";
import search from "../../../assets/icons/search.svg";

const { kakao } = window;

const SearchBar = ({ keyword, setKeyword, setLon, setLat }) => {
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();

  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      setLon(data[0].x);
      setLat(data[0].y);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ps.keywordSearch(keyword, placesSearchCB);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        placeholder="주소 검색으로 루트를 추가하세요."
        onChange={handleChange}
        value={keyword}
      />
      <img src={search} />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.form`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  align-items: center;
  gap: 10px;
  border-radius: var(--basic);
  background: var(--grey100);

  input {
    width: 100%;
    outline: none;
    border: none;
    background: var(--grey100);
  }
`;
