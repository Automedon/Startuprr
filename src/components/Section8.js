import React from "react";
import styled from "styled-components";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";

const Wrpapper = styled.section`
  width: 100%;
  padding: 0 20% 10% 20%;
  background-color: #383838;
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
    margin-top: 10%;
    text-align: center;
    @media (max-width: 700px) {
      img {
        display: none;
      }
    }
    span:nth-child(2) {
      color: #e4e4e4;
      padding: 0 3%;
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
  }
  div.contentWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
    div.contentCard {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-width: 140px;
      height: content-box;
      margin: 0 3%;
      div.number {
        display: flex;
        flex-direction: row;
        align-items: center;
        h1 {
          font-size: 80px;
          color: white;
          margin: 0;
        }
        div.square {
          height: 5px;
          width: 5px;
          background-color: #5d5d5d;
          transform: rotate(45deg);
          border-radius: 5%;
        }
      }
      div.icon {
        display: flex;
        width: 100%;
        padding: 0% 0;
        align-items: center;
        i {
          color: #00a99d;
          margin: 0;
          white-space: nowrap;
          padding: 0 2%;
        }
      }
      div.icon:after,
      div.icon:before {
        content: "";
        height: 5px;
        width: 100%;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
      }
    }
    div.contentCard:hover {
      div.number {
        div.square {
          background-color: #00a99d;
        }
      }
    }
    h5 {
      font-size: 14px;
      color: #5d5d5d;
      text-align: center;
      font-weight: bold;
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

const content = [
  { number: "218", icon: "fa fa-check-square", h5: "COMPLETED PROJECTS" },
  {
    number: "360",
    icon: "fa fa-hourglass-half",
    h5: "HOURS OF WORK",
    spanh5: "/month"
  },
  { number: "135", icon: "fa fa-tags", h5: "SOLVED TICKETS" },
  { number: "174", icon: "fa fa-thumbs-up", h5: "SATISFIED CLIENTS" }
];

const renderContent = content.map(({ number, icon, h5, spanh5 }) => (
  <div className="contentCard" key={number + icon + h5}>
    <div className="number">
      <div className="square" />
      <h1>{number}</h1>
      <div className="square" />
    </div>
    <div className="icon">
      <i className={icon} aria-hidden={true} />
    </div>
    <h5>
      {h5}
      {spanh5 && <span>{spanh5}</span>}
    </h5>
  </div>
));

const Section8 = () => {
  return (
    <Wrpapper>
      <SuitCase>
        <i className="fa fa-suitcase" aria-hidden="true" />
      </SuitCase>
      <div className="text">
        <img src={leftShapes} alt="leftShapes" />
        <span>
          {" "}
          COMPANY <span> FACTS </span>{" "}
        </span>

        <img src={rightShapes} alt="rightShapes" />
      </div>
      <h3>
        We do love to work and increase our counter numbers, this is what we’ve
        done till now
      </h3>
      <div className="contentWrapper">{renderContent}</div>
    </Wrpapper>
  );
};

export default Section8;
