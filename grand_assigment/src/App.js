import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Planet_Assigmnent from './Component/Planet_Assigment';
import Quiz_app from './Component/Quiz_app'
import QuizWithArray from './Component/QuizWithArray'
import WordAndLetterCounting from './Component/WordAndLetterCounting'
import To_do_list from './Component/To_do_list'
import Feedback from './Component/Feedback';
import Home from './Component/Home';
import Notfount from './Component/Notfount';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/planet" element={<Planet_Assigmnent/>} />
      <Route  path="/quiz" element={<Quiz_app/>} />
      <Route  path="/quizarray" element={<QuizWithArray/>} />
      <Route  path="/todolist" element={<To_do_list/>} />
      <Route  path="/wordandlatter" element={<WordAndLetterCounting/>} />
      <Route  path="/feedback" element={<Feedback/>} />
      <Route path='*' element = {<Notfount />} />

    </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
