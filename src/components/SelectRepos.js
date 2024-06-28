import React from 'react';
import NavBar from './NavBar';
import Select from'react-select';
import { useState } from 'react';

const options = [
    { value: 'repo1', label: 'repo blah blah 01' },
    { value: 'repo2', label: 'repo blah blah 02' },
    { value: 'repo3', label: 'repo blah blah 03' },
    { value: 'repo4', label: 'repo blah blah 04' },
  ];

function SelectRepos(){ 
        const [selectedOptions, setSelectedOptions] = useState([]);
      
        const handleSelectChange = (selected) => {
          setSelectedOptions(selected);
        };
    return (
        <div className="font-redHat h-screen bg-whitestSpike">
            <NavBar />
            <main className="flex-grow flex flex-col items-center justify-center py-8">
            <div className="bg-whiterSpike shadow-md rounded-md p-20 mt-10 pl-10 pr-10 w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-left text-redSpike mb-2">import git repository</h2>
            <p className="text-lg text-left text-redSpike mb-6">select the repositories you want monitored for commits</p>
            <div className="mb-4">
                <div className="flex items-center mb-2 mt-8">
                <input
                    type="text"
                    className="flex-grow border border-blackSpike rounded p-2"
                    value="sanjaynithin19"
                    readOnly
                />
                <div className="p-2">
                    <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="h-8 w-16"
                    />
                </div>               
                <Select
                    options={options}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    className="w-full border border-blackSpike"
                    placeholder="search"
                />
                </div>
            </div>
            <div className="space-y-2 mb-4">
                {['repo blah blah 01', 'repo blah blah 02', 'repo blah blah 03', 'repo blah blah 04'].map((repo, index) => (
                <label
                    key={index}
                    className="flex items-center border border-blackSpike rounded p-2 cursor-pointer"
                >
                    <input type="checkbox" className="mr-2" />
                    {repo}
                </label>
                ))}
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700">
                continue
            </button>
            </div>
        </main>
        </div>
    )
}

export default SelectRepos;

