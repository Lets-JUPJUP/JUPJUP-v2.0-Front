import React, { useState } from "react";
import styled from "styled-components";

import profile from "../../assets/post/profile.svg";
import commenticon from "../../assets/post/comment.svg";
import alert from "../../assets/post/alert.svg";
import x from "../../assets/post/x.svg";
import { handleDateString } from "../../services/format/date";
import useFetch from "../../services/hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Comment = ({
  comment,
  setShowInput,
  setParentId,
  isReply,
  deleteFunc,
}) => {
  const { id, content, isRemoved, isAuthor, createdDate, replyList, parentId } =
    comment;

  const { writerId, nickname, profileImageUrl } = comment.writerInfoDto;

  const navigate = useNavigate();
  const handleCreate = () => {
    //부모 댓글 id 설정
    setParentId(isReply ? parentId : id);
    setShowInput(true);
  };

  const handleDelete = () => {
    deleteFunc(id);
  };

  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <img
            className="profile"
            src={profileImageUrl ? profileImageUrl : profile}
          />
          {isAuthor ? (
            <div className="nickname mine">{nickname}</div>
          ) : (
            <div className="nickname">{nickname}</div>
          )}

          <div className="date">{handleDateString(createdDate)}</div>
        </div>
        <div className="icons">
          {isAuthor ? (
            <img src={x} onClick={handleDelete} />
          ) : (
            <>
              <img
                src={alert}
                onClick={() => navigate(`/user/${writerId}/alert`)}
              />
              <img src={commenticon} onClick={handleCreate} />
            </>
          )}
        </div>
      </div>

      <p className="content">{content}</p>
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .top {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    flex-shrink: 0;
    color: var(--grey500);
    font-size: 12px;
  }

  .left {
    display: flex;
    gap: 4px;
  }

  .profile {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 4px;
    border-radius: 2px;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .content {
    margin-left: 28px;
  }

  .mine {
    color: var(--main);
  }
`;
