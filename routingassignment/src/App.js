import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from './Navbar/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import Faqs from './Component/Faqs';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar />
      <div class="content" id="content">
       <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/a' element={<About />} />
        <Route path='/c' element={<Contact />} />
        <Route path='/s' element={<Service />} />
        <Route path='/fq' element={<Faqs />} />
        <Route path= "*" element= {<h1>Page Not Found</h1>} />

       </Routes>
       </div>

      </div>
    
    </BrowserRouter>
  );
}

export default App;
