import React from "react";
import { styled } from "styled-components";
import Navigation from "../components/Navigation";
import SocialHanger from "../components/SocialHanger";
import MainHome from "../components/MainHome";
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Fira Code", monospace;
  justify-content: space-between;
  overflow-x: hidden;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Home() {
  return (
    <MainContainer>
      <SocialHanger />
      <HomeContainer>
        <Navigation />
        <div style={{ height: "62px" }}></div>
        <MainHome />
      </HomeContainer>
      <SocialHanger fake={true} />
    </MainContainer>
  );
}
