'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaSearch, FaUserCircle } from 'react-icons/fa';

// User list data (can be dynamic)
const users = [
	{
		name: 'Vincent Porter',
		online: true,
		profilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Aiden Chavez',
		online: true,
		profilePic: 'https://randomuser.me/api/portraits/men/24.jpg',
	},
	{
		name: 'John Doe',
		online: false,
		profilePic: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
	},
	{
		name: 'Emily Turner',
		online: true,
		profilePic: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
	},
];

const ChatApp: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	const [newMessage, setNewMessage] = useState<string>('');
	const [messages, setMessages] = useState<any[]>([]); // Added state for messages
	const [user, setUser] = useState<any>({
		name: 'Aiden Chavez',
		lastSeen: '2 hours ago',
		profilePic: 'https://randomuser.me/api/portraits/men/24.jpg',
	});

	// Handle sending a message
	const handleSendMessage = () => {
		if (!newMessage.trim()) return;

		// Add user's message
		const userMessage = {
			id: messages.length + 1,
			text: newMessage,
			user: user.name,
			isAI: false,
		};

		setMessages([...messages, userMessage]);
		setNewMessage(''); // Clear the input

		// Simulate AI response
		setTimeout(() => {
			const aiMessage = {
				id: messages.length + 2,
				text: `AI: I received your message: "${newMessage}"`,
				user: 'AI',
				isAI: true,
			};

			setMessages((prevMessages) => [...prevMessages, aiMessage]);
		}, 1000);
	};

	// Handle user selection for chat
	const handleUserSelect = (selectedUser: any) => {
		setUser({
			...selectedUser,
			lastSeen: 'Just now', // Update last seen for demo purposes
		});
	};

	return (
		<div className='min-h-screen transition-all duration-300'>
			<div className='container mx-auto p-4'>
				<div className='flex space-x-4'>
					{/* People List */}
					<div className='w-1/4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 transition-all duration-300'>
						<div className='flex items-center mb-4 gap-3'>
							<FaSearch
								size={20}
								className='text-gray-500 dark:text-gray-400 absolute mx-2 pe-1'
							/>
							<input
								type='text'
								placeholder='Search...'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className='w-full px-8 py-2 bg-secoundry dark:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<ul className='space-y-2'>
							{users
								.filter((user) =>
									user.name.toLowerCase().includes(search.toLowerCase())
								)
								.map((user, index) => (
									<li
										key={index}
										className='flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer'
										onClick={() => handleUserSelect(user)}>
										<img
											src={user.profilePic}
											alt={user.name}
											className='w-12 h-12 rounded-full'
										/>
										<div className='ml-3 text-sm'>
											<div className='text-gray-800 dark:text-white font-medium'>
												{user.name}
											</div>
											<div
												className={`text-${
													user.online ? 'green' : 'gray'
												}-500`}>
												{user.online ? 'Online' : 'Offline'}
											</div>
										</div>
									</li>
								))}
						</ul>
					</div>

					{/* Chat Window */}
					<div className='flex-1 w-3/4 relative bg-white h-[85vh] dark:bg-gray-800 rounded-lg py-5 shadow-lg ps-6 pe-3 ml-4'>
						<div className='flex items-center mb-5  '>
							<img
								src={user.profilePic}
								alt={user.name}
								className='w-12 h-12 rounded-full'
							/>
							<div className='ml-3 text-sm'>
								<div className='text-gray-800 dark:text-white font-medium'>
									{user.name}
								</div>
								<div className='text-gray-500 dark:text-gray-400'>
									Last seen: {user.lastSeen}
								</div>
							</div>
						</div>

						{/* Virtualized Messages Section */}
						<div
							className='space-y-4 mb-14  max-h-[60vh]   overflow-auto  
      bg-transparent text-darkprimary dark:text-primary 
      [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent 
      [&::-webkit-scrollbar-thumb]:bg-transparent dark:[&::-webkit-scrollbar-track]:bg-transparent 
      dark:[&::-webkit-scrollbar-thumb]:bg-transparent '>
							{messages.map((message) => (
								<div
									key={message.id}
									className={`flex justify-${
										message.user === user.name ? 'end ' : 'start'
									} `}>
									<div
										className={` rounded-xl   ${
											message.user === user.name
												? ' bg-blue-600 rounded-br-none'
												: 'bg-slate-600 rounded-bl-none'
										}
										  p-4 max-w-xs transition-all text-white duration-300 `}>
										{message.text}
									</div>
								</div>
							))}
						</div>

						<div className='absolute bottom-5 w-full pe-10'>
							<div className='flex items-center'>
								<input
									type='text'
									className='w-full px-4 py-2 bg-secoundry dark:bg-slate-700 outline-none rounded-lg focus:outline-none '
									placeholder='Type a message...'
									value={newMessage}
									onChange={(e) => setNewMessage(e.target.value)}
								/>
								<button
									onClick={() => setNewMessage('')}
									className='ml-3 p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full'>
									<FaUserCircle size={20} />
								</button>
								<button
									onClick={handleSendMessage}
									className='ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300'>
									<FaPaperPlane size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatApp;
