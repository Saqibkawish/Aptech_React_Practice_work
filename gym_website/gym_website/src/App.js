import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Facilities from './Component/Facilities';
import Packges from './Component/Packges';
import Trainer from './Component/Trainer';
import Faq from './Component/Faq';
import Contact from './Component/Contact';
import Footerr from './Component/Footerr';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Facilities />
      <Packges />
      <Trainer />
      <Faq />
      <Contact />
      <Footerr />
    </div>
  );
}

export default App;
