import React, { FC } from 'react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

interface Message {
	id: number;
	text: string;
	user: string;
	isAI: boolean;
}

interface User {
	picture?: { large: string };
	name?: { first?: string; last?: string };
	lastSeen?: string;
}

interface ChatWindowProps {
	selectedUser: User | null;
	messages: Message[];
	newMessage: string;
	onMessageChange: (value: string) => void;
	onSendMessage: () => void;
}

const ChatWindow: FC<ChatWindowProps> = ({
	selectedUser,
	messages,
	newMessage,
	onMessageChange,
	onSendMessage,
}) => {
	return (
		<div className='h-[590px]  relative bg-white dark:bg-darkprimary rounded-lg shadow-lg p-4'>
			{selectedUser ? (
				<>
					<div className='flex items-center mb-5'>
						<img
							src={selectedUser.picture?.large || ''}
							alt=''
							className='w-12 h-12 rounded-full'
						/>
						<div className='ml-3 text-sm'>
							<div className='text-gray-800 dark:text-white font-medium'>
								{`${selectedUser.name?.first} ${selectedUser.name?.last}`}
							</div>
							<div className='text-gray-500 dark:text-gray-400'>
								Last seen: {selectedUser.lastSeen}
							</div>
						</div>
					</div>
					<div
						className='space-y-4 text-wrap mb-14 max-h-[60vh] overflow-x-hidden overflow-y-auto
										[&::-webkit-scrollbar]:w-0.5
										
										[&::-webkit-scrollbar-track]:bg-transparent
										[&::-webkit-scrollbar-thumb]:bg-third
										dark:[&::-webkit-scrollbar-thumb]:bg-darkthird px-2  rounded-lg bg-transparent'>
						{messages.map((message) => (
							<div
								key={message.id}
								className={`flex justify-${
									message.user === 'You' ? 'end' : 'start'
								}`}>
								<div
									className={`rounded-xl ${
										message.user === 'You'
											? 'bg-blue-500 rounded-br-none'
											: 'bg-gray-500 rounded-bl-none'
									}  p-3 max-w-xs text-white`}>
									{message.text}
								</div>
							</div>
						))}
					</div>
					<div className='absolute bottom-5 w-full pe-10'>
						<div className='flex items-center'>
							<input
								type='text'
								className='w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 outline-none rounded-lg'
								placeholder='Type a message...'
								value={newMessage}
								onChange={(e) => onMessageChange(e.target.value)}
							/>
							<button className='ml-3 p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full'>
								<FaUserCircle size={20} />
							</button>
							<button
								onClick={onSendMessage}
								className='ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700'>
								<FaPaperPlane size={20} />
							</button>
						</div>
					</div>
				</>
			) : (
				<div className='text-center text-gray-500 dark:text-gray-400'>
					Select a user to start chatting
				</div>
			)}
		</div>
	);
};

export default ChatWindow;
