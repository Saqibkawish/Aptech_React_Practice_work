import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Doctors from './Component/Doctors';
import Service from './Component/Service';
import Room from './Component/Room';
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
      <Doctors />
      <Service />
      <Room />
      <Contact />
      <Footerr />
    </div>
  );
}

export default App;
