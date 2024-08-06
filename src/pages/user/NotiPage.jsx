import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import NotiItem from "../../components/user/noti/NotiItem";
import ReadBtn from "../../components/user/noti/ReadBtn";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import {
  notiGetList,
  notiPostReadAll,
  notiPostReadEach,
} from "../../services/api/noti";
import useFetch from "../../services/hooks/useFetch";
import { useNavigate } from "react-router-dom";

const NotiPage = () => {
  //알림 전체 읽음
  const { status: readAllStatus, fetchData: readAll } =
    useFetch(notiPostReadAll);

  //알림 단일 읽음
  const { fetchData: readEach } = useFetch(notiPostReadEach);

  //알림 리스트 가져오기
  const { data, error, fetchData: getList } = useFetch(notiGetList);

  const navigate = useNavigate();

  console.log(data);
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Header isBack={true} title="알림" />
      <Wrapper>
        <div className="list">
          {data &&
            data.map((notiItem) => {
              return (
                <NotiItem
                  notiItem={notiItem}
                  key={notiItem.id}
                  onClick={() => {
                    readEach(notiItem.id);
                    navigate(`/detail/${notiItem.contentId}`);
                  }}
                />
              );
            })}
        </div>

        <div className="floating-btn">
          <ReadBtn onClick={() => readAll()} />
        </div>
      </Wrapper>
    </>
  );
};

export default NotiPage;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;

  .list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  .floating-btn {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
