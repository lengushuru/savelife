import Navbar from './components/navbar/Navbar';
import Home  from './components/home/Home';
import Ourcourses from './components/ourcourses/Ourcourses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Ourcourses />
    </div>
  );
}

export default App;
