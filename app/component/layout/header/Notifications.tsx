'use client';

import { useEffect, useState } from 'react';
import { GoEyeClosed } from 'react-icons/go';

type User = {
	name: {
		first: string;
		last: string;
	};
	picture: {
		large: string;
	};
	location: {
		timezone: {
			description: string;
		};
	};
};

type Notification = {
	id: number;
	username: string;
	message: string;
	isVisible: boolean;
	image: string;
};

const Notifications = () => {
	const [notiname, setnotiname] = useState<User[]>([]);
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const response = await fetch('https://randomuser.me/api/?results=10'); // Change results to 5 for testing
				const data = await response.json();
				setnotiname(data.results);
			} catch (err) {
				console.error('Error fetching data:', err);
				setError('Failed to load notifications. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		fetchNotifications();
	}, []);

	useEffect(() => {
		if (notiname.length > 0) {
			setNotifications(
				notiname.map((user, index) => ({
					id: index + 1,
					username: `${user.name.first} ${user.name.last}`,
					message: user.location.timezone.description,
					isVisible: true,
					image: user.picture.large,
				}))
			);
		}
	}, [notiname]);

	const handleClose = (id: number) => {
		setNotifications((prevNotifications) =>
			prevNotifications.map((notification) =>
				notification.id === id
					? { ...notification, isVisible: false }
					: notification
			)
		);
	};

	if (loading) {
		return (
			<div className='absolute right-5 top-12 z-50 w-full sm:w-80 bg-primary rounded-lg shadow-2xl p-4 pe-1 dark:bg-darkprimary transition-all transform'>
				<h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center sm:text-left'>
					Notifications
				</h3>
				<ul className='space-y-5 max-h-[500px]  overflow-y-auto pe-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-third dark:[&::-webkit-scrollbar-thumb]:bg-darksecoundry'></ul>
				{Array.from({ length: 5 }).map((_, index) => (
					<li
						key={index}
						className='flex mt-5 items-start justify-between sm:justify-center space-x-4 bg-gradient-to-r from-secoundry to-primary dark:from-darksecoundry dark:to-darkprimary p-3 rounded-lg shadow-lg shadow-secoundry dark:shadow-black transition-all duration-150 cursor-pointer ease-in-out transform hover:shadow-sm hover:shadow-darkforth dark:hover:shadow-gray-800'>
						<div className='w-12 h-12 bg-slate-300 dark:bg-slate-500 rounded-full border-[1px] border-blue-500'></div>
						<div className='flex-1'>
							<div className='flex items-center justify-between'>
								<span className='font-semibold text-gray-900 dark:text-white text-sm sm:text-base'>
									user loading ...
								</span>
								<button
									type='button'
									className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'>
									<GoEyeClosed className='w-4 h-4' />
								</button>
							</div>
							<p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
								message loading .....
							</p>
							<a
								href='#'
								className='inline-flex items-center mt-2 text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200'>
								...
							</a>
						</div>
					</li>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center mt-10 text-lg font-medium text-red-600'>
				{error}
			</div>
		);
	}

	return (
		<div className='absolute right-5 top-12 z-50 w-full sm:w-80 bg-primary rounded-lg shadow-2xl p-4 pe-1 dark:bg-darkprimary transition-all transform'>
			<h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center sm:text-left'>
				Notifications
			</h3>
			<ul className='space-y-3 max-h-[500px] overflow-y-auto pe-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-third dark:[&::-webkit-scrollbar-thumb]:bg-darksecoundry'>
				{notifications
					.filter((notification) => notification.isVisible)
					.map((notification) => (
						<li
							key={notification.id}
							className='flex items-start justify-between sm:justify-center space-x-4 bg-gradient-to-r from-secoundry to-primary dark:from-darksecoundry dark:to-darkprimary p-3 rounded-lg shadow-lg shadow-secoundry dark:shadow-black transition-all duration-150 cursor-pointer ease-in-out transform hover:shadow-sm hover:shadow-darkforth dark:hover:shadow-gray-800'>
							<img
								className='w-12 h-12 rounded-full border-[1px] border-blue-500'
								src={notification.image}
								alt='User'
							/>
							<div className='flex-1'>
								<div className='flex items-center justify-between'>
									<span className='font-semibold text-gray-900 dark:text-white text-sm sm:text-base'>
										{notification.username}
									</span>
									<button
										type='button'
										onClick={() => handleClose(notification.id)}
										className='text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'>
										<GoEyeClosed className='w-4 h-4' />
									</button>
								</div>
								<p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
									{notification.message}
								</p>
								<a
									href='#'
									className='inline-flex items-center mt-2 text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200'>
									Show
								</a>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Notifications;
