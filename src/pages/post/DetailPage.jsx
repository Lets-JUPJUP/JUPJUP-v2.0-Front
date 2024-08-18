import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Mapview from "../../components/post/Mapview";
import Routes from "../../components/post/Routes";
import User from "../../components/post/User";
import Info from "../../components/post/Info";
import Pic from "../../components/post/Pic";
import Text from "../../components/post/Text";
import Comments from "../../components/post/Comments";
import Footer from "../../components/post/Footer";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { postGetDetail } from "../../services/api/post";
import { useParams } from "react-router-dom";
import { getKorGender } from "../../services/translate/gender";
import { handleDateString } from "../../services/format/date";

const DetailPage = () => {
  const { id } = useParams();
  const { data, refetch } = useGetInitialData(postGetDetail, id);
  console.log(data);
  return (
    data && (
      <>
        <Header
          isBack={true}
          isShare={true}
          isDetail={true}
          postTitle={data.title}
          dueDate={data.dueDate}
        />
        <Wrapper>
          <div className="map">
            <Mapview route={data.route} />
            <Routes route={data.route} isDeletable={false} />
          </div>

          <div className="infos">
            <div className="gap">
              <User
                authorId={data.authorId}
                authorNickname={data.authorNickname}
                authorProfileImageUrl={data.authorProfileImageUrl}
                createdAt={data.createdAt}
              />
            </div>

            <Info
              startDate={handleDateString(data.startDate)}
              member={`${data.minMember}~${data.maxMember}명`}
              age={`${data.minAge}~${data.maxAge}세`}
              gender={getKorGender(data.postGender)}
              withPet={data.withPet}
            />
            <Text content={data.content} />
            <Pic images={data.fileUrls} />
          </div>

          <Comments />
        </Wrapper>

        <Footer
          postId={data.id}
          dueDate={data.dueDate}
          isJoined={data.isJoined}
          isFail={data.isEnded && !data.isRecruitmentSuccessful}
          isHearted={data.isHearted}
          isSuccess={data.isEnded && data.isRecruitmentSuccessful}
          refetch={refetch}
        />
      </>
    )
  );
};

export default DetailPage;

const Wrapper = styled.div`
  padding: 0px 20px;

  .map {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .gap {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .infos {
    margin-bottom: 48px;
  }
`;
