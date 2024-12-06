'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CgWebsite } from 'react-icons/cg';
import {
	FaFacebook,
	FaInstagram,
	FaSquareXTwitter,
	FaYoutube,
} from 'react-icons/fa6';

interface PlayerDetails {
	idPlayer: string;
	strPlayer: string;
	strPosition: string;
	strDescriptionEN: string;
	strTeam: string;
	dateBorn: string;
	strThumb: string;
	strNationality: string;
	strNumber: string;
	strWage: string;
	strSigning: string;
	strBirthLocation: string;
	strFacebook: string;
	strWebsite: string;
	strTwitter: string;
	strInstagram: string;
	strYoutube: string;
	strHeight: string;
	strWeight: string;
	strCutout: string;
	strRender: string;
	strBanner: string;
	strFanart1: string;
	strFanart2: string;
	strFanart3: string;
	strFanart4: string;
}

const TrophyDetails: React.FC = () => {
	const params = useParams();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
	const [item, setItem] = useState<PlayerDetails | null>(null);

	useEffect(() => {
		if (id) {
			fetch(
				`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
			)
				.then((response) => {
					if (!response.ok) throw new Error('Failed to fetch item');
					return response.json();
				})
				.then((data) => setItem(data?.players?.[0] ?? null))
				.catch((error) => console.error('Error fetching item:', error));
		}
	}, [id]);

	if (!id)
		return (
			<div className='text-center text-gray-600'>
				No ID provided in the route.
			</div>
		);
	if (!item) return <div className='text-center text-gray-600'>Loading...</div>;

	const galleryImages = [
		{ src: item.strThumb, alt: item.strPlayer, size: 'half' },
		{ src: item.strCutout, alt: item.strPlayer, size: 'half' },
		{ src: item.strRender, alt: item.strPlayer, size: 'full' },
		{ src: item.strBanner, alt: item.strPlayer, size: 'full' },
		{ src: item.strFanart1, alt: item.strPlayer, size: 'half' },
		{ src: item.strFanart2, alt: item.strPlayer, size: 'half' },
		{ src: item.strFanart3, alt: item.strPlayer, size: 'half' },
		{ src: item.strFanart4, alt: item.strPlayer, size: 'half' },
	];

	return (
		<section className='max-w-screen-lg container mx-auto overflow-hidden   rounded-lg'>
			<div>
				<img
					src={
						item.strBanner ||
						item.strFanart3 ||
						item.strFanart2 ||
						item.strRender ||
						item.strCutout
					}
					alt={item.strPlayer}
					className='w-full object-cover bg-gray-200 xl:h-64 lg:h-56 md:h-48 sm:h-40 rounded-t-lg'
				/>
				<div className='flex items-center -mt-16 px-6'>
					<img
						alt={item.strPlayer}
						src={item.strThumb || '/placeholder-image.png'}
						className='rounded-full w-36 h-36 border-4 border-blue-500 shadow-lg'
					/>
					<div className='m-8 mt-20'>
						<h1 className='text-2xl font-bold text-gray-800 dark:text-white'>
							{item.strPlayer}
						</h1>
						<p className='text-gray-500 dark:text-gray-300'>{item.strTeam}</p>
					</div>
				</div>
				<div className='px-6 mt-4'>
					<p className='text-gray-600 dark:text-gray-300'>
						{item.strDescriptionEN || 'No description available.'}
					</p>
					<div className='grid grid-cols-2 gap-4 mt-8 text-gray-600 dark:text-gray-200'>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Position:
							</strong>{' '}
							{item.strPosition || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Nationality:
							</strong>{' '}
							{item.strNationality || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								date Born:
							</strong>{' '}
							{item.dateBorn || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								last transfer:
							</strong>{' '}
							{item.strSigning || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Salary:
							</strong>{' '}
							{item.strWage || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Number:
							</strong>{' '}
							{item.strNumber || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Height:
							</strong>{' '}
							{item.strHeight || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Weight:
							</strong>{' '}
							{item.strWeight || '....'}
						</p>
						<p>
							<strong className='dark:text-darkthird text-darksecoundry'>
								Birthplace:
							</strong>{' '}
							{item.strBirthLocation || '....'}
						</p>
					</div>
					<div className='flex flex-row gap-4 justify-center mt-12 mb-8 text-2xl text-blue-600 dark:text-blue-400'>
						<a
							href={`https://${item.strWebsite}`}
							target='_blank'
							rel='noopener noreferrer'>
							<CgWebsite />
						</a>
						<a
							href={`https://${item.strYoutube}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaYoutube />
						</a>
						<a
							href={`https://${item.strFacebook}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaFacebook />
						</a>
						<a
							href={`https://${item.strTwitter}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaSquareXTwitter />
						</a>
						<a
							href={`https://${item.strInstagram}`}
							target='_blank'
							rel='noopener noreferrer'>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className='p-16'>
					<div className='grid grid-cols-2 gap-4 md:gap-6'>
						{galleryImages.map((image, index) =>
							image.src ? (
								<div
									key={index}
									className={`${
										image.size === 'full' ? 'col-span-2' : ''
									} rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105`}>
									<img
										src={image.src}
										alt={image.alt || 'Gallery Image'}
										className='w-full h-auto object-cover shadow-lg'
									/>
								</div>
							) : null
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrophyDetails;
