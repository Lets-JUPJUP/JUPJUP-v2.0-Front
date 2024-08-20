import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Item from "../../components/list/Item";
import Stars from "../../components/user/review/Stars";
import Participant from "../../components/common/Participant";
import LongBtn from "../../components/common/LongBtn";
import NavBar from "../../components/common/NavBar";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { postGetDetail, postGetJoinList } from "../../services/api/post";
import { useNavigate, useParams } from "react-router-dom";
import useBtnActive from "../../services/hooks/useBtnActive";
import useFetch from "../../services/hooks/useFetch";
import { memberPostHeart, memberPostScore } from "../../services/api/member";

const ReviewPage = () => {
  const { id } = useParams();
  const { data: post } = useGetInitialData(postGetDetail, id);
  const { data: joinList } = useGetInitialData(postGetJoinList, id);
  const { status: postScoreStatus, fetchData: postScore } =
    useFetch(memberPostScore);
  const { status: postHeartStatus, fetchData: postHeart } =
    useFetch(memberPostHeart);
  const [stars, setStars] = useState(undefined);
  const [thumbTargets, setThumbTargets] = useState([]);

  console.log(post);
  const navigate = useNavigate();
  const isBtnActive = useBtnActive({ stars });

  const submitReview = () => {
    postScore({
      postId: id,
      score: stars,
    });

    postHeart({
      postId: id,
      targetIds: thumbTargets,
    });
  };

  useEffect(() => {
    if (postScoreStatus == 200 && postHeartStatus == 200) {
      alert("리뷰 작성이 완료되었습니다.");
      navigate(-1);
    }
  }, [postScoreStatus, postHeartStatus]);

  useEffect(() => {
    //접근 금지
    if (post && post.isReviewed) {
      alert("이미 완료한 리뷰입니다.");
      navigate(-1);
    }
  }, [post]);

  return (
    <>
      <Header title="리뷰하기" isBack={true} isNoti={true} />
      <Wrapper>
        <div className="border-box">
          {post && <Item item={post} viewOnly={true} />}
        </div>

        <div className="gap">
          <Stars stars={stars} setStars={setStars} />
        </div>

        <div className="reivew-text">함께한 플로거 리뷰하기</div>
        <div className="sub-text">
          함께해서 즐거웠던 플로거에게 좋아요를 눌러주세요
        </div>
        <div className="divider" />

        <div className="participants">
          {joinList &&
            joinList.map((participant) => {
              return (
                <>
                  <Participant
                    participant={participant}
                    isThumb={true}
                    setThumbTargets={setThumbTargets}
                    thumbTargets={thumbTargets}
                  />
                </>
              );
            })}
        </div>
      </Wrapper>

      <Btn>
        <LongBtn text={"완료"} isActive={isBtnActive} onClick={submitReview} />
      </Btn>

      <NavBar />
    </>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  padding: 0px 20px;

  .border-box {
    margin-top: 40px;

    align-items: center;

    border-top: 1.2px solid var(--grey300);
    border-bottom: 1.2px solid var(--grey300);
  }

  .gap {
    margin-top: 40px;
  }

  .reivew-text {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 120px;
  }

  .sub-text {
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
  }

  .divider {
    margin-top: 8px;
    width: 100%;
    background: var(--grey300);
    height: 1.2px;
  }

  .participants {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Btn = styled.div`
  margin-top: 60px;
`;
