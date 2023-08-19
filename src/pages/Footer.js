import React from "react";
import { styled } from "styled-components";
import { ReactComponent as RokaLogo } from "../files/Logo.svg";
import { ReactComponent as Instagram } from "../files/Instagram.svg";
import { ReactComponent as LinkedIn } from "../files/Linkedin.svg";
import { ReactComponent as GitHub } from "../files/Github.svg";

const Container = styled.div`
  height: auto;
  width: 100%;
  border-top: 1px solid #abb2bf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyData = styled.div`
  height: auto;
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:div{
    flex:1;
  }
`;

const MediaContainer = styled.div`
  height: auto;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 15px;
  text-align: left;
`;

const Trademark = styled.p`
  font-size: 16px;
  color: #abb2bf;
  margin-bottom: 50px;
`;

const LogoContainer = styled.a`
  width: 100px;
  height: 40px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const Socials = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top:0;
`;

export default function Footer() {
  return (
    <Container>
      <MyData>
        <MediaContainer>
          <LogoContainer href="https://roka.dev" style={{marginBottom:'0'}}>
            <RokaLogo
              style={{
                marginRight: "8px",
                height: "16px",
                width: "16px",
              }}
            />
            <h2 style={{ fontSize: "16px" }}>Roka</h2>
          </LogoContainer>
          <p style={{ color: "white", fontSize: "16px", marginTop:'0' }}>
            Data Scientist<br/> and Back-end Developer
          </p>
        </MediaContainer>
        <MediaContainer>
          <p style={{ color: "white", fontSize: "24px", marginBottom:'0' }}>Media</p>
          <Socials>
            <a href="">
              <GitHub />
            </a>
            <a href="">
              <LinkedIn />
            </a>
            <a href="">
              <Instagram />
            </a>
          </Socials>
        </MediaContainer>
      </MyData>
      <Trademark>© All Rights Reserved 2023</Trademark>
    </Container>
  );
}
