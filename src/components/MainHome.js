import React from "react";
import styled from "styled-components";
import { ReactComponent as Dots } from "../files/Dots.svg";
import { ReactComponent as BackgroundLogo } from "../files/BackgroundLogo.svg";
import meImage from "../files/ImageOlti.png";
import { ReactComponent as Quotes } from "../files/Quotes.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 32px;
  display: inline-block;
  text-decoration: none;
  align-items: left;
  font-weight: bold;
  text-align: left;
  text-align: left;
  .hash {
    color: #c778dd;
  }

  .text {
    color: white;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: normal;
  width: 537px;
  height: 227px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 469px;
  height: 423px;
  align-items: center;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 712px;
  height: auto;
`;

const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #c778dd;
  height: 37px;
  width: 128px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(199, 120, 221, 0.2);
  }
`;
const CurrentlyWorking = styled.div`
  width: 402px;
  display: flex;
  flex-direction: row;
  border: 1px solid #abb2bf;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
`;

const Image = styled.div`
  width: inherit;
  height: 386px;
`;
function MainHome() {
  return (
    <Container>
      <MeContainer>
        <InfoContainer>
          <BigText>
            <span className="text">Olti is a </span>
            <span className="hash">Data Scientist </span>
            <span className="text">and </span>
            <span className="hash">Back-end Developer</span>
          </BigText>
          <p style={{ color: "#ABB2BF", textAlign: "left" }}>
            He crafts responsive machine learning solutions where technologies
            meet creativity
          </p>
          <ContactButton href="test">Contact Me</ContactButton>
        </InfoContainer>

        <div style={{ width: "18px" }} />

        <ImageContainer>
          <Image>
            <BackgroundLogo
              style={{
                position: "absolute",
                zIndex: "0",
              }}
            />
            <img
              src={meImage}
              style={{
                zIndex: "1",
                position: "relative",
              }}
            />
            <Dots
              style={{
                position: "absolute",
                zIndex: "3",
                marginLeft: "-5%",
                marginTop: "10%",
              }}
            />
          </Image>

          <CurrentlyWorking>
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "#C778DD",
                margin: "5px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "#ABB2BF",
              }}
            >
              Currently working on&nbsp;
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "white",
              }}
            >
              Portfolio
            </span>
          </CurrentlyWorking>
        </ImageContainer>
      </MeContainer>
      <div style={{ height: "47px" }} />
      <QuoteContainer>
        <div
          style={{
            width: " calc(100% - 66px)",
            fontWeight: "bold",
            color: "white",
            textAlign: "left",
            fontSize: "24px",
            border: "1px solid #ABB2BF",
            padding: "32px",
          }}
        >
          <Quotes
            style={{
              position: "absolute",
              marginTop: "-48px",
              marginLeft: "-24px",
            }}
          />
          If our era is the next Industrial Revolution, as many claim, AI is
          surely one of its driving forces.
        </div>

        <div
          style={{
            alignSelf: "flex-end",
            width: "30%",
            color: "white",
            textAlign: "left",
            fontSize: "24px",
            border: "1px solid #ABB2BF",
            padding: "16px",
          }}
        >
          <Quotes
            style={{
              position: "absolute",
              marginTop: "-32px",
              marginLeft: "181px",
            }}
          />
          -Fei Fei Li
        </div>
      </QuoteContainer>
    </Container>
  );
}

export default MainHome;
