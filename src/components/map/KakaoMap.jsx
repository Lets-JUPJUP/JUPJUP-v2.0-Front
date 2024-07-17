import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const { kakao } = window;

const KakaoMap = () => {
  const [keyword, setKeyword] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const mapRef = useRef(null);

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5664056, 126.9778222),
      level: 10,
    };

    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const locPosition = new kakao.maps.LatLng(lat, lon);

          mapRef.current.setCenter(locPosition);
          setLat(lat);
          setLon(lon);
        },
        function (error) {
          console.error("위치 정보를 가져오는데 실패했습니다:", error); // 실패 로그
          const locPosition = new kakao.maps.LatLng(37.5664056, 126.9778222);
          mapRef.current.setCenter(locPosition);
          alert("위치 권한을 허용해야 합니다.");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.log("Geolocation을 사용할 수 없습니다."); // Geolocation 미지원 로그
    }
  }, []);

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      const locPosition = new kakao.maps.LatLng(lat, lon);
      if (mapRef.current) {
        mapRef.current.setCenter(locPosition);
      }
    }
  }, [lat, lon]);

  return (
    <Wrapper>
      <div className="top">
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
          setLat={setLat}
          setLon={setLon}
        />
      </div>
      <Map id="map"></Map>
    </Wrapper>
  );
};

export default KakaoMap;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .top {
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0;
    z-index: 10;
  }
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
`;
