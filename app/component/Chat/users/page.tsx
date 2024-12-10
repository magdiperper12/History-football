'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface User {
	id: { name: string; value: string | null };
	picture: { large: string };
	name: { title: string; first: string; last: string };
}

const Users: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://randomuser.me/api/?results=200');
				if (!response.ok) throw new Error('Failed to fetch users');
				const data = await response.json();
				setUsers(data.results);
				setFilteredUsers(data.results);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		const lowercasedQuery = searchQuery.toLowerCase();
		const filtered = users.filter((user) =>
			`${user.name.first} ${user.name.last}`
				.toLowerCase()
				.includes(lowercasedQuery)
		);
		setFilteredUsers(filtered);
	}, [searchQuery, users]);

	if (loading) {
		return (
			<div className='flex-col justify-center mt-20 px-10 h-screen space-y-5'>
				<div className='rounded-lg shadow-md bg-gray-300 dark:bg-gray-600 animate-pulse w-full p-1 '>
					<div className='h-9 bg-gray-200 dark:bg-gray-500 rounded'></div>
				</div>
				<div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 gap-6'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							key={index}
							className='rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 animate-pulse'>
							<div className='h-48 bg-gray-300 dark:bg-gray-600'></div>
							<div className='p-4'>
								<div className='h-6 bg-gray-400 dark:bg-gray-500 rounded mb-2'></div>
								<div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
							</div>
						</div>
					))}
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

	return (
		<div className='p-6'>
			<div className='mb-6'>
				<input
					type='text'
					placeholder='Search users by name...'
					className='w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 shadow-md'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				{filteredUsers.slice(0, 4).map((user, index) => (
					<motion.div
						key={user.id.value || index}
						className='rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all p-4 flex flex-col items-center'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.05 }}>
						<img
							src={user.picture.large}
							alt={`${user.name.first} ${user.name.last}`}
							className='w-24 h-24 rounded-full mb-4 border border-gray-200 dark:border-gray-700'
						/>
						<h2 className='font-bold text-lg text-center text-gray-800 dark:text-gray-200'>
							{user.name.title} {user.name.first} {user.name.last}
						</h2>
						<Link
							href={`/component/Chat/users/${user.id.value}`}
							className='mt-4 text-blue-500 dark:text-blue-400 hover:underline'>
							View Profile
						</Link>
					</motion.div>
				))}
				{filteredUsers.length === 0 && (
					<div className='text-center col-span-full text-gray-600 dark:text-gray-300'>
						No users found
					</div>
				)}
			</div>
		</div>
	);
};

export default Users;
