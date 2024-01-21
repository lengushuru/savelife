import Navbar from './components/navbar/Navbar';
import Home  from './components/home/Home';
import Ourcourses from './components/ourcourses/Ourcourses';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Ourcourses />
      <Footer />
    </div>
  );
}

export default App;
