import React from "react";
import NavBar from "./NavBar";

const CreateSpike = () => {
    return (
        <div className="font-redHat h-screen bg-whitestSpike">
            <NavBar />
            <div className="flex flex-col items-center mt-8">
                <div className="relative mb-8">
                    <div className="absolute inset-1 bg-redSpike rounded-md"></div>
                    <div className="relative text-white font-bold text-2xl px-6 py-3">
                        untitled spike #01
                    </div>
                </div>
                <div className="flex justify-between w-4/5">
                    <div className="flex flex-col items-center">
                        <div className="text-redSpike text-2xl font-bold mb-5 text-decoration: underline">a metric</div>
                        <div className="border-2 border-blackSpike p-4 rounded-md mt-10 bg-lightgraySpike">
                            <select className="bg-lightgraySpike text-redSpike p-4 rounded-md w-60">
                                <option>one commit per day on github...</option>
                                <option>more metrics</option>
                            </select>
                        </div>
                        <div className="text-redSpike font-bold mt-4 cursor-pointer">customize it</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-redSpike text-2xl font-bold mb-5 text-decoration: underline">a consequence</div>
                        <div className="border-2 border-blackSpike p-4 rounded-md mt-10 bg-lightgraySpike">
                            <select className="bg-lightgraySpike text-redSpike p-4 rounded-md w-60">
                                <option>send an email to my professor stating how i am slacking off</option>
                                <option>more options</option>
                            </select>
                        </div>
                        <div className="text-redSpike font-bold mt-4 cursor-pointer">customize it</div>
                    </div>
                </div>
                <div className="border-2 border-blackSpike bg-lightgraySpike p-5 rounded-md mt-40 w-2/3 text-center text-redSpike text-xl">
                if i don’t commit once on GitHub everyday, spike will send an email to my professor regarding how i’ve started slacking off.
                </div>
                <button className="bg-redSpike font-bold text-xl text-whitestSpike p-3 rounded-md mt-10 pl-5 pr-5">continue</button>
            </div>
        </div>
    )
}

export default CreateSpike;