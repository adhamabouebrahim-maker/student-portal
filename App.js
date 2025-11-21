import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Grades from './pages/Grades';
import Course from './pages/Course';
import About from './pages/About';
import ContactUs from './pages/Contact Us';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Routes>
        <Route path="/Home" exact Component={Home}/>
        <Route path="/Grades" exact Component={Grades}/>
        <Route path="/Course" exact Component={Course}/>
        <Route path="/ContactUs" exact Component={ContactUs}/>
        <Route path="/About" exact Component={About}/>
        
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
