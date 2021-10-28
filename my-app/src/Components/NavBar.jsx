import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function NavBar() {
  let history = useHistory();

  const gotoSignIn = () => {
    history.push("/sign");
  };
  const gotoHome = () => {
    history.push("/");
  };

  return (
    <Root>
      <Logo>
        <h1 onClick={gotoHome}>Natori</h1>
      </Logo>

      <NavContent>
        <span>SHOP</span>
        <span>CONTACT</span>
        <span onClick={gotoSignIn}>SIGN IN</span>
        <AiOutlineShoppingCart />
      </NavContent>
    </Root>
  );
}

export default NavBar;

const Root = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Logo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & h1 {
    font-family: "Parisienne", cursive;
    color: #ff5e00;
    cursor: pointer;
  }
`;

const NavContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & span {
    cursor: pointer;
    letter-spacing: 1px;
  }
  & svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
