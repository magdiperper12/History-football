'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import stadiumImage from '../../assets/image/stadio-2-removebg-preview.png';

// Player and Position Types
interface Player {
	name: string;
	top: string;
	left: string;
}

// Player data with position attached
const players: Player[] = [
	{ name: 'neymar', top: '8%', left: '40%' },
	{ name: 'messi', top: '8%', left: '54%' },
	{ name: 'salah', top: '15%', left: '30%' },
	{ name: 'ronaldo', top: '15%', left: '60%' },
	{ name: 'treka', top: '40%', left: '35%' },
	{ name: 'vandik', top: '40%', left: '65%' },
	{ name: 'yamal', top: '65%', left: '23%' },
	{ name: 'levandwiski', top: '70%', left: '40%' },
	{ name: 'saka', top: '70%', left: '60%' },
	{ name: 'haland', top: '65%', left: '70%' },
	{ name: 'alison', top: '85%', left: '48%' },
];

// Alternative team data with position attached
const alternativePlayers: Player[] = [
	{ name: 'mbappe', top: '8%', left: '47%' },
	{ name: 'kante', top: '20%', left: '47%' },
	{ name: 'de Bruyne', top: '15%', left: '30%' },
	{ name: 'lewandowski', top: '15%', left: '60%' },
	{ name: 'benzema', top: '40%', left: '27%' },
	{ name: 'maguire', top: '40%', left: '65%' },
	{ name: 'hakimi', top: '43%', left: '45%' },
	{ name: 'zidane', top: '63%', left: '20%' },
	{ name: 'modric', top: '70%', left: '48%' },
	{ name: 'suarez', top: '63%', left: '74%' },
	{ name: 'bale', top: '85%', left: '48%' },
];

// Props Interface
interface TeamFormProps {
	teamName: string;
	teamName2: string;
}

// Player Position Component
const PlayerPosition: React.FC<{ player: Player }> = ({ player }) => (
	<div
		className='absolute z-10 text-white font-bold text-center'
		style={{ top: player.top, left: player.left }}>
		{player.name}
	</div>
);

// Main Component
const TeamForm: React.FC<TeamFormProps> = ({ teamName, teamName2 }) => {
	const [isFirstTable, setIsFirstTable] = useState(true);

	// Toggle between teams
	const toggleTable = () => setIsFirstTable((prev) => !prev);

	const playersToRender = isFirstTable ? players : alternativePlayers;

	return (
		<div className='relative flex flex-col items-center justify-center'>
			{/* Toggle Button */}
			<button
				onClick={toggleTable}
				className='bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition duration-300'>
				{isFirstTable
					? `Switch to ${teamName}`
					: `Switch to ${teamName2 || 'secound team'}`}
			</button>

			{/* Current Team or Alternative Team */}
			<div className='relative'>
				<Image
					src={stadiumImage}
					alt='Stadium'
					className='h-[350px] md:h-[400px] lg:h-[580px] w-auto m-auto'
				/>

				{/* Render players and their positions */}
				{playersToRender.map((player, index) => (
					<PlayerPosition
						key={index}
						player={player}
					/>
				))}
			</div>
		</div>
	);
};

export default TeamForm;
