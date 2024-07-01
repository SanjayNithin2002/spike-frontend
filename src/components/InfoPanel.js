import React from "react";

const InfoPanel = () => {
    return (
        <>
            <div className='w-1/12'></div>
            <div className="w-5/12 text-neutral-400 flex flex-col justify-evenly items-center h-full">
                <div className="w-max text-9xl font-semibold flex flex-row items-start">
                    {'>'}
                    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-neutral-400">{'spike.'}</h1>
                </div>
            </div>
        </>
    )
}

export default InfoPanel;