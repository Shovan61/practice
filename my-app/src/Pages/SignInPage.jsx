import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Custom Components/Button";
import { useAuthContext } from "../Context/Context";
import { useHistory } from "react-router-dom";

function SignInPage() {
  const { googleSignIn, currentUser, registerUser, login } = useAuthContext();
  let history = useHistory();

  const [signInState, setsignInState] = useState({
    email: "",
    password: "",
  });

  const [signUpState, setsignUpState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [isDisabled, setisDisabled] = useState(false);
  const [showMatched, setshowMatched] = useState(false);

  useEffect(() => {
    if (
      signUpState.password !== "" &&
      signUpState.password !== signUpState.confirmPass
    ) {
      setisDisabled(true);
      setshowMatched(false);
    } else if (
      signUpState.password !== "" &&
      signUpState.password === signUpState.confirmPass
    ) {
      setisDisabled(false);
      setshowMatched(true);
    }
  }, [signUpState.confirmPass, signUpState.password]);

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

  const onSignUpSubmit = (e) => {
    e.preventDefault();

    const values = {
      name: signUpState.name,
      email: signUpState.email,
      password: signUpState.password,
    };
    registerUser(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
    setsignUpState((prev) => {
      return {
        ...prev,
        name: "",
        email: "",
        password: "",
        confirmPass: "",
      };
    });
    setshowMatched(false);
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();

    const values = {
      name: signInState.name,
      email: signInState.email,
      password: signInState.password,
    };
    login(values)
      .then((res) => {
        // console.log(res);
        history.push("/");
        setsignInState((prev) => {
          return {
            ...prev,
            email: "",
            password: "",
          };
        });
      })
      .catch((err) => alert(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((user) => {
        // console.log(res);
        history.push("/");
      })
      .catch((err) => alert(err));
  };

  // console.log(signInState);
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
          onSubmit={(e) => onSignInSubmit(e)}
        >
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

          <button
            style={{ marginTop: "6rem" }}
            className="button"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <button
          style={{ marginTop: "4rem", backgroundColor: "#4774fc" }}
          className="button"
          onClick={handleGoogleSignIn}
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
          onSubmit={onSignUpSubmit}
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
          {signUpState.password !== "" && isDisabled === true ? (
            <span style={{ color: "red" }}>Password doesn't match</span>
          ) : null}
          {showMatched ? (
            <span style={{ color: "green" }}>Password matched</span>
          ) : null}

          <button
            disabled={!showMatched}
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
