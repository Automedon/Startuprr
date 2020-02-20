import React from "react";
import styled from "styled-components";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
import { Icon } from "antd";

const Wrapper = styled.section`
  width: 100%;
  background-color: #8a8a8a;
  padding: 20%;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 700px) {
    padding: 20% 0;
  }
  div.headerWrapper {
    div.header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        margin: 0;
      }
      h1 {
        font-weight: bold;
        font-size: 64px;
        text-transform: uppercase;
        margin-bottom: 0;
        @media (max-width: 700px) {
          font-size: 32px;
        }
      }
      div.Startuprr {
        border-radius: 3%;
        background-color: #333333;
        padding: 3%;
        font-size: 18.23px;
        span:nth-child(1) {
          color: #00a99d;
          font-weight: bold;
          font-size: 17.22px;
        }
        span:nth-child(2) {
          color: white;
          font-weight: bold;
        }
        span:nth-child(3) {
          color: white;
          font-weight: 500;
          text-transform: uppercase;
        }
      }
      div.Lines {
        display: flex;
        align-items: center;
        font-size: 22px;

        p {
          height: 30px;
          font-weight: bold;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          span {
            color: #00a99d;
          }
        }
      }
      div.Lines:after,
      div.Lines:before {
        content: "";
        height: 5px;
        width: 100%;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
      }
      div.Icon {
        text-align: center;
        color: #00a99d;
        padding-top: 5%;

        svg {
          height: 58px;
          width: 58px;
        }
      }
    }
  }
`;

const Section1 = () => {
  return (
    <Wrapper>
      <div className="headerWrapper">
        <div className="header">
          <h2>WHAT ARE YOUR WAITING FOR ?</h2>
          <h1>let’s be creative !</h1>
          <div className="Startuprr">
            <span>S</span>
            <span>tartuprr,</span>
            <span>next generation & highly flexible wordpress theme</span>
          </div>
          <div className="Lines">
            <p>
              <img src={leftShapes} alt="leftShapes" /> <span> START</span>{" "}
              DOING THAT <img src={rightShapes} alt="rightShapes" />
            </p>
          </div>
          <div className="Icon">
            <Icon type="check-circle" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section1;
