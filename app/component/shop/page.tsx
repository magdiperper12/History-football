import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const Shop = dynamic(() => import('./Shopsection'));
function page() {
	return (
		<Suspense fallback={<Loading />}>
			<Shop />
		</Suspense>
	);
}

export default page;
