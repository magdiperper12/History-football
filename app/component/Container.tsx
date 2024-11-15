import React from 'react';
import Image from 'next/image';
import image from '../image/salah.png';

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
		clubA: { name: 'Liverpool', logo: 'https://via.placeholder.com/40' },
		clubB: {
			name: 'Manchester United',
			logo: 'https://via.placeholder.com/40',
		},
		score: 'VS',
	},
	{
		clubA: { name: 'Chelsea', logo: 'https://via.placeholder.com/40' },
		clubB: { name: 'Arsenal', logo: 'https://via.placeholder.com/40' },
		score: 'VS',
	},
];

const Container: React.FC = () => {
	return (
		<div className='w-full md:w-full p-4 rounded-lg'>
			{/* Full-width Image */}
			<div className='mb-8 w-full h-72 overflow-hidden'>
				<Image
					src={image} // Adjust path as necessary
					alt='Football'
					className='w-full h-auto rounded-lg'
					width={600} // Image width (optional)
					height={300} // Image height (optional)
				/>
			</div>

			{/* Football Match Results */}
			<div>
				<h2 className='text-2xl font-semibold m-4 flex justify-center'>
					محدش مهتم يسمع قصتك غير لما توصل 🚓🚲🛵🏍
				</h2>
				<div className='flex flex-col w-full justify-center gap-5'>
					{matches.map((match, index) => (
						<div
							key={index}
							className='flex items-center justify-between bg-blue-100 dark:bg-gray-600 rounded-full shadow-md w-full'>
							{/* Club A */}
							<div className='flex items-center justify-start space-x-2 bg-red-200  dark:bg-red-950 text-red-900 dark:text-red-100 px-4 py-2 w-5/12 rounded-s-full'>
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
							<div className='md:text-xl text-sm font-bold text-blue-900 dark:text-blue-100 p-3'>
								{match.score}
							</div>

							{/* Club B */}
							<div className='flex items-center justify-end space-x-2 dark:bg-blue-900 bg-blue-200 text-blue-900 dark:text-blue-100 px-4 py-2 w-5/12 rounded-e-full'>
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
					))}
				</div>
			</div>
		</div>
	);
};

export default Container;
