'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiLike } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
import { FaCommentDots } from 'react-icons/fa6';
import { FaLocationArrow } from 'react-icons/fa';

function Post({ name, time, userimage, image, description }) {
	const [like, setLike] = useState(true);
	const handellclicke = () => {
		setLike(!like);
	};

	return (
		<div className='space-y-3 dark:bg-darkprimary dark:text-primary'>
			<div className='flex justify-between items-center'>
				<div className='flex justify-center items-center gap-2 '>
					<div className='w-10 h-10 overflow-hidden flex justify-center items-center rounded-full'>
						<Image
							src={userimage}
							alt=''
							className='w-12 object-cover'
						/>
					</div>

					<span className='text-gray-600 dark:text-secoundry text-sm'>
						{name}{' '}
						<div className='text-xs text-gray-400 dark:text-third'>{time}</div>
					</span>
				</div>
				<div className='cursor-pointer text-gray-600 text-lg'>
					<FiMoreHorizontal />{' '}
				</div>
			</div>
			<div className='flex flex-col  justify-start items-start'>
				<div className='w-full  rounded-lg max-h-[80vh] overflow-hidden'>
					<span className='m-3 text-md text-gray-700 text-darkforth'>
						{description}
					</span>
					<Image
						src={image}
						alt=''
						className='w-full mt-2  rounded-lg object-contain'
					/>
				</div>
			</div>
			<div className='flex justify-between items-center '>
				<div className='flex justify-center items-center gap-3'>
					<div className='bg-gray-100 dark:bg-darksecoundry dark:text-primary p-1 px-3 rounded-full flex justify-center gap-2 items-center '>
						<button
							onClick={() => handellclicke()}
							className='text-blue-600 dark:text-blue-400  '>
							{like ? (
								<BiLike className='text-sm' />
							) : (
								<BiSolidLike className='text-sm' />
							)}
						</button>
						<div className='text-gray-600 dark:text-secoundry text-sm'>|</div>
						<div className='text-gray-600  dark:text-secoundry  text-sm'>
							3 <span className='hidden md:inline'>Like</span>
						</div>
					</div>
					<div className='bg-gray-100 dark:bg-darksecoundry dark:text-primary p-1 px-3 rounded-full flex justify-center gap-2 items-center '>
						<button className='text-blue-600 dark:text-blue-400 '>
							<FaCommentDots className='text-sm' />
						</button>
						<div className='text-gray-600  dark:text-secoundry  text-sm'>|</div>
						<div className='text-gray-600  dark:text-secoundry  text-sm'>
							3 <span className='hidden md:inline'>Comments</span>
						</div>
					</div>
				</div>
				<div>
					<div className='bg-gray-100 dark:bg-darksecoundry dark:text-primary p-1 px-3 rounded-full flex justify-center gap-2 items-center '>
						<button className='text-blue-600 dark:text-blue-400 '>
							<FaLocationArrow className='text-sm' />
						</button>
						<div className='text-gray-600  dark:text-secoundry  text-sm'>|</div>
						<div className='text-gray-600  dark:text-secoundry  text-sm'>
							3 <span className='hidden md:inline '>Share</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
