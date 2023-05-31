import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './contexts/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertState from './contexts/alert/AlertState';


function App() {
  return (
    <>
    <AlertState>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert/>
      <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div> 
    </BrowserRouter>
    </NoteState>
    </AlertState>
    </>
  );
}

export default App;
