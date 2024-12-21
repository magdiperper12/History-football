import Image from 'next/image';
import React from 'react';
import image from '../../../../assets/image/champions-league-trophy.webp';
import image2 from '../../../../assets/image/logo-r.png';
import image3 from '../../../../assets/image/bondizleage.png';
import image4 from '../../../../assets/image/primerleage.png';
import image5 from '../../../../assets/image/portoghal.png';
import image6 from '../../../../assets/image/haverts.jpg';
import Link from 'next/link';
function Stories() {
	const story = [
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
		{ name: 'ahmed', image: image },
		{ name: 'magdi', image: image2 },
		{ name: 'abdelsallam el nabulsi', image: image3 },
		{ name: 'sayed ', image: image4 },
		{ name: 'mazen elsory', image: image5 },
		{ name: 'fam morsi', image: image6 },
	];

	return (
		<div className='w-auto  bg-white dark:bg-darkprimary dark:text-primary rounded-lg shadow-md mx-3 px-4 py-3 '>
			<div className='flex justify-start items-center gap-8 overflow-scroll overflow-y-auto scroll-hidden'>
				{story.map((item, index) => (
					<Link
						href={'/'}
						className='flex flex-col justify-center items-center gap-2'
						key={index}>
						<div
							className={`w-20 h-20 bg-black overflow-hidden rounded-full ${
								index < 4 ? 'border-blue-200' : 'border-blue-500 '
							}  border-4 flex justify-center items-center`}>
							<Image
								src={item.image}
								alt=''
								className='object-cover w-44 animate-none'
							/>
						</div>
						<div className='text-sm line-clamp-1 text-gray-600 dark:text-secoundry'>
							{item.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Stories;
