import './App.css';
import Navbar from './navigation/Navbar';
import Name from './navigation/Name';
import About from './navigation/About';
import Footer from './navigation/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Name/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
