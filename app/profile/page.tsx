import React from 'react';
import Image from 'next/image';
import image from '../image/salah.png'; // Add appropriate image path

interface Item {
	title: string;
	description: string;
	country: string;
	club: string;
	age: number;
	tall: number;
	clubNum: number;
}

interface Section {
	title: string;
	className: string;
	nestedName: string;
	showImage: boolean;
	items: Item[];
}

const profile: React.FC = () => {
	const sections: Section[] = [
		{
			title: 'Player Profile',
			showImage: true, // Indicates that this section should display an image
			items: [
				{
					title: 'Mohamed Salah',
					description:
						'محمد صلاح (مصر, 32) هو لاعب كرة قدم, يلعب حاليًا لصالح ليفربول في إنجلترا.',
					country: 'Egypt',
					club: 'Liverpool',
					age: 32,
					tall: 178,
					clubNum: 11,
				},
			],
			className:
				'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg p-8',
			nestedName:
				'bg-blue-100 dark:bg-blue-900 text-center rounded-lg p-6 text-blue-950 dark:text-blue-50',
		},
	];

	return (
		<div className='max-w-6xl py-0 mx-auto p-6'>
			{sections.map((section, index) => (
				<div
					key={index}
					className={`space-y-8 ${section.className} ${
						index === 0 ? 'mt-8' : ''
					}`}>
					<h2 className='text-2xl font-semibold  relative'>
						<span className='absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full'></span>
						<span className='ml-6'>{section.title}</span>
					</h2>

					{section.items.map((item, idx) => (
						<div
							key={idx}
							className={section.nestedName}>
							<h3 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
								{item.title}
							</h3>
							{section.showImage && idx === 0 && (
								<div className='flex justify-center mt-4'>
									<Image
										src={image}
										alt='player'
										width={150}
										height={150}
										className='rounded-full border-8 border-blue-500'
									/>
								</div>
							)}

							<p className='mt-6 text-lg text-gray-600 dark:text-gray-100 leading-relaxed'>
								{item.description}
							</p>

							<div className='grid grid-cols-1 md:grid-cols-2  mt-8 text-lg font-bold'>
								<div className=' text-blue-700 dark:text-blue-200 border-e-2  border-blue-300 '>
									{item.country}
								</div>
								<div className=' text-red-700 dark:text-red-300'>
									{item.club}
								</div>
							</div>

							<hr className='border-t-2 border-blue-300 my-8' />

							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
								<div className='text-lg text-gray-100 flex flex-col dark:text-gray-800 bg-blue-900 dark:bg-blue-200 p-3 rounded-2xl'>
									<div className='text-5xl md:text-3xl lg:text-4xl bold p-1 text-blue-200 dark:text-blue-600'>
										{item.age}
									</div>
									<span className='text-sm '>years old</span>
								</div>
								<div className='text-lg text-gray-100 flex flex-col dark:text-gray-800 bg-blue-900 dark:bg-blue-200 p-3 rounded-2xl'>
									<div className='text-5xl md:text-3xl lg:text-4xl bold p-1 text-blue-200 dark:text-blue-600'>
										{item.tall}
									</div>
									<span className='text-sm '>cm</span>
								</div>
								<div className='text-lg  text-gray-100 flex flex-col dark:text-gray-800 bg-blue-900 dark:bg-blue-200 p-3 rounded-2xl'>
									<div className='text-5xl md:text-3xl lg:text-4xl bold p-1 text-blue-200 dark:text-blue-600'>
										{item.clubNum}
									</div>
									<span className='text-sm '>club-number</span>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default profile;
