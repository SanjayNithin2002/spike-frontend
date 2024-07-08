import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const gotToCreateSpike = () => {
    navigate("/createSpike");
  };
  return (
    <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
      <Sidebar onToggle={setIsSidebarOpen} />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <div className="group relative h-64 flex flex-col pl-32 mt-10 ml-10 mr-28">
            <h2 className="font-semibold text-8xl text-neutral-600 animate-slideIn style={{ animationDelay: '0.1s' }} transform transition-transform duration-300 ease-in-out group-hover:scale-110">
              spike
            </h2>
            <h2 className="font-semibold text-8xl text-neutral-400 absolute top-5 bottom-5 transform translate-y-3 mt-9 animate-slideIn transition-transform duration-300 ease-in-out group-hover:scale-110">
              spike
            </h2>
            <h2 className="font-semibold text-8xl text-neutral-600 mt-5 animate-slideIn style={{ animationDelay: '0.1s' }} transform transition-transform duration-300 ease-in-out group-hover:scale-110">
              spike
            </h2>
          </div>
          <div className="ml-32 mt-24 h-36">
            <div className="flex rounded mt-5">
              <h4 className="pl-5 pr-5 font-semibold text-3xl">
                welcome back,{" "}
                {JSON.parse(localStorage.getItem("user")).name || "username"}.
              </h4>
            </div>
            <div className="group">
              <h6 className="italic pl-5 pr-5 pt-5 text-xl">
                what you upto today?
              </h6>
            </div>
          </div>
          {/* <div className='flex flex-col text-xl mt-10 mr-48 mb-5 ml-56 pt-7 pr-16 pb-3'>
                <div className='flex text-2xl font-semibold'>spike</div>
                <div className="flex italic">noun</div>
                <div className='flex'>1. a productivity tool that has (real) consequences</div>
                <div className='flex'>2. a unit consisting of a metric and a consequence, commonly used in association with the tool ‘spike’</div>
            </div> */}
          {/* </div> */}
        </div>
        {/* <div className="flex items-center"> 
            <hr className=" mt-10 ml-20 border border-neutral-400 w-11/12"></hr>
            </div> */}

        <div className="flex flex-row justify-around mt-20 ml-32 mr-32 mb-20 w-full">
          <div className="flex h-52 w-80 border p-4 rounded-md border-neutral-400 hover:bg-neutral-900">
            <div className="flex flex-row">
              <div className="flex text-5xl font-semibold justify-center">
                1
              </div>
              <br></br>
              <div className="flex text-xl font-semibold mt-10 ml-6 justify-center">
                choose a metric to measure your productivity
              </div>
            </div>
          </div>
          <div className="flex h-52 w-80 border p-4 rounded-md border-neutral-400 hover:bg-neutral-900">
            <div className="flex flex-row">
              <div className="flex text-5xl font-semibold justify-center">
                2
              </div>
              <br></br>
              <div className="flex text-xl font-semibold mt-10 ml-6 justify-center">
                choose the consequence you wanna face
              </div>
            </div>
          </div>
          <div className="flex h-52 w-80 border p-4 rounded-md border-neutral-400 hover:bg-neutral-900">
            <div className="flex flex-row">
              <div className="flex text-5xl font-semibold justify-center">
                3
              </div>
              <br></br>
              <div className="flex text-xl font-semibold mt-10 ml-6 justify-center">
                create a spike and do your job
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 items-center text-xl font-semibold ml-96 mb-20">
          <div>
            and you know what happens when you don’t so, just do it, man.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
