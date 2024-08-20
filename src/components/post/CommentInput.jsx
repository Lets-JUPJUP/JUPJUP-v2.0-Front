import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import send from "../../assets/post/send.svg";
import { useParams } from "react-router-dom";

const CommentInput = ({
  createComment,
  setShowInput,
  createReply,
  parentId,
}) => {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const { id } = useParams(); // post_id
  const [content, setContent] = useState("");

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.disabled = false; // input 비활성화 해제
      inputRef.current.focus(); // input에 focus

      // 스크롤을 최하단으로
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }

    // 인풋 바깥 클릭을 감지하는 이벤트 리스너 등록
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowInput]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    if (content === "") {
      setShowInput(false);
      return;
    }
    if (parentId && content !== "") {
      createReply(id, { parentId: parentId, content: content });
    } else {
      createComment(id, { content: content });
    }

    // 성공시
    setContent("");
    setShowInput(false);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <input
        ref={inputRef}
        placeholder="댓글을 입력하세요"
        onChange={handleChange}
        value={content}
      />
      <Send src={send} onClick={handleClick} />
    </Wrapper>
  );
};

export default CommentInput;

const Wrapper = styled.div`
  z-index: 4;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: solid 5px var(--grey300);

  input {
    width: calc(100% - 40px);
    height: 20px;
    outline: none;
    border: none;
  }
`;

const Send = styled.img`
  width: 20px;
`;
