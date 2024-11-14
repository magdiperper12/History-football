import React from 'react';
import image from '../../image/salah.png';
import Image from 'next/image';

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
				'bg-blue-50 py-5 rounded-lg bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-200',
			nestedName:
				'p-4 dark:bg-blue-400 bg-blue-100 rounded-lg p-4 text-blue-950 dark:text-blue-50',
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
				'py-5 rounded-lg bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-200',
			nestedName:
				'p-4 bg-blue-50 dark:bg-blue-800 rounded-lg p-4 text-blue-950 dark:text-blue-100',
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
			],
		},
	];

	return (
		<div className='w-full md:w-1/5 p-3 rounded-lg bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-200'>
			{sections.map((section, index) => (
				<div
					key={index}
					className={`space-y-4 ${section.className} ${
						index === 0 ? 'text-slate-600 dark:text-slate-200 my-3' : ''
					}`}>
					<h2 className='text-sm m-1 flex justify-center items-center w-full relative'>
						<span className='w-2 h-3 bg-blue-500 dark:bg-blue-50 absolute start-1'></span>
						<span className='absolute start-4'> {section.title}</span>
					</h2>
					{section.items.map((item, idx) => (
						<div
							key={idx}
							className={`${section.nestedName}`}>
							<h3 className='font-bold m-auto'>{item.title}</h3>
							{/* Display image only in the first section and make it rounded-full */}
							{section.showImage && idx === 0 && (
								<Image
									src={image}
									alt='player'
									width={100}
									height={100}
									className='rounded-full m-auto'
								/>
							)}
							<p>{item.description}🚓🚗🛴</p>
							<p>{item.description} 😂❤🧡😊</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default RightSidebar;
