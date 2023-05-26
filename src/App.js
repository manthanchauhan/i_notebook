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


function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert message="This is iNotebook" type="primary"/>
      <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div> 
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
