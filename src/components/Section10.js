import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import leftShapes from "../img/left-shapes.png";
import rightShapes from "../img/right-shapes.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 10% 20%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  div.text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    div.Lines {
      display: flex;
      align-items: center;
      width: 90%;
      @media (max-width: 700px) {
        img {
          display: none;
        }
      }
      p {
        span {
          color: #1ca399;
        }
        height: 32px;
        font-weight: bold;
        font-size: 22px;
        margin: 0;
        white-space: nowrap;
        padding: 0 5%;
        @media (max-width: 700px) {
          padding: 0;
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
    div.buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: stretch;
    }
  }

  h3 {
    text-align: center;
    color: #8a8a8a;
  }
  div.slideWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    div.oneSlide {
      display: flex;
      flex-direction: column;
      min-width: 200px;
      text-align: center;
      border: 1px solid darkgray;
      border-radius: 5px;
      margin: 1%;
    }
    div.name {
      position: relative;
      top: -15px;
    }
    div.email {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #00a99d;
      }
      i {
        margin-right: 3%;
      }
    }
    div.phone {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #00a99d;
      }
      i {
        margin-right: 3%;
      }
    }
  }
`;

const Photo = styled.div`
  background-color: ${({ props }) => props.backgroundColor};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  height: 140px;
  font-family: "Raleway", sans-serif;
  div.icons {
    min-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div.icon {
      border: 1px solid white;
      width: 25px;
      height: 25px;
      border-radius: 5%;
      background-color: white;
      transform: rotate(45deg);
      i {
        transform: rotate(-45deg);
        color: #00a99d;
      }
    }
    div.icon:hover {
      background-color: black;
      border-color: black;
      cursor: pointer;
      i {
        color: white;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  background-color: black;
  border-color: black;
  i {
    color: white;
    transform: scale(1.5);
  }
  &:hover {
    background-color: #00a99d;
    border-color: #00a99d;
  }
  &:focus {
    background-color: #00a99d;
    border-color: #00a99d;
  }
`;
const StyledButtonName = styled(Button)`
  color: white;
  background-color: #00a99d;
  border-color: #00a99d;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 13px;
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

export const sliderContent = [
  {
    backgroundColor: "#8a8a8a",
    name: "ALEX SIMPSON",
    role: "CEO & Developer",
    email: "a.simpson@unique.com",
    phone: "+1 911 (77) 222-1111",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    socialIcons: [
      { icon: "fa fa-facebook" },
      { icon: "fa fa-twitter" },
      { icon: "fa fa-google-plus" }
    ]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "STEVEN COLE",
    role: "User Interface Designer",
    email: "s.cole@unique.com",
    phone: "+1 911 (77) 222-1111",
    quote: "“Be yourself; everyone else is already taken.”",
    socialIcons: [
      { icon: "fa fa-facebook" },
      { icon: "fa fa-twitter" },
      { icon: "fa fa-google-plus" },
      { icon: "fa fa-vimeo" },
      { icon: "fa fa-dribbble" }
    ]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "FRANK PIENER",
    role: "Sales Manager",
    email: "f.piener@unique.com",
    phone: "+1 911 (77) 222-1111",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    socialIcons: [
      { icon: "fa fa-google-plus" },
      { icon: "fa fa-vimeo" },
      { icon: "fa fa-dribbble" }
    ]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "ASHLEY LENNON",
    role: "IT Specialist",
    email: "a.lennon@unique.com",
    phone: "+1 911 (77) 222-1111",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    socialIcons: [
      { icon: "fa fa-facebook" },

      { icon: "fa fa-vimeo" },
      { icon: "fa fa-dribbble" }
    ]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "Furfur",
    role: "Great Earl",
    email: "furfur@unique.com",
    phone: "+1 911 (77) 666-1111",
    quote:
      "“If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world.”",
    socialIcons: [{ icon: "fa fa-facebook" }, { icon: "fa fa-dribbble" }]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "Valefar",
    role: "Duke",
    email: "valefar@unique.com",
    phone: "+1 911 (77) 666-1111",
    quote:
      "“Everyone has a thousand wishes before a tragedy, but just one afterward.”",
    socialIcons: [{ icon: "fa fa-facebook" }, { icon: "fa fa-twitter" }]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "Barbas",
    role: "Great President of governing",
    email: "barbas@unique.com",
    phone: "+1 911 (77) 666-1111",
    quote:
      "“All God does is watch us and kill us when we get boring. We must never, ever be boring.” ",
    socialIcons: [
      { icon: "fa fa-google-plus" },
      { icon: "fa fa-vimeo" },
      { icon: "fa fa-dribbble" }
    ]
  },
  {
    backgroundColor: "#8a8a8a",
    name: "Abaddon",
    role: "King of an army of locusts",
    email: "abaddon@unique.com",
    phone: "+1 911 (77) 666-1111",
    quote: "“Reality exists in the human mind, and nowhere else.”",
    socialIcons: [{ icon: "fa fa-vimeo" }, { icon: "fa fa-dribbble" }]
  }
];

const RenderSlider = ({ content }) => {
  return (
    <div className="slideWrapper">
      {content.map(
        ({ backgroundColor, name, role, email, phone, socialIcons }) => (
          <div className="oneSlide" key={name + role + email}>
            <Photo props={{ backgroundColor }}>
              {socialIcons && (
                <div className="icons">
                  {socialIcons.map(({ icon }) => (
                    <div className="icon" key={name + role + email + icon}>
                      <i className={icon} aria-hidden="true" />
                    </div>
                  ))}
                </div>
              )}
            </Photo>
            <div className="name">
              <StyledButtonName>{name}</StyledButtonName>
            </div>
            <div className="role">{role}</div>
            <div className="email">
              <i className="fa fa-envelope" aria-hidden="true" />
              {email}
            </div>
            <div className="phone">
              <i className="fa fa-phone" aria-hidden="true" />
              {phone}
            </div>
          </div>
        )
      )}
    </div>
  );
};

const Section10 = () => {
  const sizeOfSlider = 4;
  const [slideContent] = useState(sliderContent);
  const [slide, setSlide] = useState([0, sizeOfSlider]);

  let content = slideContent.slice(slide[0], slide[1]);
  const lengthOfSlider = slideContent.length;
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
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timer = setInterval(() => setWidth(window.innerWidth), 500);

    return () => clearInterval(timer);
  }, [width]);
  const notBetterWayButWorks =
    width >= 700 ? (
      <>
        <StyledButton onClick={leftSlide}>
          <i className="fa fa-caret-left" aria-hidden="true" />
        </StyledButton>
        <div className="Lines">
          <img src={leftShapes} alt="leftShapes" />{" "}
          <p>
            {" "}
            <span>TEAM</span> MEMBERS{" "}
          </p>
          <img src={rightShapes} alt="rightShapes" />
        </div>
        <div className="right">
          <StyledButton onClick={rightSlide}>
            <i className="fa fa-caret-right" aria-hidden="true" />
          </StyledButton>
        </div>
      </>
    ) : (
      <>
        <div className="Lines">
          <p>
            {" "}
            <span>TEAM</span> MEMBERS{" "}
          </p>
        </div>

        <div className="buttons">
          <StyledButton onClick={leftSlide}>
            <i className="fa fa-caret-left" aria-hidden="true" />
          </StyledButton>
          <StyledButton onClick={rightSlide}>
            <i className="fa fa-caret-right" aria-hidden="true" />
          </StyledButton>
        </div>
      </>
    );
  return (
    <Wrapper>
      <div className="text">{notBetterWayButWorks}</div>
      <h3>
        We’re some creative people with powerful knowledge & awesome skills
        behind the scene bringing you the bests
      </h3>

      <RenderSlider content={content} />
    </Wrapper>
  );
};

export default Section10;
