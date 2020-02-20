import React from "react";
import styled from "styled-components";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
import { Progress } from "antd";

const Wrapper = styled.section`
  background-color: #383838;
  width: 100%;
  padding: 0 20% 10% 20%;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  div.text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 26px;
    text-align: start;
    margin-top: 5%;
    @media (max-width: 700px) {
      img {
        display: none;
      }
    }
    span:nth-child(2) {
      color: white;
      padding: 0 3%;
      text-align: center;
      span {
        color: #00a99d;
      }
    }
  }
  h3 {
    font-size: 16px;
    color: #5d5d5d;
    text-align: center;
    padding-top: 1%;
    padding-bottom: 5%;
  }
  div.circles {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 1440px) {
      flex-wrap: wrap;
    }
    div.circle {
      padding: 0 1%;
      width: 155px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        svg {
          transform: rotate(-90deg);
          text-align: center;
        }

        span {
          color: white !important;
          font-size: 30px;
          font-weight: bold;
          text-align: center;
        }
      }

      h5 {
        color: #646464;
        text-align: center;
        padding-top: 5%;
        font-weight: bold;
        text-transform: uppercase;
        height: content-box;
        font-size: 14px;
      }
    }
  }
`;
const SuitCase = styled.div`
  background-color: #00a99d;
  height: 27px;
  width: 27px;
  margin: 0 auto;
  transform: rotate(45deg);
  border-radius: 4px;
  color: white;
  position: relative;
  top: -13px;
  i {
    transform: rotate(-45deg);
    position: relative;
    top: 2px;
    left: 6px;
  }
`;

const circles = [
  { percent: 75, h5: "web design" },
  { percent: 92, h5: "web development" },
  { percent: 68, h5: "speed optimization" },
  { percent: 100, h5: "customer support" },
  { percent: 83, h5: "marketing" },
  { percent: 50, h5: "advertisement" }
];

const renderCircles = circles.map(({ percent, h5 }) => (
  <div className="circle" key={percent + h5}>
    <Progress
      percent={percent}
      strokeLinecap="square"
      type="circle"
      format={percent => percent + "%"}
      strokeColor={{
        "0%": "#00a99d",
        "100%": "#00a99d"
      }}
    />
    <h5>{h5}</h5>
  </div>
));

const Section6 = () => {
  return (
    <Wrapper>
      <SuitCase>
        <i className="fa fa-suitcase" aria-hidden="true" />
      </SuitCase>
      <div className="text">
        <img src={leftShapes} alt="leftShapes" />
        <span>
          {" "}
          OUR POWERFULL <span> SKILLS </span>{" "}
        </span>

        <img src={rightShapes} alt="rightShapes" />
      </div>
      <h3>We’re good and experienced at different things and areas and we</h3>
      <div className="circles">{renderCircles}</div>
    </Wrapper>
  );
};

export default Section6;
