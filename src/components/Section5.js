import React from "react";
import styled from "styled-components";
import arrow from "../img/first-bg.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 10% 20%;
  height: border-box;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  div.gridWrapper {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 900px) {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }

    grid-gap: 4%;

    div.grid {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      padding-top: 3%;
      div.icon {
        margin-right: 20px;
        height: 70px;
        min-width: 40px;
        background: url(${arrow}) no-repeat center center/cover;
        display: flex;
        justify-content: center;
        padding-top: 25px;
        color: white;
        i {
          transform: scale(1.5);
        }
      }
      div.text {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        h1 {
          text-transform: uppercase;
          margin: 0;
          line-height: 1;
          font-size: 14px;
          font-weight: bold;
          color: #606060;
        }
        h3 {
          margin: 5% 0;
          font-size: 12px;
          color: #bababa;
        }
        p {
          margin: 0;
          font-size: 14px;
          color: #939393;
        }
      }
    }
    div.suitcase {
    }
  }
`;
const grid = [
  {
    icon: "fa fa-desktop",
    h1: "responsive & multipurpose",
    h3: "Desktops, Tablets & Phones",
    p: "Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc ve"
  },
  {
    icon: "fa fa-puzzle-piece ",
    h1: "easy customization",
    h3: "One Click Demo Content Installation",
    p: "Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc ve"
  },
  {
    icon: "fa fa-star",
    h1: "unlimited features",
    h3: "Shortcodes, Typography & Different Layouts",
    p: ""
  },
  {
    icon: "fa fa-code",
    h1: "clean & modular coding",
    h3: "100% Clean, Valid & Well-Commented Coding",
    p: "Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc ve"
  },
  {
    icon: "fa fa-shopping-cart",
    h1: "the best e-commerce solutions",
    h3: "WooCommerce Fully Integration",
    p: "Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc ve"
  },
  {
    icon: "fa fa-life-ring",
    h1: "awesome friendly support",
    h3: "Free Lifetime Support & Updates",
    p: "Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc ve"
  }
];
const renderGrid = grid.map(({ icon, h1, h3, p }) => {
  return (
    <div className="grid" key={icon + h1 + h3}>
      <div className="icon">
        <i className={icon} />
      </div>
      <div className="text">
        <h1>{h1}</h1>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
});
const Section5 = () => {
  return (
    <Wrapper>
      <div className="gridWrapper">{renderGrid}</div>
    </Wrapper>
  );
};

export default Section5;
