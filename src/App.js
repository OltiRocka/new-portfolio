import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
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
      <Home style={{ height: "100vh" }} />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}

export default App;
