'use client';

import React, { useState } from 'react';
import {
	FaBell,
	FaComments,
	FaSearch,
	FaTachometerAlt,
	FaChartLine,
	FaFootballBall,
	FaStore,
	FaSignOutAlt,
} from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import image from '../image/salah.png';
import image2 from '../image/logo2-remove.png';

type MenuItem = { icon: React.ReactNode; label: string };
const menuItems: MenuItem[] = [
	{ icon: <FaBell />, label: 'Notifications' },
	{ icon: <FaTachometerAlt />, label: 'Dashboard' },
	{ icon: <FaFootballBall />, label: 'Live Match' },
	{ icon: <FaComments />, label: 'Chat with AI' },
	{ icon: <FaChartLine />, label: 'Standings' },
	{ icon: <FaStore />, label: 'Shop' },
];
type Club = { imgSrc?: StaticImageData; name: string; logo?: string };

const clubs: Club[] = [
	{ imgSrc: image, name: 'Club Name' },
	{ imgSrc: image2, name: 'Another Club' },
];

type Player = { imgSrc: StaticImageData; name: string };
const players: Player[] = [
	{ imgSrc: image, name: 'Salah' },
	{ imgSrc: image2, name: 'Lionel Messi' },
];

type Match = { clubA: Club; clubB: Club; score: string };
const matches: Match[] = [
	{
		clubA: { name: 'Barcelona', logo: 'https://via.placeholder.com/40' },
		clubB: { name: 'Real Madrid', logo: 'https://via.placeholder.com/40' },
		score: '2 - 1',
	},
];

type SidebarSectionProps = { title: string; children: React.ReactNode };
const SidebarSection = ({ title, children }: SidebarSectionProps) => (
	<div className='space-y-4'>
		<h2 className='text-lg font-semibold'>{title}</h2>
		{children}
	</div>
);

const SidebarButton = ({
	icon,
	label,
	onClick,
}: {
	icon: React.ReactNode;
	label: string;
	onClick: () => void;
}) => (
	<button
		className='flex items-center justify-center space-x-2 p-2 rounded hover:bg-opacity-80 transition-colors'
		onClick={onClick}>
		{icon}
		<span>{label}</span>
	</button>
);

const MatchCard = ({ match }: { match: Match }) => (
	<div className='flex items-center w-full'>
		<div className='flex items-center justify-start space-x-2 lg:space-x-0  bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100 px-2  py-2 lg:px-0  w-5/12 rounded-s-full'>
			<img
				src={match.clubA.logo}
				alt={match.clubA.name}
				className='w-10 h-10 lg:h-5 lg:w-5 rounded-full'
			/>
			<span className=' text-sm font-semibold'>{match.clubA.name}</span>
		</div>
		<div className=' text-sm font-bold  text-blue-900 dark:text-blue-100 p-3 lg:p-3 text-nowrap'>
			{match.score}
		</div>
		<div className='flex items-center justify-end space-x-2 lg:space-x-0 dark:bg-blue-900 bg-blue-200 text-blue-900 dark:text-blue-100 px-2 py-2 lg:px-0 w-5/12 rounded-e-full'>
			<span className=' text-sm font-semibold'>{match.clubB.name}</span>
			<img
				src={match.clubB.logo}
				alt={match.clubB.name}
				className='w-10 h-10 lg:h-5 lg:w-5 rounded-full'
			/>
		</div>
	</div>
);

const LeftSidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<div className='lg:w-1/5 p-4 rounded-lg bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-200'>
			<button
				className='lg:hidden mb-4 p-2 bg-blue-600 text-white rounded'
				onClick={toggleMenu}>
				{isMenuOpen ? 'Close Menu' : 'Open Menu'}
			</button>
			<div
				className={`flex flex-col space-y-6 ${
					isMenuOpen ? 'block' : 'hidden'
				} lg:block`}>
				<SidebarSection title='Last Match Result'>
					<div className='flex flex-col w-full gap-5'>
						{matches.map((match, index) => (
							<MatchCard
								key={index}
								match={match}
							/>
						))}
					</div>
				</SidebarSection>

				<SidebarSection title='Menu'>
					{menuItems.map((item, index) => (
						<div
							key={index}
							className='flex items-center space-x-3 text-blue-500 dark:text-blue-400'>
							{item.icon}
							<span className='text-slate-600 dark:text-gray-200'>
								{item.label}
							</span>
						</div>
					))}
				</SidebarSection>

				<div className='flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded my-6'>
					<FaSearch className='text-blue-500 dark:text-blue-400' />
					<input
						type='text'
						className='w-full bg-transparent outline-none'
						placeholder='Search...'
					/>
				</div>

				<SidebarSection title='Football Clubs'>
					{clubs.map((club, index) => (
						<div
							key={index}
							className='flex items-center space-x-3'>
							<Image
								src={club.imgSrc || image} // Use fallback image
								alt={club.name}
								width={24}
								height={24}
								className='rounded-full'
							/>
							<span>{club.name}</span>
						</div>
					))}
				</SidebarSection>

				<SidebarSection title='Football Players'>
					{players.map((player, index) => (
						<div
							key={index}
							className='flex items-center space-x-3'>
							<Image
								src={player.imgSrc}
								alt={player.name}
								width={24}
								height={24}
								className='rounded-full'
							/>
							<span>{player.name}</span>
						</div>
					))}
				</SidebarSection>

				<div className='mt-8 w-full bg-red-600 text-white hover:bg-red-500'>
					<SidebarButton
						icon={<FaSignOutAlt />}
						label='Logout'
						onClick={() => console.log('Logging out')}
					/>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
