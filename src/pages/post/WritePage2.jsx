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
import Toast from "../../components/common/Toast";
import useS3Image from "../../services/hooks/useS3Image";

const WritePage2 = () => {
  //접근 불가 페이지 제어
  useEffect(() => {
    handleBack();
  }, []);

  const handleBack = () => {
    const history = JSON.parse(sessionStorage.getItem("history")) || [];

    if (history.length > 1) {
      const previousPath = history[history.length - 2];
      console.log(previousPath);
      // 뒤로 가기 불가 페이지 제어
      if (previousPath !== "/write/1") {
        history.pop(); // 현재 페이지를 스택에서 제거
        sessionStorage.setItem("history", JSON.stringify(history));
        navigate(-1);
      }
    }
  };

  const [toastMessage, setToastMessage] = useState("");
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

  const { uploadImage } = useS3Image();

  //버튼 클릭시 글 작성 요청
  const requestWrite = async () => {
    //S3이미지 업로드
    const urls = await uploadImage(body.images);
    const requestBody = {
      ...body,
      images: urls,
      route: route,
      district: district,
    };

    writePost(requestBody);
  };

  //요청 성공시 & 실패시
  useEffect(() => {
    if (writePostStatus == 200) {
      const id = writePostData.id;
      resetBody(); //바디 리셋
      navigate(`/detail/${id}`); //상세 페이지 이동
    } else if (writePostError) {
      //시작 지점 서울이 아닌 지역 선택시 500 에러
      //토스트 팝업 처리
      setToastMessage("플로깅 루트의 시작 위치는 서울시로 설정해주세요.");
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
      {toastMessage && (
        <Toast message={toastMessage} setToastMessage={setToastMessage} />
      )}
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
