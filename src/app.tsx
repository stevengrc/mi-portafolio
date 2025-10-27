
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
    


  return (
    <div  className=" text-white font-sans ">
    <Navbar />
    <Hero/>
    <About/>
    <Projects />
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;