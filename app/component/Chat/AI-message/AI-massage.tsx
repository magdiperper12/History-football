'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MdSend, MdArrowDropDown } from 'react-icons/md';

import { MdAttachFile, MdInsertEmoticon } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import historicLogo from '../../../assets/image/logo2-remove.png';
import Image from 'next/image';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const AImessage: React.FC = () => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [inputValue, setInputValue] = useState('');
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [messages, setMessages] = useState<
		{ text: string; type: string; time: string }[]
	>([]);
	const [isTyping, setIsTyping] = useState(false);
	const chatEndRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	// const handleToggle = () => {
	// 	const audio = new Audio(soundEffect);
	// 	audio.play();
	// 	setIsVisible(!isVisible);
	// };

	const handleFileClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setInputValue((prev) => `${prev} ${file.name}`);
		}
	};

	const handleSendMessage = () => {
		if (inputValue.trim()) {
			const time = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			});
			const newUserMessage = { text: inputValue, type: 'user', time };
			setMessages((prevMessages) => [...prevMessages, newUserMessage]);
			setInputValue('');

			setIsTyping(true);

			setTimeout(() => {
				const botReply =
					'This is an automatic response. How can I assist you further?';
				setMessages((prevMessages) => [
					...prevMessages,
					{
						text: botReply,
						type: 'bot',
						time: new Date().toLocaleTimeString(),
					},
				]);
				setIsTyping(false); // Ensure bot reply is added and typing indicator is hidden
			}, 1500);
		}
	};

	useEffect(() => {
		if (chatEndRef.current) {
			chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages, isTyping]);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleEmojiClick = (emoji: { emoji: string }) => {
		setInputValue((prev) => prev + emoji.emoji);
		setShowEmojiPicker(false);
	};

	const toggleEmojiPicker = () => {
		setTimeout(() => setShowEmojiPicker((prev) => !prev), 100);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	const inputfocus = React.useRef<HTMLInputElement>(null);

	const handleFocus = () => {
		if (inputfocus.current) {
			inputfocus.current.focus();
		}
	};
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	return (
		!login && (
			<div className=''>
				<div
					className={`${
						isVisible ? 'opacity-0' : 'opacity-100'
					} fixed bottom-10 end-8 md:bottom-8 md:end-10 rounded-full h-14 w-14 flex justify-center items-center cursor-pointer z-50 transition-transform duration-300 ease-in-out dark:bg-darkprimary bg-[#62b5e2] dark:shadow-custom-dark shadow-custom-light`}
					onClick={() => {
						setIsVisible((prev) => !prev); // Toggle visibility
						handleFocus(); // Focus the input
					}}
					aria-label='Toggle Chat'
					role='button'
					tabIndex={0}
					onKeyPress={(e) =>
						e.key === 'Enter' && setIsVisible((prev) => !prev)
					}>
					<div className='font-bold text-indigo-100 dark:text-indigo-400 text-4xl animate-pulse'>
						<IoChatbubbleEllipsesSharp />
					</div>
				</div>

				<div
					className={`z-50 transition-transform duration-500 ease-in-out w-10/12 md:w-80 shadow-custom shadow-blue-200 rounded-2xl fixed ${
						isVisible
							? 'bottom-10 end-8 md:bottom-16 md:end-10 translate-y-0 opacity-100'
							: 'bottom-8 md:end-8 md:bottom-12 translate-y-full opacity-0 pointer-events-none'
					}`}>
					<div className='bg-blue-600 dark:bg-darkprimary text-white px-4 py-5 md:py-3 flex justify-between items-center rounded-t-2xl'>
						<div className='flex items-center justify-around -ms-5 '>
							<Image
								src={historicLogo}
								alt='BotBat Icon'
								className='h-10 w-auto md:h-16 md:w-auto '
							/>
							<span className='text-xl md:-ms-3 text-primary dark:text-darkforth md:text-xl font-bold'>
								Historic
							</span>
						</div>
						<button
							onClick={() => setIsVisible(false)} // Close chat
							className='hover:text-blue-400 text-secoundry dark:text-darkthird dark:hover:text-blue-300'
							aria-label='Close Chat'>
							<IoIosArrowDown className='h-8 w-8    transition-transform duration-300 ease-in-out hover:scale-110 ' />
						</button>
					</div>

					<div className='pb-4 space-y-4 h-96 lg:h-80 overflow-auto bg-white transition-all duration-300 ease-in-out custom-scrollbar'>
						<div className='relative bg-blue-400 dark:bg-darksecoundry text-white text-center px-7 pt-1 pb-8 text-lg overflow-hidden'>
							<div className='flex flex-row gap-2 justify-center items-center text-blue-50 text-lg'>
								{' '}
								Historic AI is her to help{' '}
								<FaRobot className='h-10 w-10 inline mb-1 ' />{' '}
							</div>
							<div className='absolute inset-x-0 bottom-0 h-16'>
								<svg
									className='w-full h-full'
									viewBox='0 0 1440 320'
									preserveAspectRatio='none'>
									<path
										fill='white'
										d='M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,170.7C560,171,640,213,720,213.3C800,213,880,171,960,160C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
									/>
								</svg>
							</div>
						</div>

						<div className='flex items-start gap-2 '>
							<Image
								src={historicLogo}
								alt='Historic Avatar'
								className='h-10 w-auto lg:h-10 lg:w-auto'
							/>
							<div className='bg-secoundry dark:bg-darkprimary dark:text-gray-50 -ms-5 mt-3  p-3 lg:p-2 text-sm  rounded-full rounded-tl text-gray-600 max-w-xs'>
								Welcome! can I assist you today.?
							</div>
						</div>

						<div className='space-y-4 '>
							{messages.map((msg, index) => (
								<div
									key={index}
									className={`flex px-3 ${
										msg.type === 'user' ? 'justify-end' : 'justify-start'
									}`}>
									{msg.type === 'bot' && (
										<div className='flex items-start gap-2'>
											<Image
												src={historicLogo}
												alt='Bot Avatar'
												className='h-10 w-auto lg:h-10 lg:w-auto -ms-4'
											/>
											<div className='flex flex-col space-y-1 -ms-5 mt-3 max-w-xs'>
												<div className='bg-secoundry dark:bg-darkprimary dark:text-secoundry  p-3  text-sm  rounded-full rounded-tl text-darksecoundry '>
													{msg.text}
												</div>
												<div className='text-xs text-darkthird mt-2 mx-4 self-start'>
													botbat {msg.time}
												</div>
											</div>
										</div>
									)}

									{msg.type === 'user' && (
										<div className='flex flex-col space-y-1 max-w-xs ms-5 md:ms-10'>
											<div className='p-3 rounded-3xl bg-blue-500 dark:bg-darksecoundry text-primary dark:text-secoundry w-auto rounded-tr break-words text-sm transition-all duration-300 ease-in-out'>
												{msg.text}
											</div>
											<div className='text-xs text-darkthird mt-2 mx-4 self-end'>
												{msg.time}
											</div>
										</div>
									)}
								</div>
							))}
						</div>

						{isTyping && (
							<div className='flex justify-start mx-3'>
								<div className='flex flex-col space-y-1 max-w-xs'>
									<div className='p-3 bg-gray-200 rounded-2xl inline-block'>
										<div className='typing-dots flex space-x-1'>
											<span className='dot bg-gray-500  w-2 h-2 rounded-full animate-bounce'></span>
											<span className='dot bg-gray-500 w-2 h-2 rounded-full animate-bounce delay-[200ms]'></span>
											<span className='dot bg-gray-500 w-2 h-2 rounded-full animate-bounce delay-[400ms]'></span>
										</div>
									</div>
								</div>
							</div>
						)}

						<div ref={chatEndRef} />
					</div>

					<div className='flex items-center my-0 py-4 px-2  bg-blue-50 dark:bg-darksecoundry  rounded-b-2xl'>
						<input
							type='file'
							ref={fileInputRef}
							className='hidden'
							onChange={handleFileChange}
						/>
						<button
							onClick={handleFileClick}
							className='flex items-center'>
							<MdAttachFile className='text-3xl lg:text-2xl text-gray-500 dark:text-gray-100 transition-transform duration-300 ease-in-out hover:scale-110' />
						</button>
						<div className='relative flex-grow'>
							<div className='flex items-center  rounded-2xl p-2 lg:p-0'>
								{showEmojiPicker && (
									<div className='absolute bottom-full mb-2'>
										<EmojiPicker onEmojiClick={handleEmojiClick} />
									</div>
								)}
								<input
									type='text'
									ref={inputfocus}
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyDown={handleKeyDown}
									className='flex-grow border-none px-3 py-2 bg-transparent outline-none rounded-2xl me-1 text-darksecondary dark:text-darkforth'
									placeholder='Type a message...'
								/>
								<button
									onClick={toggleEmojiPicker}
									className='flex items-center'>
									<MdInsertEmoticon className='text-3xl lg:text-2xl text-gray-500 dark:text-gray-100 transition-transform duration-300 ease-in-out hover:scale-110' />
								</button>
							</div>
						</div>
						<button
							onClick={handleSendMessage}
							className='bg-blue-500 dark:bg-darkforth text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 ms-1 hover:text-blue-600 hover:bg-white dark:text-darksecoundry  dark:hover:text-blue-200 dark:hover:bg-blue-950'
							aria-label='Send Message'>
							<MdSend className='lg:text-xl text-3xl' />
						</button>
					</div>
				</div>

				{/* Custom Scrollbar & Typing Dots Animation */}
				<style jsx>{`
					.custom-scrollbar::-webkit-scrollbar {
						width: 8px;
					}
					.custom-scrollbar::-webkit-scrollbar-thumb {
						background-color: rgba(0, 0, 0, 0.2);
						border-radius: 10px;
					}
					.custom-scrollbar::-webkit-scrollbar-track {
						background-color: transparent;
					}
					.typing-dots .dot {
						animation: bounce 1s infinite;
					}
					@keyframes bounce {
						0%,
						100% {
							transform: translateY(0);
						}
						50% {
							transform: translateY(-5px);
						}
					}
				`}</style>
			</div>
		)
	);
};

export default AImessage;
