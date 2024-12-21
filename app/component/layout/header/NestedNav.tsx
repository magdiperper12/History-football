import Link from 'next/link';
import React, { useState } from 'react';
import image from '../../../assets/image/messi.jpg';
import image2 from '../../../assets/image/champions-league-trophy.webp';
import image3 from '../../../assets/image/laliga.png';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const navdata = [
	{ text: 'Home', href: '/' },
	{ text: 'Player', href: '/Historic/Sections/Player' },
	{ text: 'Country', href: '/Historic/Sections/Country' },
	{ text: 'History', href: '/Historic' },
	{ text: 'Table', href: '/table' },
	{ text: 'Social', href: '/component/Chat/Social' },
	{ text: 'News', href: '#' },
];

const content = [{ text: 'News' }, { text: 'Hello' }, { text: 'Hello again' }];

const cards = [
	{ title: 'News', subtitle: 'champions leage', image: image2 },
	{ title: 'primer_leage', subtitle: 'salah', image: image },
	{ title: 'SalasLJS', subtitle: 'Unknown', image: image3 },
	{ title: 'News', subtitle: 'champions leage', image: image2 },
	{ title: 'laliga', subtitle: 'messi', image: image },
	{ title: 'SalasLJS', subtitle: 'Unknown', image: image3 },
	{ title: 'News', subtitle: 'champions leage', image: image2 },
];

function NestedNav() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			{/* Desktop Navigation */}
			<nav className='hidden md:flex gap-8 relative py-4 px-6 animate-fadeIn'>
				{' '}
				{/* Added fade-in animation to the nav container */}
				{navdata.map((link, index) => (
					<div
						key={link.text}
						className='relative'
						onMouseEnter={index === 6 ? () => setIsHovered(true) : undefined}
						onMouseLeave={index === 6 ? () => setIsHovered(false) : undefined}>
						<Link
							href={link.href}
							className={`${
								index === 6
									? 'text-[#4a5fd3] dark:text-blue-100 font-extrabold'
									: 'text-darkthird dark:text-primary'
							} text-lg font-semibold hover:text-[#667cf4] dark:hover:text-darkforth transition-all duration-300 ease-in-out`}
							style={{ animationDelay: `${250 * index}ms` }}>
							{link.text}
						</Link>

						{/* Hovered State Content for "News" */}
						{isHovered && index === 6 && (
							<div
								className='absolute z-10 top-7 -end-56 transform bg-primary text-black dark:bg-darkprimary shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-6 w-[68vw] max-w-6xl animate-slideIn' // Added slide-in animation
							>
								<div className='space-y-8 col-span-1 bg-secoundry dark:bg-darksecoundry p-4 shadow-md'>
									{/* Loop through the content array to render text */}
									{content.map((item, idx) => (
										<div
											key={idx}
											className='p-2'>
											<p className='text-xl font-semibold text-center text-gray-800 dark:text-white transition-all hover:text-blue-500'>
												{item.text}
											</p>
										</div>
									))}
								</div>

								{/* Grid for Cards */}
								<div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 h-[50vh] py-3 overflow-hidden'>
									{cards.map((card, index) => (
										<div
											key={index}
											className='shadow-lg bg-secoundry dark:bg-darksecoundry transition-transform transform hover:-translate-y-2 duration-300'>
											<div className='h-24 w-full overflow-hidden relative'>
												<Image
													src={card.image}
													alt={card.subtitle}
													className='object-contain rounded-t-lg'
												/>
											</div>

											<div className='px-4 py-2'>
												<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
													{card.title}
												</h3>
												<p className='text-sm text-gray-700 dark:text-gray-300'>
													{card.subtitle}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				))}
			</nav>

			{/* Mobile Navigation */}
			<input
				type='checkbox'
				id='navbarToggle'
				className='hidden peer '
			/>
			<label
				htmlFor='navbarToggle'
				className='md:hidden w-full relative   text-darkthird dark:text-white  rounded-lg hover:bg-[#e0e0e0] dark:hover:bg-blue-500 cursor-pointer'>
				<FaBars
					size={24}
					className='x absolute -start-24 -top-3'
				/>
			</label>

			{/* Mobile Menu - Toggle with Checkbox */}
			<nav className='absolute top-14 start-0 w-full rounded-b-lg bg-opacity-85 peer-checked:flex flex-col hidden bg-[#0b0e14] py-6 px-8 space-y-6 shadow-lg '>
				{navdata.map((link) => (
					<Link
						key={link.text}
						href={link.href}
						className='text-white hover:text-[#6c83ff] transition-all duration-200 text-lg font-medium'>
						{link.text}
					</Link>
				))}
			</nav>
		</div>
	);
}

export default NestedNav;
