'use client';

import React, { useEffect, useState } from 'react';

interface NewsItem {
	title: string;
	description: string;
	image: string;
	link: string;
	tag: string;
	timestamp: string;
}

const newsItems: NewsItem[] = [
	{
		title: 'Breaking News: Technology Advancements in 2024',
		description:
			'Discover the latest trends in AI, robotics, and more shaping our world.',
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Technology',
		timestamp: '5 mins ago',
	},

	{
		title: 'Global Warming: Challenges Ahead',
		description: 'Experts weigh in on the urgent need for climate action.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Environment',
		timestamp: '3 hours ago',
	},
	{
		title: 'Sports Highlights: The Match of the Century',
		description: "Relive the thrilling moments of last night's game.",
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Sports',
		timestamp: '1 hour ago',
	},
	{
		title: 'Business Insights: Market Trends',
		description: 'Top analysts predict major shifts in the global market.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Business',
		timestamp: '5 hours ago',
	},
	{
		title: 'Global Warming: Challenges Ahead',
		description: 'Experts weigh in on the urgent need for climate action.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Environment',
		timestamp: '3 hours ago',
	},
	{
		title: 'Sports Highlights: The Match of the Century',
		description: "Relive the thrilling moments of last night's game.",
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Sports',
		timestamp: '1 hour ago',
	},
	{
		title: 'Business Insights: Market Trends',
		description: 'Top analysts predict major shifts in the global market.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Business',
		timestamp: '5 hours ago',
	},
	{
		title: 'Global Warming: Challenges Ahead',
		description: 'Experts weigh in on the urgent need for climate action.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Environment',
		timestamp: '3 hours ago',
	},
	{
		title: 'Sports Highlights: The Match of the Century',
		description: "Relive the thrilling moments of last night's game.",
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Sports',
		timestamp: '1 hour ago',
	},
	{
		title: 'Business Insights: Market Trends',
		description: 'Top analysts predict major shifts in the global market.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Business',
		timestamp: '5 hours ago',
	},
];

const NewsSection: React.FC = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products');
				if (!response.ok) throw new Error('Failed to fetch products');
				const data = await response.json();
			} catch (err) {
				console.error('Error fetching products:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);
	if (loading) {
		return (
			<div className='text-center mt-10 text-lg font-medium  mx-auto px-4  mb-12'>
				<h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8'>
					Latest News
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div
							key={index}
							className='rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 animate-pulse'>
							<div className='h-48 bg-gray-300 dark:bg-gray-600'></div>
							<div className='p-4'>
								<div className='h-6 bg-gray-400 dark:bg-gray-500 rounded mb-2'></div>
								<div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
	return (
		<section className='max-w-7xl mx-auto px-4 mt-12 mb-12'>
			<h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8'>
				Latest News
			</h2>
			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
				{newsItems.map((news, index) => (
					<div
						key={index}
						className='bg-white dark:bg-gray-900 rounded-t-lg shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out'>
						<div className='relative w-full h-56 overflow-hidden rounded-t-lg'>
							<img
								src={news.image}
								alt={news.title}
								className='w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500'
							/>
							<span className='absolute top-3 left-3 bg-darkthird text-white text-xs font-bold py-1 px-3 rounded-xl'>
								{news.tag}
							</span>
						</div>
						<div className='p-6'>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 line-clamp-1'>
								{news.title}
							</h3>
							<p className='text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2'>
								{news.description}
							</p>
							<div className='flex justify-between items-center text-gray-500 dark:text-gray-400 text-xs'>
								<span>{news.timestamp}</span>
								<a
									href={news.link}
									className='text-red-600 hover:underline dark:text-red-400'>
									Read More
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewsSection;
