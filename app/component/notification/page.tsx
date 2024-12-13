'use client';

import { useState } from 'react';

const ToastMessage = () => {
	const [hiddalert, setHiddalert] = useState(true);

	const handleClose = () => {
		setHiddalert(false);
	};

	if (!hiddalert) return null;

	return (
		<div
			id='toast-message-cta'
			className='w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400'
			role='alert'></div>
	);
};

export default ToastMessage;
