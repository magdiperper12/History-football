import React from 'react';

function Loading() {
	return (
		<div className='grid h-screen place-content-center bg-primary dark:bg-darkthird px-4'>
			<div className='text-center'>
				<h1 className='text-9xl font-black text-darkforth dark:text-darkprimary '>
					Loading!
				</h1>
			</div>
		</div>
	);
}

export default Loading;
