import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '../loading';
const Live = dynamic(() => import('./Live'), {
	loading: () => <Loading />,
});
function page() {
	return <Live />;
}

export default page;
