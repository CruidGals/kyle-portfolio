import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/Home';
import About from './sections/About';
import Navigation from './sections/components/Navigation';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import ContactFooter from './sections/components/ContactFooter';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactFooter />
      <Footer />
    </>
  )
}

export default App
