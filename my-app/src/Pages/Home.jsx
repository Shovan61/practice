import React from "react";
import styled from "styled-components";
import showcaseData from "../directory.data";
import { ShowcaseItem } from "../Components";

function Home() {
  return (
    <Wrapper>
      <Showcase>
        {showcaseData.map((cur) => (
          <ShowcaseItem key={cur.id} {...cur} />
        ))}
      </Showcase>
    </Wrapper>
  );
}

export default Home;

// Styles

const Wrapper = styled.div`
  width: 100%;
  min-height: 92vh;
`;
const Showcase = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
