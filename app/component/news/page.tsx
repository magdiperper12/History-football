'use client';

import React, { useEffect, useState } from 'react';
import newsItems from './news'; // Import static data
import { motion } from 'framer-motion';
import Link from 'next/link';

const NewsSection: React.FC = () => {
	const [visibleItems, setVisibleItems] = useState(8);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products');
				if (!response.ok) throw new Error('Failed to fetch products');
				const data = await response.json();
			} catch (err) {
				console.error('Error fetching products:', err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleShowMore = () => {
		setVisibleItems((prev) => prev + 8);
	};
	if (loading) {
		return (
			<div className='text-center mt-10 text-lg font-medium px-5'>
				<div className='h-6 bg-gray-300 m-auto dark:bg-gray-500 mb-6 rounded animate-pulse  w-40'></div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
	if (error) {
		return (
			<div className='text-center mt-10 text-lg font-medium text-red-600'>
				Failed to load products. Please try again later.
				<button
					onClick={() => window.location.reload()}
					className='mt-4 px-6 py-3 border-2 border-red-500 text-white rounded-lg  hover:bg-red-600'>
					Reload
				</button>
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
						className='rounded-t-2xl shadow-lg hover:shadow-sm bg-white relative dark:bg-gray-800 overflow-hidden transition-all hover:scale-105 '
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
							<div className='text-gray-500 dark:text-gray-400 text-xs flex justify-between'>
								<span>{news.timestamp}</span>
								<Link
									key={news.id}
									href={`/component/news/${news.id}`}
									className='text-red-600 hover:underline dark:text-red-400'>
									Read More
								</Link>
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
