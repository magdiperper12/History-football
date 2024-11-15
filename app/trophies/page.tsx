'use client';

import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import image from '../image/salah.png';
import Link from 'next/link';

export default async function Trophies() {
	async function gitleage() {
		const primer = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await primer.json();
		return data;
	}
	const dataphoto = await gitleage();

	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-4'>
			{/* Search Bar */}
			<div className='w-full max-w-screen-md'>
				<div className='flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-full mb-6'>
					<FaSearch className='text-blue-500 dark:text-blue-400' />
					<input
						type='text'
						className='w-full bg-transparent outline-none'
						placeholder='Search...'
					/>
				</div>
			</div>

			{/* Trophies Grid */}
			<div className='w-full max-w-screen-md grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{dataphoto.map((item) => (
					<Link
						href={`/trophies/${item.id}`} // Properly encode spaces and special characters
						key={item.id}
						className='bg-white dark:bg-blue-900 text-gray-700 dark:text-gray-200 flex flex-col items-center gap-3 justify-start p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
						<Image
							src={image}
							alt={`${item.name}'s trophy`}
							width={150}
							height={150}
							className='w-full h-2/3 object-cover rounded-lg'
						/>
						<h1 className='mt-2 text-center text-sm font-medium'>
							{item.name}
						</h1>
					</Link>
				))}
			</div>
		</div>
	);
}
