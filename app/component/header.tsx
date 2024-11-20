'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSearch, FaCog, FaBars, FaSkyatlas } from 'react-icons/fa';
import image from '../image/logo2-remove.png';
import Image from 'next/image';
import { FaFaceSmile } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';

// Define types for the navbar data structure
interface NavbarLink {
	text: string;
	href: string;
}

interface NavbarIcon {
	id: string;
	icon: JSX.Element | string;
}

interface NavbarLanguage {
	value: string;
	label: string;
}

const navbarData = {
	links: [
		{ text: 'Home', href: '/' },
		{ text: 'Live match', href: '/live-match' },
		{ text: 'Player', href: '/trophies' },
		{ text: 'History', href: '/history' },
		{ text: 'Table', href: '/trophies/jadwal' },
		{ text: 'Social', href: '/social' },
	] as NavbarLink[],
	icons: [
		{ id: 'search', icon: <FaSearch size={20} /> },
		{ id: 'settings', icon: <GrLanguage size={20} /> },
		{ id: 'profile', icon: <FaFaceSmile size={20} /> },
		// <div className='hidden md:relative md:block'>
		// 	<button
		// 		type='button'
		// 		className='overflow-hidden rounded-full border border-gray-300 shadow-inner'>
		// 		<span className='sr-only'>Toggle dashboard menu</span>

		// 		<img
		// 			src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		// 			alt=''
		// 			className='size-10 object-cover'
		// 		/>
		// 	</button>
		// </div>,
	] as NavbarIcon[],
	languages: [
		{ value: 'en', label: 'English' },
		{ value: 'es', label: 'Spanish' },
		{ value: 'ar', label: 'Arabic' },
	] as NavbarLanguage[],
};

const Navbar = () => {
	const [activeToggle, setActiveToggle] = useState<string | null>(null);

	const [isRTL, setIsRTL] = useState<boolean>(false);

	const handleToggle = (toggleName: string) => {
		setActiveToggle((prev) => (prev === toggleName ? null : toggleName));
	};

	// Toggle dark mode

	// Toggle RTL layout based on selected language
	const handleLanguageChange = (langValue: string) => {
		const isArabic = langValue === 'ar';
		setIsRTL(isArabic);
		document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
	};

	const renderToggleMenu = (id: string, content: JSX.Element) =>
		activeToggle === id && <div>{content}</div>;

	return (
		<header className='fixed top-0 w-full z-50 shadow-lg bg-primary transition-colors duration-300 dark:bg-darkprimary dark:shadow-darkprimary shadow-secoundry pb-1'>
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
						<p className='bg-red-700 text-white text-xs w-auto  animate-pulse text-center shadow-red-900 rounded-full px-1'>
							Under Development
						</p>
						<h1 className=' font-extrabold dark:text-secoundry text-3xl text-darkthird  tracking-wide'>
							HISTORIC
						</h1>
					</div>
				</Link>

				<nav className='hidden md:flex gap-5'>
					{navbarData.links.map((link, index) => (
						<Link
							key={link.text}
							href={link.href}
							className={`text-lg font-bold  text-darkthird dark:text-primary hover:text-[#6c83ff] transition-opacity duration-700 ease-in-out opacity-0 animate-fadeIn`}
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
								className='end-0 cursor-pointer hover:scale-110 transition-all text-darkthird dark:text-primary dark:hover:text-forth transform '>
								{icon}
							</label>

							{id === 'search' &&
								renderToggleMenu(
									id,

									<div className=' flex w-96 gap-1  items-center justify-around px-3 py-2 rounded-md bg-darkforth dark:bg-darksecoundry text-darkthird dark:text-primary outline-none my-2 absolute end-5'>
										<FaSearch />
										<input
											className='w-full outline-none	bg-darkforth dark:bg-darksecoundry '
											type='text'
											placeholder='Search...'
										/>
									</div>
								)}

							{id === 'settings' &&
								renderToggleMenu(
									id,
									<div className='absolute flex justify-center items-center flex-col end-5 w-44 px-4 py-2 rounded-md bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary my-2 shadow-lg'>
										<label>Language</label>
										<ul className=' w-full mt-2'>
											{navbarData.languages.map((lang) => (
												<li key={lang.value}>
													<button
														type='button'
														onClick={() => handleLanguageChange(lang.value)}
														className='inline-flex w-full items-center  text-sm  outline-none border-none'>
														<div className='inline-flex w-full px-4 py-2 my-1 items-center bg-secoundry dark:bg-darksecoundry text-darkprimary  dark:text-secoundry hover:bg-blue-300 dark:hover:text-primary dark:hover:bg-darkthird rounded-md'>
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
									</div>
								)}

							{id === 'profile' &&
								renderToggleMenu(
									id,
									<div
										className='absolute end-0 z-10 mt-0.5 w-56 divide-y divide-secoundry dark:divide-darksecoundry rounded-lg border border-secoundry dark:border-darksecoundry bg-primary dark:bg-darkprimary shadow-lg'
										role='menu'>
										<div className='p-2'>
											<a
												href='#'
												className='block rounded-lg px-4 py-2 text-sm text-darksecoundry hover:bg-primary dark:text-secoundry dark:bg-darkprimary  hover:text-darkprimary dark:hover:text-forth'
												role='menuitem'>
												My profile
											</a>

											<a
												href='#'
												className='block rounded-lg px-4 py-2 text-sm text-darksecoundry hover:bg-primary dark:text-secoundry dark:bg-darkprimary  hover:text-darkprimary dark:hover:text-forth'
												role='menuitem'>
												Billing summary
											</a>

											<a
												href='#'
												className='block rounded-lg px-4 py-2 text-sm text-darksecoundry hover:bg-primary dark:text-secoundry dark:bg-darkprimary  hover:text-darkprimary dark:hover:text-forth'
												role='menuitem'>
												Team settings
											</a>
										</div>

										<div className='p-2 '>
											<form
												method='POST'
												action='#'>
												<Link
													href={'/Login'}
													type='submit'
													className='flex w-full items-center justify-center m-auto gap-2 rounded-xl px-4 py-2 text-sm text-blue-600 font-bold dark:text-red-400 hover:bg-secoundry dark:hover:bg-darksecoundry '
													role='menuitem'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth='1.5'
														stroke='currentColor'
														className='size-4'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
														/>
													</svg>
													Login
												</Link>
											</form>
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
				className={`peer-checked:block hidden md:hidden 
				dark:bg-gray-900 bg-[#0b0e14]
				 py-4 px-6 space-y-4`}>
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
