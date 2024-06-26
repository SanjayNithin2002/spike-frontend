import React from "react";

const InfoPanel = () => {
    return (
        <div className="w-4/12 bg-redSpike text-whiteSpike p-8 flex flex-col justify-center items-center h-full">
            <h1 className="text-8xl font-bold mb-20">spike</h1>
            <ul className="space-y-4 text-lg">
                <li>meet spike, a productivity tool that has <span className="font-semibold italic">consequences.</span></li>
                <li>spike focuses on monitoring your individual metrics and goal enforcement</li>
                <li>think of spike as your annoying mom who kicks your rear every time you fall behind on your home work</li>
                <li>so just sign up and get to work bro</li>
            </ul>
        </div>
    )
}

export default InfoPanel;