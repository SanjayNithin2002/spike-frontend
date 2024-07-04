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
            <div className="flex flex-col">
            <div className="flex flex-row justify-between mt-10">
            <div className="ml-20 h-64">
            <div className="flex rounded mt-20" >
                <h4 className="pt-5 pl-5 pr-5 font-semibold text-3xl">
                    {'welcome back, username.'}
                </h4>
            </div>
            <div className="group">
                    <h6 className="italic pl-5 pr-5 pb-5 text-xl">
                        what you upto today?
                    </h6>
                </div>
            </div>
            <div className="group h-64 relative flex flex-col pl-96 mt-10 mr-32 hover:text-9xl">
                <h2 className="font-semibold text-8xl text-neutral-600 animate-slideIn style={{ animationDelay: '0.1s' }}">spike</h2>
                <h2 className="font-semibold text-8xl text-neutral-400 absolute top-5 bottom-5 transform translate-y-3 mt-9 animate-slideIn">spike</h2>
                <h2 className="font-semibold text-8xl text-neutral-600 mt-5 animate-slideIn style={{ animationDelay: '0.1s' }}">spike</h2>
            </div>
            </div>
            {/* <div className="mt-10 w-full"> */}
            <hr className="mt-10 border-2 border-neutral-400 w-screen"></hr>
            {/* </div> */}
            </div>
        </div>
        
  );
};

export default App;
