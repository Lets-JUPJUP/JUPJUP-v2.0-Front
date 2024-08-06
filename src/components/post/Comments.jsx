import React, { useEffect } from "react";
import styled from "styled-components";
import right from "../../assets/post/right.svg";
import Comment from "./Comment";
import useFetch from "../../services/hooks/useFetch";
import { postCreateComment, postGetComments } from "../../services/api/post";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();
  const { data: comments, fetchData: getComments } = useFetch(postGetComments);

  const { data, fetchData: createComment } = useFetch(postCreateComment);

  console.log(comments);

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    comments && (
      <Wrapper>
        <Top>
          <div className="title">댓글 ({comments.commentNo})</div>
          <div className="btn">
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
            <>
              <Comment comment={comment} />
              {comment.replyList.map((reply) => {
                return (
                  <>
                    <Recomment>
                      <Comment comment={reply} />
                    </Recomment>
                  </>
                );
              })}
              {!isLast && <div className="divider" />}
            </>
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
