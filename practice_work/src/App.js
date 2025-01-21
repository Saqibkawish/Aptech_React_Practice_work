import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Marksheet from './Component/Marksheet';
import Quiz_app from './Component/Quiz_app';
import Array from './Component/Array';
import Array_With_object from './Component/Array_With_object';

function App() {
  return (
    <div className="App">
      {/* < Marksheet /> */}
      {/* < Quiz_app />  */}
      {/* < Array /> */}
      < Array_With_object />
    </div>
  );
}

export default App;


