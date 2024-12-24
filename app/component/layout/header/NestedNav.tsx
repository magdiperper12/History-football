import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaBars } from 'react-icons/fa';
import messi from '../../../assets/image/seriaA.png';
import bondezlige from '../../../assets/image/bondizleage.png';
import primerleage from '../../../assets/image/primerleage.png';
import champions from '../../../assets/image/champions-league-trophy.webp';
import laliga from '../../../assets/image/laliga.png';

// Type definitions
interface NavLink {
	text: string;
	href: string;
}

interface Card {
	title: string;
	subtitle: string;
	image: string | StaticImageData;
}

interface ContentCategory {
	category: string;
	cards: Card[];
}

// Navigation Data
const navdata: NavLink[] = [
	{ text: 'Home', href: '/' },
	{ text: 'Players', href: '/Historic/Player' },
	{ text: 'Countries', href: '/Historic/Country' },
	{ text: 'Standings', href: '/table' },
	{ text: 'Fan Zone', href: '/component/Chat/Social' },
	{ text: 'Latest News', href: '/component/news' },
];

// Content Data
const contentData: ContentCategory[] = [
	{
		category: 'Matchday Highlights',
		cards: [
			{
				title: 'Champions League',
				subtitle: 'Real Madrid vs Manchester City: A Classic Rivalry Renewed',
				image: champions,
			},
			{
				title: 'Premier League',
				subtitle: 'Manchester United Defeats Liverpool in a Thrilling Derby',
				image: bondezlige,
			},
			{
				title: 'Serie A',
				subtitle: 'Bayern Munich’s Dominant Victory Over Barcelona',
				image: messi,
			},
			{
				title: 'Premier League',
				subtitle: 'Chelsea Triumphs Over Arsenal in a London Derby',
				image: primerleage,
			},
			{
				title: 'World Cup',
				subtitle: 'Argentina Defeats Brazil in a Historic Final',
				image: laliga,
			},
			{
				title: 'Champions League',
				subtitle: 'Liverpool’s Stunning Comeback Against Inter Milan',
				image: champions,
			},
		],
	},
	{
		category: 'Transfer Market',
		cards: [
			{
				title: 'La Liga',
				subtitle: 'Real Madrid Signs Kylian Mbappé for a Record Fee',
				image: laliga,
			},
			{
				title: 'UEFA Europa League',
				subtitle: 'Arsenal Secures Long-Term Deal for Declan Rice',
				image: primerleage,
			},
			{
				title: 'La Liga',
				subtitle:
					'Atletico Madrid’s Latest Signing: Joao Félix on Loan at Chelsea',
				image: laliga,
			},
			{
				title: 'UEFA Europa League',
				subtitle:
					'Manchester United Pursues Bruno Fernandes Amid Transfer Rumors',
				image: primerleage,
			},
			{
				title: 'La Liga',
				subtitle: 'Barcelona Looks to Reinforce Squad with New Midfielders',
				image: laliga,
			},
			{
				title: 'UEFA Europa League',
				subtitle: 'Lazio’s Key Players Set for Premier League Transfers',
				image: primerleage,
			},
		],
	},
	{
		category: 'Fan Zone',
		cards: [
			{
				title: 'World Cup',
				subtitle: 'Golden Boot Race: The Top Scorers of 2022',
				image: messi,
			},
			{
				title: 'World Cup',
				subtitle: 'Memorable Goals That Shaped the Final',
				image: laliga,
			},
			{
				title: 'World Cup',
				subtitle: 'Unforgettable Moments from the 2022 World Cup Group Stage',
				image: messi,
			},
			{
				title: 'World Cup',
				subtitle: 'The Best Performances in World Cup History',
				image: laliga,
			},
		],
	},
	{
		category: 'Top Stories',
		cards: [
			{
				title: 'La Liga',
				subtitle:
					'Lionel Messi’s Impact on Barcelona’s Success: A Look at His Legacy',
				image: laliga,
			},
			{
				title: 'La Liga',
				subtitle: 'Barcelona’s Rebuilding Efforts After Messi’s Departure',
				image: laliga,
			},
			{
				title: 'Premier League',
				subtitle: 'Manchester City’s Dominance Under Pep Guardiola Continues',
				image: primerleage,
			},
			{
				title: 'Bundesliga',
				subtitle: 'Bayern Munich’s Resilience: A Season Full of Highs and Lows',
				image: bondezlige,
			},
			{
				title: 'Serie A',
				subtitle:
					"Cristiano Ronaldo's Return to Serie A and His Influence on Juventus' Success",
				image: champions,
			},
		],
	},
];

const NestedNav: React.FC = () => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		'Matchday Highlights'
	); // Default category

	// Handle card rendering
	const renderCards = (cards: Card[]) => {
		return cards.map((card, index) => (
			<div
				key={index}
				className=' bg-white rounded-t-lg dark:bg-darksecoundry transition-transform transform hover:-translate-y-2 duration-300'>
				<div className='h-24 w-full overflow-hidden relative'>
					<Image
						src={card.image}
						alt={card.subtitle}
						className='object-contain rounded-t-lg'
					/>
				</div>
				<div className='px-4 py-3'>
					<h3 className='text-sm xl:text-lg font-bold line-clamp-1 text-darksecoundry dark:text-white'>
						{card.title}
					</h3>
					<p className='text-xs xl:text-sm text-darkthird line-clamp-1 dark:text-gray-300'>
						{card.subtitle}
					</p>
				</div>
			</div>
		));
	};

	// Effect to ensure the first category's cards are rendered on load
	useEffect(() => {
		if (!selectedCategory) {
			setSelectedCategory('Matchday Highlights');
		}
	}, [selectedCategory]);

	return (
		<div>
			{/* Desktop Navigation */}
			<nav className='hidden lg:flex lg:gap-4 xl:gap-8 relative py-4 px-6 animate-fadeIn'>
				{navdata.map((link, index) => (
					<div
						key={link.text}
						className='relative'
						onMouseEnter={index === 5 ? () => setIsHovered(true) : undefined}
						onMouseLeave={index === 5 ? () => setIsHovered(false) : undefined}>
						<Link
							href={link.href}
							className={`${
								index === 5
									? 'text-[#4a5fd3] dark:text-blue-100 font-extrabold'
									: 'text-darkthird dark:text-primary'
							} text-lg font-semibold hover:text-[#667cf4] dark:hover:text-darkforth transition-all duration-300 ease-in-out`}
							style={{ animationDelay: `${250 * index}ms` }}>
							{link.text}
						</Link>

						{/* Hovered State Content for "News" */}
						{isHovered && index === 5 && (
							<div className='absolute z-10 top-7 -end-56 transform bg-secoundry text-black dark:bg-darkprimary shadow-xl shadow-third grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6  pe-2 xl:pe-4 w-[67vw] max-w-6xl animate-slideIn'>
								<div className='space-y-2 col-span-1 bg-white dark:bg-darksecoundry py-4 '>
									{contentData.map((item, idx) => (
										<div
											key={idx}
											className='py-2'>
											<p
												onClick={() =>
													setSelectedCategory(
														item.category === selectedCategory
															? ''
															: item.category
													)
												}
												className='text-sm xl:text-xl font-semibold text-center text-darkthird hover:bg-darkthird hover:text-white dark:text-white transition-all w-full py-4 cursor-pointer'>
												{item.category}
											</p>
										</div>
									))}
								</div>

								{/* Grid for Cards */}
								<div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 xl:h-[50vh] mb-4  pt-4 overflow-hidden'>
									{contentData.map(
										(item) =>
											selectedCategory === item.category &&
											renderCards(item.cards) // Show cards only if category is selected
									)}
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
				className='hidden peer'
			/>
			<label
				htmlFor='navbarToggle'
				className='lg:hidden w-full relative text-darkthird dark:text-white rounded-lg hover:bg-[#e0e0e0] dark:hover:bg-blue-500 cursor-pointer'>
				<FaBars
					size={24}
					className='absolute -start-16 md:-start-36 top-1/2 transform -translate-y-1/2'
				/>
			</label>
		</div>
	);
};

export default NestedNav;
