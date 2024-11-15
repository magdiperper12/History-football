'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSearch, FaCog, FaBars, FaSkyatlas } from 'react-icons/fa';
import image from '../image/logo2-remove.png';
import Image from 'next/image';
import { FaFaceDizzy, FaFaceSmile } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';

// Define types for the navbar data structure
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

const navbarData = {
	links: [
		{ text: 'Home', href: '/' },
		{ text: 'Live match', href: '/live-match' },
		{ text: 'Trophies', href: '/trophies' },
		{ text: 'History', href: '/history' }, // Corrected the typo 'hystory' to 'history'
	] as NavbarLink[],
	icons: [
		{ id: 'search', icon: <FaSearch size={20} /> },
		{ id: 'settings', icon: <FaCog size={20} /> },
		{ id: 'profile', icon: <FaFaceSmile size={20} /> },
	] as NavbarIcon[],
	languages: [
		{ value: 'en', label: 'English' },
		{ value: 'es', label: 'Spanish' },
		{ value: 'ar', label: 'Arabic' },
	] as NavbarLanguage[],
};

const Navbar = () => {
	const [activeToggle, setActiveToggle] = useState<string | null>(null);
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const [isRTL, setIsRTL] = useState<boolean>(false);

	const handleToggle = (toggleName: string) => {
		setActiveToggle((prev) => (prev === toggleName ? null : toggleName));
	};

	// Toggle dark mode
	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);

	// Toggle RTL layout based on selected language
	const handleLanguageChange = (langValue: string) => {
		const isArabic = langValue === 'ar';
		setIsRTL(isArabic);
		document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
	};

	const renderToggleMenu = (id: string, content: JSX.Element) =>
		activeToggle === id && <div>{content}</div>;

	return (
		<header className='fixed top-0 w-full z-50 shadow-lg bg-white transition-colors duration-300 dark:bg-gray-900 shadow-md dark:shadow-gray-800 shadow-gray-200 pb-1'>
			<div
				className={`container mx-auto flex justify-between items-center px-1 md:px-6  w-full`}>
				{/* Logo */}
				<Link
					href='/'
					className='flex ms-0  items-center justify-center '>
					<Image
						src={image}
						alt='logo'
						className='w-28 h-auto -mx-3 -px-3'
					/>
					<div className='-mx-3 -px-3'>
						<p className='bg-red-700 text-white text-xs  animate-pulse  shadow-red-900 rounded-full px-1'>
							Under Development
						</p>
						<h1 className='text-blue-950 text-xl font-extrabold dark:text-blue-200 text-3xl tracking-wide'>
							HISTORIC
						</h1>
					</div>
				</Link>

				<nav className='hidden md:flex gap-5'>
					{navbarData.links.map((link, index) => (
						<Link
							key={link.text}
							href={link.href}
							className={`text-lg font-bold  text-gray-700 dark:text-white hover:text-[#6c83ff] transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn`}
							style={{ animationDelay: `${250 * index}ms` }}>
							{link.text}
						</Link>
					))}
				</nav>

				{/* Icons for Desktop */}
				<div className='flex items-center gap-3 md:gap-5'>
					{navbarData.icons.map(({ id, icon }) => (
						<div
							key={id}
							className='relative'>
							<input
								type='checkbox'
								id={id}
								className='hidden peer'
								checked={activeToggle === id}
								onChange={() => handleToggle(id)}
							/>
							<label
								htmlFor={id}
								className='end-0 cursor-pointer hover:scale-110 transition-all text-blue-900 dark:text-blue-100'>
								{icon}
							</label>

							{id === 'search' &&
								renderToggleMenu(
									id,
									<div className='w-52 flex gap-1  items-center justify-around px-3 py-2 rounded-md bg-blue-200 text-blue-600 dark:bg-blue-700 text-blue-950 dark:text-white outline-none my-2 absolute end-5'>
										<FaSearch />
										<input
											className='w-full outline-none	bg-blue-200 dark:bg-blue-700 '
											type='text'
											placeholder='Search...'
										/>
									</div>
								)}

							{id === 'settings' &&
								renderToggleMenu(
									id,
									<div className='absolute flex justify-center items-center flex-col end-5 w-44 px-4 py-2 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-white my-2 shadow-lg'>
										<label>Language</label>
										<ul className=' w-full mt-2'>
											{navbarData.languages.map((lang) => (
												<li key={lang.value}>
													<button
														type='button'
														onClick={() => handleLanguageChange(lang.value)}
														className='inline-flex w-full items-center  text-sm  outline-none border-none'>
														<div className='inline-flex w-full px-4 py-2 my-1 items-center bg-blue-200 dark:bg-blue-400 dark:text-gray-900 dark:text-gray-100 hover:bg-blue-300 dark:hover:text-blue-50 dark:hover:bg-blue-800 rounded-md'>
															<svg
																aria-hidden='true'
																className='h-3.5 w-3.5 rounded-full me-2'
																xmlns='http://www.w3.org/2000/svg'
																id='flag-icon-css-de'
																viewBox='0 0 512 512'>
																<path
																	fill='#ffce00'
																	d='M0 341.3h512V512H0z'
																/>
																<path d='M0 0h512v170.7H0z' />
																<path
																	fill='#d00'
																	d='M0 170.7h512v170.6H0z'
																/>
															</svg>
															{lang.label}
														</div>
													</button>
												</li>
											))}
										</ul>

										{/* Dark Mode Toggle at the Bottom */}
										<div
											className={`mt-4 ${
												isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
											} text-white p-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer`}
											onClick={() => setIsDarkMode(!isDarkMode)}>
											<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
											<div
												className={`w-6 h-6 rounded-full ${
													isDarkMode ? 'bg-blue-200' : 'bg-blue-950'
												}`}></div>
										</div>
									</div>
								)}

							{id === 'profile' &&
								renderToggleMenu(
									id,
									<div className='absolute flex justify-center items-center flex-col end-5 w-44 px-4 py-2 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-white my-2 shadow-lg'>
										<label>your name</label>
										<ul className=' w-full mt-2'>
											{navbarData.languages.map((lang) => (
												<li key={lang.value}>
													<button
														type='button'
														onClick={() => handleLanguageChange(lang.value)}
														className='inline-flex w-full items-center  text-sm  outline-none border-none'>
														<div className='inline-flex w-full px-4 py-2 my-1 items-center bg-blue-200 dark:bg-blue-400 dark:text-gray-900 dark:text-gray-100 hover:bg-blue-300 dark:hover:text-blue-50 dark:hover:bg-blue-800 rounded-md'>
															<svg
																aria-hidden='true'
																className='h-3.5 w-3.5 rounded-full me-2'
																xmlns='http://www.w3.org/2000/svg'
																id='flag-icon-css-de'
																viewBox='0 0 512 512'>
																<path
																	fill='#ffce00'
																	d='M0 341.3h512V512H0z'
																/>
																<path d='M0 0h512v170.7H0z' />
																<path
																	fill='#d00'
																	d='M0 170.7h512v170.6H0z'
																/>
															</svg>
															{lang.label}
														</div>
													</button>
												</li>
											))}
										</ul>

										{/* Dark Mode Toggle at the Bottom */}
										<div
											className={`mt-4 ${
												isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
											} text-white p-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer`}
											onClick={() => setIsDarkMode(!isDarkMode)}>
											<span>{'Setting '}</span>
											<div
												className={`w-6 h-6 rounded-full flex justify-center items-center ${
													isDarkMode
														? 'bg-blue-200 text-blue-900'
														: 'bg-blue-950'
												}`}>
												<CiSettings />
											</div>
										</div>
									</div>
								)}
						</div>
					))}

					{/* Hamburger Menu for Mobile */}
					<input
						type='checkbox'
						id='navbarToggle'
						className='hidden peer'
					/>
					<label
						htmlFor='navbarToggle'
						className='md:hidden text-gray-800 dark:text-white p-2 rounded-lg hover:bg-[#e0e0e0] dark:hover:bg-blue-500 cursor-pointer'>
						<FaBars size={20} />
					</label>
				</div>
			</div>

			{/* Mobile Navbar (Toggleable) */}
			<nav
				className={`peer-checked:block hidden md:hidden ${
					isDarkMode ? 'bg-gray-900' : 'bg-[#0b0e14]'
				} py-4 px-6 space-y-4`}>
				{navbarData.links.map((link) => (
					<Link
						key={link.text}
						href={link.href}
						className='block text-white hover:text-[#6c83ff] transition-all duration-200'>
						{link.text}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Navbar;
