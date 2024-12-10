'use client'; // Add this directive at the top

import { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import Shop from '@/app/component/shop/page';
import TeamShirts from '@/app/component/shop/page';
import ClubHistory from '@/app/table/table/Club/ClubHistory';

interface Datas {
	intRank: number;
	strTeam: string;
	intPlayed: string;
	intPoints: string;
	intGoalsFor: string;
	intWin: string;
	intLoss: string;
	intDraw: string;
	strBadge: string;
	strLeague: string;
	idHomeTeam: string;
	intGoalDifference: string;
	intGoalsAgainst: string;
}

// Your component code continues below...
interface years {
	strSeason: string;
}

async function SeasonYear(): Promise<years[]> {
	try {
		const response = await fetch(
			'https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=4328'
		);
		if (!response.ok) throw new Error('Failed to fetch data');
		const result = await response.json();
		return result?.seasons || [];
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}
async function fetchSeasons(url: string): Promise<Datas[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error('Failed to fetch data');
		const result = await response.json();
		return result?.table || []; // Correct property based on API response
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}

const ContainerTable: React.FC = () => {
	const [data, setData] = useState<Datas[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [url, setUrl] = useState(
		'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2024-2025'
	); // Default URL for Premier League
	const [dropdownVisible, setDropdownVisible] = useState(false); // Manage dropdown visibility

	// State to send the league ID to ClubHistory component
	const [selectedLeague, setSelectedLeague] = useState<string>('');
	const [year, setYear] = useState<years[]>([]);
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const seasonyear = await SeasonYear();
			setYear(seasonyear);
			setIsLoading(false);
		})();
	}, []);
	const handleButtonClick = () => {
		setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
	};

	const handleLeagueSelection = (leagueUrl: string, leagueId: string) => {
		setUrl(leagueUrl);
		setSelectedLeague(leagueId); // Set selected league ID
		setDropdownVisible(false); // Close dropdown after selection
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setError(null); // Clear previous errors
				const seasons = await fetchSeasons(url);
				setData(seasons);
			} catch (err) {
				setError('Failed to fetch table data. Please try again later.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]); // Fetch data when the URL changes
	// Loading state
	// const [loading, setLoading] = useState(true);
	// if (loading) {
	// 	return (
	// 		<div className='flex justify-center items-center min-h-screen'>
	// 			<div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500'></div>
	// 		</div>
	// 	);
	// }
	return (
		<div>
			<div className='container mx-auto p-6 my-10'>
				<div className='flex justify-between items-center gap-3 mb-10'>
					<span className='text-darkthird text-xl flex gap-3'>
						<FaTrophy className='text-yellow-500 dark:text-yellow-400 text-3xl' />
						{url.includes('4332')
							? 'Serie A Table'
							: url.includes('4331')
							? 'Bundesliga Table'
							: url.includes('4334')
							? 'League 1'
							: url.includes('4335')
							? 'La Liga'
							: url.includes('4344')
							? 'Liga NOS'
							: url.includes('4330')
							? 'SPFL'
							: 'Premier League'}
					</span>
					<div className='relative'>
						<button
							onClick={handleButtonClick}
							className='flex px-5 my-5 w-44 py-2 relative justify-center rounded-xl shadow-md dark:shadow-inner-glow hover:shadow-sm cursor-pointer duration-150 text-xl text-darkthird dark:text-darkforth gap-2 items-center'>
							League
							<svg
								className='w-2.5 h-2.5 ms-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 10 6'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m1 1 4 4 4-4'
								/>
							</svg>
						</button>

						<div
							id='dropdown'
							className={`z-10 bg-primary w-44 text-center dark:bg-darkprimary divide-y absolute top-16 divide-gray-100 rounded-lg shadow ${
								dropdownVisible ? 'flex' : 'hidden'
							}`}>
							<ul
								className='py-2 m-auto text-center text-sm text-nowrap w-full text-gray-700 dark:text-gray-200'
								aria-labelledby='dropdownDefaultButton'>
								<li className='relative group'>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2024-2025',
												'4328'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										Premier League
									</a>
									<div className='relative'>
										<ul
											id='dropdown'
											role='listbox'
											className='absolute top-0 end-36 flex-col-reverse bg-primary h-44 overflow-x-hidden overflow-y-auto 
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-secoundry
        [&::-webkit-scrollbar-thumb]:bg-forth
        dark:[&::-webkit-scrollbar-track]:bg-darksecoundry
        dark:[&::-webkit-scrollbar-thumb]:bg-darkthird 
        overflow-scroll m-auto text-center dark:bg-darkprimary w-full rounded-lg shadow group-hover:block hidden'>
											{isLoading ? (
												<li className='p-2 text-center'>Loading...</li>
											) : (
												year.map((item, index) => (
													<li
														key={index}
														role='option'>
														<a
															href='#'
															className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600'>
															{item.strSeason}
														</a>
													</li>
												))
											)}
										</ul>
									</div>
								</li>

								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4332&s=2024-2025',
												'4332'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										Serie A
									</a>
								</li>
								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4331&s=2024-2025',
												'4331'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										Bundesliga
									</a>
								</li>
								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4334&s=2024-2025',
												'4334'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										Ligue 1
									</a>
								</li>
								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4335&s=2024-2025',
												'4335'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										La Liga
									</a>
								</li>
								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4344&s=2024-2025',
												'4344'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										Liga NOS
									</a>
								</li>
								<li>
									<a
										href='#'
										onClick={() =>
											handleLeagueSelection(
												'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4330&s=2024-2025',
												'4330'
											)
										}
										className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600 dark:hover:text-white'>
										SPFL
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{isLoading ? (
					<p className='text-center text-lg text-gray-700 w-full dark:text-gray-300'>
						<div className='text-center mt-10 text-lg font-medium'>
							<div className='grid grid-cols-1 gap-6'>
								{Array.from({ length: 1 }).map((_, index) => (
									<div
										key={index}
										className=' shadow-md bg-gray-200 p-5  space-y-3 h-64 dark:bg-gray-700 animate-pulse'>
										<div className='group relative    h-12 w-full bg-gray-400 dark:bg-gray-500'></div>
										<div className='group relative  h-10 w-full bg-gray-300 dark:bg-gray-600'></div>
										<div className='group relative  h-10 w-full bg-gray-300 dark:bg-gray-600'></div>
										<div className='group relative  h-10 w-full bg-gray-300 dark:bg-gray-600'></div>
									</div>
								))}
							</div>
						</div>
					</p>
				) : error ? (
					<p className='text-center text-lg text-red-500'>{error}</p>
				) : (
					<div
						className='rounded-md h-96 overflow-scroll overflow-x-auto overflow-y-auto
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar]:h-1
                        [&::-webkit-scrollbar-track]:bg-secondary
                        [&::-webkit-scrollbar-thumb]:bg-forth
                        dark:[&::-webkit-scrollbar-track]:bg-darksecondary
                        dark:[&::-webkit-scrollbar-thumb]:bg-darkthird'>
						<table className='min-w-full bg-white dark:bg-gray-800 text-left rtl:text-right border-collapse'>
							<thead>
								<tr className='bg-blue-500 text-white dark:text-blue-100 dark:bg-blue-950'>
									<th className='py-3 px-4 text-sm sm:text-base'>Club</th>
									<th className='py-3 px-4 text-sm sm:text-base'>Played</th>
									<th className='py-3 px-4 text-sm sm:text-base'>W</th>
									<th className='py-3 px-4 text-sm sm:text-base'>L</th>
									<th className='py-3 px-4 text-sm sm:text-base'>D</th>
									<th className='py-3 px-4 text-sm sm:text-base'>GF : GA</th>
									<th className='py-3 px-4 text-sm sm:text-base'>+ / -</th>
									<th className='py-3 px-4 text-sm sm:text-base'>Points</th>
								</tr>
							</thead>
							<tbody className=''>
								{data.map((club, index) => (
									<tr
										key={index}
										className={`border-b dark:border-gray-700 ${
											club.intRank % 2 === 0
												? 'bg-gray-100 dark:bg-darksecoundry dark:text-blue-100'
												: 'dark:bg-[#044875] dark:text-blue-50'
										} hover:bg-blue-200 dark:hover:bg-blue-800`}>
										<td className='py-3 px-4'>
											<img
												src={club.strBadge}
												alt={club.strTeam}
												className='w-6 h-6 inline-block me-2'
											/>
											{club.strTeam}
										</td>

										<td className='py-3 px-4'>{club.intPlayed}</td>
										<td className='py-3 px-4'>{club.intWin}</td>
										<td className='py-3 px-4'>{club.intLoss}</td>
										<td className='py-3 px-4'>{club.intDraw}</td>
										<td className='py-3 px-4'>
											{club.intGoalsFor} : {club.intGoalsAgainst}
										</td>
										<td className='py-3 px-4'>{club.intGoalDifference}</td>
										<td className='py-3 px-4 font-extrabold'>
											{club.intPoints}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
			{/* Pass selectedLeague as a prop to ClubHistory */}
			<ClubHistory leagueId={selectedLeague} />
		</div>
	);
};

export default ContainerTable;
