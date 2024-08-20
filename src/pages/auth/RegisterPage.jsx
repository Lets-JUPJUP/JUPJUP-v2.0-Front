import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import profile from "../../assets/auth/profile.svg";
import Input from "../../components/common/Input";
import LongBtn from "../../components/common/LongBtn";
import Select from "../../components/common/Select";
import styled from "styled-components";
import useInput from "../../services/hooks/useInput";
import {
  memberCheckValidName,
  memberGetMyProfile,
  memberUpdateProfile,
} from "../../services/api/member";
import { getKorGender } from "../../services/translate/gender";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import Toast from "../../components/common/Toast";
import useBtnActive from "../../services/hooks/useBtnActive";
import useFetch from "../../services/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import SetProfileImage from "../../components/common/SetProfileImage";
import useS3Image from "../../services/hooks/useS3Image";

const RegisterPage = () => {
  const [nickname, handleChangeNickname] = useInput("");
  const [age, handleChangeAge] = useInput(undefined);
  const [profileImage, setProfileImage] = useState("");
  const [gender, setGender] = useState("");
  const [isHaveGender, setIsHaveGender] = useState(false);
  const [images, setImages] = useState([]); //단일 이미지지만 로직상 배열로 받음

  const [toastMessage, setToastMessage] = useState("");

  const { data: profileData } = useGetInitialData(memberGetMyProfile);
  const { data: validNameData, fetchData: checkValidName } =
    useFetch(memberCheckValidName);
  const {
    status: createProfileStatus,
    error: createProfileError,
    fetchData: createProfile,
  } = useFetch(memberUpdateProfile);
  const { uploadImage } = useS3Image();

  const navigate = useNavigate();

  //입력란을 모두 채우면 버튼 활성화
  const isBtnActive = useBtnActive({ nickname, age, gender });

  //기본 프로필 정보 가져오기
  useEffect(() => {
    if (profileData) {
      console.log(profileData);
      setGender(profileData.gender);
      setProfileImage(profileData.profileImageUrl || profile);
      //기본 프로필 데이터에 이미 성별 정보가 있다면 선택 불가능 하게 함
      setIsHaveGender(profileData.gender !== "NOT_DEFINED");
    }
  }, [profileData]);

  //버튼 클릭시 프로필 변경 요청
  const requestRegister = async () => {
    //S3이미지 업로드
    const urls = await uploadImage(images);
    const requestBody = {
      nickname: nickname,
      age: age,
      gender: gender,
      profileImage: urls[0],
    };
    createProfile(requestBody);
  };

  //닉네임 중복 체크
  useEffect(() => {
    //중복 체크 통과 여부
    if (validNameData) {
      if (validNameData.isExistingNickname) {
        //이미 존재하는 닉네임 이라면
        setToastMessage("이미 사용 중인 닉네임입니다.");
      } else {
        //사용 가능한 닉네임이라면 가입 진행
        requestRegister();
      }
    }
  }, [validNameData]);

  //가입 성공시 메인페이지로 이동
  useEffect(() => {
    if (createProfileStatus == 200) {
      localStorage.setItem("gender", gender);
      localStorage.setItem("age", age);
      const token = localStorage.getItem("temptoken");
      localStorage.setItem("juptoken", token);
      localStorage.removeItem("temptoken");
      navigate("/");

      window.location.reload();
    } else if (createProfileError) {
      //에러 처리
      setToastMessage("회원가입 오류: 부적절한 정보입니다.");
    }
  }, [createProfileError, createProfileStatus]);

  const handleClick = () => {
    if (nickname !== "") {
      checkValidName({ nickname: nickname });
    }
  };

  return (
    <>
      {toastMessage && (
        <Toast message={toastMessage} setToastMessage={setToastMessage} />
      )}
      <div>
        <Header title="프로필 생성" isBack={true} />

        <Form>
          <SetProfileImage
            profileImage={profileImage}
            images={images}
            setImages={setImages}
          />

          <Comment>
            즐겁고 안전한 플로깅을 위해 <br /> 정확한 정보를 입력해주세요.
          </Comment>

          <Inputs>
            <Input
              placeholder="닉네임"
              onChange={handleChangeNickname}
              value={nickname}
            />
            <Input
              placeholder="NN 세"
              onChange={handleChangeAge}
              value={age}
              type="number"
            />
            <Select
              isActive={!isHaveGender}
              value={getKorGender(gender)}
              setValue={setGender}
            />
          </Inputs>
        </Form>

        <Bottom>
          <LongBtn text="완료" onClick={handleClick} isActive={isBtnActive} />
        </Bottom>
      </div>
    </>
  );
};

export default RegisterPage;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  align-items: center;

  .profileimage {
    width: 160px;
    height: 160px;
    border-radius: 4px;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Comment = styled.p`
  color: var(--main);
  text-align: center;

  font-weight: 300;
`;
