'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export default function TrophyDetails() {
	const params = useParams();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id; // Ensure `id` is a string
	const [item, setItem] = useState<User | null>(null);

	useEffect(() => {
		if (id) {
			fetchItem(id)
				.then(setItem)
				.catch((error) => {
					console.error('Error fetching item:', error);
				});
		}
	}, [id]);

	async function fetchItem(id: string): Promise<User> {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch item');
		}
		return response.json();
	}

	if (!id) {
		return (
			<div className='h-full flex justify-center items-center text-2xl text-red-700 dark:text-red-300'>
				No ID provided in the route.
			</div>
		);
	}

	if (!item) {
		return (
			<div className='h-full flex justify-center items-center text-2xl text-blue-700 dark:text-blue-200'>
				Loading...
			</div>
		);
	}

	return (
		<div className='bg-gradient-to-r from-blue-100 via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-12 px-4'>
			<div className='max-w-2xl md:max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6'>
					{item.name}
				</h1>
				<p className='text-center text-gray-500 dark:text-gray-400 mb-8'>
					<strong>ID:</strong> {item.id}
				</p>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					{/* Personal Information */}
					{/* Address */}
				</div>
				{/* Company Information */}
			</div>
		</div>
	);
}
