import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
const Container = dynamic(() => import('./component/Home/Container'));
const Home: React.FC = () => {
	return (
		<div className='container mx-auto p-6 '>
			<Suspense fallback={<Loading />}>
				<Container />
			</Suspense>
		</div>
	);
};

export default Home;
