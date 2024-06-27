import React from "react";
import NavBar from "./NavBar";

const CreateSpike = () => {
    return (
        <div className="font-redHat">
            <NavBar />
            <div className="bg-whitestSpike">
                <div className="flex flex-col item-center">
                    <div className="flex bg-redSpike text-whitestSpike mt-4 font-bold">
                        untitled spike #01
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSpike;