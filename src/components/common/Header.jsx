import React, { useEffect, useState } from "react";

import back from "../../assets/icons/back.svg";
import noti from "../../assets/icons/noti.svg";
import notiwithdot from "../../assets/icons/notiwithdot.svg";
import home from "../../assets/icons/home.svg";
import deleteicon from "../../assets/icons/deleteicon.svg";
import alerticon from "../../assets/icons/alert.svg";
import styled from "styled-components";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { notiGetCount, notiGetSubscribe } from "../../services/api/noti";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleDateString } from "../../services/format/date";
import useFetch from "../../services/hooks/useFetch";
import { postDeletePost } from "../../services/api/post";

const Header = ({
  isBack = false,
  isNoti = false,
  isDelete = false,
  isHome = false,
  isAlert = false,
  title = "",
  subtitle = "",
  isDetail = false,
  postTitle = "",
  dueDate = "",
  idForAlert,
}) => {
  //SSE 구독 요청
  useGetInitialData(notiGetSubscribe);

  //게시글 삭제
  const { id } = useParams();
  const { status: deletePostStatus, fetchData: deletePost } =
    useFetch(postDeletePost);

  const navigate = useNavigate();

  const location = useLocation();

  //접근 불가 페이지 제어
  useEffect(() => {
    // 현재 경로를 sessionStorage에 저장
    const history = JSON.parse(sessionStorage.getItem("history")) || [];
    history.push(location.pathname);
    sessionStorage.setItem("history", JSON.stringify(history));
  }, [location.pathname]);

  const handleBack = () => {
    const history = JSON.parse(sessionStorage.getItem("history")) || [];

    history.pop(); // 현재 페이지를 스택에서 제거
    sessionStorage.setItem("history", JSON.stringify(history));
    navigate(-1);
  };

  const handleDelete = () => {
    deletePost(id);
  };

  useEffect(() => {
    if (deletePostStatus == 200) {
      alert("게시글이 삭제 되었습니다.");
      navigate("/list");
    }
  }, [deletePostStatus]);

  return (
    <Wrapper>
      <Left>
        {isBack && <img src={back} onClick={handleBack} />}
        {isHome && <img src={home} onClick={() => navigate("/")} />}
      </Left>
      {isDetail ? (
        <DetailCenter>
          <div className="title">{postTitle}</div>
          {dueDate && (
            <div className="dueDate">
              {handleDateString(dueDate, true)}모집 마감
            </div>
          )}
        </DetailCenter>
      ) : (
        <Center>
          <div>{title}</div>
          {subtitle && <div>{subtitle}</div>}
        </Center>
      )}
      <Right>
        {isNoti && <img src={noti} onClick={() => navigate("/mypage/noti")} />}
        {isDelete && <img src={deleteicon} onClick={handleDelete} />}
        {isAlert && (
          <img
            src={alerticon}
            onClick={() => navigate(`/user/${idForAlert}/alert`)}
          />
        )}
      </Right>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Left = styled.div`
  width: 24px;
`;

const Center = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
const Right = styled.div`
  width: 24px;
`;

const DetailCenter = styled.div`
  .title {
    color: var(--black);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
  }

  .dueDate {
    color: var(--main);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
`;
