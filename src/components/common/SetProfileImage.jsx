import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SetProfileImage = ({ profileImage, setImages }) => {
  //프로필 이미지
  const [previewImg, setPreviewImg] = useState(""); //미리보기 이미지

  useEffect(() => {
    setPreviewImg(profileImage);
  }, [profileImage]);
  const imgRef = useRef();

  const uploadImg = () => {
    //이미지 원본파일 저장
    let file = imgRef.current.files[0];
    setImages([file]);

    //미리보기 이미지 생성
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async (e) => {
      setPreviewImg(e.target.result);
    };
  };
  return (
    <Wrapper>
      <input
        className="input"
        accept=".jpg, .jpeg, .png"
        type="file"
        id="file-input"
        onChange={uploadImg}
        ref={imgRef}
      />
      <label htmlFor="file-input">
        <div>
          <img className="profile-image" src={previewImg} />
        </div>
      </label>
    </Wrapper>
  );
};

export default SetProfileImage;

const Wrapper = styled.div`
  .input {
    display: none;
  }

  .profile-image {
    width: 160px;
    height: 160px;
    border-radius: 4px;
  }
`;
