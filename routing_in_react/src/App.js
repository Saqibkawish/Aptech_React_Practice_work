import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Service from './Component/Service';
import Feedback from './Component/Feedback';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Notfount from './Component/Notfount';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Component/Navbar';
import FAQ from './Component/FAQ';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>

      <Navbar />


      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='service' element = {<Service />} />
        <Route path='feedback' element = {<Feedback />} />
        <Route path='faq' element = {<FAQ />} />
        <Route path='*' element = {<Notfount />} />

      </Routes>

    </div>

</BrowserRouter>

    
  );
}

export default App;
