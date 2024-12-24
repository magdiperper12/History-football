'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import image from '../../../assets/image/logo2-remove.png';
import Image from 'next/image';
import { GrLanguage } from 'react-icons/gr';
import { IoIosNotifications } from 'react-icons/io';
import Notifications from './Notifications';
import NestedNav from './NestedNav';
import { UserButton, useUser } from '@clerk/nextjs';
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
	flag: JSX.Element;
}

const navbarData = {
	icons: [
		{
			id: 'search',
			icon: <FaSearch size={20} />,
		},
		{ id: 'settings', icon: <GrLanguage size={20} /> },
		{
			id: 'notifications',
			icon: (
				<div>
					<span className='bg-red-600 w-5 h-5 flex justify-center items-center text-white text-xs rounded-full absolute -top-1 -end-1'>
						11
					</span>
					<IoIosNotifications className='text-3xl' />
				</div>
			),
		},
	] as NavbarIcon[],
	languages: [
		{
			value: 'en',
			label: 'English',
			flag: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 480'
					className='h-3.5 w-3.5 rounded-full me-2'
					aria-hidden='true'>
					<rect
						width='640'
						height='480'
						fill='#fff'
					/>
					<rect
						x='272'
						y='0'
						width='96'
						height='480'
						fill='#ce1126'
					/>
					<rect
						x='0'
						y='192'
						width='640'
						height='96'
						fill='#ce1126'
					/>
				</svg>
			),
		},
		{
			value: 'ar',
			label: 'العربيه',
			flag: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 640 480'
					className='h-3.5 w-3.5 rounded-full me-2'
					aria-hidden='true'>
					<rect
						width='640'
						height='480'
						fill='#006c35'
					/>
					<text
						x='320'
						y='240'
						text-anchor='middle'
						font-size='48'
						font-family='Arial, sans-serif'
						fill='#fff'
						transform='translate(0, 20)'>
						لا إله إلا الله محمد رسول الله
					</text>
					<rect
						x='200'
						y='320'
						width='240'
						height='20'
						rx='10'
						ry='10'
						fill='#fff'
					/>
				</svg>
			),
		},
	] as NavbarLanguage[],
};

const Navbar = () => {
	const [activeToggle, setActiveToggle] = useState<string | null>(null);
	const [isRTL, setIsRTL] = useState<boolean>(false);
	const handleToggle = (toggleName: string) => {
		setActiveToggle((prev) => (prev === toggleName ? null : toggleName));
	};
	const handleLanguageChange = (langValue: string) => {
		const isArabic = langValue === 'ar';
		setIsRTL(isArabic);
		document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
	};

	const renderToggleMenu = (id: string, content: JSX.Element) =>
		activeToggle === id && <div>{content}</div>;

	const [login, setLogin] = useState(false);
	const { user } = useUser();
	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	return (
		!login && (
			<header className='fixed top-0  w-full z-50 shadow-lg bg-white transition-colors duration-300 dark:bg-darkprimary dark:shadow-darkprimary shadow-primary  py-2 '>
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
						<div className='-mx-3 hidden md:block -px-3'>
							<p className='bg-red-700 text-white text-xs w-auto  animate-pulse text-center shadow-red-900 rounded-full px-1'>
								Under Development
							</p>
							<h1 className='bg-gradient-to-r from-red-700 dark:from-red-600 dark:via-yellow-400 dark:to-darksecoundry via-yellow-600 to-darksecoundry bg-clip-text md:text-2xl font-extrabold text-transparent sm:text-xl'>
								HISTORIC
							</h1>
						</div>
					</Link>
					<NestedNav />
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

										<div className=' flex w-96 gap-1 shadow-md shadow-third dark:shadow-black  items-center rounded-lg border-2 border-blue-500 justify-around px-3 py-2   text-darkthird dark:text-primary outline-none my-2 absolute end-5'>
											<FaSearch />
											<input
												className='w-full outline-none	bg-transparent'
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
																{lang.flag}
																{lang.label}
															</div>
														</button>
													</li>
												))}
											</ul>
										</div>
									)}

								{id === 'notifications' &&
									renderToggleMenu(id, <Notifications />)}
							</div>
						))}
						{!user ? (
							<div className='flex items-center gap-4'>
								<div className='sm:flex sm:gap-4'>
									<a
										className='block rounded-md text-darkthird border-2 border-darkthird dark:text-darkforth dark:border-darkforth px-5 py-1.5 text-sm font-medium  transition hover:bg-darkthird hover:text-white dark:hover:bg-darkforth dark:hover:text-darksecoundry '
										href='/sign-up'>
										login
									</a>
								</div>
							</div>
						) : (
							<div className='flex justify-center items-center gap-5'>
								<UserButton />
							</div>
						)}
						{/* Hamburger Menu for Mobile */}
					</div>
				</div>

				{/* Mobile Navbar (Toggleable) */}
			</header>
		)
	);
};

export default Navbar;
