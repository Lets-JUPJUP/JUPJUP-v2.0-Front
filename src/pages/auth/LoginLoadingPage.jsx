import React from "react";
import { memberGetMyProfile_ } from "../../services/api/member";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetInitialData from "../../services/hooks/useGetInitialData";

const LoginLoadingPage = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();

  const accessToken = searchParams.get("accessToken");

  //멤버 정보 조회
  const headers = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const { data, error } = useGetInitialData(memberGetMyProfile_, headers);

  //에러
  if (error) {
    alert("회원가입 오류");
    navigate("/login");
  }

  //프로필이 생성된 유저인지 구분하여 navigate
  if (data) {
    if (data.isProfileCreated) {
      console.log(data.isProfileCreated);
      localStorage.setItem("juptoken", accessToken); // 로컬 스토리지에 저장
      localStorage.setItem("id", data.id);
      navigate("/", {
        onComplete: () => {
          // 이동이 완료된 후에 새로고침
          window.location.reload();
        },
      });
    } else {
      //토큰 임시 저장해 둔 뒤 프로필 생성 후 juptoken으로 토큰 다시 저장
      //가입 외의 페이지에 대한 접근제한은 juptoken을 기준으로 하기 떄문에 temptoken으로 가입 중도 이탈자에 대한 예외처리를 함
      localStorage.setItem("temptoken", accessToken);
      navigate("/register");
      window.location.reload();
    }
  }

  return <div>loading...</div>;
};

export default LoginLoadingPage;
