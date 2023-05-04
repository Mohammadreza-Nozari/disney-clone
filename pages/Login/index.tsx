import React from "react";
import {
  Button,
  Container,
  Content,
  Description,
  Input,
  LoginForm,
  LoginGroupInput,
  LogoImage,
  Title,
} from "./styles";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Container>
        <Content>
          <LogoImage
            src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            alt="Disney Logo"
            loading="lazy"
          />
          <Title>
            <h3>+ More than you'd ever imagine</h3>
          </Title>
          <Description>
            Enter your email to create or restart your subscription.
          </Description>

          <LoginForm>
            <LoginGroupInput>
              <Input type="email" placeholder="Email" />
              <Button>continue</Button>
            </LoginGroupInput>
          </LoginForm>

          <Description>
            Get 12 months for the price of 10 when you sign up for an annual
            Disney+ subscription, compared to paying monthly.
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default Login;
