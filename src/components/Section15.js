import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Button } from "antd";
const Wrapper = styled.div`
  width: 100%;
  padding: 5% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #383838;
  font-family: "Raleway", sans-serif;
  div.wrapperIcons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 700px) {
      flex-wrap: wrap;
    }
  }
`;

const icons = [
  "fa fa-facebook",
  "fa fa-twitter",
  "fa fa-pinterest",
  "fa fa-rss",
  "fa fa-vimeo",
  "fa fa-youtube-play",
  "fa fa-linkedin",
  "fa fa-dribbble",
  "fa fa-deviantart",
  "fa fa-angellist",
  "fa fa-stumbleupon"
];
const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: #00a99d;
  border-color: #00a99d;
  border-radius: 4px;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  padding: 0;
  margin-right: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  i {
    color: white;
    padding: 0 5px;
    transform: scale(1.2);
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
const renderIcons = (
  <div className="wrapperIcons">
    {icons.map(icon => (
      <StyledButton key={icon + Math.random()}>
        <i className={icon} aria-hidden="true" />
      </StyledButton>
    ))}
  </div>
);

const Section15 = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      {renderIcons}
    </Wrapper>
  );
};

export default Section15;
