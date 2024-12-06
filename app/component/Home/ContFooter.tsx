'use client';

import React, { useState, useEffect } from 'react';

const StatsCounter = () => {
	const stats = [
		{
			count: 2700,
			label: 'Downloads',
			icon: <path d='M8 17l4 4 4-4m-4-5v9'></path>,
		},
		{
			count: 1300,
			label: 'Users',
			icon: (
				<>
					<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
					<circle
						cx='9'
						cy='7'
						r='4'></circle>
					<path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
				</>
			),
		},
		{
			count: 78,
			label: 'Files',
			icon: (
				<>
					<path d='M3 18v-6a9 9 0 0118 0v6'></path>
					<path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
				</>
			),
		},
		{
			count: 46,
			label: 'Places',
			icon: <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>,
		},
	];

	const AnimatedCounter = ({ count }: any) => {
		const [currentCount, setCurrentCount] = useState(0);

		useEffect(() => {
			let start = 0;
			const duration = 12000; // Animation duration: 2 seconds
			const increment = count / (duration / 10);

			const interval = setInterval(() => {
				start += increment;
				if (start >= count) {
					clearInterval(interval);
					setCurrentCount(count);
				} else {
					setCurrentCount(Math.ceil(start));
				}
			}, 10);

			return () => clearInterval(interval);
		}, [count]);

		return <>{currentCount}</>;
	};

	return (
		<section className='text-darksecoundry dark:text-primary body-font'>
			<div className='container px-5 py-24 mx-auto max-w-screen-md'>
				<div className='flex flex-wrap -m-4 text-center'>
					{stats.map((stat, index) => (
						<div
							key={index}
							className='p-4 md:w-1/4 sm:w-1/2 w-full'>
							<div className='border-2 border-forth dark:border-icon px-4 py-6 rounded-lg'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='text-icon w-12 h-12 mb-3 inline-block'
									viewBox='0 0 24 24'>
									{stat.icon}
								</svg>
								<h2 className='title-font font-medium text-3xl text-icon'>
									<AnimatedCounter count={stat.count} />
								</h2>
								<p className='leading-relaxed'>{stat.label}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='relative flex  flex-col justify-center py-6 sm:py-12'>
				<div className='group relative cursor-pointer overflow-hidden bg-primary dark:bg-darksecoundry px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
					<span className='absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
					<div className='relative z-10 mx-auto max-w-md'>
						<span className='grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='h-10 w-10 text-white transition-all'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
								/>
							</svg>
						</span>
						<div className='space-y-6 pt-5 text-base leading-7 text-darksecoundry dark:text-forth  transition-all duration-300 group-hover:text-darkforth dark:group-hover:text-white'>
							<p>
								Perfect for learning how the framework works, prototyping a new
								idea, or creating a demo to share online.
							</p>
						</div>
						<div className='pt-5 text-base font-semibold leading-7'>
							<p>
								<a
									href='#'
									className='text-sky-500 transition-all duration-300 dark:text-darkthird group-hover:text-white'>
									Read the docs &rarr;
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsCounter;
