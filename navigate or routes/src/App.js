import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Karachi from './Compponent/Karachi';
import Islamabad from './Compponent/Islamabad';
import Lahour from './Compponent/Lahour';
import Home from './Compponent/Home';
import Notfount from './Compponent/Notfount';
import Registration from './Compponent/Rigistration';
import Login from './Compponent/Login';
import Pincode from './Compponent/Pincode';
import Welcome from './Compponent/Welcome';


function App() {
  return (
   < BrowserRouter  >
    <div className="App">
    <Routes>
        {/* <Route path='/' element = {<Registration />} /> */}
        {/* <Route path='/login' element = {<Login />} /> */}
        {/* <Route path='karachi' element = {<Karachi />} />
        <Route path='islamabad' element = {<Islamabad />} />
        <Route path='lahour' element = {<Lahour />} /> */}
        <Route path='/' element = {<Pincode />} /> 
        <Route path='/welcome' element = {<Welcome />} /> 
        <Route path='*' element = {<Notfount />} />

      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
