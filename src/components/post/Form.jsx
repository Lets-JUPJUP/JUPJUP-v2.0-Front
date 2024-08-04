import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePicker from "../../pages/post/DatePicker";
import AddPics from "../common/AddPics";
import NumRange from "../../pages/post/NumRange";
import useInput from "../../services/hooks/useInput";
import { useRecoilState } from "recoil";
import { postFormState } from "../../services/store/postform";
import useBtnActive from "../../services/hooks/useBtnActive";
import { useNavigate } from "react-router-dom";
import Toast from "../common/Toast";
import { handleDateFormat } from "../../services/format/date";

const Form = ({ setIsActive, checkValid }) => {
  const myGender = localStorage.getItem("gender");
  //요청 바디
  const [body, setBody] = useRecoilState(postFormState);

  //시작일시 & 마감일시
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  //제목
  const [title, handleChangetitle] = useInput(body.title);

  //연령
  const [minAge, handleChangeMinAge] = useInput(body.minAge);
  const [maxAge, handleChangeMaxAge] = useInput(body.maxAge);

  //인원
  const [minMember, handleChangeMinMember] = useInput(body.minMember);
  const [maxMember, handleChangeMaxMember] = useInput(body.maxMember);

  //성별
  const [gender, setGender] = useState(body.postGender);

  //반려동물 동반여부
  const [withPet, setWithPet] = useState(body.withPet);

  //글 내용
  const [content, handleContentChange] = useInput(body.content);

  //토스트 팝업 메세지
  const [toastMessage, setToastMessage] = useState("");

  //페이지 이동
  const navigate = useNavigate();

  //버튼 활성화 체크
  const isBtnActive = useBtnActive({
    title,
    startDate,
    dueDate,
    minAge,
    maxAge,
    minMember,
    maxMember,
    withPet,
    gender,
    content,
  });
  setIsActive(isBtnActive);

  //부모 컴포넌트에서 다음 버튼 클릭시 실행.
  useEffect(() => {
    console.log(body);
    if (isBtnActive) {
      //입력값 유효성 체크
      if (maxAge >= minAge && maxMember >= minMember && startDate >= dueDate) {
        //요청 바디에 입력값 넣기
        setBody({
          title: title,
          startDate: handleDateFormat(startDate),
          dueDate: handleDateFormat(dueDate),
          minAge: minAge,
          maxAge: maxAge,
          minMember: minMember,
          maxMember: maxMember,
          postGender: gender,
          withPet: withPet,
          content: content,
          images: [],
        });

        //다음페이지로 이동
        navigate("/write/2");
      } else {
        setToastMessage("부적절한 정보입니다.다시 입력해주세요.");
      }
    }
  }, [checkValid]);

  return (
    <Wrapper>
      {toastMessage && (
        <Toast message={toastMessage} setToastMessage={setToastMessage} />
      )}
      <Title
        placeholder="글의 제목을 입력하세요."
        onChange={handleChangetitle}
        value={title}
      />

      <div className="section">
        <Row>
          <div className="subject">출발 일시</div>
          <DatePicker target={startDate} setTarget={setStartDate} />
        </Row>
        <Row>
          <div className="subject">모집 마감 일시</div>
          <DatePicker
            target={dueDate}
            setTarget={setDueDate}
            maxDate={startDate}
          />
        </Row>
      </div>

      <div className="section">
        <Row>
          <div className="subject">참여 연령</div>
          <NumRange
            minValue={minAge}
            maxValue={maxAge}
            onMinChange={handleChangeMinAge}
            onMaxChange={handleChangeMaxAge}
          />
        </Row>
        <Row>
          <div className="subject">참여 인원</div>
          <NumRange
            minValue={minMember}
            maxValue={maxMember}
            onMinChange={handleChangeMinMember}
            onMaxChange={handleChangeMaxMember}
          />
        </Row>
        <Guide>
          <p>최소 인원이 모이지 않으면</p>
          <p>플로깅은 자동 취소돼요</p>
        </Guide>
      </div>

      <div className="section">
        <Row>
          <div className="subject">참여 성별</div>
          <div className="btns">
            <Btn
              $isActive={gender == myGender}
              onClick={() => {
                setGender(myGender);
              }}
            >
              동성
            </Btn>
            <Btn $isActive={gender == "ANY"} onClick={() => setGender("ANY")}>
              성별무관
            </Btn>
          </div>
        </Row>

        <div className="check">
          <input
            type="checkbox"
            checked={withPet}
            onChange={(e) => setWithPet(e.target.checked)}
          />
          반려동물 동반 가능
        </div>
      </div>

      <div className="section">
        <Text
          placeholder="글의 내용을 입력하세요."
          value={content}
          onChange={handleContentChange}
        />
        <AddPics />
      </div>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  .section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .check {
      align-self: flex-end;
      align-items: center;
      display: flex;
      gap: 8px;
    }
  }
`;

const Title = styled.input`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  border-radius: var(--basic, 2px);
  background: var(--grey100);

  outline: none;
  border: none;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .subject {
    font-size: 16px;
    font-weight: 600;
  }

  .btns {
    display: flex;
    gap: 4px;
  }
`;

const Guide = styled.div`
  color: var(--grey500);
  text-align: right;
`;

const Btn = styled.div`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) =>
    props.$isActive ? "var(--main)" : "var(--grey100)"};

  color: ${(props) => (props.$isActive ? "var(--white)" : "var(--grey500)")};

  font-weight: 600;
`;

const Text = styled.textarea`
  border-radius: 2px;
  background: var(--grey100);
  display: flex;
  width: 100%;
  height: 96px;
  box-sizing: border-box;
  padding: 8px 10px;
  align-items: center;
  border: none;
  outline: none;
  resize: none;
`;
