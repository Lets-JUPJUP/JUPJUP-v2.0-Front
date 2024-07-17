import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {
  function searchLocationByAddress(map, address, name) {
    // 마커 이미지 주소입니다
    var imageSrc = "";

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage, // 마커 이미지
        });

        // // 인포윈도우로 장소에 대한 설명을 표시합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //   content:
        //     '<div style="width:150px;text-align:center;padding:6px 0;font-family:Pretendard">' +
        //     name +
        //     "</div>",
        // });
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOptions = {
        center: new kakao.maps.LatLng(37.555134, 126.936893), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
        isPanto: true,
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOptions);

    // 현재 위치 마커가 표시될 위치입니다 - 신촌역 좌표로 설정함
    var markerPosition = new kakao.maps.LatLng(37.555134, 126.936893);

    // 현재 위치 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <Wrapper>
      <Map id="map" />
    </Wrapper>
  );
};

export default KakaoMap;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Map = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
`;
