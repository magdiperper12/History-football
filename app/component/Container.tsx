import React from 'react';
import image from '../../image/salah.png';
import Image from 'next/image';

interface Match {
	clubA: {
		name: string;
		logo: string;
	};
	clubB: {
		name: string;
		logo: string;
	};
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
		<div className='w-full md:w-full p-4 rounded-lg '>
			{/* Full-width Image */}
			<div className='mb-8 w-full h-72 overflow-hidden'>
				<Image
					src={image}
					alt='Football'
					className='w-full h-auto rounded-lg'
				/>
			</div>

			{/* Football Match Results */}
			<div>
				<h2 className='text-2xl font-semibold m-4 flex justify-center'>
					محدش مهتم يسمع قصتك غير لما توصل 🏍
				</h2>
				<div className='flex flex-col w-full justify-center gap-5'>
					{matches.map((match, index) => (
						<div
							key={index}
							className='flex items-center  justify-between bg-blue-100 dark:bg-gray-800   rounded-full shadow-md w-full'>
							{/* Club A */}
							<div className='flex items-center justify-start space-x-2 bg-red-700 text-blue-50 px-4 py-2 w-5/12 rounded-s-full'>
								<img
									src={match.clubA.logo}
									alt={match.clubA.name}
									className='w-10 h-10 rounded-full'
								/>
								<span className='md:text-lg text-sm font-semibold '>
									{match.clubA.name}
								</span>
							</div>
							{/* Score */}
							<div className='md:text-xl text-sm font-bold text-blue-900 dark:text-white  p-3 '>
								{match.score}
							</div>
							{/* Club B */}
							<div className='flex items-center justify-end space-x-2 bg-blue-700 text-blue-50 px-4 py-2 w-5/12 rounded-e-full'>
								<span className='md:text-lg text-sm font-semibold '>
									{match.clubB.name}
								</span>
								<img
									src={match.clubB.logo}
									alt={match.clubB.name}
									className='w-10 h-10 rounded-full '
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

// <div
// 	key={index}
// 	className='flex items-center justify-between bg-white dark:bg-gray-800  rounded-lg shadow-md w-full'>
// 	{/* Club A */}
// 	<div className='flex items-center space-x-2 bg-red-700 px-4 py-2 w-2/5'>
// 		<img
// 			src={match.clubA.logo}
// 			alt={match.clubA.name}
// 			className='w-10 h-10 rounded-full'
// 		/>
// 		<span className='text-lg font-semibold text-gray-700 dark:text-blue-100'>
// 			{match.clubA.name}
// 		</span>
// 	</div>
// 	{/* Score */}
// 	<div className='text-xl font-bold text-blue-900 dark:text-white'>
// 		{match.score}
// 	</div>
// 	{/* Club B */}
// 	<div className='flex items-center space-x-2 bg-blue-700 px-4 py-2 w-2/5 '>
// 		<span className='text-lg font-semibold text-gray-700 dark:text-blue-100 '>
// 			{match.clubB.name}
// 		</span>
// 		<img
// 			src={match.clubB.logo}
// 			alt={match.clubB.name}
// 			className='w-10 h-10 rounded-full '
// 		/>
// 	</div>
// </div>;
