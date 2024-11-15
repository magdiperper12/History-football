'use client';
import { useState } from 'react';

import Image from 'next/image';
import logo from '../../../image/logo2-remove.png';

const Table: React.FC = () => {
	const [teams, setTeams] = useState([
		{
			club: 'Manchester United',
			played: 10,
			points: 18,
			goals: 25,
			wins: 6,
			losses: 4,
		},
		{
			club: 'Liverpool',
			played: 10,
			points: 22,
			goals: 27,
			wins: 7,
			losses: 3,
		},
		{ club: 'Chelsea', played: 10, points: 15, goals: 18, wins: 4, losses: 6 },
		{ club: 'Arsenal', played: 10, points: 20, goals: 23, wins: 6, losses: 4 },
		{
			club: 'Manchester City',
			played: 10,
			points: 25,
			goals: 30,
			wins: 8,
			losses: 2,
		},
		{
			club: 'Manchester United',
			played: 10,
			points: 18,
			goals: 25,
			wins: 6,
			losses: 4,
		},
		{
			club: 'Liverpool',
			played: 10,
			points: 22,
			goals: 27,
			wins: 7,
			losses: 3,
		},
		{ club: 'Chelsea', played: 10, points: 15, goals: 18, wins: 4, losses: 6 },
		{ club: 'Arsenal', played: 10, points: 20, goals: 23, wins: 6, losses: 4 },
		{
			club: 'Manchester City',
			played: 10,
			points: 25,
			goals: 30,
			wins: 8,
			losses: 2,
		},
	]);

	return (
		<div className='container mx-auto p-6'>
			<h1 className='text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-200 text-center mb-6'>
				Premier League Table
			</h1>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white dark:bg-gray-800 text-left border-collapse'>
					<thead className='text-nowrap'>
						<tr className='bg-blue-500 text-white dark:text-blue-100 dark:bg-blue-800'>
							<th className='py-2 px-4 text-sm sm:text-base'>Club</th>
							<th className='py-2 px-4 text-sm sm:text-base'>Matches Played</th>
							<th className='py-2 px-4 text-sm sm:text-base'>Points</th>
							<th className='py-2 px-4 text-sm sm:text-base'>Goals</th>
							<th className='py-2 px-4 text-sm sm:text-base'>Wins</th>
							<th className='py-2 px-4 text-sm sm:text-base'>Losses</th>
						</tr>
					</thead>
					<tbody>
						{teams.map((team, index) => (
							<tr
								key={index}
								className={`border-b dark:border-gray-500 ${
									index % 2 === 0
										? 'bg-gray-100 dark:bg-blue-600 dark:text-blue-100'
										: 'dark:bg-blue-500 dark:text-blue-50'
								} hover:bg-blue-200 dark:hover:bg-blue-400 dark:hover:text-black`}>
								<td className='py-2 px-4 text-sm sm:text-base text-nowrap'>
									{team.club}
								</td>
								<td className='py-2 px-4 text-sm sm:text-base'>
									{team.played}
								</td>
								<td className='py-2 px-4 text-sm sm:text-base'>
									{team.points}
								</td>
								<td className='py-2 px-4 text-sm sm:text-base'>{team.goals}</td>
								<td className='py-2 px-4 text-sm sm:text-base'>{team.wins}</td>
								<td className='py-2 px-4 text-sm sm:text-base'>
									{team.losses}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
