import './App.css';
import Navbar from './navigation/Navbar';
import InputBox from './navigation/InputBox';
import About from './navigation/About';
import Footer from './navigation/Footer';

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
      <Footer/>
    </div>
  );
}

export default Home;
