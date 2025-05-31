import React from 'react';
import { ProfileProvider } from './Component/profileContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main       from './Component/main';
import Login      from './Component/login';
import Home       from './Component/home';
import Result     from './Component/result';
import Comm       from './Component/comm';
import Daily      from './Component/daily';
import Test       from './Component/test';
import Write      from './Component/write';
import Detail     from './Component/detail';
import { PostProvider } from './Component/postContext';
import Signup from './Component/signup';
import FindId from './Component/findid';
import FindPw from './Component/findpw';

function App() {
  return (
    <ProfileProvider>
      <PostProvider>
        <Router>
          <Routes>
            <Route path="/"      element={<Navigate to="/main" replace />} />
            <Route path="/main"  element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home"  element={<Home />} />
            <Route path="/result"element={<Result />} />
            <Route path="/comm"  element={<Comm />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/test"  element={<Test />} />
            <Route path="/write"     element={<Write />} />
            <Route path="/write/:id" element={<Write />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/find-id" element={<FindId />} />
            <Route path="/find-pw" element={<FindPw />} />
            
          </Routes>
        </Router>
      </PostProvider>
    </ProfileProvider>
  );
}


export default App;
