import logo from './logo.svg';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Service from './Component/Service';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/ser" element={<Service/>} />
    </Routes>
    </BrowserRouter >
    
    
  );
}

export default App;
