import React, { useEffect, useState } from "react";
import styled from "styled-components";
import right from "../../assets/post/right.svg";
import Comment from "./Comment";
import useFetch from "../../services/hooks/useFetch";
import {
  postCreateComment,
  postCreateReply,
  postDeleteComment,
  postDeleteReply,
  postGetComments,
} from "../../services/api/post";
import { useParams } from "react-router-dom";
import CommentInput from "./CommentInput";

const Comments = ({ setShowFooter }) => {
  const { id } = useParams();
  const {
    status,
    data: comments,
    fetchData: getComments,
    loading,
  } = useFetch(postGetComments);
  const { isRefetch: createCommentisRefetch, fetchData: createComment } =
    useFetch(postCreateComment);
  const { isRefetch: createReplyisRefetch, fetchData: createReply } =
    useFetch(postCreateReply);

  const { isRefetch: deleteCommentisRefetch, fetchData: deleteComment } =
    useFetch(postDeleteComment);

  const { isRefetch: deleteReplyisRefetch, fetchData: deleteReply } =
    useFetch(postDeleteReply);

  const [showInput, setShowInput] = useState(false);

  const [parentId, setParentId] = useState(undefined);
  useEffect(() => {
    getComments(id);
  }, [
    createCommentisRefetch,
    createReplyisRefetch,
    deleteCommentisRefetch,
    deleteReplyisRefetch,
  ]);

  useState(() => {
    console.log(comments);
  }, [loading]);

  useEffect(() => {
    setShowFooter(!showInput);
  }, [showInput]);

  return (
    comments && (
      <Wrapper>
        {showInput && (
          <CommentInput
            createComment={createComment}
            setShowInput={setShowInput}
            createReply={createReply}
            parentId={parentId}
          />
        )}
        <Top>
          <div className="title">댓글 ({comments.commentNo})</div>
          <div
            className="btn"
            onClick={() => {
              setParentId(undefined);
              setShowInput(true);
            }}
          >
            댓글 작성하기
            <img src={right} />
          </div>
        </Top>
        {comments.commentDtoList.map((comment, index) => {
          var isLast = false;
          if (index == comments.commentDtoList.length - 1) {
            isLast = true;
          }
          return (
            <div key={comment.id}>
              <Comment
                deleteFunc={deleteComment}
                comment={comment}
                setShowInput={setShowInput}
                setParentId={setParentId}
                isReply={false}
              />
              {comment.replyList.map((reply) => {
                return (
                  <div key={reply.id}>
                    <Recomment>
                      <Comment
                        deleteFunc={deleteReply}
                        comment={reply}
                        setShowInput={setShowInput}
                        isReply={true}
                        setParentId={setParentId}
                      />
                    </Recomment>
                  </div>
                );
              })}
              {!isLast && <div className="divider" />}
            </div>
          );
        })}
      </Wrapper>
    )
  );
};

export default Comments;

const Top = styled.div`
  width: 100%;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.2px solid var(--grey500);

  .title {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  .btn {
    color: var(--grey500);
    display: flex;
    gap: 8px;

    img {
      margin-top: 1px;
    }
  }
`;

const Wrapper = styled.div`
  padding-bottom: 16px;

  .divider {
    height: 0.4px;
    background-color: var(--grey500);
  }
`;

const Recomment = styled.div`
  padding-left: 30px;
`;
