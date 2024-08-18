import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import LongBtn from "../../components/common/LongBtn";
import AddPics from "../../components/common/AddPics";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../services/hooks/useFetch";
import { memberPostAlert } from "../../services/api/member";
import useS3Image from "../../services/hooks/useS3Image";
import useBtnActive from "../../services/hooks/useBtnActive";

const AlertPage = () => {
  //이미지원본파일
  const [images, setImages] = useState([]);

  //내용
  const [content, setContent] = useState("");

  //이미지 S3 업로드
  const { uploadImage } = useS3Image();

  //신고 글 작성
  const { status: postAlertStatus, fetchData: postAlert } =
    useFetch(memberPostAlert);

  //버튼 활성화
  const isBtnActive = useBtnActive({ content });

  //신고대상 아이디
  const { id } = useParams();

  //신고대상 아이디
  const navigate = useNavigate();

  //버튼 클릭시 글 작성 요청
  const requestWrite = async () => {
    //S3이미지 업로드
    const urls = await uploadImage(images);
    const requestBody = {
      targetId: id,
      content: content,
      image: urls[0],
    };

    if (content !== "") {
      postAlert(requestBody);
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (postAlertStatus == 200) {
      navigate(-1);
    }
  }, [postAlertStatus]);

  return (
    <>
      <Header title="신고 및 제보" isBack={true} />
      <Wrapper>
        <textarea
          className="text"
          placeholder="문제 상황에 대해 작성하세요."
          onChange={handleChange}
          value={content}
        />

        <div className="gap">
          <AddPics images={images} setImages={setImages} isMultiple={false} />
        </div>
      </Wrapper>

      <Bottom>
        <LongBtn text={"완료"} onClick={requestWrite} isActive={isBtnActive} />
      </Bottom>
    </>
  );
};

export default AlertPage;

const Wrapper = styled.div`
  padding: 0 20px;

  .gap {
    margin-top: 40px;
  }

  .text {
    margin-top: 40px;
    height: 280px;
    overflow-y: scroll;
    border-radius: var(--basic, 2px);
    background: var(--grey100, #eef0f3);
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
    align-items: center;

    outline: none;
    border: none;
    resize: none;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
