import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Custom Components/Button";
import { useAuthContext } from "../Context/Context";

function SignInPage() {
  const { googleSignIn, currentUser, registerUser } = useAuthContext();

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

  const [isPasswordMatched, setisPasswordMatched] = useState(false);
  const [showMatched, setshowMatched] = useState(false);

  useEffect(() => {
    if (
      signUpState.password !== "" &&
      signUpState.password !== signUpState.confirmPass
    ) {
      setisPasswordMatched(true);
    } else if (signUpState.password === signUpState.confirmPass) {
      setisPasswordMatched(false);
      setshowMatched(true);
    }
  }, [signUpState.confirmPass]);

  const handleInputChange = (name, newValue) => {
    setsignInState((prev) => {
      return { ...prev, [name]: newValue };
    });
  };

  const handleSignUpChange = (name, newValue) => {
    setsignUpState((prev) => {
      return { ...prev, [name]: newValue };
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();

    const values = {
      name: signInState.name,
      email: signInState.email,
      password: signInState.password,
    };
    registerUser(values)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
    // console.log(values);
  };

  console.log(showMatched);
  return (
    <Root>
      <Sign>
        <h1>Sign In</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          action=""
        >
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name="name"
            value={signInState.name}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={signInState.email}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={signInState.password}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
          {/* <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-evenly",
            }}
          > */}
          <button style={{ marginTop: "6rem" }} className="button">
            Sign In
          </button>
          {/* </div> */}
        </form>
        <button
          style={{ marginTop: "4rem", backgroundColor: "#4774fc" }}
          className="button"
        >
          Sign In With Google
        </button>
      </Sign>
      <Sign>
        <h1>Sign Up</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          action=""
        >
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name="name"
            value={signUpState.name}
            onChange={(e) => handleSignUpChange(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={signUpState.email}
            onChange={(e) => handleSignUpChange(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={signUpState.password}
            onChange={(e) => handleSignUpChange(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="confirm">Confirm Password: </label>
          <input
            type="password"
            name="confirmPass"
            value={signUpState.confirmPass}
            onChange={(e) => handleSignUpChange(e.target.name, e.target.value)}
            required
          />
          {signUpState.password !== "" && isPasswordMatched === true ? (
            <span style={{ color: "red" }}>Password doesn't match</span>
          ) : null}
          {signUpState.password !== "" && showMatched && (
            <span style={{ color: "green" }}>Password matched</span>
          )}

          <button
            disabled={showMatched}
            style={{ marginTop: "7rem" }}
            className="button"
          >
            Sign Up
          </button>
        </form>
      </Sign>
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

const Sign = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h1 {
    margin-bottom: 2rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  & input {
    width: 50%;
    border: 1px solid #777;
    border-radius: 10px;
    outline: none;
    padding: 1rem;
  }
  & input:focus {
    border: 1px solid #cf7805;
  }
  & label {
    margin-top: 1rem;
    letter-spacing: 2px;
  }
`;
