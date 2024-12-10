'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { img } from 'framer-motion/client';

interface User {
	id: { name: string; value: string | null };
	picture: { large: string };
	name: { title: string; first: string; last: string };
	location: {
		street: { number: number; name: string };
		city: string;
		state: string;
		country: string;
	};
	email: string;
	dob: { date: string; age: number };
	phone: string;
	registered: { date: string };
}

const UserProfile: React.FC = () => {
	const [item, setItem] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const { id } = useParams();

	useEffect(() => {
		if (!id) return;

		const fetchUser = async () => {
			try {
				const response = await fetch(`https://randomuser.me/api/?seed=${id}`);
				if (!response.ok) throw new Error('Failed to fetch user');
				const data = await response.json();
				setItem(data.results?.[0] ?? null);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='w-full max-w-3xl p-4'>
					<div className='rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 animate-pulse'>
						<div className='h-48 bg-gray-300 dark:bg-gray-600'></div>
						<div className='p-4'>
							<div className='h-6 bg-gray-400 dark:bg-gray-500 rounded mb-2 animate-pulse'></div>
							<div className='h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center text-red-500 font-semibold'>
				Error: {error}
			</div>
		);
	}

	if (!item) {
		return <div>No user data found.</div>;
	}

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div className='w-full max-w-3xl p-4 md:p-6'>
				<div className='rounded-lg px-4 py-8 shadow-md relative bg-secoundry dark:bg-darksecoundry'>
					<img
						src={item.picture.large}
						alt={`${item.name.first} ${item.name.last}`}
						className='w-32 h-32 md:w-40 md:h-40 absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white shadow-lg transition-transform duration-150 hover:rotate-[360deg] hover:scale-105'
					/>
					<div className='mt-16 flex flex-col md:flex-row items-start justify-between'>
						<div className='w-full md:w-1/2'>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>{item.name.title}:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{` ${item.name.first} ${item.name.last}`}
								</h1>
							</div>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>Email:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{item.email}
								</h1>
							</div>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>Location:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{item.location.street.number}, {item.location.street.name},{' '}
									{item.location.city}, {item.location.state},{' '}
									{item.location.country}
								</h1>
							</div>
						</div>
						<div className='w-full md:w-1/3'>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>Birth Date:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{new Date(item.dob.date).toLocaleDateString()} (Age:{' '}
									{item.dob.age})
								</h1>
							</div>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>Phone:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{item.phone}
								</h1>
							</div>
							<div className='text-lg mt-4 text-gray-600 dark:text-gray-200'>
								<strong className='text-darkthird'>registered at:</strong>
								<h1 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
									{new Date(item.registered.date).toLocaleDateString()}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
