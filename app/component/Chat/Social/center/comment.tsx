import Image from 'next/image';
import React from 'react';

import { FaFaceSmile } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';
function Comment({ username, comments, imagecomment }) {
	return (
		<div className='flex flex-col gap-2 '>
			<div className='flex justify-start items-center gap-2 '>
				<div className='w-10 h-10 overflow-hidden flex justify-center items-center rounded-full'>
					<Image
						src={imagecomment}
						alt=''
						className='w-12 object-cover'
					/>
				</div>
				<div className='bg-gray-200 dark:bg-darksecoundry dark:text-primary px-3 py-2 rounded-full w-full flex justify-between items-center'>
					<input
						className=' text-sm bg-transparent outline-none '
						placeholder='what a comment'
					/>
					<FaFaceSmile className='text-yellow-500 text-lg cursor-pointer hover:scale-110 duration-150 ' />
				</div>
			</div>
			<div className='flex flex-col gap-2 '>
				<div className='flex justify-between items-start my-3'>
					<div className='flex justify-start items-start gap-2 bg-gray-50 dark:bg-darksecoundry dark:text-primary m-3 p-2 w-full rounded-xl '>
						<div className='w-10 h-10 overflow-hidden flex justify-center items-center rounded-full'>
							<Image
								src={imagecomment}
								alt=''
								className='w-12 object-cover'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<span className='text-gray-700 dark:text-primary text-md'>
								{username}
							</span>
							<div className='text-md ms-5 text-gray-600 dark:text-secoundry  text-sm'>
								{comments}
							</div>
						</div>
					</div>
					<div className='cursor-pointer text-gray-600 text-lg'>
						<FiMoreHorizontal />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
