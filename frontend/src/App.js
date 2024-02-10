import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Views/Home';

function App() {
  return (
    <main className=' font-lato'>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
