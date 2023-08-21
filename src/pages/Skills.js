import React from "react";
import { styled } from "styled-components";
import SkillBox from "../components/SkillBox";
import { ReactComponent as Dots } from "../files/Dots.svg";
import { ReactComponent as Logo } from "../files/BackgroundLogo.svg";

const Handler = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  align-items: center;
  margin: 12px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: auto;
  justify-content: space-between;
`;

const Figures = styled.div`
  width: 35%;
  position: relative;
  height: inherit;
`;

const SkillSets = styled.div`
  width: 60%;
  height: auto;
  padding-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default function Skills() {
  return (
    <div>
      <Container>
        <Handler>
          <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
          <span style={{ color: "white", fontSize: "32px" }}>skills</span>
          <div
            style={{
              width: "220px",
              marginLeft: "16px",
              height: "0",
              border: "1px solid #C778DD",
            }}
          />
        </Handler>
        <Content>
          <Figures>
            <Dots
              style={{
                position: "absolute",
                marginTop: "10%",
                marginLeft: "-30%",
                width: "63px",
                height: "63px",
              }}
            />
            <div
              style={{
                position: "absolute",
                marginTop: "0",
                marginLeft: "70%",
                width: "86px",
                height: "86px",
                border: "1px solid #ABB2BF",
              }}
            />
            <Logo
              style={{
                position: "absolute",
                marginTop: "45%",
                marginLeft: "-40%",
                width: "113px",
                height: "113px",
              }}
            />
            <Dots
              style={{
                position: "absolute",
                marginTop: "40%",
                marginLeft: "10%",
                width: "63px",
                height: "63px",
              }}
            />
            <div
              style={{
                position: "absolute",
                marginTop: "50%",
                marginLeft: "90%",
                width: "52px",
                height: "52px",
                border: "1px solid #ABB2BF",
              }}
            />
          </Figures>
          <SkillSets>
            <SkillBox type="Languages" skills="Python Ruby Rust JavaScript" />
            <div>
              <SkillBox type="Databases" skills="SQLite PostgreSQL MongoDB" />
              <SkillBox type="Other" skills="HTML CSS EJS SCSS REST" />
            </div>
            <div>
              <SkillBox
                type="Tools"
                skills="VSCode Neovim Linux FFmpeg Git Some Other Cool Shit"
              />

              <SkillBox
                type="Frameworks"
                skills="TensorFlow PyTorch Node.js FastAPI Django"
              />
            </div>
          </SkillSets>
        </Content>
      </Container>
    </div>
  );
}
