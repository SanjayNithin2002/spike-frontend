import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Select from "react-select";
import { BiSolidPlusSquare } from "react-icons/bi";
import { RiGitBranchFill } from "react-icons/ri";

const options = [
  { value: "material-tailwind-html", label: "Material Tailwind HTML" },
  { value: "material-tailwind-react", label: "Material Tailwind React" },
  { value: "material-tailwind-vue", label: "Material Tailwind Vue" },
  { value: "material-tailwind-angular", label: "Material Tailwind Angular" },
  { value: "material-tailwind-svelte", label: "Material Tailwind Svelte" },
];

const CreateSpike = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const gotToSelectRepos = () => {
    window.location.href =
      "https://spike-backend.vercel.app/integrations/github/callback";
  };

  return (
    <div className="container flex h-screen font-poppins w-full bg-neutral-950 text-neutral-400">
      <Sidebar/>
      <div className="inset-0 h-full w-full bg-neutral-950 bg-[radial-gradient(#a3a3a3_1px,transparent_0.5px)] [background-size:35px_35px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-600 w-96 h-36 rounded-xl mt-32 bg-neutral-950 p-4">
            <h1 className="mb-4 text-xl font-semibold text-center">
              Choose your metric
            </h1>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              className="w-full pr-5 pl-5"
              placeholder="Search"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused
                    ? "rgb(38 38 38)"
                    : "rgb(38 38 38)",
                  borderColor: state.isFocused
                    ? "rgb(38 38 38)"
                    : "rgb(38 38 38)",
                  borderWidth: "1px",
                  boxShadow: state.isFocused ? "rgb(38 38 38)" : "none",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused
                    ? "rgb(245 245 245)"
                    : "rgb(38 38 38)", // Adjust option background color
                  cursor: state.isFocused ? "pointer" : "default",
                  color: state.isFocused ? "rgb(38 38 38)" : "rgb(245 245 245)",
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "rgb(38 38 38)",
                  zIndex: 9999,
                }),
              }}
            />
          </div>
          <div className="pt-20 pb-20 text-neutral-400">
            <BiSolidPlusSquare className="w-10 h-10" />
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-neutral-600 w-96 h-36 rounded-xl bg-neutral-950 p-4">
            <h1 className="mb-4 text-xl font-semibold text-center">
              Choose your consequence
            </h1>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              className="w-full pr-5 pl-5 text-neutral-400"
              placeholder="Search"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused
                    ? "rgb(38 38 38)"
                    : "rgb(38 38 38)",
                  borderColor: state.isFocused
                    ? "rgb(38 38 38)"
                    : "rgb(38 38 38)",
                  borderWidth: "1px",
                  boxShadow: state.isFocused ? "rgb(38 38 38)" : "none",
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isFocused
                    ? "rgb(245 245 245)"
                    : "rgb(38 38 38)", // Adjust option background color
                  cursor: state.isFocused ? "pointer" : "default",
                  color: state.isFocused ? "rgb(38 38 38)" : "rgb(245 245 245)",
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "rgb(38 38 38)",
                  zIndex: 9999,
                }),
              }}
            />
          </div>
          <button
            onClick={() => gotToSelectRepos()}
            className="font-semibold bg-neutral-900 text-neutral-400 text-xl p-3 rounded-xl mt-28 ml-5 mr-5"
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSpike;
