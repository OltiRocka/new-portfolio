import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects'
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#282C33", height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Home style={{ height: '100vh' }} />
      <Projects style={{ height: '100vh' }} />
    </div>
  );
}

export default App;
