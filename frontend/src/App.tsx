// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import SobreMim from './pages/Sobre';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/sobre/" element={<SobreMim />} />
    </Routes>
    </Router >
  );
};

export default App;
