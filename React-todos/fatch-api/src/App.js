import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Tables from './Tables';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addemp from './Addemp';
import View from './View';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={"/"}></Link>
      <Routes>
        <Route path='/' element={<Tables/>}></Route>
        <Route path='/emp' element={<Addemp/>}></Route>
        <Route path='/view/:vid' element={<View/>}></Route>
        <Route path='/edit/:eid' element={<Edit></Edit>}></Route>
        

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
