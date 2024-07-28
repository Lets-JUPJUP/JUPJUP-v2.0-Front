import React from "react";
import KakaoMap from "../../components/map/KakaoMap";
import NavBar from "../../components/common/NavBar";

const MapPage = () => {
  return (
    <>
      <KakaoMap />
      <NavBar isNoGap={true} />
    </>
  );
};

export default MapPage;
