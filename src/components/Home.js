import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const gotToCreateSpike = () =>{
        navigate("/createSpike");
    }
    return (
        <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
        <NavBar/>
        
      </div>
  );
};

export default App;
