import React, { useState } from "react";
import styled from "styled-components";
import { Button, message } from "antd";
import { Input } from "antd";
import map from "../img/map.png";
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 20%;
  background: url(${map}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  @media (max-width: 700px) {
    padding: 20% 5%;
  }
  div.replayFormWrapper {
    width: 370px;
    background-color: #f9f9f9;
    border-radius: 4px;
    padding: 2%;
    @media (max-width: 700px) {
      width: 100%;
    }
    * {
      margin-top: 2%;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: #00a99d;
  border-color: #00a99d;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  padding: 0;
  width: 100%;
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
    background-color: #00a99d;
    border-color: #00a99d;
    color: white;
  }
`;

const ArrowUp = styled.div`
  background-color: #00a99d;
  height: 27px;
  width: 27px;
  margin: 0 auto;
  transform: rotate(45deg) translateX(650%) translateY(660%);
  border-radius: 4px;
  color: white;
  position: absolute;
  left: 50%;
  a {
    i {
      transform: rotate(-45deg) scale(0.8);
      position: relative;
      top: 2px;
      left: 6.5px;
      color: white;
    }
  }
`;

const { TextArea } = Input;

const Section15 = () => {
  const [state, setState] = useState({ name: "", email: "", text: "" });
  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const info = () => {
    message.info("Check console");
  };
  const onSubmit = () => {
    info();
    console.log(state);
  };

  return (
    <Wrapper>
      <div className="replayFormWrapper">
        <Input name="name" placeholder="Name" onChange={onChange} />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={onChange}
        />
        <TextArea name="text" rows={5} onChange={onChange} />
        <StyledButton type="submit" onClick={onSubmit}>
          SUBMIT MESSAGE
        </StyledButton>
      </div>
      <ArrowUp>
        <a href="#home">
          <i className="fa fa-arrow-up" aria-hidden="true" />
        </a>
      </ArrowUp>
    </Wrapper>
  );
};

export default Section15;
