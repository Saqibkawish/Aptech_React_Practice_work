import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Marksheet from './Component/Marksheet';
import Quiz_app from './Component/Quiz_app';
import Array from './Component/Array';
import Array_With_object from './Component/Array_With_object';
import QuizWithArray from './Component/QuizWithArray';
import Planet_Assigmnent from './Component/Planet_Assigment';

function App() {
  return (
    <div className="App">
      {/* < Marksheet /> */}
      {/* < Quiz_app />  */}
      {/* < Array /> */}
      {/* < Array_With_object /> */}
      {/* < QuizWithArray /> */}
      < Planet_Assigmnent />
    </div>
  );
}

export default App;


