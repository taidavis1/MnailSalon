import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gallery from './Views/Gallery';
import Home from './Views/Home';
import { Route, Routes, Navigate} from 'react-router-dom';
import Services from './Views/Services';

function App() {
  return (
    <main className=' font-lato'>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Services' element = {<Services />} />
        <Route path = '/Gallery' element = {<Gallery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
