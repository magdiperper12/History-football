'use client';

import React, { useState } from 'react';

// Define Matchday type
type Matchday = {
	day: string;
	date: string;
};

function SearchContainer() {
	// Properly initialize the matchday array
	const matchday: Matchday[] = [
		{ day: 'Yesterday', date: '10 Aug' },
		{ day: 'Today', date: '11 Aug' },
		{ day: 'Tomorrow', date: '12 Aug' },
		{ day: 'Sunday', date: '13 Aug' },
		{ day: 'Monday', date: '14 Aug' },
		{ day: 'View Calendar', date: '' },
	];

	const [visable, setvisable] = useState(false);
	const toggleVisable = () => {
		setvisable(!visable);
	};

	return (
		<div className='container p-5 font-bold my-10 text-center text-xs text-nowrap'>
			<div className='grid grid-cols-12 gap-2 my-2 items-center'>
				{/* Live Section */}
				<div className='col-span-6 p-1  md:col-span-2 order-1  md:order-1 flex justify-center rounded-xl text-red-500 shadow-md shadow-secoundry bg-primary dark:shadow-inner-glow hover:shadow-sm cursor-pointer duration-150 text-xl dark:text-darkforth  dark:bg-darkprimary gap-2 items-center m-1'>
					<div className='p-2 rounded-full bg-yellow-700'></div>
					<div>Live</div>
					<div>3</div>
				</div>

				{/* Search Form */}
				<form className='md:col-span-7 order-3 md:order-2 col-span-12 m-1'>
					<div className='w-95 flex text-darksecoundry dark:text-secoundry border dark:border-darksecoundry border-darkforth shadow-md shadow-secoundry dark:shadow-black rounded-3xl p-1 pl-3 text-sm pr-2'>
						<input
							id='default-search'
							className='text-center w-full bg-transparent text-darkthird dark:text-darkforth border-none outline-none'
							placeholder='Search for Matches...'
							required
						/>
						<button className='text-gray-480 font-bold py-2 px-4 rounded inline-flex items-center'>
							<svg
								className='w-4 h-4'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0 2'
								/>
							</svg>
						</button>
					</div>
				</form>

				{/* Dropdown Button */}
				<div className=' col-span-6 md:col-span-3 order-2 md:order-3 flex flex-col relative justify-center rounded-xl shadow-md shadow-secoundry bg-primary dark:shadow-inner-glow hover:shadow-sm cursor-pointer duration-150  dark:bg-darkprimary text-xl dark:text-darkforth text-darkthird gap-2 items-center m-1'>
					<button
						onClick={toggleVisable}
						id='dropdownDefaultButton'
						className='justify-around w-full outline-none hover:bg-third font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-darkforth text-darkthird bg-primary dark:bg-darkprimary dark:hover:bg-darksecoundry'>
						Dropdown button
						<svg
							className='w-2.5 h-2.5 ms-3'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m1 1 4 4 4-4'
							/>
						</svg>
					</button>
					<div
						id='dropdown'
						className={`z-10 bg-primary dark:bg-darkprimary divide-y absolute top-10 divide-gray-100 rounded-lg shadow w-full ${
							visable ? 'flex' : 'hidden'
						}`}>
						<ul
							className='py-2 text-sm w-full text-gray-700 dark:text-gray-200'
							aria-labelledby='dropdownDefaultButton'>
							<li>
								<a
									href='#'
									className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
									Settings
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
									Earnings
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
									Sign out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Matchday Display */}
			<div className='grid grid-cols-6 mt-5 gap-5'>
				{matchday.map((item, index) => (
					<div
						key={index}
						className={`md:col-span-1 col-span-2 py-2 flex flex-col justify-center items-center text-md dark:shadow-darkprimary hover:border-yellow-500 dark:hover:border-yellow-400 border-2 border-transparent duration-150 cursor-pointer rounded-3xl text-darksecoundry shadow-md hover:shadow-sm shadow-secoundry dark:text-primary hover:text-yellow-600 dark:hover:text-yellow-400 ${
							index === matchday.length - 1
								? 'border-yellow-600 text-yellow-600 dark:text-yellow-500'
								: 'border-transparent'
						}`}>
						<div>{item.day}</div>
						<div>{item.date}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchContainer;
