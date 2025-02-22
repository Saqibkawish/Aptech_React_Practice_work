import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Employe_form from './Component/Employe_form';
import Notfound from './Component/Notfound';
import Login_form from './Component/Login_form';
import Show_data from './Component/Show_data';
import Job_Application_form from './Component/Job_Application_form';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Show_data />} />
          <Route path="/emply" element={<Employe_form />} />
          <Route path="/login" element={<Login_form />} />
          <Route path="/job" element={<Job_Application_form />} />
          <Route path="*" element={<Notfound />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;