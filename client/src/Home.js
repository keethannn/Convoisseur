import './App.css';
import Navbar from './navigation/Navbar';
import InputBox from './navigation/InputBox';
import About from './navigation/About';
import Footer from './navigation/Footer';
import Contact from './navigation/Contact';

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <InputBox
        question="What is your name?"
        placeholder="Your name"
        hasNext={true}  
      />
      <About/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;
