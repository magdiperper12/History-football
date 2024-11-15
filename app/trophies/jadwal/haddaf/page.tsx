'use client';
import Image from 'next/image';
import logo from '../../../image/logo2-remove.png';
import logo2 from '../../../image/logo-r.png';
import logo3 from '../../../image/salah.png';

const Haddaf: React.FC = () => {
	const players = [
		{
			id: 1,
			name: 'Lionel Messi',
			photo: logo,
			goals: 25,
			club: 'Paris Saint-Germain',
		},
		{
			id: 2,
			name: 'Cristiano ',
			photo: logo2,
			goals: 22,
			club: 'Al Nassr',
		},
		{
			id: 3,
			name: 'lamin yamal',
			photo: logo3,
			goals: 20,
			club: 'Barcelona',
		},
		{
			id: 4,
			name: 'Lionel Messi',
			photo: logo,
			goals: 25,
			club: 'Paris Saint-Germain',
		},
		{
			id: 5,
			name: 'Cristiano ',
			photo: logo2,
			goals: 22,
			club: 'Al Nassr',
		},
		{
			id: 6,
			name: 'lamin yamal',
			photo: logo3,
			goals: 20,
			club: 'Barcelona',
		},
		// Additional players as needed
	];

	return (
		<div className='container mx-auto  py-6 w-full px-2 bg-blue-50  dark:bg-blue-900'>
			<h1 className='text-2xl md:text-3xl font-bold mb-8 text-center  text-blue-800 dark:text-blue-100'>
				Top Goal Scorers
			</h1>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-blue-100 dark:bg-blue-900  rounded-lg shadow-md'>
					<thead>
						<tr className='bg-blue-700 dark:bg-blue-950 text-blue-50'>
							<th className='p-4 text-start text-sm md:text-lg font-semibold'>
								Player
							</th>
							<th className='p-4 text-start text-sm md:text-lg font-semibold'>
								Club
							</th>
							<th className='p-4 text-start text-sm md:text-lg font-semibold'>
								Goals
							</th>
						</tr>
					</thead>
					<tbody>
						{players.map((player, index) => (
							<tr
								key={player.id}
								className={`${
									index % 2 === 0
										? 'bg-gray-50 dark:bg-blue-500'
										: 'bg-gray-100 dark:bg-blue-600'
								} border-b dark:border-blue-600`}>
								<td className='p-4 text-start flex items-center justify-start space-x-2 w-full'>
									<span className='text-blue-800 dark:text-blue-100 font-medium text-sm md:text-base'>
										{player.id}
									</span>
									<Image
										src={player.photo}
										alt={`Photo of ${player.name}`}
										className='h-12 w-12 rounded-full object-cover'
										width={48}
										height={48}
									/>
									<span className='text-blue-800 dark:text-blue-50 font-medium text-sm md:text-base text-nowrap '>
										{player.name}
									</span>
								</td>
								<td className='p-4 text-start text-blue-800 dark:text-blue-50 text-sm md:text-base'>
									{player.club}
								</td>
								<td className='p-4 text-start text-blue-800 dark:text-white font-semibold text-sm md:text-base'>
									{player.goals}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Haddaf;
