'use client';

import React, { useState, useEffect } from 'react';
import { IoIosNotifications, IoIosArrowDropdownCircle } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { RiLiveFill } from 'react-icons/ri';
import { BsChatTextFill, BsMicrosoftTeams } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import { FcDownload } from 'react-icons/fc';

type SidebarItem = {
	id: string;
	icon: React.ReactNode;
	label: string;
	href: string;
};

const SidebarData: SidebarItem[] = [
	{
		id: 'notifications',
		icon: <IoIosNotifications className='text-2xl' />,
		label: 'Notification',
		href: '#',
	},
	{
		id: 'chat',
		icon: <BsChatTextFill className='text-xl' />,
		label: 'Chat with AI',
		href: '#',
	},
	{
		id: 'standing',
		icon: <FaChartLine className='text-xl' />,
		label: 'Standing',
		href: '#',
	},
	{
		id: 'shop',
		icon: <FaCartShopping className='text-xl' />,
		label: 'Shop',
		href: '#',
	},
	{
		id: 'settings',
		icon: <CiSettings className='text-2xl' />,
		label: 'Settings',
		href: '#',
	},
];
type MenuItem = {
	icon?: React.ReactNode;
	label: string;
	href?: string;
	subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
	{
		icon: <MdOutlineDashboard />,
		label: 'Dashboard',
		href: '#',
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your Teams',
		subItems: [
			{ label: 'Manchester City', href: '#' },
			{ label: 'Arsenal', href: '#' },
			{ label: 'Liverpool', href: '#' },
			{ label: 'Barcenlona', href: '#' },
			{ label: 'tottenham', href: '#' },
		],
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your players',
		subItems: [
			{ label: 'messi', href: '#' },
			{ label: 'salah', href: '#' },
			{ label: 'treka', href: '#' },
			{ label: 'marmoush', href: '#' },
			{ label: 'inesta', href: '#' },
		],
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your trophies',
		subItems: [
			{ label: 'Banned Users', href: '#' },
			{ label: 'Calendar', href: '#' },
		],
	},
];

const LeftSidebar: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// Toggle dark mode
	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);

	return (
		<div className='lg:w-1/6 h-screen md:pt-20 md:-mt-20 overflow-hidden relative rounded-lg bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary '>
			<div className='flex h-full'>
				{/* Sidebar */}
				<div className='w-16 bg-secoundry dark:bg-darkprimary text-darkprimary dark:text-primary flex flex-col '>
					{/* Logo */}
					<div className='p-4'>
						<div className='grid size-10 font-bold place-content-center rounded-lg bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary text-lg'>
							H
						</div>
					</div>
					<div className='p-4'>
						<div className='grid size-10 font-bold place-content-center rounded-lg  bg-red-600 dark:bg-red-600 text-blue-200 dark:text-primary text-lg'>
							<RiLiveFill className='text-xl animate-pulse' />
						</div>
					</div>

					{/* Menu Items */}
					<div className='px-2 space-y-4'>
						{SidebarData.map((item) => (
							<a
								key={item.id}
								href={item.href}
								className='group relative flex justify-center rounded px-2 py-1.5 text-blue-500 dark:text-blue-200 hover:bg-gray-50 hover:text-darkprimary dark:hover:bg-darkthird'>
								{item.icon}
								<span className='invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'>
									{item.label}
								</span>
							</a>
						))}
					</div>
					{/* Logout */}
				</div>

				{/* Main Section */}
				<div className='flex-1 bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary'>
					<div className='px-2 py-6 text-nowrap'>
						<ul className='space-y-4'>
							{menuItems.map((item, index) => (
								<li key={index}>
									{item.subItems ? (
										<details className='group'>
											<summary className='flex cursor-pointer items-center  justify-between rounded-lg px-2 py-2 text-darksecoundry hover:bg-secoundry dark:text-secoundry hover:text-darkprimary dark:hover:bg-darkthird'>
												<span className='flex items-center gap-2 text-sm font-medium text-darkthird dark:text-secoundry'>
													<div className='text-indigo-500  text-lg'>
														{item.icon}
													</div>{' '}
													{item.label}
												</span>
												<span className='transition text-lg duration-300 group-open:rotate-180 text-darkthird dark:text-darkforth'>
													<IoIosArrowDropdownCircle />
												</span>
											</summary>
											<ul className='mt-2 space-y-1 px-4'>
												{item.subItems.map((subItem, subIndex) => (
													<li key={subIndex}>
														<a
															href={subItem.href}
															className='block rounded-lg px-4 py-2 text-sm font-medium text-darksecoundry hover:bg-secoundry dark:text-secoundry hover:text-darkprimary dark:hover:bg-darkthird'>
															{subItem.label}
														</a>
													</li>
												))}
											</ul>
										</details>
									) : (
										<div>
											<a
												href={item.href}
												className='flex items-center gap-2 rounded-lg bg-secoundry dark:bg-darkthird px-4 py-2 text-md font-medium text-darksecoundry dark:text-primary'>
												{item.icon} {item.label}
											</a>
											<div className='flex my-6 justify-center'>
												<div className='w-16 h-[2px] rounded-full bg-darkforth dark:bg-darkthird inline-flex'></div>
											</div>
										</div>
									)}
								</li>
							))}
							<div className='flex my-6 justify-center'>
								<div className='w-16 h-[2px] rounded-full bg-darkforth dark:bg-darkthird inline-flex'></div>
							</div>
							<div>
								<a
									href={'#'}
									className='flex items-center gap-2 rounded-lg hover:bg-secoundry dark:hover:bg-darkthird px-4 py-2 text-md font-medium text-darksecoundry dark:text-primary'>
									<div className='text-indigo-500  text-xl'>
										<CiSettings />
									</div>{' '}
									Setting
								</a>
							</div>
							<div>
								<a
									href={'#'}
									className='flex items-center gap-2 rounded-lg hover:bg-secoundry dark:hover:bg-darkthird px-4 py-2 text-md font-medium text-darksecoundry dark:text-primary'>
									<div className='text-indigo-500  text-xl'>
										<FcDownload />
									</div>{' '}
									Download
								</a>
							</div>
							<div
								className={`mt-4 mb-1 ${
									isDarkMode ? 'bg-darkprimary' : 'bg-secoundry'
								} dark:text-secoundry text-darksecoundry p-3  rounded-full shadow-glow hover:shadow-sm dark:shadow-sm dark:hover:shadow-custom-dark flex items-center justify-around cursor-pointer`}
								onClick={() => setIsDarkMode(!isDarkMode)}>
								<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
								<div
									className={`w-6 h-6 rounded-full ${
										isDarkMode ? 'bg-secoundry' : 'bg-darksecoundry'
									}`}></div>
							</div>
						</ul>
					</div>
				</div>

				<div className='py-6 px-3 -bottom-1 absolute w-full'>
					<button
						type='button'
						className='flex items-center gap-2 sm:gap-3 w-full px-6 sm:p-3  text-sm sm:text-base bg-secoundry dark:bg-darkprimary rounded-full text-darksecoundry dark:text-gray-100 hover:bg-red-600 hover:text-white dark:hover:bg-darkthird focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'>
						<span className='flex-grow text-left text-xl sm:text-sm'>
							Logout
						</span>
						<div className='flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-darksecoundry text-red-500 dark:text-red-500'>
							<IoLogOut className='text-lg sm:text-xl' />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
