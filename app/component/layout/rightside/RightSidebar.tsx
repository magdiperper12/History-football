import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiNavigationArrowFill } from 'react-icons/pi';
import image from '../../../assets/image/primerleage.png';
import image2 from '../../../assets/image/portoghal.png';
import { IoIosArrowForward } from 'react-icons/io';

interface Item {
	description: string;
	href: string;
	time: string;
}

interface Section {
	title: string;
	items: Item[];
}

const sections: Section[] = [
	{
		title: 'Trending News',
		items: [
			{
				description: 'New player signings around the world...',
				href: '/trophies/34146370',
				time: '12:14:00',
			},
			{
				description: 'Latest tech developments and innovations...',
				href: '/trophies/34146304',
				time: '12:14:00',
			},
			{
				description: 'Breaking: Global sports updates...',
				href: '/trophies/34145506',
				time: '12:14:00',
			},
			{
				description: 'New player signings around the world...',
				href: '/trophies/34146370',
				time: '12:14:00',
			},
			{
				description: 'Latest tech developments and innovations...',
				href: '/trophies/34146304',
				time: '12:14:00',
			},
			{
				description: 'Breaking: Global sports updates...',
				href: '/trophies/34145506',
				time: '12:14:00',
			},
			{
				description: 'New player signings around the world...',
				href: '/trophies/34146370',
				time: '12:14:00',
			},
			{
				description: 'Latest tech developments and innovations...',
				href: '/trophies/34146304',
				time: '12:14:00',
			},
			{
				description: 'Breaking: Global sports updates...',
				href: '/trophies/34145506',
				time: '12:14:00',
			},
			{
				description: 'New player signings around the world...',
				href: '/trophies/34146370',
				time: '12:14:00',
			},
			{
				description: 'Latest tech developments and innovations...',
				href: '/trophies/34146304',
				time: '12:14:00',
			},
			{
				description: 'Breaking: Global sports updates...',
				href: '/trophies/34145506',
				time: '12:14:00',
			},

			// Add more items as needed
		],
	},
];

const RightSidebar: React.FC = () => (
	<div
		className={`w-full h-screen md:pt-20 md:-mt-20 lg:w-1/6 p-2 overflow-auto rounded-lg 
      bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary 
      [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-secoundry 
      [&::-webkit-scrollbar-thumb]:bg-forth dark:[&::-webkit-scrollbar-track]:bg-darksecoundry 
      dark:[&::-webkit-scrollbar-thumb]:bg-darkthird`}>
		{sections.map((section, index) => (
			<div
				key={index}
				className={`space-y-5 py-5 rounded-lg text-white  ${
					index === 0 ? 'my-3' : ''
				}`}>
				<Link
					href={'/component/news'}
					className='text-lg font-semibold dark:text-primary text-darksecoundry flex justify-between items-center group cursor-pointer'>
					<span className='relative flex items-center gap-2'>
						<span className='w-2 h-4 bg-yellow-400 dark:bg-yellow-300 absolute start-0'></span>
						<span className='ml-4'>{section.title}</span>
					</span>
					<IoIosArrowForward className='text-2xl text-yellow-500 group-hover:text-yellow-600 transition-transform duration-300 transform ' />
				</Link>

				{section.items.map((item, idx) => (
					<Link
						href={item.href}
						key={idx}
						className={`p-2 py-3 bg-transparent  hover:shadow-blue-100 dark:shadow-black transition-all border-blue-100 dark:border-darksecoundry ${
							idx === 0
								? 'border-b-2 pb-6 hover:shadow-none'
								: 'border-0 hover:shadow-lg'
						}   text-gray-700 dark:text-white flex items-start gap-4 transition-all duration-200 group`}
						aria-label={`Link to ${item.description}`}>
						<div
							className={`flex ${
								idx === 0 ? 'flex-col justify-center' : 'flex-row'
							} gap-3`}>
							<Image
								src={idx === 0 ? image : image2}
								alt={`Image for ${item.description}`}
								width={idx === 0 ? 220 : 60}
								height={idx === 0 ? 60 : 20}
								className='rounded-lg  '
								layout='intrinsic'
								priority={idx === 0}
							/>
							<div>
								<p className='text-sm font-medium line-clamp-2'>
									{item.description}
								</p>
								<p className='text-xs text-gray-500 dark:text-gray-400'>
									{item.time}
								</p>
							</div>
							<div
								className={`ms-auto text-xl  text-yellow-500 mt-3 dark:text-yellow-400 transform  group-hover:scale-105 transition-all ${
									idx === 0 ? 'hidden' : 'block'
								}`}>
								<PiNavigationArrowFill />
							</div>
						</div>
					</Link>
				))}
			</div>
		))}
	</div>
);

export default RightSidebar;
