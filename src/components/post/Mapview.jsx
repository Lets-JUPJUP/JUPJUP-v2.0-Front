import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import pin1 from "../../assets/post/pin1.svg";
import pin2 from "../../assets/post/pin2.svg";
import pin3 from "../../assets/post/pin3.svg";
import pin4 from "../../assets/post/pin4.svg";
import pin5 from "../../assets/post/pin5.svg";
import pin6 from "../../assets/post/pin6.svg";
import pin7 from "../../assets/post/pin7.svg";
import pin8 from "../../assets/post/pin8.svg";
import pin9 from "../../assets/post/pin9.svg";

const { kakao } = window;

const Mapview = ({ route }) => {
  const mapRef = useRef(null);
  const pinImages = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9];

  //마커 표시
  // 마커를 생성하고 지도 위에 표시하는 함수입니다
  function addMarker(locPosition, index) {
    // 마커이미지를 생성합니다
    const imageSrc = pinImages[index];

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      new kakao.maps.Size(32, 32),
      { offset: new kakao.maps.Point(16, 32) }
    );
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      image: markerImage,
      position: locPosition,
      title: index.toString(),
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(mapRef.current);
    marker.setDraggable(false);
  }

  useEffect(() => {
    //지도 생성
    const mapContainer = document.getElementById("map-view");
    const mapOption = {
      center: new kakao.maps.LatLng(37, 127),
      level: 5,
    };

    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  useEffect(() => {
    //마커표시
    route.map((el, index) => {
      const locPosition = new kakao.maps.LatLng(el.latitude, el.longitude);
      addMarker(locPosition, index);
    });

    //중심설정
    const centerPosition = new kakao.maps.LatLng(
      route[0].latitude,
      route[0].longitude
    );
    mapRef.current.setCenter(centerPosition);
  }, []);

  return (
    <Wrapper>
      <Map id="map-view" />
    </Wrapper>
  );
};

export default Mapview;

const Wrapper = styled.div`
  flex-shrink: 0;
  border-radius: 2px;
  position: relative;
  width: 100%;

  ::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }

  .map-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Map = styled.div``;
