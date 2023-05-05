import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 5.6vw;
  position: relative;
  background: url("https://cnbl-cdn.bamgrid.com/assets/1df670c6d3924735911b194f57770d10857a333185b5515efe882a7efe48285a/original");
`;

export const Content = styled.div`
  color: white;
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: flex-start;
  @media (max-width: 650px) {
    width: 100%;
    align-items: center;
  }
`;

export const Logo = styled.div``;

export const LogoImage = styled.img`
  width: 50%;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  text-align: left;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: left;
  line-height: 1.5;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginGroupInput = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.darkGrey};
  border: 1px solid ${(props) => props.theme.darkGrey};
  border-radius: 0px;
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 18px;
  flex: 0.7;

  :focus {
    outline: none;
  }
  @media (max-width: 650px) {
    border-radius: 4px;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.brightBlue};
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: all 250ms;
  border-radius: 0px;
  flex: 0.3;

  &:hover {
    background-color: #0483ee;
  }
  @media (max-width: 650px) {
    border-radius: 4px;
  }
`;
