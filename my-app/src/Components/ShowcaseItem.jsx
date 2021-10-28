import React from "react";
import styled from "styled-components";

function ShowcaseItem({ title, id, halfWidth, imageUrl }) {
  return (
    <Root style={{ height: halfWidth ? "56vh" : "34vh" }}>
      <Image imageUrl={imageUrl}></Image>
    </Root>
  );
}

export default ShowcaseItem;

// Styles

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
`;
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
`;
