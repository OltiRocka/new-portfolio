import React from "react";
import { styled } from "styled-components";
import ProjectFormat from "../components/ProjectContainer";
import TestImage from "../files/ImageOlti.png";


const Container = styled.div`
  display: flex;
  margin-top: 64px;
  font-family: "Fira Code", monospace;
  flex-direction: column;
  align-items: center;
  @media (max-width:768px){
    flex-direction:column;
    align-items:center;
    width:100%;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: auto;
  font-family: "Fira Code", monospace;
  justify-content: space-between;
  @media (max-width:768px){
    flex-direction:column;
    align-items:center;
    width:100%;
  }
`;

const Handler = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  align-items: center;
  justify-content: space-between;
  @media (max-width:768px){
    width:90%;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Fira Code", monospace;
  align-items: center;
`;

const Line = styled.div`
  width:510px;
  margin-left:16px;
  height:0;
  border:1px solid #C778DD;
  @media (max-width: 768px){
    width:0%;
  }
`;

export default function Projects() {
  return (
    <Container>
      <Handler>
        <Heading>
          <span style={{ color: "#C778DD", fontSize: "32px" }}>#</span>
          <span style={{ color: "white", fontSize: "32px" }}>projects</span>
          <Line />
        </Heading>
        <a
          href="oltio"
          style={{
            alignSelf: "left",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View all <span style={{ fontSize: "24px" }}>➔</span>
        </a>
      </Handler>
      <ProjectsContainer>
        <ProjectFormat
          src={TestImage}
          tech="Testing random Shit"
          desc="Testing shit out right now heheheheh"
          title="Testing this fkn s"
          url="olti"
          url_where="GitHub"
        />
        <ProjectFormat
          src={TestImage}
          tech="Testing random Shit"
          desc="Testing shit out right now heheheheh"
          title="Testing this fkn s"
          url="olti"
          url_where="GitHub"
        />
        <ProjectFormat
          src={TestImage}
          tech="Testing random Shit"
          desc="Testing shit out right now heheheheh"
          title="Testing this fkn s"
          url="olti"
          url_where="GitHub"
        />
      </ProjectsContainer>
    </Container>
  );
}
