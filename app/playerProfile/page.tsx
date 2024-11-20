import React from 'react';
import image from '../image/salah.png';
import Image from 'next/image';

const PlayerProfile = () => {
	return (
		<section className='max-w-screen-lg m-auto overflow-hidden '>
			<div className='flex flex-col'>
				{/* Cover Image */}
				<img
					src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080'
					alt='User Cover'
					className='w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]'
				/>

				{/* Profile Image */}
				<div className='sm:w-[80%] xs:w-[90%] mx-auto flex'>
					<Image
						src={image}
						alt='User Profile'
						className=' rounded-full lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 p-3 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]'
					/>

					{/* FullName */}
					<h1 className='w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif'>
						Mohamed Salah
					</h1>
				</div>

				<div className='xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4'>
					{/* Description */}
					<p className='w-fit text-gray-700 dark:text-gray-400 text-md'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						debitis labore consectetur voluptatibus mollitia dolorem veniam
						omnis ut quibusdam minima sapiente repellendus asperiores explicabo,
						eligendi odit, dolore similique fugiat dolor, doloremque eveniet.
						Odit, consequatur. Ratione voluptate exercitationem hic eligendi
						vitae animi nam in, est earum culpa illum aliquam.
					</p>

					{/* Details */}
					<div className='w-full my-auto py-6 flex flex-col justify-center items-center text-center gap-2'>
						<div className='w-full flex sm:flex-row xs:flex-col gap-2 justify-center'>
							{/* Left Column */}
							<div className='w-full'>
								<dl className='text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>
									{[
										{ label: 'club', value: 'Liverpool' },
										{ label: 'height', value: '178 CM' },
										{ label: 'score', value: '32 goal' },
										{ label: 'player Number', value: '11' },
									].map(({ label, value }, index) => (
										<div
											className='flex flex-col py-3'
											key={index}>
											<dt className='mb-1 text-gray-500 md:text-lg dark:text-gray-400'>
												{label}
											</dt>
											<dd className='text-lg font-semibold'>{value}</dd>
										</div>
									))}
								</dl>
							</div>

							{/* Right Column */}
							<div className='w-full'>
								<dl className='text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>
									{[
										{ label: 'country', value: 'Egypt' },
										{ label: 'age', value: '32' },
										{ label: 'assist', value: '21' },

										{
											label: 'last Team',
											value: 'Roma',
										},
									].map(({ label, value }, index) => (
										<div
											className='flex flex-col py-3'
											key={index}>
											<dt className='mb-1 text-gray-500 md:text-lg dark:text-gray-400'>
												{label}
											</dt>
											<dd className='text-lg font-semibold'>{value}</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlayerProfile;
