import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow: hidden;
  z-index: 3;
  color: ${(props) => props.theme.white};
`;

export const Logo = styled.div`
  width: 80px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    text-decoration: none;

    &:after {
      content: "";
      height: 2px;
      background: ${(props) => props.theme.white};
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform-origin: left center;
    }
  }
  img {
    height: 20px;
    z-index: auto;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
