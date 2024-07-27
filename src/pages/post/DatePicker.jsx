import React from "react";
import styled from "styled-components";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

const DatePicker = ({ target, setTarget }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <CustomCalendarInput onClick={onClick} ref={ref}>
      {value !== "" ? (
        value
      ) : (
        <div className="placeholder">날짜를 선택하세요</div>
      )}
    </CustomCalendarInput>
  ));

  return (
    <div>
      <ReactDatePicker
        dateFormat="yyyy.MM.dd HH:mm"
        selected={target}
        onChange={(date) => setTarget(date)}
        timeInputLabel="Time:"
        customInput={<CustomInput />}
        showTimeSelect
        timeFormat="HH:mm"
        minDate={new Date()}
        popperPlacement="bottom-end"
        popperContainer={({ children }) => (
          <CalendarContainer>{children}</CalendarContainer>
        )}
      />
    </div>
  );
};

export default DatePicker;

const CustomCalendarInput = styled.div`
  display: flex;
  padding: 8px 10px;
  width: 130px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--grey100, #eef0f3);

  .placeholder {
    color: var(--grey500);
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  z-index: 1; // Ensure the calendar is on top
  top: 50px; // Adjust top as necessary
  left: 0;
  right: 0;
`;
