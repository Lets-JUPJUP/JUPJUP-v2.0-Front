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
import xgrey from "../../assets/post/xgrey.svg";

import styled from "styled-components";

const Routes = ({ isDeletable = false, route = [], removeMarker }) => {
  const pinImages = [pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9];

  return (
    <Wrapper>
      {route.map((el, idx) => {
        var isLast = false;
        if (idx == route.length - 1) {
          isLast = true;
        }
        return (
          <Route>
            <div className="left">
              <img className="pin" src={pinImages[idx]} />
              <div className="address">{el.address}</div>
            </div>

            {isDeletable && (
              <div onClick={() => removeMarker(idx)}>
                <img src={xgrey} className="delete" />
              </div>
            )}
            {!isLast && <Line />}
          </Route>
        );
      })}
    </Wrapper>
  );
};

export default Routes;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Route = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
  position: relative;

  .left {
    width: calc(100% - 24px);
    display: flex;
    gap: 4px;
    align-items: center;

    .address {
      width: calc(100% - 64px);
      overflow: hidden;
      color: var(--black);
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 16px;
      font-weight: 600;
    }
  }

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
