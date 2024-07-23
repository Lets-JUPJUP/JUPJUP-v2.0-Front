import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao } = window;

const Mapview = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapContainer = document.getElementById("map-view");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5664056, 126.9778222),
      level: 10,
    };

    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);
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
