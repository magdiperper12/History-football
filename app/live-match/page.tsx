'use client';

import React, { useState } from 'react';
import DiscussionSection from './Details/Comment';

// Define the types for clubs and match data
interface Club {
	name: string;
	logo: string;
}

interface Match {
	clubA: Club;
	clubB: Club;
	score: string;
}

const matches: Match[] = [
	{
		clubA: { name: 'Barcelona', logo: 'https://via.placeholder.com/40' },
		clubB: { name: 'Real Madrid', logo: 'https://via.placeholder.com/40' },
		score: '2 - 1',
	},
	{
		clubA: { name: 'Chelsea', logo: 'https://via.placeholder.com/40' },
		clubB: { name: 'Arsenal', logo: 'https://via.placeholder.com/40' },
		score: '11 pm',
	},
];

const Live: React.FC = () => {
	// Initialize visibleIndex to 0 to show the first match's discussion section by default
	const [visibleIndex, setVisibleIndex] = useState<number | null>(0);

	// Function to toggle the visibility of the discussion section
	const toggleDiscussion = (index: number) => {
		setVisibleIndex(visibleIndex === index ? null : index);
	};

	return (
		<div className='w-full md:max-w-screen-md m-auto p-4 rounded-lg'>
			{/* Football Match Results */}
			<div>
				<h2 className='text-2xl font-semibold m-4 text-darkthird dark:text-darkforth flex justify-center'>
					Matches Today
				</h2>
				<div className='flex flex-col w-full justify-center gap-5'>
					{matches.map((match, index) => (
						<div
							key={index}
							className='w-full'>
							<div
								onClick={() => toggleDiscussion(index)}
								className='cursor-pointer flex items-center justify-between bg-secoundry dark:bg-darkthird  rounded-full shadow-md w-full'>
								{/* Club A */}
								<div className='flex items-center justify-start space-x-2 bg-third text-darkthird dark:bg-darksecoundry dark:text-darkforth px-4 py-2 w-5/12 rounded-s-full'>
									<img
										src={match.clubA.logo}
										alt={match.clubA.name}
										className='w-10 h-10 rounded-full'
									/>
									<span className='md:text-lg text-sm font-semibold'>
										{match.clubA.name}
									</span>
								</div>

								{/* Score */}
								<div className='md:text-xl text-sm font-bold text-darkthird dark:text-darkforth  p-3'>
									{match.score}
								</div>

								{/* Club B */}
								<div className='flex items-center justify-end space-x-2 bg-primary text-darkthird dark:bg-darkprimary dark:text-darkforth px-4 py-2 w-5/12 rounded-e-full'>
									<span className='md:text-lg text-sm font-semibold'>
										{match.clubB.name}
									</span>
									<img
										src={match.clubB.logo}
										alt={match.clubB.name}
										className='w-10 h-10 rounded-full'
									/>
								</div>
							</div>
							{/* Discussion Section */}
							{visibleIndex === index && (
								<div
									className={`mt-4 transition-transform duration-500 ease-in-out shadow-custom shadow-blue-200 ${
										visibleIndex === index
											? 'translate-y-0 opacity-100'
											: 'translate-y-full opacity-0 pointer-events-none'
									}`}>
									<DiscussionSection />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Live;
