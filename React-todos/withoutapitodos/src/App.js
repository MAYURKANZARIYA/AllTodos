import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addemp from './Addemp';
import View from './View';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addemp' element={<Addemp/>}></Route>
        <Route path='/view/:vid' element={<View/>}></Route>
        <Route path='/edit/:eid' element={<Edit/>}></Route>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
