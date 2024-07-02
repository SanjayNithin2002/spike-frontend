import React from "react";
import NavBar from "./NavBar";

const CreateSpike = () => {
    const gotToSelectRepos = () => {
        window.location.href = 'https://spike-backend.vercel.app/integrations/github/callback';
    }
    return (
        <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
            <NavBar />
            <button onClick={() => gotToSelectRepos()} className="font-bold text-xl p-3 rounded-md mt-10 ml-5 mr-5">continue</button>
        </div>
    )
}

export default CreateSpike;


