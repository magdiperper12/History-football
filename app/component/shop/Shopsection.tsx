'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

const Shop: React.FC = () => {
	const [products, setProducts] = useState([]);
	const [displayedProducts, setDisplayedProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [showMore, setShowMore] = useState(false);

	useMemo(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				if (!response.data) throw new Error('Failed to fetch products');

				setProducts(response.data);
				setDisplayedProducts(response.data.slice(0, 3)); // Display first 4 products initially
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
		setShowMore(true);
		setDisplayedProducts(products);
	};

	if (loading) {
		return (
			<div className='text-center mt-10 text-lg font-medium mx-10'>
				<div className='h-8 bg-gray-300 ms-2 w-40 dark:bg-gray-600 rounded mb-7'></div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
					{Array.from({ length: 3 }).map((_, index) => (
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
					className='mt-4 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600'>
					Reload
				</button>
			</div>
		);
	}

	return (
		<div className=' text-gray-800 dark:text-gray-100'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center mb-6'>
					<h1 className='text-4xl mx-5  font-extrabold text-darkthird dark:text-darkforth'>
						Shop
					</h1>
				</div>
				<div className='grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7'>
					{displayedProducts.map((product: any, index: number) => (
						<motion.div
							key={product.id}
							className='rounded-t-2xl shadow-md bg-white relative dark:bg-gray-800 overflow-hidden transition-all hover:scale-105 hover:shadow-xl'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							{product.id === 2 ? (
								<h3 className='bg-red-600 z-10 p-2 -rotate-12 rtl:rotate-12  text-white absolute top-0 -end-1 '>
									most buy
								</h3>
							) : (
								''
							)}
							<div className='relative group'>
								<img
									src={product.image}
									alt={product.title}
									loading='lazy'
									className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-50 duration-300 group-hover:opacity-100 transition-all scale-105'>
									<Link
										key={product.id}
										href={`/component/shop/${product.id}`}
										aria-label={`View details for ${product.title}`}
										className='mt-4 bg-darkthird text-white px-4 py-2 rounded-lg shadow-lg hover:bg-darksecoundry  transition-colors group-scale-95'>
										View Details
									</Link>
								</div>
							</div>
							<div className='py-6 px-4'>
								<h2 className='text-xl font-semibold text-gray-900 dark:text-white truncate'>
									{product.title}
								</h2>
								<p className='text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2'>
									{product.description}
								</p>

								<div className='flex-col  items-center mt-auto'>
									<p className='text-xl font-bold text-green-600 dark:text-green-400'>
										${product.price}
									</p>
									<p className='text-md italic text-gray-600 dark:text-gray-400 mb-4 line-clamp-2'>
										{product.category}
									</p>
									<button className='px-6 py-3 bg-darkforth dark:bg-darksecoundry text-darkthird hover:text-white dark:text-white hover:rounded-lg hover:shadow-lg hover:bg-darkthird dark:hover:bg-darkprimary transition-all transform duration-150 '>
										Add to Cart
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				{!showMore && (
					<div className='text-center mt-6'>
						<button
							onClick={handleShowMore}
							className='px-6 py-3 bg-darkforth dark:bg-darkthird dark:hover:bg-darksecoundry text-darkthird hover:text-white dark:text-white rounded-lg shadow-lg hover:bg-darkthird  transition-all transform '>
							Load More
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Shop;
