import { Login, LoginContainer, Logo, Nav } from "@/styles";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import SignedInHeader from "../SignedInHeader";

function Header() {
  const { data: session, status } = useSession();

  const renderHedaer = () => {
    if (true) return <SignedInHeader session={session} />;
    return (
      <LoginContainer>
        <Login
          onClick={async () => {
            await signIn();
          }}
        >
          Login
        </Login>
      </LoginContainer>
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" />
      </Logo>

      {renderHedaer()}
    </Nav>
  );
}

export default Header;
