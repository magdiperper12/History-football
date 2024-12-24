'use client';

import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import image from '../../assets/image/champions-league-trophy.webp';
const FootballServices = () => {
	const stats = [
		{
			count: 2700,
			label: 'Downloads',
			icon: <MdFileDownload />,
		},
		{
			count: 1300,
			label: 'Users',
			icon: (
				<>
					<FaUsers />
				</>
			),
		},
		{
			count: 78,
			label: 'watch now',
			icon: (
				<>
					<FaEye />
				</>
			),
		},
		{
			count: 46,
			label: 'Places',
			icon: <BiCategory />,
		},
	];

	const AnimatedCounter = ({ count }: any) => {
		const [currentCount, setCurrentCount] = useState(0);

		useEffect(() => {
			let start = 0;
			const duration = 10000; // Animation duration: 2 seconds
			const increment = count / (duration / 10);

			const interval = setTimeout(() => {
				{
					setInterval(() => {
						start += increment;
						if (start >= count) {
							clearInterval(interval);
							setCurrentCount(count);
						} else {
							setCurrentCount(Math.ceil(start));
						}
					}, 10);
				}
			}, 2000);

			return () => clearInterval(interval);
		}, [count]);

		return <>{currentCount}</>;
	};
	return (
		<div className='dark:bg-transparent bg-transparent text-darkprimary dark:text-white'>
			{/* Hero Section */}
			<section className='relative dark:bg-gray-800 bg-primary py-16'>
				<div className='max-w-7xl mx-auto px-6 md:px-12 text-center'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Explore the History of Football
					</h1>
					<p className='mt-4 text-lg md:text-xl text-darksecoundry dark:text-gray-300'>
						Relive the legendary moments, players, and matches that shaped the
						game.
					</p>
				</div>
				<div className='absolute inset-0 opacity-25'>
					<Image
						src={image}
						alt='Football Banner'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-12 '>
				<div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='dark:bg-darkprimary bg-white border-2 border-secoundry dark:border-darksecoundry p-6 rounded-lg hover:shadow-lg'>
						<h2 className='text-xl font-bold mb-2'>Historic Players</h2>
						<p className='dark:text-gray-400 text-darkthird'>
							Discover profiles of legendary players from the past.
						</p>
					</div>
					<div className='dark:bg-darkprimary bg-white border-2 border-secoundry dark:border-darksecoundry p-6 rounded-lg hover:shadow-lg'>
						<h2 className='text-xl font-bold mb-2'>Timeline of Football</h2>
						<p className='dark:text-gray-400 text-darkthird'>
							Explore key events that shaped football history.
						</p>
					</div>
					<div className='dark:bg-darkprimary bg-white border-2 border-secoundry dark:border-darksecoundry p-6 rounded-lg hover:shadow-lg'>
						<h2 className='text-xl font-bold mb-2'>Memorable Matches</h2>
						<p className='dark:text-gray-400 text-darkthird'>
							Relive unforgettable moments in football's history.
						</p>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className='py-12 dark:bg-transparent bg-transparent'>
				<div className='max-w-6xl mx-auto px-6 text-center'>
					<h2 className='text-3xl font-bold mb-6'>Football by the Numbers</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
						<div>
							<p className='text-4xl font-bold text-blue-600'>250+</p>
							<p className='dark:text-gray-300 text-darkthird'>
								Historic Players
							</p>
						</div>
						<div>
							<p className='text-4xl font-bold text-blue-600'>100+</p>
							<p className='dark:text-gray-300 text-darkthird'>
								Legendary Matches
							</p>
						</div>
						<div>
							<p className='text-4xl font-bold text-blue-600'>50</p>
							<p className='dark:text-gray-300 text-darkthird'>
								Major Tournaments
							</p>
						</div>
						<div>
							<p className='text-4xl font-bold text-blue-600'>150+ years</p>
							<p className='dark:text-gray-300 text-darkthird'>Of History</p>
						</div>
					</div>
				</div>
				<div className='container px-5 py-24 mx-auto max-w-screen-md'>
					<div className='flex flex-wrap -m-4 text-center'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className='p-4 md:w-1/4 sm:w-1/2 w-full'>
								<div className='border-2 border-forth dark:border-icon px-4 py-6 rounded-lg'>
									<div className='text-icon text-4xl inline-block p-1'>
										{stat.icon}
									</div>

									<h2 className='title-font font-medium text-3xl text-icon'>
										<AnimatedCounter count={stat.count} />
									</h2>
									<p className='leading-relaxed'>{stat.label}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default FootballServices;
