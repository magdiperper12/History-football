'use client';
import { useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const ContainerTable: React.FC = () => {
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
		<div className='container mx-auto p-6 my-10'>
			<div className='flex justify-start items-center gap-3 mb-10'>
				<FaTrophy className='text-blue-500 text-3xl ' />
				<span className='text-darkthird text-xl'>Champions Leage</span>
			</div>
			<div
				className=' rounded-md  h-96 overflow-scroll overflow-x-auto overflow-y-auto
                                        [&::-webkit-scrollbar]:w-1
										[&::-webkit-scrollbar]:h-1
                                    [&::-webkit-scrollbar-track]:bg-secoundry
                                    [&::-webkit-scrollbar-thumb]:bg-forth
                                    dark:[&::-webkit-scrollbar-track]:bg-darksecoundry
                                    dark:[&::-webkit-scrollbar-thumb]:bg-darkthird'>
				<table className='min-w-full bg-white dark:bg-gray-800 text-left border-collapse'>
					<thead className='text-nowrap '>
						<tr className='bg-blue-500 text-white dark:text-blue-100 dark:bg-blue-950'>
							<th className='py-3  px-4 text-sm sm:text-base'>Club</th>
							<th className='py-3  px-4 text-sm sm:text-base'>Matches</th>
							<th className='py-3  px-4 text-sm sm:text-base'>Points</th>
							<th className='py-3  px-4 text-sm sm:text-base'>Goals</th>
							<th className='py-3  px-4 text-sm sm:text-base'>Wins</th>
							<th className='py-3  px-4 text-sm sm:text-base'>Losses</th>
						</tr>
					</thead>

					<tbody>
						{teams.map((team, index) => (
							<tr
								key={index}
								className={`border-b  dark:border-gray-700 ${
									index % 2 === 0
										? 'bg-gray-100 dark:bg-darksecoundry dark:text-blue-100'
										: 'dark:bg-[#044875] dark:text-blue-50'
								} hover:bg-blue-200 dark:hover:bg-darkthird dark:hover:text-white`}>
								<td className='py-2.5 px-4 text-sm sm:text-base text-nowrap'>
									{team.club}
								</td>
								<td className='py-3 px-4 text-sm sm:text-base'>
									{team.played}
								</td>
								<td className='py-3 px-4 text-sm sm:text-base'>
									{team.points}
								</td>
								<td className='py-3 px-4 text-sm sm:text-base'>{team.goals}</td>
								<td className='py-3 px-4 text-sm sm:text-base'>{team.wins}</td>
								<td className='py-3 px-4 text-sm sm:text-base'>
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

export default ContainerTable;
