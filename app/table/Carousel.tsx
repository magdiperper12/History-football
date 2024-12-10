'use client';

import React, { useState, useEffect } from 'react';
import '../globals.css';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import logo from '../assets/image/laliga.png';
import logo2 from '../assets/image/bondizleage.png';
import logo3 from '../assets/image/leage1.png';
import logo4 from '../assets/image/portoghal.png';
import logo5 from '../assets/image/primerleage.png';
import logo6 from '../assets/image/seriaA.png';

interface League {
	id: string;
	name: string;
	image: string | StaticImageData; // Updated to accept both string (URL) and StaticImageData
}

const league: League[] = [
	{
		id: '1',
		name: 'Premier League',
		image: logo5,
	},
	{
		id: '2',
		name: 'Serie A',
		image: logo6,
	},
	{
		id: '3',
		name: 'Bundesliga',
		image: logo2,
	},
	{
		id: '4',
		name: 'League 1',
		image: logo3,
	},
	{
		id: '5',
		name: 'La Liga',
		image: logo,
	},
	{
		id: '6',
		name: 'Liga NOS',
		image: logo4,
	},
];

export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % league.length);
		}, 2000);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<div className='m-auto container'>
			<div className='w-full bg-blue-200  dark:bg-blue-950 flex items-center justify-center flex-col p-10'>
				{league.map((item, index) => (
					<div
						key={item.id}
						className={`${
							index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
						} transition-opacity duration-500 w-full  flex flex-col items-center animate-bounce`}>
						<Image
							src={item.image}
							alt={item.name}
							className='rounded-lg h-44 w-auto'
							// Optional width and height for better optimization
							width={300}
							height={150}
						/>
						<h1 className='md:text-6xl text-3xl m-auto mt-10 text-blue-900 dark:text-blue-200 font-bold'>
							{item.name}
						</h1>
					</div>
				))}
			</div>
		</div>
	);
}
