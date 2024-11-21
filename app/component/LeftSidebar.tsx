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
	const [isvisable, setisvisable] = useState(true);
	const togglevisable = () => {
		setisvisable(!isvisable);
	};
	return (
		<div className='lg:w-1/6 h-3/4 md:h-screen md:pt-20 md:-mt-20 md:overflow-hidden relative rounded-lg bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary '>
			<div>
				<div
					onClick={togglevisable}
					className='text-center py-1  md:hidden  font-bold    text-lg'>
					H
				</div>

				<div
					className={` md:h-screen transition-all duration-300  fadeIn md:flex  ${
						isvisable ? `hidden ` : `flex `
					} w-full relative`}>
					{/* Sidebar */}
					<div className='w-16 bg-secoundry dark:bg-darkprimary text-darkprimary dark:text-primary flex flex-col '>
						{/* Logo */}
						<div className='p-4'>
							<div className=' hidden md:grid size-10 font-bold place-content-center rounded-lg bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary text-lg'>
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
						<div className='px-2 py-3'>
							<div className='group relative flex justify-center rounded px-2 py-1.5 text-blue-500 dark:text-blue-200 hover:bg-gray-50 hover:text-darkprimary dark:hover:bg-darkthird'>
								<IoLogOut className='   text-red-500 text-2xl' />
								<span className='invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'>
									Logout
								</span>
							</div>
						</div>
					</div>

					{/* Main Section */}
					<div className='flex-1 mb-20 md:mb-0 bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary'>
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
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { IoIosNotifications, IoIosArrowDropdownCircle } from 'react-icons/io';
// import { CiSettings } from 'react-icons/ci';
// import { RiLiveFill } from 'react-icons/ri';
// import { BsChatTextFill, BsMicrosoftTeams } from 'react-icons/bs';
// import { FaChartLine } from 'react-icons/fa';
// import { MdOutlineDashboard } from 'react-icons/md';
// import { FaCartShopping } from 'react-icons/fa6';
// import { IoLogOut } from 'react-icons/io5';
// import { FcDownload } from 'react-icons/fc';

// type SidebarItem = {
// 	id: string;
// 	icon: React.ReactNode;
// 	label: string;
// 	href: string;
// };

// const SidebarData: SidebarItem[] = [
// 	{
// 		id: 'notifications',
// 		icon: <IoIosNotifications className='text-2xl' />,
// 		label: 'Notification',
// 		href: '#',
// 	},
// 	{
// 		id: 'chat',
// 		icon: <BsChatTextFill className='text-xl' />,
// 		label: 'Chat with AI',
// 		href: '#',
// 	},
// 	{
// 		id: 'standing',
// 		icon: <FaChartLine className='text-xl' />,
// 		label: 'Standing',
// 		href: '#',
// 	},
// 	{
// 		id: 'shop',
// 		icon: <FaCartShopping className='text-xl' />,
// 		label: 'Shop',
// 		href: '#',
// 	},
// 	{
// 		id: 'settings',
// 		icon: <CiSettings className='text-2xl' />,
// 		label: 'Settings',
// 		href: '#',
// 	},
// ];

// const LeftSidebar: React.FC = () => {
// 	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

// 	// Toggle sidebar visibility
// 	const toggleSidebar = () => {
// 		setIsSidebarVisible(!isSidebarVisible);
// 	};

// 	return (
// 		<div className='relative'>
// 			{/* Toggle Button */}
// 			<div
// 				className='grid size-10 font-bold place-content-center rounded-lg bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary text-lg cursor-pointer'
// 				onClick={toggleSidebar}>
// 				H
// 			</div>

// 			{/* Sidebar */}
// 			<div
// 				className={`transition-transform duration-300 transform ${
// 					isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
// 				} fixed top-0 left-0 h-screen w-64 bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary`}>
// 				<div className='flex flex-col h-full'>
// 					<div className='p-4 text-lg font-bold'>Sidebar</div>

// 					{/* Menu Items */}
// 					<div className='space-y-4 px-2'>
// 						{SidebarData.map((item) => (
// 							<a
// 								key={item.id}
// 								href={item.href}
// 								className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-darkthird'>
// 								{item.icon}
// 								{item.label}
// 							</a>
// 						))}
// 					</div>

// 					{/* Dark Mode Toggle */}
// 					<div
// 						className='mt-auto p-3 text-center cursor-pointer'
// 						onClick={() => setIsDarkMode(!isDarkMode)}>
// 						{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LeftSidebar;
