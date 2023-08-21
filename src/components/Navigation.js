import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as RokaLogo } from "../files/Logo.svg";
import { Link } from "react-router-dom";

const HeaderLink = styled.a`
  font-size: 16px;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;

  .hash {
    color: #c778dd;
  }

  .text {
    color: #abb2bf;
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
  z-index: 1000;

`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 1024px;
  height: 61px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    width:100vw;
    margin-left:10%;
  }

`;
const ListContainer = styled.div`
  > *:not(:last-child) {
    margin-right: 32px;
  }

  display: flex;
  flex-direction: row;
  align-self: flex-end;
  flex: 0 0 auto;
  margin-left: auto;
  @media (max-width: 767px) {
    display: none;
  }
`;

const LogoContainer = styled(Link)`
  width: 100px;
  height: 40px;
  color: white;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-self: flex-end;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;

  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;
const StyledH2 = ({ children, href, onClick }) => {
  return (
    <HeaderLink href={href} onClick={onClick}>
      <span className="hash">#</span>
      <span className="text">{children}</span>
    </HeaderLink>
  );
};

function Navigation({ refs, links }) {
  const [name, setName] = useState(""); // If you're not using this state, you can remove it
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const logoRef = React.useRef(null); // Create a ref to target the LogoContainer

  const handleScroll = () => {
    if (window.scrollY > 0) {
      logoRef.current.style.opacity = "0"; // Make it invisible with a fade effect
    } else {
      logoRef.current.style.opacity = "1"; // Make it fully visible with a fade effect
    }
  };


  useEffect(() => {
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup - Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = (index) => (e) => {
    e.preventDefault();
    refs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <NavBar>
        <LogoContainer to='/' ref={logoRef}>
          <RokaLogo
            style={{
              marginRight: "8px",
              height: "16px",
              width: "16px",
            }}
          />
          <h2 style={{ fontSize: "16px" }}>Roka</h2>
        </LogoContainer>
        <ListContainer style={links ? { visibility: 'hidden' } : {}} >
          <StyledH2 href="" onClick={onSubmit(0)}>
            home
          </StyledH2>
          <StyledH2 href="" onClick={onSubmit(1)}>
            projects
          </StyledH2>
          <StyledH2 href="" onClick={onSubmit(2)}>
            skills
          </StyledH2>
          <StyledH2 href="" onClick={onSubmit(3)}>
            about-me
          </StyledH2>
          <StyledH2 href="" onClick={onSubmit(4)}>
            contacts
          </StyledH2>
        </ListContainer>
      </NavBar>
    </Container>
  );
}

export default Navigation;
