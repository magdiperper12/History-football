import Image from 'next/image';
import React, { Suspense } from 'react';
import champion from '../../assets/image/champions-league-trophy.webp';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
// Lazy-loaded components
const ContainerTable = dynamic(() => import('./Table'));
const SearchContainer = dynamic(() => import('./SearchContainer'));
const Contfooter = React.lazy(() => import('./ContFooter')); // Fixed path
const Shop = React.lazy(() => import('@/app/component/shop/page'));

const mainComponent: React.FC = () => {
	return (
		<section className='text-darksecoundry dark:text-darkforth body-font  '>
			<div className='max-w-screen-lg max-h-96 m-4 rounded-xl bg-blue-500 overflow-hidden text-center '>
				<Image
					src={champion}
					alt='champion'
					className=' m-auto'
				/>
			</div>
			<Suspense fallback={<Loading />}>
				<SearchContainer />
				<ContainerTable />
				<Shop />
				<Contfooter />
			</Suspense>
		</section>
	);
};

export default mainComponent;
