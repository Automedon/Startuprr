import React, { useState } from "react";
import styled, { css } from "styled-components";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
import { ButtonStyled } from "./Section2";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  text-align: center;
  div.Lines {
    display: flex;
    padding: 5% 0;
    align-items: center;
    @media (max-width: 700px) {
      padding-top: 15%;
      img {
        display: none;
      }
    }

    p {
      height: 32px;
      font-weight: bold;
      font-size: 22px;
      margin: 0;
      white-space: nowrap;
      padding: 0 5%;
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
  div.itemsWrapper {
    padding: 1% 0;
    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
    div.items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1%;
      margin-bottom: 10%;

      div {
        padding: 25px;
      }
      h1 {
        padding: 3% 0;
        height: content-box;
        margin: 0;
        text-transform: uppercase;
      }
      p {
        height: content-box;
      }
    }
  }
  div.key {
    background-color: #00a99d;
    height: 27px;
    width: 27px;
    margin: 0 auto;
    transform: rotate(45deg) translateY(35%) translateX(35%);
    border-radius: 10%;
    color: white;
    i {
      transform: rotate(135deg) translateY(-10%) translateX(10%);
      vertical-align: middle;
      horiz-align: center;
    }
  }
`;

const WrapperIcon = styled.div`
  color: white;
  ${props =>
    props.active &&
    css`
      background: #00a99d;
      border-radius: 50%;
    `}
  ${props =>
    !props.active &&
    css`
      background: black;
      border-radius: 50%;
    `}
`;

const Section3 = () => {
  const [items, setItems] = useState([
    {
      icon: "fa fa-desktop fa-3x",
      h1: "responsive & multipurpose",
      p:
        "Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.",
      buttonName: "READ MORE",
      active: false
    },
    {
      icon: "fa fa-puzzle-piece fa-3x",
      h1: "easy customization",
      p:
        "Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.",
      buttonName: "READ MORE",
      active: false
    },
    {
      icon: "fa fa-life-ring fa-3x",
      h1: "awesome friendly support",
      p:
        "Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.",
      buttonName: "READ MORE",
      active: false
    }
  ]);
  const onMouseEnter = (event, buttonName, h1) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.buttonName === buttonName && item.h1 === h1
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };
  const renderItems = (
    <div className="itemsWrapper">
      {items.map(({ icon, h1, p, buttonName, active }) => {
        return (
          <div className="items" key={icon + h1 + p}>
            <WrapperIcon className="icon" active={active ? 1 : undefined}>
              <i className={icon} />
            </WrapperIcon>

            <h1>{h1}</h1>
            <p>{p}</p>
            <ButtonStyled
              key={icon}
              active={active ? 1 : undefined}
              type={active ? "primary" : "outline"}
              onMouseEnter={event => onMouseEnter(event, buttonName, h1)}
            >
              {buttonName}
            </ButtonStyled>
          </div>
        );
      })}
    </div>
  );

  return (
    <Wrapper>
      <div className="Lines">
        <img src={leftShapes} alt="leftShapes" /> <p> WHAT WE OFFER </p>
        <img src={rightShapes} alt="rightShapes" />
      </div>
      <span>
        We offer our customers the best services & solutions, this is our main
        services list
      </span>
      {renderItems}
      <div className="key">
        <i className="fa fa-key" aria-hidden="true" />
      </div>
    </Wrapper>
  );
};

export default Section3;
