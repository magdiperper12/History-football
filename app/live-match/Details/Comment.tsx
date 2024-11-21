'use client';

import React, { useEffect, useState } from 'react';

interface Comment {
	id: number;
	author: string;
	date: string;
	text: string;
}

const DiscussionSection: React.FC = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState<string>('');
	const [isvisable, setisvisable] = useState(false);

	useEffect(() => {
		setisvisable(!isvisable);
	}, []);

	const handleAddComment = (e: React.FormEvent) => {
		e.preventDefault();

		if (newComment.trim() === '') return;

		const newCommentData: Comment = {
			id: comments.length + 1,
			author: 'User', // Replace with dynamic author if needed
			date: new Date().toLocaleDateString(),
			text: newComment,
		};

		setComments((prevComments) => [newCommentData, ...prevComments]);
		setNewComment('');
	};

	return (
		<section className='py-4 lg:py-8 antialiased'>
			<div className='max-w-screen-lg mx-auto px-4'>
				<div className='flex justify-between items-center mb-6'>
					<h2 className='text-lg lg:text-2xl font-bold text-darkthird dark:text-white'>
						({comments.length}) comment
					</h2>
				</div>

				<form
					className='mb-6'
					onSubmit={handleAddComment}>
					<div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
						<label
							htmlFor='comment'
							className='sr-only'>
							Your comment
						</label>
						<textarea
							id='comment'
							rows={4}
							className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
							placeholder='Write a comment...'
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							required></textarea>
					</div>
					<button
						type='submit'
						className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white dark:bg-darksecoundry bg-forth   rounded-lg   hover:scale-95 shadow-lg hover:shadow-sm dark:shadow-darksecoundry duration-200'>
						Post comment
					</button>
				</form>

				{comments.map((comment) => (
					<div>
						<article
							className='p-6 my-3 text-base bg-white rounded-lg dark:bg-gray-900'
							key={comment.id}>
							<footer className='flex justify-between items-center mb-2'>
								<div className='flex items-center'>
									<p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>
										<img
											className='mr-2 w-6 h-6 rounded-full'
											src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
											alt={comment.author}
										/>
										{comment.author}
									</p>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										<time
											dateTime={comment.date}
											title={comment.date}>
											{comment.date}
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
							<p className='text-darkthird dark:text-darkforth mx-3'>
								{comment.text}
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
				))}
			</div>
		</section>
	);
};

export default DiscussionSection;
