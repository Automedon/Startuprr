import React from "react";
import styled from "styled-components";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
import { Button } from "antd";

const Wrapper = styled.section`
  width: 100%;
  padding: 5% 20% 5% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f9f9;
  font-family: "Raleway", sans-serif;
  div.Lines {
    display: flex;
    padding: 2% 0;
    align-items: center;
    width: 100%;
    @media (max-width: 700px) {
      padding-top: 15%;
    }
    img {
      @media (max-width: 700px) {
        display: none;
      }
    }
    p {
      height: 26px;
      font-weight: bold;
      font-size: 22px;
      margin: 0;
      white-space: nowrap;
      padding: 0 5%;
      @media (max-width: 700px) {
        padding: 0;
      }
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
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  div.text {
    color: #919191;
    font-size: 16px;
  }
  div.priceWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;

    @media (max-width: 1025px) {
      flex-wrap: wrap;
    }
    div.onePlan {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 10% 2%;
      min-width: 200px;
      border: 1px solid #dedede;
      border-radius: 5%;
      div.planName {
        position: relative;
        padding: 1%;
        color: white;
        font-weight: bold;
        border-radius: 2%;
        background-color: black;
        min-width: content-box;
      }
      div.planName:hover {
        background-color: #00a99d;
      }
      div.priceWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-end;
        border-bottom: 1px solid #ebebeb;

        p {
          color: #919191;
          font-size: 12px;
          margin: 0;
          padding-bottom: 20px;
        }
        div.price {
          font-size: 60px;
          font-weight: bold;
          color: black;
        }
        div.strangePart {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          font-weight: bold;
          min-height: 89px;
          padding-bottom: 25px;
          div.cents {
            padding-bottom: 25px;
          }
          div.square {
            border: 1px solid black;
            width: 7px;
            height: 7px;
            background-color: black;
            transform: rotate(45deg) translateY(-3px) translateX(3px);
            border-radius: 20%;
          }
        }
      }
      div.features {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        padding: 10px 0;
        color: #a0a0a0;
        div.feature {
          padding: 5px 0;
        }
      }
    }
  }
`;

const plans = [
  {
    planName: "STANDARD PLAN",
    price: 19,
    features: [
      "5 Projects",
      "5 GB Storage",
      "Unlimited Users",
      "10 GB Bandwith",
      "Enhanced Security"
    ]
  },
  {
    planName: "PREMIUM PLAN",
    price: 29,
    features: [
      "10 Projects",
      "15 GB Storage",
      "Unlimited Users",
      "20 GB Bandwith",
      "Enhanced Security"
    ]
  },
  {
    planName: "ADVANCED PLAN",
    price: 49,
    features: [
      "15 Projects",
      "30 GB Storage",
      "Unlimited Users",
      "50 GB Bandwith",
      "Enhanced Security"
    ],
    advanced: true
  },
  {
    planName: "ULTIMATE PLAN",
    price: 99,
    features: [
      "Unlimited Projects",
      "Unlimited Storage",
      "Unlimited Users",
      "Unlimited Bandwith",
      "Enhanced Security"
    ]
  }
];

const StyledButton = styled(Button)`
  background-color: #00a99d;
  border-color: #00a99d;
  color: white;
  margin: 15px 0;
  i {
    color: #00a99d;
  }
  &:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
  &:focus {
    background-color: black;
    border-color: black;
    color: white;
  }
`;
const StyledButtonPlan = styled(Button)`
  position: relative;
  top: -15px;
  background-color: black;
  border-color: black;
  color: white;
  i {
    color: #00a99d;
    padding: 0 2px;
  }

  &:hover {
    background-color: #00a99d;
    border-color: #00a99d;
    color: white;
    i {
      color: black;
    }
  }
  &:focus {
    background-color: #00a99d;
    border-color: #00a99d;
    color: white;
    i {
      color: black;
    }
  }
`;

const renderPrices = (
  <div className="priceWrapper">
    {plans.map(({ planName, price, features, advanced }) => {
      return (
        <div className="onePlan" key={planName + price + features}>
          <StyledButtonPlan>
            {advanced && <i className="fa fa-star" aria-hidden="true" />}
            {planName}
            {advanced && <i className="fa fa-star" aria-hidden="true" />}
          </StyledButtonPlan>
          <div className="priceWrapper">
            <p>$</p>
            <div className="price">{price}</div>
            <div className="strangePart">
              <div className="cents">99</div>
              <div className="square" />
            </div>
            <p>Monthly</p>
          </div>
          <div className="features">
            {features.map(item => (
              <div key={item + Math.random()} className="feature">
                {item}
              </div>
            ))}
          </div>
          <StyledButton>SIGN UP NOW</StyledButton>
        </div>
      );
    })}
  </div>
);

const Section13 = () => {
  return (
    <Wrapper>
      <div className="Lines">
        <img src={leftShapes} alt="leftShapes" />{" "}
        <p>
          {" "}
          REAL CHEAP <span>PRICES</span>{" "}
        </p>
        <img src={rightShapes} alt="rightShapes" />
      </div>
      <div className="text">
        We offer all our services in real low prices in comparison with
      </div>
      {renderPrices}
    </Wrapper>
  );
};

export default Section13;
