import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import todoHome from './pages/todohome';
import newTask from './hooks/useState/newTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={todoHome()} />
          <Route path='/add-task' element={<newTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;