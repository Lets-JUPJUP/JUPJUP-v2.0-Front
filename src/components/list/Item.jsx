import React from "react";
import styled from "styled-components";
import host from "../../assets/icons/host.svg";
import pin from "../../assets/icons/pin.svg";
import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import calendar from "../../assets/icons/calendar.svg";
import thumbs from "../../assets/post/thumbs.svg";
import { handleDateString } from "../../services/format/date";
import { useNavigate } from "react-router-dom";

const Item = ({ item, viewOnly = false }) => {
  const {
    fileUrls,
    id,
    isAuthor,
    isEnded,
    isJoined,
    isRecruitmentSuccessful,
    isReviewed,
    maxAge,
    minAge,
    postGender,
    route,
    startDate,
    title,
    withPet,
  } = item;

  //리뷰 버튼 활성화 조건 (내가 참여한 글, 모집성공, 시작일지남, 리뷰아직안함)
  var isReviewAble =
    isJoined &&
    isRecruitmentSuccessful &&
    new Date(startDate) < new Date() &&
    !isReviewed;

  //포스트 활성화 조건 (리뷰가능인데 아직안함 또는 모집마감안된 상태 )
  var isActive = isReviewAble || !isEnded;

  const navigate = useNavigate();
  return viewOnly ? (
    <Wrapper
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <div className="container">
        <Title $isActive={true}>{title}</Title>
        <div className="grey">
          <img src={pin} />
          <div className="location">{route[0].address}</div>
        </div>
        <div className="grey date">
          <img src={calendar} />
          {handleDateString(startDate)}
        </div>
        <div className="tags">
          {isAuthor && <img src={host} />}
          <Tag>
            {minAge}세~{maxAge}세
          </Tag>
          {postGender != "ANY" ? (
            postGender == "FEMALE" ? (
              <Tag>
                <img src={female} />
              </Tag>
            ) : (
              <Tag>
                <img src={male} />
              </Tag>
            )
          ) : (
            <></>
          )}
          {withPet && <Tag>반려동물 동반 가능</Tag>}
        </div>
      </div>
      {fileUrls[0] && <img className="image" src={fileUrls[0]} />}
    </Wrapper>
  ) : (
    <Wrapper
      onClick={() => {
        !isReviewAble && navigate(`/detail/${id}`);
      }}
    >
      <div
        className="container"
        onClick={() => {
          isReviewAble && navigate(`/detail/${id}`);
        }}
      >
        <Title $isActive={isActive}>{title}</Title>
        <div className="grey">
          <img src={pin} />
          <div className="location">{route[0].address}</div>
        </div>
        <div className="grey date">
          <img src={calendar} />
          {handleDateString(startDate)}
        </div>
        <div className="tags">
          {isAuthor && <img src={host} />}
          <Tag>
            {minAge}세~{maxAge}세
          </Tag>
          {postGender != "ANY" ? (
            postGender == "FEMALE" ? (
              <Tag>
                <img src={female} />
              </Tag>
            ) : (
              <Tag>
                <img src={male} />
              </Tag>
            )
          ) : (
            <></>
          )}
          {withPet && <Tag>반려동물 동반 가능</Tag>}
        </div>
      </div>
      {fileUrls[0] && <img className="image" src={fileUrls[0]} />}
      {isReviewAble && (
        <ReviewBtn
          onClick={() => isReviewAble && navigate(`/mypage/review/${id}`)}
        >
          <img src={thumbs} />
          리뷰하기
        </ReviewBtn>
      )}
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  padding: 12px 0px;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
  .image {
    width: 84px;
    height: 84px;
    background-color: aliceblue;
  }

  .container {
    width: calc(100% - 88px); //이미지 없을땐 100%로 설정

    .title {
      color: var(--black);
      font-weight: 600;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    .grey {
      color: var(--grey500);
      font-size: 12px;
      font-weight: 300;

      display: flex;
      gap: 4px;
    }

    .location {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }

  .tags {
    display: flex;
    gap: 8px;
  }
`;

const Tag = styled.div`
  border-radius: 4px;
  background: var(--grey100);
  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 10px;

  color: var(--black);
  font-size: 12px;
  font-weight: 300;
`;

const Title = styled.div`
  color: ${(props) => (props.$isActive ? "var(--black)" : "var(--grey500)")};
  font-weight: 600;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ReviewBtn = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  height: 84px;
  padding: 12px 8px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--btn, 4px);
  flex-shrink: 0;
  border-radius: var(--special, 16px) var(--PasswordMask, 0px)
    var(--PasswordMask, 0px) var(--basic, 2px);
  background: var(--main, #7654ff);
  box-shadow: -4px 0px 20px 0px rgba(0, 0, 0, 0.2);

  color: var(--white, #fff);
  text-align: center;
  font-size: 12px;
`;
