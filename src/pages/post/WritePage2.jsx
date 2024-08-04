import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import SearchMap from "../../components/post/write/SearchMap";
import LongBtn from "../../components/common/LongBtn";
import { useRecoilState, useResetRecoilState } from "recoil";
import { postFormState } from "../../services/store/postform";
import useBtnActive from "../../services/hooks/useBtnActive";
import useFetch from "../../services/hooks/useFetch";
import { postCreatePost } from "../../services/api/post";
import { useNavigate } from "react-router-dom";

const WritePage2 = () => {
  const [body, setBody] = useRecoilState(postFormState);
  const [route, setRoute] = useState([]); //객체(주소명,경도,위도)배열
  const [district, setDistrict] = useState(""); //시작 지점의 지역구
  const {
    data: writePostData,
    status: writePostStatus,
    error: writePostError,
    fetchData: writePost,
  } = useFetch(postCreatePost);

  const resetBody = useResetRecoilState(postFormState);
  const navigate = useNavigate();

  //버튼 클릭시 글 작성 요청
  const requestWrite = () => {
    const requestBody = { ...body, route: route, district: district };
    writePost(requestBody);
  };

  //요청 성공시
  useEffect(() => {
    if (writePostStatus == 200) {
      const id = writePostData.id;
      resetBody(); //바디 리셋
      navigate(`/detail/${id}`); //상세 페이지 이동
    } else {
      //시작 지점 서울이 아닌 지역 선택시 500에러
      //토스트 팝업 처리
      //플로깅 루트의 시작점은 서울시로 설정해주세요.
    }
  }, [writePostError, writePostStatus]);

  useEffect(() => {
    if (route.length) {
      setDistrict(route[0].address.split(/\s+/g)[1]);
    }
  }, [route]);

  const isBtnActive = useBtnActive({ district });

  return (
    <>
      <Header isBack={true} title={"플로거 모집하기"} isNoti={true} />
      <Wrapper>
        <SearchMap setRoute={setRoute} route={route} />
      </Wrapper>

      <Bottom>
        <LongBtn text={"완료"} onClick={requestWrite} isActive={isBtnActive} />
      </Bottom>
    </>
  );
};

export default WritePage2;

const Wrapper = styled.div`
  padding: 12px 20px 35px;
`;

const Bottom = styled.div`
  margin-bottom: 40px;
`;
