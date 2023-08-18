import React from 'react'
import styled from 'styled-components';
import { ReactComponent as RokaLogo } from '../files/Logo.svg';
const HeaderLink = styled.a`
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  
  .hash {
    color: #C778DD;
  }

  .text {
    color: #ABB2BF;
    transition: color 0.2s ease-in-out;

  }

  &:hover {
    .text {
      color: white;
    }
  }

`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%; 
  position: relative;  
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height:61px;
  justify-content: flex-start;
  align-items: center;

`;
const ListContainer = styled.div`
  > *:not(:last-child) {
    margin-right: 32px;
  }
    display:flex;
    flex-direction:row;
    align-self:flex-end;
    flex: 0 0 auto;
    margin-left: auto;
`;


const LogoContainer = styled.a`
    width: 100px;
    height: 40px;
    color: white;
    display:flex;
    flex-direction:row;
    flex: 0 0 auto;
    align-self:flex-end;
    align-items:center;
    text-decoration: none;
    justify-content:flex-start;
`;

const StyledH2 = ({ children, href }) => {
  return (
    <HeaderLink href={href}>
      <span className="hash">#</span>
      <span className="text">{children}</span>
    </HeaderLink>
  );
}

function Navigation() {
  return (
    <Container>
      <NavBar>
        <LogoContainer href="https://roka.dev">
          <RokaLogo style={{
            marginRight: "8px",
            height: "16px",
            width: "16px"
          }} />
          <h2 style={{ fontSize: "16px" }}>
            Roka
          </h2>
        </LogoContainer>
        <ListContainer >
          <StyledH2 href="https://roka.dev">home</StyledH2>
          <StyledH2 href="https://roka.dev">projects</StyledH2>
          <StyledH2 href="https://roka.dev">about-me</StyledH2>
          <StyledH2 href="https://roka.dev">contacts</StyledH2>
        </ListContainer>
      </NavBar>
    </Container>
  )
}

export default Navigation