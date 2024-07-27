import React from "react";
import styled from "styled-components";
import gallery from "../../assets/icons/gallery.svg";

const AddPics = () => {
  return (
    <Wrapper>
      <div className="btn">
        <img src={gallery} />
        <div>사진 추가하기</div>
      </div>

      <PreviewBox>
        <img className="preview" src="" />
        <img className="preview" src="" />
        <img className="preview" src="" />
        <img className="preview" src="" />
        <img className="preview" src="" />
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
`;
