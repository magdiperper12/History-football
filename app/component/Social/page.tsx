'use client';

import React from 'react';
import DiscussionSection from '../../live-match/Details/Comment';

function SocialPage() {
	return (
		<div className='h-screen   w-10/12 m-auto  '>
			<div>
				<article className='p-6 my-3 text-base bg-primary rounded-xl dark:bg-gray-900 shadow-md shadow-secoundry dark:shadow-darkprimary'>
					<footer className='flex justify-between items-center mb-2'>
						<div className='flex items-center'>
							<p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>
								<img
									className='mr-2 w-6 h-6 rounded-full'
									src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
									alt='user'
								/>
								Mohamed said
							</p>
							<p className='text-sm text-gray-600 dark:text-gray-400'>
								<time
									dateTime={new Date().toLocaleTimeString()}
									title={'Post'}
									className='flex items-center gap-2'>
									<span>{new Date().toLocaleTimeString()}</span>
									<span className='text-xs '>
										{new Date().toLocaleTimeString()}
									</span>
								</time>
							</p>
						</div>
						<button className='group relative flex justify-center  px-2 py-1.5    hover:text-darkprimary dark:hover:bg-darkthirdinline-flex items-center p-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100  dark:bg-gray-900 dark:hover:bg-gray-700 '>
							<svg
								className='w-4 h-4'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 16 3'>
								<path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
							</svg>

							<span className='invisible absolute text-nowrap start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'>
								Comment settings
							</span>
						</button>
					</footer>
					<p className='text-darksecoundry dark:text-darkforth mx-3'>
						{
							'mohamed salah is the best player in the world this year but leo messi is the best forever'
						}
					</p>
					<div className='flex items-center mt-4 space-x-4'>
						<button
							type='button'
							className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium'>
							<svg
								className='mr-1.5 w-3.5 h-3.5'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 18'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
								/>
							</svg>
							Reply
						</button>
					</div>
				</article>
			</div>

			<DiscussionSection />
		</div>
	);
}

export default SocialPage;
