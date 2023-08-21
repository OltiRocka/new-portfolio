import React from "react";
import { styled } from "styled-components";
import EmailForm from "../components/EmailForm";
import { forwardRef } from "react";

const Handler = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  align-items: center;
  margin: 12px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 112px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  margin-bottom: 120px;
  margin-top:60px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: auto;
  justify-content: space-between;
`;

const DescText = styled.p`
  height: auto;
  width: 40%;
  color: #abb2bf;
  text-align: left;
  display: flex;
  align-items: center;
  padding-bottom: 50px;
`;

export default function Contacts() {
  return (
    <Container>
      <Handler>
        <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
        <span style={{ color: "white", fontSize: "32px" }}>contacts</span>
        <div
          style={{
            width: "120px",
            marginLeft: "16px",
            height: "0",
            border: "1px solid #C778DD",
          }}
        />
      </Handler>
      <Content>
        <DescText>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me.
        </DescText>
        <EmailForm />
      </Content>
    </Container>
  );
}
