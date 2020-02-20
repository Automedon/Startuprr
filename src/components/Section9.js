import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.section`
  width: 100%;
  padding: 4% 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  background-color: #00a99d;
  @media (max-width: 1000px) {
    flex-direction: column;

    align-items: stretch;
  }
  div.text {
    color: #e4e4e4;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      padding-bottom: 3%;
    }
  }
  div.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 700px) {
      flex-wrap: wrap;
      button {
        margin-bottom: 3%;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: white;
  border-color: white;
  border-radius: 4px;
  color: black;
  font-family: "Raleway", sans-serif;
  font-weight: bold;

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

const Section9 = () => {
  return (
    <Wrapper>
      <div className="text">
        are you satisfied with unlimited features that we offer?
      </div>
      <div className="buttons">
        <StyledButton>PURCHASE IT NOW</StyledButton>
        <StyledButton>CONTACT US NOW</StyledButton>
      </div>
    </Wrapper>
  );
};

export default Section9;
