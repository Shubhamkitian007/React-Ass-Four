import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Student from './Compo/Student';
import Contact from './Compo/Contact';
import Header from './Compo/Header';
import Home from './Compo/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Header />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/student' element = {<Student />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
