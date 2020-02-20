import React, { useState } from "react";
import styled from "styled-components";
import { sliderContent as quotes } from "./Section10";
import { Button } from "antd";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #00a99d;
  padding: 0% 20% 5% 20%;
  font-family: "Raleway", sans-serif;
  div.quotes {
  }
  div.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div.slideWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5%;
    div.oneSlide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div.text {
        background-color: #e4e4e4;
        border-radius: 4px;

        padding: 2%;
        display: flex;
        justify-content: center;
        font-size: 13px;
        span {
          color: #00a99d;
          font-weight: bold;
          span {
            color: #bdbdbd;
            font-style: italic;
            font-weight: 500;
          }
        }
      }
      div.quote {
        padding: 5% 0;
        color: #e4e4e4;
        text-align: center;
        font-size: 20px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  & {
    margin: 0 1%;
  }
  background-color: #e4e4e4;
  border-color: #e4e4e4;
  i {
    color: black;
    transform: scale(1.5);
  }
  &:hover {
    background-color: black;
    border-color: black;
    i {
      color: white;
    }
  }
  &:focus {
    background-color: black;
    border-color: black;
    i {
      color: white;
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
    left: 6.5px;
  }
`;

const Quotes = styled(SuitCase)`
  background-color: black;
  i {
    transform: rotate(-45deg) scale(0.6);
  }
`;

const RenderQuotes = ({ content }) => {
  return (
    <div className="slideWrapper">
      {content.map(({ quote, name, role }) => (
        <div className="oneSlide" key={name + role + quote}>
          <div className="text">
            <span>
              {name} -<span> {role}</span>
            </span>
          </div>
          <div className="quote">{quote}</div>
        </div>
      ))}
    </div>
  );
};

const Section11 = () => {
  const sizeOfSlider = 1;
  const [slide, setSlide] = useState([0, sizeOfSlider]);
  const [slideContent] = useState(quotes);

  const lengthOfSlider = slideContent.length;
  let content = slideContent.slice(slide[0], slide[1]);
  const leftSlide = () => {
    if (slide[0] <= 0) {
      setSlide([lengthOfSlider - sizeOfSlider, lengthOfSlider]);

      content = slideContent.slice(slide[0], slide[1]);
    } else {
      setSlide([slide[0] - sizeOfSlider, slide[1] - sizeOfSlider]);

      content = slideContent.slice(slide[0], slide[1]);
    }
  };
  const rightSlide = () => {
    if (slide[1] >= lengthOfSlider) {
      setSlide([0, sizeOfSlider]);
    } else {
      setSlide([slide[0] + sizeOfSlider, slide[1] + sizeOfSlider]);

      content = slideContent.slice(slide[0], slide[1]);
    }
  };
  return (
    <Wrapper>
      <Quotes>
        <i className="fa fa-quote-left" aria-hidden="true" />
      </Quotes>
      <RenderQuotes content={content} />
      <div className="buttons">
        <StyledButton onClick={leftSlide}>
          <i className="fa fa-caret-left" aria-hidden="true" />
        </StyledButton>
        <StyledButton onClick={rightSlide}>
          <i className="fa fa-caret-right" aria-hidden="true" />
        </StyledButton>
      </div>
    </Wrapper>
  );
};

export default Section11;
