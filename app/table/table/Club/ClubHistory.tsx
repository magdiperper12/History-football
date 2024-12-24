'use client'; // Ensure this file is treated as a client-side component.

import React, { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import ClubFc from './ClubFC';
import Shop from '../../../../component/shop/Shop';

interface Datas {
	strSeason: string;
	intRank: number;
	strTeam: string;
	intPlayed: string;
	intPoints: string;
	intGoalsFor: string;
	intWin: string;
	intLoss: string;
	strBadge: string;
	strLeague: string;
	idHomeTeam: string;
}

interface ClubHistoryProps {
	leagueId: string; // Accept leagueId as a prop
}

async function fetchSeasons(leagueId: string): Promise<Datas[]> {
	try {
		const response = await fetch(
			`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${leagueId}&s=2024-2025`
		);
		if (!response.ok) throw new Error('Failed to fetch data');
		const result = await response.json();
		return result?.table || [];
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}

const ClubHistory: React.FC<ClubHistoryProps> = ({ leagueId }) => {
	const [show, setShow] = useState(false);
	const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
	const [data, setData] = useState<Datas[]>([]);

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const handleClick = (teamName: string) => {
		setSelectedTeam(teamName);
		setShow(true);
	};

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				setError(null);
				const seasons = await fetchSeasons(leagueId || `${4328}`); // Use the leagueId prop
				setData(seasons);

				// Automatically select the first team if data exists
				if (seasons.length > 0) {
					setSelectedTeam(seasons[0].strTeam);
					setShow(true); // Show ClubFc for the first team
				}
			} catch (err) {
				setError('Failed to fetch table data. Please try again later.');
			} finally {
				setLoading(false);
			}
		})();
	}, [leagueId]);

	return (
		<div className='container mx-auto p-6 my-10'>
			<div className='flex justify-start items-center gap-3'>
				<FaTrophy className='text-yellow-500 dark:text-yellow-400 text-3xl' />
				<span className='text-darkthird text-xl'>
					{data.length > 0 && data[0]?.strLeague} Club{' '}
					{/* Display the league name */}
				</span>
			</div>

			{/* Error and loading states */}
			{loading && (
				<div className='text-center mt-10 text-lg font-medium'>
					<div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6'>
						{Array.from({ length: 4 }).map((_, index) => (
							<div
								key={index}
								className=' shadow-md bg-gray-200 rounded-full  h-32 w-32 dark:bg-gray-700 animate-pulse'>
								<div className='group relative rounded-full m-0.5 overflow-hidden  justify-center h-32 w-32 bg-gray-300 dark:bg-gray-600'>
									<div className=' rounded-full'>
										<div className=' bg-gray-400 dark:bg-gray-500 rounded mb-2'></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{error && <p>{error}</p>}

			{/* Display the clubs if data is available */}
			<div
				className='flex justify-between items-center py-10 gap-8 md:gap-16 px-5  overflow-scroll overflow-x-auto overflow-y-auto
						[&::-webkit-scrollbar]:w-1
						[&::-webkit-scrollbar]:h-1
						[&::-webkit-scrollbar-track]:bg-secondary
						[&::-webkit-scrollbar-thumb]:bg-forth
						dark:[&::-webkit-scrollbar-track]:bg-darksecondary
						dark:[&::-webkit-scrollbar-thumb]:bg-darkthird'>
				{data.map((team, index) => (
					<button
						key={team.intRank}
						onClick={() => handleClick(team.strTeam)}
						className={`flex cursor-pointer justify-center  rounded-full items-center 
							shadow-glow ${
								index === 0 ? 'bg-yellow-100 dark:bg-yellow-900' : ''
							} focus:bg-yellow-400 focus:dark:bg-yellow-400 focus:dark:shadow-none
							hover:bg-white hover:shadow-glow dark:hover:bg-yellow-400`}>
						<div className='group relative rounded-full m-0.5 shadow-lg justify-center h-32 w-32 flex flex-col items-center bg-secoundry dark:bg-darksecoundry'>
							<img
								src={team.strBadge}
								alt={team.strTeam}
								width={100}
								height={100}
								className='object-contain'
							/>
							<span className='invisible absolute start-full top-3/4 -ms-5 text-nowrap -translate-y-1/2 rounded bg-darkprimary dark:bg-darkforth px-2 py-1.5 text-xs font-medium text-white dark:text-darkprimary group-hover:visible'>
								{team.strTeam}
							</span>
						</div>
					</button>
				))}
			</div>

			{show && selectedTeam && <ClubFc teamName={selectedTeam} />}
		</div>
	);
};

export default ClubHistory;
