import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import { Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <main className=' font-lato'>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
