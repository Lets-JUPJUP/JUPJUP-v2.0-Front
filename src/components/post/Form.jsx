import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "../../pages/post/DatePicker";
import AddPics from "../common/AddPics";
import NumRange from "../../pages/post/NumRange";

const Form = () => {
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  return (
    <Wrapper>
      <Title placeholder="글의 제목을 입력하세요." />

      <div className="section">
        <Row>
          <div className="subject">출발 일시</div>
          <DatePicker target={startDate} setTarget={setStartDate} />
        </Row>
        <Row>
          <div className="subject">모집 마감 일시</div>
          <DatePicker target={dueDate} setTarget={setDueDate} />
        </Row>
      </div>

      <div className="section">
        <Row>
          <div className="subject">참여 연령</div>
          <NumRange />
        </Row>
        <Row>
          <div className="subject">참여 인원</div>
          <NumRange />
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
            <Btn>동성</Btn>
            <Btn>성별무관</Btn>
          </div>
        </Row>

        <div className="check">
          <input type="checkbox" />
          반려동물 동반 가능
        </div>
      </div>

      <div className="section">
        <Text placeholder="글의 내용을 입력하세요." />
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
  background: var(--grey100);

  color: var(--grey500);
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
