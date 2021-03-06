import Navigation from './Navigation';
import Home from './Home';
import FillerOne from './FillerOne';
import Experience from './Experience';
import Skills from './Skills';
import ContactForm from './ContactForm';
import About from './About';
import Work from './Work';
import FillerTwo from './FillerTwo';


import './Styles/app.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Home />
      <FillerTwo />
      <About />
      <Work />
      {/* <FillerOne /> */}
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
