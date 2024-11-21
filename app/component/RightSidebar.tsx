import React from 'react';
import image from '../image/salah.png';
import Image from 'next/image';
import Link from 'next/link';

interface Item {
	title: string;
	description: string;
}

interface Section {
	title: string;
	className: string;
	nestedName: string;
	showImage: boolean;
	items: Item[];
}

const RightSidebar: React.FC = () => {
	const sections: Section[] = [
		{
			title: 'Trending Player',
			className:
				'bg-blue-50 py-5 rounded-lg bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary',
			nestedName:
				'p-4 dark:bg-darksecoundry bg-secoundry rounded-lg w-full text-center p-4 text-blue-950 dark:text-blue-100',
			showImage: true, // Indicates that this section should display an image
			items: [
				{
					title: 'Mohamed Salah',
					description: 'New player signings around the world...',
				},
			],
		},
		{
			title: 'Trending News',
			className:
				'py-5 rounded-lg bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary',
			nestedName:
				'p-4 bg-secoundry dark:bg-darksecoundry rounded-lg p-4 text-darksecoundry dark:text-primary',
			showImage: false, // No image for this section
			items: [
				{
					title: 'Football Transfer News',
					description: 'New player signings around the world...',
				},
				{
					title: 'Tech News',
					description: 'Latest tech developments and innovations...',
				},
				{ title: 'Economy Updates', description: 'Global economy news...' },
				{
					title: 'Climate Change Awareness',
					description: 'How the world is tackling climate change...',
				},
				{
					title: 'Health and Wellness',
					description: 'Tips to maintain a healthy lifestyle...',
				},
				{
					title: 'Football Transfer News',
					description: 'New player signings around the world...',
				},
				{
					title: 'Tech News',
					description: 'Latest tech developments and innovations...',
				},
				{ title: 'Economy Updates', description: 'Global economy news...' },
				{
					title: 'Climate Change Awareness',
					description: 'How the world is tackling climate change...',
				},
				{
					title: 'Health and Wellness',
					description: 'Tips to maintain a healthy lifestyle...',
				},
				{
					title: 'Football Transfer News',
					description: 'New player signings around the world...',
				},
				{
					title: 'Tech News',
					description: 'Latest tech developments and innovations...',
				},
				{ title: 'Economy Updates', description: 'Global economy news...' },
				{
					title: 'Climate Change Awareness',
					description: 'How the world is tackling climate change...',
				},
				{
					title: 'Health and Wellness',
					description: 'Tips to maintain a healthy lifestyle...',
				},
				{
					title: 'Football Transfer News',
					description: 'New player signings around the world...',
				},
				{
					title: 'Tech News',
					description: 'Latest tech developments and innovations...',
				},
				{ title: 'Economy Updates', description: 'Global economy news...' },
				{
					title: 'Climate Change Awareness',
					description: 'How the world is tackling climate change...',
				},
				{
					title: 'Health and Wellness',
					description: 'Tips to maintain a healthy lifestyle...',
				},
			],
		},
	];

	return (
		<div
			className='w-full h-screen md:pt-20 md:-mt-20 lg:w-1/6 p-3 overflow-scroll rounded-lg bg-primary dark:bg-darkprimary text-darkprimary dark:text-primary overflow-x-hidden overflow-y-auto
    [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-secoundry
  [&::-webkit-scrollbar-thumb]:bg-forth
  dark:[&::-webkit-scrollbar-track]:bg-darksecoundry
  dark:[&::-webkit-scrollbar-thumb]:bg-darkthird'>
			{sections.map((section, index) => (
				<div
					key={index}
					className={`space-y-5 ${section.className} ${
						index === 0 ? 'text-darkprimary dark:text-secoundry my-3' : ''
					}`}>
					<h2 className='text-sm m-1 flex justify-center items-center w-full relative '>
						<span className='w-2 h-3 bg-darkthird dark:bg-third absolute start-1'></span>
						<span className='absolute start-4'> {section.title}</span>
					</h2>
					{section.items.map((item, idx) => (
						<div
							key={idx}
							className={`${section.nestedName}`}>
							<h3 className='font-bold m-auto py-1 text-darkprimary dark:text-primary'>
								{item.title}
							</h3>
							{/* Display image only in the first section and make it rounded-full */}
							{section.showImage && idx === 0 && (
								<div className='w-full text-center flex flex-col gap-3'>
									<Image
										src={image}
										alt='player'
										width={100}
										height={100}
										className='rounded-full m-auto'
									/>
									<Link
										href={'/playerProfile'}
										className='text-lg text-darksecoundry dark:text-primary   pointer'>
										View profile
									</Link>
								</div>
							)}
							<p className=' text-darkthird dark:text-forth'>
								{item.description}
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default RightSidebar;
