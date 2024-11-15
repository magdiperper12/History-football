'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../image/logo2-remove.png';

interface NavbarLink {
	text: string;
	href: string;
}

interface NavbarIcon {
	id: string;
	icon: JSX.Element;
}

interface NavbarLanguage {
	value: string;
	label: string;
}

const NestedNavbar: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const navbarData = {
		links: [
			{ text: 'Assistant', href: '/trophies/jadwal/sonaa3' },
			{ text: 'TopScorers', href: '/trophies/jadwal/haddaf' },
			{ text: 'Matches', href: '/trophies/jadwal/matches' }, //
			{ text: 'Table', href: '/trophies/jadwal/table' }, //
		] as NavbarLink[],
	};

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);

	return (
		<div>
			<div className='w-full  bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-col p-10'>
				<Image
					src={logo}
					alt='Football Logo'
					className='rounded-lg h-44 w-auto'
				/>
				<h1 className='md:text-6xl text-3xl -mt-5 text-blue-900 dark:text-blue-200 font-bold'>
					Primere League
				</h1>
			</div>

			<header className='w-full md:px-10 px-3 py-8  bg-white dark:bg-gray-900 transition-colors duration-300'>
				<div className='container md:mx-auto flex  flex-col md:flex-row justify-between items-center '>
					<select className='py-1 px-2  dark:bg-gray-800 bg-gray-200 outline-none  rounded-lg '>
						<option value='2023'>2023 / 2024</option>
						<option value='2022'>2022 / 2023</option>
						<option value='2021'>2021 / 2022</option>
						<option value='2020'>2020 / 2021</option>
						<option value='2019'>2019 / 2020</option>
					</select>

					<nav className='hidden md:flex gap-5'>
						{navbarData.links.map((link, index) => (
							<Link
								key={link.text}
								href={link.href}
								className='text-lg font-bold text-blue-500 dark:text-blue-100 hover:text-[#6c83ff] dark:hover:text-[#6c83ff] transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn font-bold text-xl'
								style={{ animationDelay: `${250 * index}ms` }}>
								{link.text}
							</Link>
						))}
					</nav>

					<nav
						className={`md:hidden ${
							isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
						} py-4 px-3 mt-3 text-xl flex gap-4 `}>
						{navbarData.links.map((link) => (
							<Link
								key={link.text}
								href={link.href}
								className=' text-blue-600 dark:text-white hover:text-[#6c83ff] transition-all duration-200  '>
								{link.text}
							</Link>
						))}
					</nav>
				</div>
			</header>
		</div>
	);
};

export default NestedNavbar;
