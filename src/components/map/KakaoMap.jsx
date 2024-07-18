import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import gps from "../../assets/icons/gps.svg";

const { kakao } = window;

const KakaoMap = () => {
  const [keyword, setKeyword] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const [refresh, setRefresh] = useState(false);
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
  }, [refresh]);

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      const locPosition = new kakao.maps.LatLng(lat, lon);
      if (mapRef.current) {
        mapRef.current.setCenter(locPosition);
      }
    }
  }, [lat, lon]);

  useEffect(() => {
    // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(mapRef.current, "dragend", function () {
      // 지도 중심 좌표를 얻어옵니다
      var latlng = mapRef.current.getCenter();

      var message = "변경된 지도 중심좌표는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";

      console.log(message);
    });
  }, []);

  const refreshMap = () => {
    setRefresh(!refresh);
    setKeyword("");
  };

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
      <div className="btns">
        <div className="btn">현 지도로 재검색</div>
        <img className="gps" src={gps} onClick={refreshMap} />
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

  .btns {
    width: 100%;
    position: absolute;
    top: 68px;
    box-sizing: border-box;
    padding: 0 20px;
    z-index: 10;
    display: flex;
    justify-content: end;

    .gps {
    }

    .btn {
      position: absolute;
      right: 50%;
      transform: translate(50%, 0%);
      box-sizing: border-box;
      display: inline-flex;
      padding: 8px 10px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: var(--main);

      color: var(--white);
      font-weight: 600;
    }
  }
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
`;
