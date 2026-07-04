import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundCanvas from './components/layout/BackgroundCanvas';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Education from './pages/Education';
import Contact from './pages/Contact';

// NOTE: Experience section intentionally removed per user request.
// The portfolio now flows: Home → About → Work → Skills → Services → Education → Contact

function App() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-text-secondary selection:text-background-primary">
      <BackgroundCanvas />
      <Navbar />

      <main className="flex-grow z-10">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>

      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
