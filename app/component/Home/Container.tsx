import Image from 'next/image';
import React from 'react';
import champion from '../../assets/image/champions-league-trophy.webp';
import ContainerTable from './Table';
import SearchContainer from './SearchContainer';
import Contfooter from './ContFooter';
import Shop from '@/app/component/shop/Shop';

const UnifiedComponent: React.FC = () => {
	return (
		<section className='text-darksecoundry dark:text-darkforth body-font'>
			<div className='max-w-screen-lg max-h-96 rounded-xl bg-blue-500 overflow-hidden  text-center m-auto'>
				<Image
					src={champion}
					alt='champion'
					className=' m-auto'
				/>
			</div>
			<SearchContainer />
			<ContainerTable />
			<Shop />
			<Contfooter />
		</section>
	);
};

export default UnifiedComponent;
