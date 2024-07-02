import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CreateSpike from './components/CreateSpike';
import SelectRepos from './components/SelectRepos';
import Integrations from './components/Integrations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createspike" element={<CreateSpike />} />
        <Route path="/selectrepos" element={<SelectRepos/>} />
        <Route path="/integrations" element={<Integrations/>} />
      </Routes>
    </Router>
  );
}

export default App;


