'use client';

import { useEffect, useState } from 'react';

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
	strCutout: string;
	strPlayer: string;
	strNumber: string;
	strThumb: string;
	idSoccerXML: string;
}

async function fetchSeasons(url: string): Promise<Datas[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error('Failed to fetch data');
		const result = await response.json();
		return result?.player || []; // Correct property based on API response
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}

const HaddafTable: React.FC = () => {
	const [data, setData] = useState<Datas[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [url, setUrl] = useState(
		'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal'
	); // Default URL for Premier League

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setError(null); // Clear previous errors
				const players = await fetchSeasons(url);

				// Filter and sort by goals (strNumber) in descending order
				const sortedPlayers = players
					.filter((player) => !isNaN(Number(player.strNumber))) // Keep only valid number entries
					.sort((a, b) => Number(b.strNumber) - Number(a.strNumber));

				setData(sortedPlayers);
			} catch (err) {
				setError('Failed to fetch table data. Please try again later.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return (
		<div>
			<div className='container mx-auto p-6 my-10'>
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
								<th className='py-3 px-4 text-sm sm:text-base'>Player</th>
								<th className='py-3 px-4 text-sm sm:text-base'>goal </th>
								<th className='py-3 px-4 text-sm sm:text-base'>Club</th>
								<th className='py-3 px-4 text-sm sm:text-base'>Played</th>
							</tr>
						</thead>
						<tbody>
							{data.map((player, index) => (
								<tr
									key={index}
									className={`border-b dark:border-gray-700 ${
										index % 2 === 0
											? 'bg-gray-100 dark:bg-darksecoundry dark:text-blue-100'
											: 'dark:bg-[#044875] dark:text-blue-50'
									} hover:bg-blue-200 dark:hover:bg-blue-800`}>
									<td className='py-3 px-4 flex items-center gap-2'>
										<img
											src={player.strCutout || 'https://via.placeholder.com/50'}
											alt={''}
											className='w-6 h-6 rounded-full'
										/>
										{player.strPlayer || 'Unknown'}
									</td>
									<td className='py-3 px-4'>{player.strNumber || '0'}</td>
									<td className='py-3 px-4'>{player.strTeam || ''}</td>
									<td className='py-3 px-4'>{player.idSoccerXML || 'none'}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default HaddafTable;
