'use client';

import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import image from '../image/salah.png';
import Link from 'next/link';

interface Trophy {
	id: number;
	title: string;
	imageSrc: string;
}

const trophiesData: Trophy[] = Array.from({ length: 12 }, (_, i) => ({
	id: i,
	title: 'primer leage',
	imageSrc: image,
}));

const Trophies: React.FC = () => {
	return (
		<div className='md:w-full p-4 rounded-lg  dark:bg-gray-800 text-slate-600 dark:text-gray-200'>
			{/* Search Bar */}
			<div className='flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-full my-3'>
				<FaSearch className='text-blue-500 dark:text-blue-400' />
				<input
					type='text'
					className='w-full bg-transparent outline-none'
					placeholder='Search...'
				/>
			</div>

			{/* Trophies Grid */}
			<div className='mt-8 w-full min-h-screen grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3'>
				{trophiesData.map(({ id, title, imageSrc }) => (
					<Link
						href={`/trophies/jadwal`}
						key={id}
						className='col bg-white dark:bg-blue-900 text-gray-700 dark:text-gray-200 max-h-44 flex justify-center items-center flex-col p-4 rounded-lg shadow-md'>
						<Image
							src={imageSrc}
							alt={title}
							className='w-auto h-2/3 rounded-lg'
						/>
						<h1 className='mt-2'>{title}</h1>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Trophies;
