import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { Results1, Results2, Results3, Results4,Results5 } from "./Scrolls";
import { useRef } from "react";

function App() {
  const resultRef1 = useRef(null);
  const resultRef2 = useRef(null);
  const resultRef3 = useRef(null);
  const resultRef4 = useRef(null);
  const resultRef5 = useRef(null);

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
      <Results1 ref={resultRef1} />
      <Home
        style={{ height: "100vh" }}
        refs={[resultRef1, resultRef2, resultRef3, resultRef4, resultRef5]}
      />
      <Results2 ref={resultRef2} />
      <Projects />
      <Results3 ref={resultRef3} />
      <Skills />
      <Results4 ref={resultRef4} />
      <AboutMe />
      <Results5 ref={resultRef5} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
