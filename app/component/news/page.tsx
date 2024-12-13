import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const NewsSection = dynamic(() => import('./NewsSection'));
function page() {
	return (
		<Suspense fallback={<Loading />}>
			<NewsSection />
		</Suspense>
	);
}

export default page;
