import './App.css';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navabr';
import TechStack from './components/TechStack/Techstack';

//Portfolio website 
//1.Navbar
//2.Home page
//3.Tech Stack
//4. Projects

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TechStack />
    </div>
  );
}
export default App;
