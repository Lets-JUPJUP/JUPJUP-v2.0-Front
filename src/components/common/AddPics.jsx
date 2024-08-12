import React, { useRef, useState } from "react";
import styled from "styled-components";
import gallery from "../../assets/icons/gallery.svg";
import cancelImage from "../../assets/post/cancelImage.svg";
import Toast from "./Toast";

const AddPics = ({ images, setImages, isMultiple = true, maxFiles = 5 }) => {
  //사진 첨부취소 작업
  const imgRef = useRef();
  const [previewImgs, setPreviewImgs] = useState([]); //미리보기 파일
  const [toastMessage, setToastMessage] = useState("");
  //사진 미리보기
  const handlePreviewImgs = (files) => {
    setPreviewImgs([]); //초기화

    for (var i = 0; i < files.length; i++) {
      //입력된 이미지 개수 만큼 반복하여 프리뷰 이미지 생성
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = async (e) => {
        setPreviewImgs((previewImgs) => [...previewImgs, e.target.result]);
      };
    }
  };

  //사진 첨부
  const uploadImg = () => {
    const maxFileLength = maxFiles; //이미지 최대 장수

    let newFiles = [...imgRef.current.files]; //다중 이미지 입력 받기

    let files = [...images]; //기존에 입력 받았던 이미지들
    files = files.concat(newFiles); //새로 입력 받은 이미지 추가

    if (files.length > maxFileLength) {
      setToastMessage(`이미지는 최대 ${maxFileLength}장 첨부 가능합니다.`);
      files = files.slice(0, maxFileLength); //5장만 남기기
    }

    setImages(files); //이미지 파일 원본 저장 (최대 5장)
    handlePreviewImgs(files);
  };

  // 이미지 한장씩 첨부 취소
  const cancelUpload = (index) => {
    //프리뷰 취소
    const previews = [...previewImgs];
    previews.splice(index, 1);
    setPreviewImgs(previews);

    //파일 원본 첨부 취소
    const files = [...images];
    files.splice(index, 1);
    setImages(files);
  };

  return (
    <Wrapper>
      {toastMessage && (
        <Toast message={toastMessage} setToastMessage={setToastMessage} />
      )}
      <input
        className="input"
        accept=".jpg, .jpeg, .png"
        type="file"
        id="file-input"
        multiple={isMultiple}
        onChange={uploadImg}
        ref={imgRef}
      />
      <label htmlFor="file-input">
        <div className="btn">
          <img src={gallery} />
          <div>사진 추가하기</div>
        </div>
      </label>

      <PreviewBox>
        {previewImgs.map((el, index) => {
          return (
            <div className="container">
              <img className="preview" src={el} />
              <img
                className="cancel"
                src={cancelImage}
                onClick={() => cancelUpload(index)}
              />
            </div>
          );
        })}
      </PreviewBox>
    </Wrapper>
  );
};

export default AddPics;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .btn {
    width: 100%;
    display: flex;
    gap: 2px;
  }
  .input {
    display: none;
  }
`;

const PreviewBox = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 8px;

  .preview {
    height: 81.395px;
    width: 81.395px;
  }

  .container {
    position: relative;
  }

  .cancel {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
