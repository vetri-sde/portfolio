import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CertificationShowcase from './CertificationShowcase';
import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CertificationShowcase />} />
    </Routes>
  );
}

export default App;
