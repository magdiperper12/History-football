'use client';

import React, { useEffect, useState } from 'react';
import newsItems from './news';
import { motion } from 'framer-motion';

const NewsSection: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [visibleItems, setVisibleItems] = useState(8); // Show 4 items initially

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

	const handleShowMore = () => {
		setVisibleItems((prev) => prev + 8); // Increment visible items by 4
	};

	if (loading) {
		return (
			<div className='text-center mt-10 text-lg font-medium mx-auto px-4 mb-12'>
				<h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8'>
					Latest News
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl'>
					{Array.from({ length: 8 }).map((_, index) => (
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
				{newsItems.slice(0, visibleItems).map((news, index) => (
					<motion.div
						key={index}
						className='rounded-t-2xl shadow-md bg-white relative dark:bg-gray-800 overflow-hidden transition-all hover:scale-105 hover:shadow-xl'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}>
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
					</motion.div>
				))}
			</div>
			{visibleItems < newsItems.length && (
				<div className='text-center mt-8'>
					<button
						onClick={handleShowMore}
						className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition'>
						Show More
					</button>
				</div>
			)}
		</section>
	);
};

export default NewsSection;
