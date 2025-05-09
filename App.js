import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import Login from "./login";
import Home from "./home";
import Result from "./result";
import Comm from "./comm";
import Daily from "./daily";
import Test from "./test";
import Write from "./write";
import Detail from "./detail";
import { PostProvider } from "./postContext";

function App() {
  return (
    <PostProvider>
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
          <Route path="/write/:id" element={<Write />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App;
