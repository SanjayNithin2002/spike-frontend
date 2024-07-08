import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Sidebar from './Sidebar';
import LoadingIndicator from './LoadingIndicator';
import Select from 'react-select';
import GithubLogo from '../img/github-logo.png';
import { IoMdLock } from "react-icons/io";
import { formatDistanceToNowStrict } from 'date-fns';

function SelectRepos() {
    const { control, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    const formatPushedAt = (pushedAt) => {
        const difference = formatDistanceToNowStrict(new Date(pushedAt), { addSuffix: false });
        return difference
            .replace(' years', 'y')
            .replace(' months', 'm')
            .replace(' days', 'd')
            .replace(' hours', 'h')
            .replace(' minutes', 'mins')
            .replace(' year', 'y')
            .replace(' month', 'm')
            .replace(' day', 'd')
            .replace(' hour', 'h')
            .replace(' minute', 'min');
    };

    const onSubmit = async (data) => {
        setIsLoading(true);
        const selectedOptions = data.selectedOptions || [];
        console.log(selectedOptions);
        const repoData = selectedOptions.map(option => ({
            repo: option.value.repo,
            owner: option.value.owner
        }));
        console.log(JSON.stringify({ repos: repoData }));
        try {
            const response = await fetch('https://spike-backend.vercel.app/integrations/github/user/createhooks', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ repos: repoData })
            });
            const results = await response.json();
            if (!response.ok) {
                const error = new Error(results.message || 'Failed to create webhooks');
                error.statusCode = response.status;
                throw error;
            } else {
                console.log('success', results);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchReposFromAPI = async () => {
            try {
                const response = await fetch('https://spike-backend.vercel.app/integrations/github/user/repos', {
                    credentials: 'include'
                });
                const results = await response.json();
                if (!response.ok) {
                    const error = new Error(results.message || 'Failed to fetch repositories');
                    error.statusCode = response.status;
                    throw error;
                } else {
                    setRepos(results.repos);
                }
            } catch (err) {
                console.error('Error fetching repositories:', err);
            }
        };
        fetchReposFromAPI();
    }, []);

    return (
        <div className="font-poppins h-screen bg-neutral-950 text-neutral-400">
            <Sidebar />

            <main className="flex-grow flex flex-col items-center justify-center py-8">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-neutral-950 text-neutral-400 border-2 border-neutral-800 rounded-3xl w-full max-w-2xl m-20 p-10">
                    <h2 className="text-3xl font-bold text-left text-redSpike mb-2">import git repository</h2>
                    <p className="text-lg text-left text-redSpike mb-6">select the repositories you want to monitor</p>
                    <div className="mb-4 flex flex-col items-center justify-center">
                        <div className="flex items-center mb-2 mt-8 justify-center w-full">
                            <Controller
                                name="selectedOptions"
                                control={control}
                                render={({ field }) => {
                                    const selectedRepos = field.value || [];
                                    const availableOptions = repos.filter(repo =>
                                        !selectedRepos.some(selected => selected.value.repo === repo.name)
                                    );

                                    return (
                                        <Select
                                            {...field}
                                            options={availableOptions.map(repo => ({
                                                key: repo.id,
                                                value: {
                                                    repo: repo.name,
                                                    owner: repo.owner
                                                },
                                                label: (
                                                    <div className="flex justify-between items-center w-full">
                                                        <div className="flex items-center">
                                                            <img
                                                                src={GithubLogo}
                                                                alt="GitHub"
                                                                className="h-5 w-5 mr-2"
                                                            />
                                                            {repo.full_name}
                                                            {repo.visibility === 'private' && (
                                                                <IoMdLock className="ml-1" />
                                                            )}
                                                        </div>
                                                        <span className="text-gray-500 text-right text-sm ml-2">
                                                            {formatPushedAt(repo.pushed_at)}
                                                        </span>
                                                    </div>
                                                )
                                            }))}
                                            isMulti
                                            className="w-full"
                                            placeholder="Search"
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: state.isFocused ? 'rgb(38 38 38)' : 'rgb(38 38 38)',
                                                    borderColor: state.isFocused ? 'rgb(38 38 38)' : 'rgb(38 38 38)', 
                                                    borderWidth:  '1px',
                                                    boxShadow: state.isFocused ? 'rgb(38 38 38)' : 'none',
                                                }),
                                                option: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    backgroundColor: state.isFocused ? 'rgb(245 245 245)' : 'rgb(38 38 38)', // Adjust option background color
                                                    cursor: state.isFocused ? 'pointer': 'default',
                                                    color: state.isFocused? 'rgb(38 38 38)' : 'rgb(245 245 245)',
                                                }),
                                                menu: (baseStyles) => ({
                                                    ...baseStyles,
                                                    backgroundColor: 'rgb(38 38 38)',
                                                    zIndex: 9999,
                                                }),
                                            }}
                                        />
                                    );
                                }}
                            />
                        </div>
                        <button type="submit" className="mt-4 w-1/4 text-neutral-900 bg-neutral-300 hover:bg-neutral-400 py-2 rounded-full font-medium ">
                            {isLoading ? <LoadingIndicator /> : 'continue'}
                        </button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default SelectRepos;
