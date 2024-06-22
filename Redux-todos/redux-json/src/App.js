import logo from './logo.svg';
import './App.css';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { adddata } from './UseRedu';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Addemp from './Addemp';
import View from './View';
import Edit from './Edit';

function App() {

  var datadis = useDispatch("")

  useEffect(() => {
    fetch("http://localhost:3002/detalils")
      .then((res) => { return res.json() })
      .then((data) => {
        datadis(adddata(data))
      })
  }, [

  ])

  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}></Link>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addemp' element={<Addemp />}></Route>
          <Route path='/view/:vid' element={<View />}></Route>
          <Route path='/edit/:eid' element={<Edit />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
