'use client';

import Live from '@/app/live-match/page';

const Match: React.FC = () => {
	return (
		<div
			className={`w-full flex items-center  flex-col p-4 md:p-10 transition-all duration-500 ease-in-out`}>
			<Live />
		</div>
	);
};

export default Match;
