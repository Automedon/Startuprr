import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  padding: 5% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: #cccccc;
`;
const Section17 = () => {
  return (
    <Wrapper>
      <div>
        Copyright <i className="fa fa-copyright" aria-hidden="true" /> 2020
        Automedon, All Rights Reserved
      </div>
    </Wrapper>
  );
};

export default Section17;
