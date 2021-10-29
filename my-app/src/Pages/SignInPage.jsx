import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Custom Components/Input";

function SignInPage() {
  const [signInState, setsignInState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUpState, setsignUpState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = () => {};

  return (
    <Root>
      <SignIn>
        <Input
          props={{
            width: 40,
            lebel: "Name",
            value: signInState.name,
            type: "text",
          }}
        />
      </SignIn>
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
  padding: 0 2rem;
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
