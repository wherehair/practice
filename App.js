import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import Login from './login';
import Home from './home';
import Result from './result';
import Comm from './comm';
import Daily from './daily';
import Test from './test'; 
import Write from './write';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/comm" element={<Comm />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/test" element={<Test />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
