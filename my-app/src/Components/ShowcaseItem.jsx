import React from "react";
import styled from "styled-components";

function ShowcaseItem({ title, id, halfWidth, imageUrl }) {
  return (
    <Root style={{ height: halfWidth ? "56vh" : "34vh" }}>
      <Image imageUrl={imageUrl}></Image>
      <Content>
        <h2>{title.toUpperCase()}</h2>
        <span>SHOP NOW</span>
      </Content>
    </Root>
  );
}

export default ShowcaseItem;

// Styles
const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  transition: all 5s ease-out;
`;
const Content = styled.div`
  padding: 1rem;
  height: 25%;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h2 {
    font-weight: 400;
  }
`;

const Root = styled.div`
  border: 1px solid black;
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 5px 7.5px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  &:hover ${Image} {
    transform: scale(1.2);
  }
`;
