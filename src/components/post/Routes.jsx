import React from "react";

import pin1 from "../../assets/post/pin1.svg";
import pin2 from "../../assets/post/pin2.svg";
import pin3 from "../../assets/post/pin3.svg";
import pin4 from "../../assets/post/pin4.svg";
import pin5 from "../../assets/post/pin5.svg";
import pin6 from "../../assets/post/pin6.svg";
import pin7 from "../../assets/post/pin7.svg";
import pin8 from "../../assets/post/pin8.svg";
import pin9 from "../../assets/post/pin9.svg";

import styled from "styled-components";

const Routes = () => {
  return (
    <Wrapper>
      <Route>
        <img className="pin" src={pin1} />
        <div className="address">
          주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명
        </div>
        <Line />
      </Route>

      <Route>
        <img className="pin" src={pin2} />
        <div className="address">
          주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명주소명
        </div>
        <Line />
      </Route>

      <Route>
        <img className="pin" src={pin3} />
        <div className="address">주소명주소명</div>
      </Route>
    </Wrapper>
  );
};

export default Routes;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .address {
    overflow: hidden;
    color: var(--black);
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 16px;
    font-weight: 600;
  }
`;

const Route = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  position: relative;

  .pin {
    z-index: 1;
  }
`;

const Line = styled.div`
  position: absolute;
  transform: translate(-50%, 50%);
  top: 0;
  left: 16px;

  width: 4px;
  height: 44px;
  background-color: var(--grey500);
`;
