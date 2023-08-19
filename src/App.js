import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import React, { useRef, useState } from "react";

function App() {
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactsRef = useRef(null);
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#282C33",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Home
        refs={{ projectsRef,
          aboutMeRef,
          contactsRef}}
        style={{ height: "100vh" }}
      />
      <Projects ref={projectsRef} />
      <Skills />
      <AboutMe ref={aboutMeRef} />
      <Contacts ref={contactsRef} />
      <Footer/>
    </div>
  );
}

export default App;
