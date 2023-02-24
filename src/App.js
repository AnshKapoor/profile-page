import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'
import Projects from './components/Projects'
import WorkEx from './components/WorkEx';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact'
import ParticlesApp from './components/Particles';
import './fonts/RougeScript-Regular.ttf'
function App() {
  return (
    <div className="App">
      <ParticlesApp />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <WorkEx />
      <Hobbies />
      <Contact />
    </div>
  );
}
export default App;
