import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Input from "../../components/common/Input";
import LongBtn from "../../components/common/LongBtn";
import profile from "../../assets/auth/profile.svg";
import Select from "../../components/common/Select";
import NavBar from "../../components/common/NavBar";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import {
  memberCheckValidName,
  memberGetMyProfile,
  memberUpdateProfile,
} from "../../services/api/member";
import { getKorGender } from "../../services/translate/gender";
import useInput from "../../services/hooks/useInput";
import useBtnActive from "../../services/hooks/useBtnActive";
import useFetch from "../../services/hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/common/Toast";

const EditPage = () => {
  const { data } = useGetInitialData(memberGetMyProfile);

  const [nickname, handleChangeNickname] = useInput(data?.nickname);
  const [age, handleChangeAge] = useInput(data?.age);
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  //닉네임 중복검사
  const { data: validNameData, fetchData: checkValidName } =
    useFetch(memberCheckValidName);

  //프로필 업데이트
  const {
    status: updateProfileStatus,
    error: updateProfileError,
    fetchData: updateProfile,
  } = useFetch(memberUpdateProfile);

  //입력란을 모두 채우면 버튼 활성화
  const isBtnActive = useBtnActive({ nickname, age });

  useEffect(() => {
    setProfileImage(data?.profileImageUrl);
  }, [data]);

  //닉네임 중복 체크
  useEffect(() => {
    //중복 체크 통과 여부
    if (validNameData) {
      if (validNameData.isExistingNickname) {
        //이미 존재하는 닉네임 이라면
        setToastMessage("이미 사용 중인 닉네임입니다.");
      } else {
        //사용 가능한 닉네임이라면 가입 진행
        updateProfile({
          nickname: nickname,
          age: age,
          gender: data.gender,
          profileImage: profileImage,
        });
      }
    }
  }, [validNameData]);

  //업데이트 성공시 마이페이지 이동
  useEffect(() => {
    if (updateProfileStatus == 200) {
      localStorage.setItem("age", age);
      navigate("/mypage");
    } else if (updateProfileError) {
      //에러 처리
      setToastMessage("업데이트 오류: 부적절한 정보입니다.");
    }
  }, [updateProfileError, updateProfileStatus]);

  const requestUpdate = () => {
    if (nickname !== "") {
      checkValidName({ nickname: nickname });
    }
  };

  return (
    data && (
      <>
        {toastMessage && (
          <Toast message={toastMessage} setToastMessage={setToastMessage} />
        )}
        <Header isBack={true} title="정보 수정" />
        <Wrapper>
          <Form>
            <div>
              <img className="profile-image" src={profileImage || profile} />
            </div>

            <Inputs>
              <Input
                placeholder={data.nickname}
                onChange={handleChangeNickname}
                value={nickname}
              />
              <Input
                placeholder={`${data.age} 세`}
                onChange={handleChangeAge}
                value={age}
                type="number"
              />
              <Select isActive={false} value={getKorGender(data.gender)} />
              <div className="comment">성별 정보는 수정할 수 없습니다.</div>
            </Inputs>

            <div className="quit">회원탈퇴</div>
          </Form>

          <Bottom>
            <LongBtn
              text="완료"
              isActive={isBtnActive}
              onClick={requestUpdate}
            />
          </Bottom>
        </Wrapper>

        <NavBar />
      </>
    )
  );
};

export default EditPage;

const Wrapper = styled.div`
  .quit {
    display: flex;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--grey300);
    color: var(--grey500);
    text-align: center;
    font-size: 12px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  align-items: center;

  .profile-image {
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

  .comment {
    color: var(--grey500);
    text-align: center;

    font-size: 12px;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 97px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
