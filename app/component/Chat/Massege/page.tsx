'use client';

import React, { useEffect, useState, Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
const ChatWindow = dynamic(() => import('./ChatWindow'));
const UserList = dynamic(() => import('./userlist'));
const ChatApp: React.FC = () => {
	const [search, setSearch] = useState<string>('');
	const [newMessage, setNewMessage] = useState<string>('');
	const [messages, setMessages] = useState<any[]>([]);
	const [users, setUsers] = useState<any[]>([]);
	const [selectedUser, setSelectedUser] = useState<any | null>(null);
	const [chatHistory, setChatHistory] = useState<Record<string, any[]>>({});

	useMemo(() => {
		fetch('https://randomuser.me/api/?results=200')
			.then((repo) => repo.json())
			.then((data) => {
				// Set the first three users as online
				const updatedUsers = data.results.map((user: any, index: number) => ({
					...user,
					online: index < 4, // First three users are online
				}));
				setUsers(updatedUsers);
			});
	}, []);

	const handleSendMessage = () => {
		if (!newMessage.trim() || !selectedUser) return;

		const userKey = `${selectedUser.name?.first} ${selectedUser.name?.last}`;
		const userMessage = {
			id: Date.now(),
			text: newMessage,
			user: 'You',
			isAI: false,
		};

		setMessages((prev) => [...prev, userMessage]);
		setChatHistory((prev) => ({
			...prev,
			[userKey]: [...(prev[userKey] || []), userMessage],
		}));

		setNewMessage('');

		setTimeout(() => {
			const aiMessage = {
				id: Date.now() + 1,
				text: `AI: I received your message: "${newMessage}"`,
				user: 'AI',
				isAI: true,
			};

			setMessages((prev) => [...prev, aiMessage]);
			setChatHistory((prev) => ({
				...prev,
				[userKey]: [...(prev[userKey] || []), aiMessage],
			}));
		}, 1000);
	};

	const handleUserSelect = (user: any) => {
		setSelectedUser({ ...user, lastSeen: 'Just now' });
		const userKey = `${user.name?.first} ${user.name?.last}`;
		setMessages(chatHistory[userKey] || []);
	};

	return (
		<div className='   mt-5 transition-all duration-300'>
			<div className='container  mx-auto p-4'>
				<div className='flex space-x-4'>
					<Suspense
						fallback={
							<div className='w-full'>
								<Loading />
							</div>
						}>
						<div className='grid grid-cols-12 gap-4 w-full'>
							<div className='md:col-span-5 xl:col-span-4 col-span-12'>
								<UserList
									users={users}
									search={search}
									onSearchChange={setSearch}
									onUserSelect={handleUserSelect}
								/>
							</div>
							<div className='md:col-span-7 xl:col-span-8 col-span-12 '>
								<ChatWindow
									selectedUser={selectedUser}
									messages={messages}
									newMessage={newMessage}
									onMessageChange={setNewMessage}
									onSendMessage={handleSendMessage}
								/>
							</div>
						</div>
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default ChatApp;
