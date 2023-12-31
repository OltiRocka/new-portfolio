import "../App.css";
import AboutMe from "../page-sections/AboutMe";
import Contacts from "../page-sections/Contacts";
import Footer from "../page-sections/Footer";
import Home from "../page-sections/Home";
import Projects from "../page-sections/Projects";
import Skills from "../page-sections/Skills";
import { Results1, Results2, Results3, Results4, Results5 } from "../Scrolls";
import { useRef } from "react";

function HomePage() {
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
        style={{ height: "100vh", innerWidth: '100vw' }}
        refs={[resultRef1, resultRef2, resultRef3, resultRef4, resultRef5]}
      />
      <Results2 ref={resultRef2} />
      <Projects style={{ innerWidth: '100vw' }} />
      <Results3 ref={resultRef3} />
      <Skills style={{ innerWidth: '100vw' }} />
      <Results4 ref={resultRef4} />
      <AboutMe style={{ innerWidth: '100vw' }} />
      <Results5 ref={resultRef5} />
      <Contacts style={{ innerWidth: '100vw' }} />
      <Footer style={{ innerWidth: '100vw' }} />
    </div>
  );
}

export default HomePage;
