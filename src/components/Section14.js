import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.section`
  width: 100%;
  padding: 5% 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #8a8a8a;
  font-family: "Raleway", sans-serif;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    i {
      color: #00a99d;
    }
  }
`;
const StyledButton = styled(Button)`
  background-color: #00a99d;
  border-color: #00a99d;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
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

const Section14 = () => {
  return (
    <Wrapper>
      <p>
        UNIQUE! We do <i className="fa fa-heart" aria-hidden="true" /> It And
        Hope You Too
      </p>
      <StyledButton>
        PURCHASE IT NOW <i className="fa fa-shopping-cart" aria-hidden="true" />
      </StyledButton>
    </Wrapper>
  );
};

export default Section14;
