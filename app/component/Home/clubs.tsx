'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import image2 from '../../image/logo-r.png';
import image4 from '../../image/logo2-remove.png';
import { FaTrophy } from 'react-icons/fa6';

interface Club {
	name: string;
	logo: StaticImageData;
}

const clubs: Club[] = [
	{ name: 'Liverpool', logo: image4 },
	{ name: 'Chelsea', logo: image2 },
	{ name: 'Arsenal', logo: image2 },
	{ name: 'Barcelona', logo: image4 },
	{ name: 'Real Madrid', logo: image4 },
	{ name: 'Manchester City', logo: image4 },
	{ name: 'Manchester United', logo: image2 },
	{ name: 'AC Milan', logo: image2 },
	{ name: 'Inter Milan', logo: image4 },
	{ name: 'Juventus', logo: image2 },
	{ name: 'Bayern Munich', logo: image2 },
];

const Club: React.FC = () => {
	return (
		<div className='container mx-auto p-6 my-10'>
			<div className='flex justify-start items-center gap-3'>
				<FaTrophy className='text-blue-500 text-3xl ' />
				<span className='text-darkthird text-xl'>Club</span>
			</div>

			<div
				className='flex  justify-between items-center py-10  gap-10   overflow-y-hidden overflow-x-auto
                                        [&::-webkit-scrollbar]:w-1
                                        [&::-webkit-scrollbar]:h-1
                                    [&::-webkit-scrollbar-track]:bg-secoundry
                                    [&::-webkit-scrollbar-thumb]:bg-forth
                                    dark:[&::-webkit-scrollbar-track]:bg-darksecoundry
                                    dark:[&::-webkit-scrollbar-thumb]:bg-darkthird'>
				{clubs.map((club, index) => (
					<div
						className={`flex  justify-center mx-10 rounded-full items-center ${
							index == 0 ? 'bg-darkthird dark:bg-yellow-400' : 'bg-transparent '
						}     `}>
						<div
							key={`${club.name}-${index}`}
							className={` rounded-full m-0.5  shadow-lg justify-center  h-32 w-32 flex flex-col items-center bg-secoundry dark:bg-darksecoundry`}>
							<Image
								src={club.logo}
								alt={club.name}
								width={100}
								height={100}
								className='object-contain'
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Club;
