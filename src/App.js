import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { Results1, Results2, Results3, Results4 } from "./Scrolls";
import { useRef } from "react";

function App() {
  const resultRef1 = useRef(null);
  const resultRef2 = useRef(null);
  const resultRef3 = useRef(null);
  const resultRef4 = useRef(null);

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
      <Results4 ref={resultRef4} />
      <Home style={{ height: "100vh" }} refs={[resultRef1, resultRef2, resultRef3, resultRef4]}/>
      <Results1 ref={resultRef1} />
      <Projects />
      <Skills />
      <Results2 ref={resultRef2} />
      <AboutMe />
      <Results3 ref={resultRef3} />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
