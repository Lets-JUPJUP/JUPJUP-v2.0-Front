import React from "react";
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

const DetailPage = () => {
  return (
    <>
      <Header isBack={true} isShare={true} />
      <Wrapper>
        <div className="map">
          <Mapview />
          <Routes />
        </div>

        <div className="infos">
          <div className="gap">
            <User />
          </div>

          <Info />
          <Text />
          <Pic />
        </div>

        <Comments />
      </Wrapper>

      <Footer />
    </>
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
