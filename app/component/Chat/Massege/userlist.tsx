import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

interface User {
	picture?: { large: string };
	name?: { first?: string; last?: string };
	online?: boolean;
}

interface UserListProps {
	users: User[];
	search: string;
	onSearchChange: (value: string) => void;
	onUserSelect: (user: User) => void;
}

const UserList: FC<UserListProps> = ({
	users,
	search,
	onSearchChange,
	onUserSelect,
}) => {
	return (
		<div className='w-1/4 bg-primary dark:bg-darkprimary rounded-lg shadow-lg p-4 transition-all duration-300'>
			{/* Search Input */}
			<div className='relative mb-4'>
				<FaSearch
					size={20}
					className='text-gray-500 dark:text-gray-400 absolute left-3 top-3'
				/>
				<input
					type='text'
					placeholder='Search...'
					value={search}
					onChange={(e) => onSearchChange(e.target.value)}
					className='w-full px-10 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			{/* User List */}
			<ul
				className='space-y-2 overflow-x-hidden overflow-y-auto
										[&::-webkit-scrollbar]:w-1
										[&::-webkit-scrollbar-track]:bg-transparent
										[&::-webkit-scrollbar-thumb]:bg-gray-400
										dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 rounded-lg bg-transparent text-gray-800 dark:text-gray-200 h-[500px]'>
				{users.map((user, index) => (
					<li
						key={index}
						className='flex items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-all duration-200'
						onClick={() => onUserSelect(user)}>
						{/* User Image */}
						<img
							src={user.picture?.large || ''}
							alt='User avatar'
							className='w-12 h-12 rounded-full shadow-sm'
						/>

						{/* User Details */}
						<div className='ml-3 flex flex-col justify-center'>
							<div className='text-gray-800 line-clamp-1 dark:text-white font-semibold'>
								{`${user.name?.first} ${user.name?.last}`}
							</div>
							{/* Online/Offline Status */}
							<div className='flex items-center justify-between gap-12'>
								<div className='flex items-center space-x-2 text-sm font-medium'>
									<span
										className={`w-3 h-3 rounded-full ${
											user.online
												? 'bg-blue-600 dark:bg-blue-500 '
												: 'bg-transparent '
										}`}></span>

									<span
										className={`${
											user.online
												? 'text-blue-600 dark:text-blue-500'
												: 'text-gray-500'
										}`}>
										{user.online ? 'Online' : 'Offline'}
									</span>
								</div>

								{index === 0 ? (
									<span
										className={` rounded-full text-white text-xs p-1 px-2  bg-red-600 `}>
										7
									</span>
								) : null}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
