import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  padding-top: 5%;
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
    padding: 0 0;
    align-items: center;
    @media (max-width: 700px) {
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
      padding: 0 2%;
    }
  }
  div.Lines:after,
  div.Lines:before {
    content: "";
    height: 5px;
    width: 100%;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
  }
  h5 {
    color: #a0a0a0;
    padding-top: 1%;
    padding-bottom: 5%;
  }
`;
const ButtonStyled = styled(Button)`
  font-family: "Raleway", sans-serif;
  margin-top: 5%;
  margin-bottom: 10%;
  font-size: 13px;
  font-weight: bold;
  width: 80%;
  background-color: #00a99d !important;
  color: white !important;
  border-color: #00a99d !important;
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-gap: 1px;
  margin: 0 auto;
`;
const GridWrapper = styled.div`
  background-color: ${({ props }) => props.backgroundColor};
  height: 200px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  div.icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    div.icon {
      height: 25px;
      width: 25px;
      background-color: white;
      transform: rotate(45deg);
      margin-bottom: 55%;
      i {
        transform: rotate(-315deg) translateY(-20%) translateX(35%);
        color: #1ca399;
      }
    }
    div.icon:hover {
      background-color: black;
      i {
        color: white;
      }
    }
  }
  h1 {
    color: white;
    text-align: center;

    font-size: 16px;
    margin: 0;
  }
  h4 {
    color: white;
    text-align: center;
    font-size: 12px;
    margin: 0;
  }
  h5 {
    color: white;
    text-align: center;
    font-size: 12px;
    margin: 0;
  }
`;

const works = [
  { backgroundColor: "#8a8a8a" },
  {
    backgroundColor: "#1ca399",
    content: {
      icon1: "fa fa-link",
      icon2: "fa fa-search",

      h1: "Corporate Brochure",
      h4: "Illustration / Print",
      h5: "138",
      iconh5: "fa fa-heart"
    }
  },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" },
  { backgroundColor: "#8a8a8a" }
];
const Section7 = () => {
  const renderGrid = works.map(({ backgroundColor, content }) => {
    return (
      <GridWrapper
        props={{ backgroundColor: backgroundColor }}
        key={backgroundColor + Math.random()}
      >
        {content && (
          <GridContent>
            <div className="icons">
              <div className="icon">
                <i className={content.icon1} aria-hidden="true" />
              </div>
              <div className="icon">
                <i className={content.icon2} aria-hidden="true" />
              </div>
            </div>
            <h1>{content.h1}</h1>
            <h4>{content.h4}</h4>
            <h5>
              <i className={content.iconh5} /> {content.h5}
            </h5>
          </GridContent>
        )}
      </GridWrapper>
    );
  });
  return (
    <Wrapper>
      <Text>
        <div className="Lines">
          <img src={leftShapes} alt="leftShapes" />
          <p>SAMPLE WORKS</p>
          <img src={rightShapes} alt="rightShapes" />
        </div>
        <h5>
          Let’s take a look at some of the best of our works here, we love them
          and hope you too
        </h5>
      </Text>
      <Grid>{renderGrid}</Grid>
      <ButtonStyled>VIEW ALL WORKS</ButtonStyled>
    </Wrapper>
  );
};

export default Section7;
