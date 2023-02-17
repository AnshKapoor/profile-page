import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'
import Projects from './components/Projects'
import WorkEx from './components/WorkEx';
import './fonts/RougeScript-Regular.ttf'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <WorkEx />
    </div>
  );
}

export default App;
