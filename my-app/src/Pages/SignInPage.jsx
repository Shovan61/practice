import React from "react";
import styled from "styled-components";

function SignInPage() {
  return (
    <Root>
      <SignIn>Sign In</SignIn>
      <SignUp>Sign UP</SignUp>
    </Root>
  );
}

export default SignInPage;

//  Style

const Root = styled.div`
  min-height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SignIn = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUp = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
