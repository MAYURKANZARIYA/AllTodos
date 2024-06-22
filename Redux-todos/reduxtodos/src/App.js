import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addemp from './Addemp';
import Edit from './Edit';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={"/"}>Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addemp" element={<Addemp/>}></Route>
        <Route path="/edit/:eid" element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>
      <Task>
        
      </Task>
    </div>

  );
}

export default App;
