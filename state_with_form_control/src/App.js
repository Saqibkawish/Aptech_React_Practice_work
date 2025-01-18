import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Std_Form from './Component/Std_Form';
import Hotel_booking from './Component/Hotel_booking';

function App() {
  return (
    <div className="App">
      {/* <Std_Form /> */}
      <Hotel_booking /> 
    </div>
  );
}

export default App;
