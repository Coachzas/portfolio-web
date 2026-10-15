import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app-shell min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
