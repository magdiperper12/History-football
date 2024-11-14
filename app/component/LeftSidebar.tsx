'use client';

import React, { useState, ReactNode } from 'react';
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
import Image from 'next/image';
import image from '../../image/salah.png';
import image2 from '../../image/logo2-remove.png';

const menuItems = [
	{ icon: <FaBell />, label: 'Notifications' },
	{ icon: <FaTachometerAlt />, label: 'Dashboard' },
	{ icon: <FaFootballBall />, label: 'Live Match' },
	{ icon: <FaComments />, label: 'Chat with AI' },
	{ icon: <FaChartLine />, label: 'Standings' },
	{ icon: <FaStore />, label: 'Shop' },
];

const clubs = [
	{ imgSrc: image, name: 'Club Name' },
	{ imgSrc: image2, name: 'Another Club' },
];

const players = [
	{ imgSrc: image, name: 'Salah' },
	{ imgSrc: image2, name: 'Lionel Messi' },
];

type SidebarSectionProps = {
	title: string;
	children: ReactNode; // Accepts any valid React children
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
	<div className='space-y-4'>
		<h2 className='text-lg font-semibold'>{title}</h2>
		{children}
	</div>
);

const SidebarButton = ({ icon, label, onClick }) => (
	<button
		className='flex items-center justify-center space-x-2 p-2 rounded hover:bg-opacity-80 transition-colors'
		onClick={onClick}>
		{icon}
		<span>{label}</span>
	</button>
);

const LeftSidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<div className='md:w-1/5 p-4 rounded-lg bg-white dark:bg-gray-800 text-slate-600  dark:text-gray-200'>
			{/* Toggle Button for Small Screens */}
			<button
				className='md:hidden mb-4 p-2 bg-blue-600 text-white rounded'
				onClick={toggleMenu}>
				{isMenuOpen ? 'Close Menu' : 'Open Menu'}
			</button>

			{/* Sidebar Content */}
			<div
				className={`flex flex-col space-y-6 ${
					isMenuOpen ? 'block' : 'hidden'
				} md:block`}>
				{/* Last Match Result */}
				<SidebarSection title='Last Match Result'>
					<div className='flex items-center space-x-2'>
						<FaTachometerAlt className='text-blue-500 dark:text-blue-400' />
						<span>Team A 2 - 1 Team B</span>
					</div>
				</SidebarSection>

				{/* Sidebar Menu */}
				<SidebarSection title='Menu'>
					{menuItems.map((item, index) => (
						<div
							key={index}
							className='flex items-center space-x-3 text-blue-500 dark:text-blue-400'>
							{item.icon}
							<span className='text-slate-600  dark:text-gray-200'>
								{item.label}
							</span>
						</div>
					))}
				</SidebarSection>

				{/* Search Bar */}
				<div className='flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded my-6'>
					<FaSearch className='text-blue-500 dark:text-blue-400' />
					<input
						type='text'
						className='w-full bg-transparent outline-none'
						placeholder='Search...'
					/>
				</div>

				{/* Football Clubs */}
				<SidebarSection title='Football Clubs'>
					{clubs.map((club, index) => (
						<div
							key={index}
							className='flex items-center space-x-3'>
							<Image
								src={club.imgSrc}
								alt={club.name}
								width={24}
								height={24}
								className='rounded-full'
							/>
							<span>{club.name}</span>
						</div>
					))}
				</SidebarSection>

				{/* Best Football Players */}
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

				{/* Logout Button */}
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
