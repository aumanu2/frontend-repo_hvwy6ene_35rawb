import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">© {new Date().getFullYear()} zero — Built with love.</div>
      </footer>
    </div>
  );
}

export default App;
