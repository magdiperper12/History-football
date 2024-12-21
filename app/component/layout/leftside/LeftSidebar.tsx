'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { RiLiveFill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import { FcDownload } from 'react-icons/fc';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import SidebarData from './Sm-side';
import menuItems from './Lg-side';

const LeftSidebar: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	const [isvisable, setisvisable] = useState(true);
	const togglevisable = () => {
		setisvisable(!isvisable);
	};

	const [login, setLogin] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);
	const [Social, setSocial] = useState(true);
	useEffect(() => {
		setSocial(window.location.href.toString().includes('Social'));
	}, []);
	return (
		!login && (
			<div
				className={`lg:w-1/6 h-3/4 lg:h-screen md:pt-20 md:-mt-20 md:overflow-hidden relative rounded-lg ${
					!Social ? 'bg-primary' : 'bg-white'
				}  dark:bg-darkprimary text-darkprimary dark:text-primary `}>
				<div>
					<div
						onClick={togglevisable}
						className='text-center py-1  lg:hidden  font-bold    text-lg'>
						H
					</div>

					<div
						className={` lg:h-screen transition-all duration-300  fadeIn lg:flex  ${
							isvisable ? `hidden ` : `flex `
						} w-full relative`}>
						{/* Sidebar */}
						<div className='w-16 bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary flex flex-col '>
							{/* Logo */}
							<div className='p-4'>
								<div className=' hidden md:grid size-10 font-bold place-content-center rounded-lg bg-primary dark:bg-darksecoundry text-darksecoundry dark:text-primary text-lg'>
									H
								</div>
							</div>
							<div className='p-4'>
								<Link
									href={'/live-match'}
									className='grid size-10 font-bold place-content-center rounded-lg  bg-red-600 dark:bg-red-600 text-blue-200 dark:text-primary text-lg'>
									<RiLiveFill className='text-xl animate-pulse' />
								</Link>
							</div>

							{/* Menu Items */}
							<div className='px-2 space-y-4'>
								{SidebarData.map((item, index) => (
									<Link
										key={item.id}
										href={item.href}
										className='group text-nowrap relative flex justify-center rounded px-2 py-1.5 text-blue-500 dark:text-blue-200 hover:bg-gray-50 hover:text-darkprimary dark:hover:bg-darkthird'>
										{item.icon}
										<span className='invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'>
											{item.label}
										</span>
									</Link>
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

						<div
							className={`flex-1 mb-20 pb-24	 lg:mb-0 overflow-scroll overflow-x-hidden overflow-y-auto
									scroll-hidden
										  bg-white dark:bg-gray-800 text-darksecoundry dark:text-primary`}>
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
														className='flex items-center gap-2 rounded-lg bg-primary dark:bg-darksecoundry px-4 py-2 text-md font-medium text-darksecoundry dark:text-primary'>
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
											isDarkMode ? 'bg-darkprimary' : 'bg-primary'
										} dark:text-secoundry text-darksecoundry p-2  rounded-full  hover:shadow-sm dark:shadow-sm flex items-center justify-around cursor-pointer`}
										onClick={() => setIsDarkMode(!isDarkMode)}>
										<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
										<div
											className={`w-8 h-8 rounded-full flex justify-center items-center ${
												isDarkMode ? 'bg-white' : 'bg-darkforth'
											}`}>
											{isDarkMode ? (
												<FaSun className='text-yellow-600' />
											) : (
												<FaMoon className='text-darksecoundry' />
											)}
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default LeftSidebar;
