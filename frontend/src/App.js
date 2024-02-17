import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gallery from './Views/Gallery';
import Home from './Views/Home';
import { Route, Routes, Navigate , useLocation} from 'react-router-dom';
import Services from './Views/Services';
import Contact from "./Views/Contact";
import {Fade , Slide , } from "react-awesome-reveal";
import FloatBtn from './Components/FloatBtn';
import SocialTree from './Views/ReviewPage';


function App() {
  const checkTree = useLocation().pathname.includes('/Review');
  return (
    !checkTree?(
        <Fade delay={100}>
          <main className=' font-lato'>
            <Navbar />
            <Routes>
              <Route path = '/' element = {<Home />} />
              <Route path = '/Services' element = {<Services />} />
              <Route path = '/Gallery' element = {<Gallery />} />
              <Route path = '/Contact' element = {<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
            <FloatBtn />
          </main>
        </Fade>
    ) : (
      <Routes>
        <Route path = '/Review' element = {<SocialTree />} />
      </Routes>
    )
  );
};

export default App;
