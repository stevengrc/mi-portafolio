import { useState } from "react";
import Snowfall from "react-snowfall";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [snow, setSnow] = useState(false);

  return (
    <div className="text-white font-sans relative">

      
      {snow && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
          <Snowfall snowflakeCount={120} />
        </div>
      )}

      
      <button
        onClick={() => setSnow(!snow)}
        className="fixed bottom-4 right-4 z-50 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transition-all"
      >
        {snow ? "Detener" : "❄️"}
      </button>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
