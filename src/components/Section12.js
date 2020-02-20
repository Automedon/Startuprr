import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../img/logos/logo1.png";
import logo2 from "../img/logos/logo2.png";
import logo3 from "../img/logos/logo3.png";
import logo4 from "../img/logos/logo4.png";
import logoExample from "../img/logos/logoExample.png";
import { Button } from "antd";

const Wrapper = styled.section`
  padding: 10% 0;
  background-color: #383838;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div.slideWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 75%;
    @media (max-width: 1400px) {
      flex-wrap: wrap;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: #e4e4e4;
  border-color: #e4e4e4;
  i {
    color: #00a99d;
    transform: scale(1.5);
  }
  &:hover {
    background-color: #00a99d;
    border-color: #00a99d;
    i {
      color: white;
    }
  }
  &:focus {
    background-color: #00a99d;
    border-color: #00a99d;
    i {
      color: white;
    }
  }
`;
const Logo = styled.div`
  background: url(${({ props }) => props.img}) no-repeat center center/cover;
  width: 200px;
  height: 150px;
  background-size: contain;
  margin: 0% 5%;
  &:hover {
    background-color: #00a99d;
    border-radius: 10%;
  }
`;
const RenderLogos = ({ content }) => {
  return (
    <div className="slideWrapper">
      {content.map(({ img }) => (
        <Logo key={Math.random()} props={{ img }} />
      ))}
    </div>
  );
};

const logos = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logoExample },
  { img: logoExample },
  { img: logoExample },
  { img: logoExample }
];

const Section12 = () => {
  const sizeOfSlider = 4;
  const [slide, setSlide] = useState([0, sizeOfSlider]);
  const [slideContent] = useState(logos);

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
      <StyledButton onClick={leftSlide}>
        <i className="fa fa-caret-left" aria-hidden="true" />
      </StyledButton>
      <RenderLogos content={content} />
      <StyledButton onClick={rightSlide}>
        <i className="fa fa-caret-right" aria-hidden="true" />
      </StyledButton>
    </Wrapper>
  );
};

export default Section12;
