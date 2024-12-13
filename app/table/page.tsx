import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../loading';

const Table = dynamic(() => import('./table/page'));
function page() {
	return (
		<Suspense fallback={<Loading />}>
			<Table />
		</Suspense>
	);
}

export default page;
