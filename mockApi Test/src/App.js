import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Notfound from './Component/Notfound';
import Careem_Booking from './Component/Careem_Booking';
import Careem_show from './Component/Careem_show';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Careem_show />} />
          <Route path="/booking" element={<Careem_Booking />} />
          <Route path="*" element={<Notfound />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;