import React from "react";
import styled from "styled-components";
import Phones from "../img/mockup1.png";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
const Wrapper = styled.section`
  width: 100%;
  padding: 10% 20%;
  background-color: #383838;
  font-family: "Raleway", sans-serif;
  div.header {
    text-align: center;
    font-weight: bold;
    font-size: 26px;
    div.headerWrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media (max-width: 700px) {
        img {
          display: none;
        }
      }
      span:nth-child(2) {
        margin-left: 2%;
        margin-right: 2%;
        color: white;
        span {
          color: #00a99d;
        }
      }
    }
    h5 {
      font-size: 16px;
      font-weight: bold;
      color: #585858;
    }
  }
  div.items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div.itemsDescription {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (max-width: 900px) {
        width: 100%;
        padding-top: 3%;
      }
      div.description {
        display: flex;
        flex-direction: row;

        div.icon {
          color: #00a99d;
          i {
            margin-top: 10px;
            margin-right: 25px;
          }
        }
        div.text {
          display: flex;
          flex-direction: column;

          h1 {
            font-size: 14px;
            font-weight: bold;
            color: white;
            text-transform: uppercase;
          }
          p {
            font-size: 14px;
            font-weight: 500;
            color: #767676;
          }
        }
      }
    }
    div.phones {
      @media (max-width: 900px) {
        display: none;
      }
      width: 58.33333333333333%;
      position: relative;
      overflow-y: hidden;

      img {
        max-width: 100%;
        position: absolute;
      }
    }
  }
`;

const descr = [
  {
    icon: "fa fa-desktop fa-2x",
    h1: "responsive & multipurpose",
    p: "Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum."
  },
  {
    icon: "fa fa-puzzle-piece fa-2x",
    h1: "easy customization",
    p: "Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum."
  },
  {
    icon: "fa fa-star fa-2x",
    h1: "unlimited features",
    p: "Proin in magna a ipsum viverra scelerisq enec turp, nunc vestibulum."
  }
];

const Section4 = () => {
  const Description = ({ items }) => {
    return (
      <div className="itemsDescription">
        {items.map(({ icon, h1, p }) => {
          return (
            <div className="description" key={icon + h1}>
              <div className="icon">
                <i className={icon} />
              </div>
              <div className="text">
                <h1>{h1}</h1>
                <p>{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <Wrapper>
      <div className="header">
        <div className="headerWrapper">
          <img src={leftShapes} alt="leftShapes" />
          <span>
            AMAZING<span> FEATURES </span>
          </span>

          <img src={rightShapes} alt="rightShapes" />
        </div>

        <h5>With unlimited features that we offer, we promise it’s possible</h5>
      </div>
      <div className="items">
        <Description items={descr} />
        <div className="phones">
          <img src={Phones} alt="Phones" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Section4;
