import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import gps from "../../assets/icons/gps.svg";
import Drawer from "./Drawer";
import useFetch from "../../services/hooks/useFetch";
import { mapGetTrashCans } from "../../services/api/map";
import pin from "../../assets/map/pin.svg";
import NavBar from "../common/NavBar";

const { kakao } = window;

const KakaoMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const [refresh, setRefresh] = useState(false); //현위치 다시 가져오기
  const [refetch, setRefetch] = useState(false); // 변경시 쓰레기통 정보 refetch

  const [currentPin, setCurrentPin] = useState(null);
  const mapRef = useRef(null);

  const {
    data: trashCansData,
    error,
    status,
    fetchData: getTrashCans,
  } = useFetch(mapGetTrashCans);

  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5664056, 126.9778222),
      level: 5,
    };

    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    } else {
      console.log("Geolocation을 사용할 수 없습니다."); // Geolocation 미지원 로그
    }
  }, [refresh]);

  const successHandler = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const locPosition = new kakao.maps.LatLng(lat, lon);

    mapRef.current.setCenter(locPosition);
    setLat(lat);
    setLon(lon);
  };

  const errorHandler = (error) => {
    if (error.message === "User denied Geolocation") {
      alert("위치 정보에 동의해주셔야 해당 서비스 이용이 가능합니다.");
      const locPosition = new kakao.maps.LatLng(37.5664056, 126.9778222);
      mapRef.current.setCenter(locPosition);
      return;
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      const locPosition = new kakao.maps.LatLng(lat, lon);
      if (mapRef.current) {
        mapRef.current.setCenter(locPosition);
      }
    }

    setRefetch(!refetch);
  }, [lat, lon]);

  useEffect(() => {
    //중심좌표 변경 시 쓰레기통 정보 get
    if (lat !== 0 && lon !== 0) {
      getTrashCans({ x: lat, y: lon });
    }
  }, [refetch]);

  useEffect(() => {
    //쓰레기통 정보 변할 때마다 화면에 보여줄 핀 배열 변경

    if (trashCansData && trashCansData.trashCans.length) {
      // 마커 이미지의 이미지 주소입니다
      var imageSrc = pin;

      trashCansData.trashCans.forEach((trashCan) => {
        console.log(trashCan);
        const locPosition = new kakao.maps.LatLng(
          trashCan.latitude,
          trashCan.longitude
        );
        const imageSize = new kakao.maps.Size(40, 40); // 마커 이미지의 이미지 크기
        const imageOption = { offset: new kakao.maps.Point(20, 40) };
        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ); // 마커 이미지를 생성

        var marker = new kakao.maps.Marker({
          position: locPosition, // 마커를 표시할 위치
          image: markerImage, // 마커 이미지
        });

        marker.setMap(mapRef.current); // 마커가 지도 위에 표시되도록 설정
        marker.setDraggable(false);

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // drawer 오픈
          setIsOpen(true);
          setCurrentPin(trashCan);
        });
      });
    }
  }, [trashCansData]);

  useEffect(() => {
    // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(mapRef.current, "dragend", function () {
      // 지도 중심 좌표를 얻어옵니다
      var latlng = mapRef.current.getCenter();

      // var message = "변경된 지도 중심좌표는 " + latlng.getLat() + " 이고, ";
      // message += "경도는 " + latlng.getLng() + " 입니다";
      setLat(latlng.getLat());
      setLon(latlng.getLng());
      // console.log(message);
    });
  }, []);

  const refreshMap = () => {
    setRefresh(!refresh);
    setKeyword("");
  };

  return (
    <>
      {isOpen && <Drawer setIsOpen={setIsOpen} target={currentPin} />}

      <Wrapper>
        <div className="top">
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            setLat={setLat}
            setLon={setLon}
          />
        </div>
        <div className="btn">
          <img className="gps" src={gps} onClick={refreshMap} />
        </div>

        <Map id="map" />
        <NavBar isNoGap={true} />
      </Wrapper>
    </>
  );
};

export default KakaoMap;

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .top {
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0;
    z-index: 10;
  }

  .btn {
    width: 90%;
    position: absolute;
    top: 68px;
    box-sizing: border-box;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;
    display: flex;
    justify-content: end;
  }
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
`;
