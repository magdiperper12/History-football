'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Product {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
	category: string;
}

const TrophyDetails: React.FC = () => {
	const params = useParams();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

	const [item, setItem] = useState<Product | null>(null);

	useEffect(() => {
		if (id) {
			fetch(`https://fakestoreapi.com/products/${id}`)
				.then((response) => {
					if (!response.ok) throw new Error('Failed to fetch item');
					return response.json();
				})
				.then((data) => setItem(data))
				.catch((error) => console.error('Error fetching item:', error));
		}
	}, [id]);

	if (!id)
		return (
			<div className='text-center text-gray-600'>
				No ID provided in the route.
			</div>
		);
	if (!item)
		return (
			<div className='text-center text-gray-600 mx-10 my-10'>
				<div className='text-center text-gray-600'>
					<div className='text-center mt-10 text-lg font-medium'>
						<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  gap-6'>
							<div className='rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 animate-pulse'>
								<div className='h-48 bg-gray-300 dark:bg-gray-600'></div>
								<div className='p-4'>
									<div className='h-6 bg-gray-400 dark:bg-gray-500 rounded mb-2'></div>
									<div className='h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);

	return (
		<section className='max-w-screen-lg container mx-auto overflow-hidden rounded-lg'>
			<div className='p-16'>
				<div className='grid grid-cols-1 gap-4 md:gap-6'>
					<div className='rounded-t-2xl shadow-md bg-white relative p-5 dark:bg-gray-800 overflow-hidden transition-all  hover:shadow-xl'>
						<div className='relative w-full h-56 overflow-hidden rounded-t-lg'>
							<img
								src={item.image}
								alt={item.title}
								className='w-1/2 m-auto h-full object-cover object-center hover:scale-110 transition-transform duration-500'
							/>
						</div>
						<div className='p-6'>
							<div className='text-green-600 dark:text-green-600 text-sm italic '>
								<span>${item.price}</span>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 line-clamp-1'>
								{item.title}
							</h3>
							<p className='text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2'>
								{item.description}
							</p>
							<p className='text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2'>
								{item.category}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrophyDetails;
