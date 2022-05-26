import Maryline from './Maryline.jpg';
import './App.css';
import About from './About.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js' 
import Podcast from './Podcast.js'
import Projects from './Projects.js'
import Navbar from './components/Navbar.js';
import ScrollToTop from './ScrollToTop'
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">


     <Router > 
     <ScrollToTop/>  
     <Navbar />
         <Routes>

        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/podcast' element={<Podcast/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
      </Router>
</div> 
     
  );
}

export default App;
