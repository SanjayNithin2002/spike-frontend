import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CreateSpike from './Pages/CreateSpike';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateSpike />} />
      </Routes>
    </Router>

  );
}

export default App;


