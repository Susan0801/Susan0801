import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe'; // Uncomment this to use the ContactMe component
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div
  className="fixed top-0 left-0 z-[-2] h-screen w-screen rotate-180 transform bg-[linear-gradient(to_top,#fbc2eb_0%,#a6c1ee_100%)]"
></div>






      
      {/* Wrap the content inside Router */}
      <Router>
        <Navbar />
        {/* Define the Routes */}
        <div className='relative container mx-auto px-8'>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

