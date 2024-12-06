'use client';

import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';

interface NavbarLink {
	text: string;
	href: string;
}

interface datas {
	strSeason: string;
}

async function fetchSeasons(): Promise<datas[]> {
	try {
		const response = await fetch(
			'https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=4328'
		);
		if (!response.ok) throw new Error('Failed to fetch data');
		const result = await response.json();
		return result?.seasons || [];
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}

export default function NestedNavbar() {
	const navbarData = {
		links: [
			{ text: 'Assistant', href: '/trophies/jadwal/Assist' },
			{ text: 'TopScorers', href: '/trophies/jadwal/haddaf' },
			{ text: 'Matches', href: '/trophies/jadwal/matches' },
			{ text: 'Table', href: '/trophies/jadwal/table' },
		] as NavbarLink[],
	};

	const [data, setData] = useState<datas[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [visable, setVisable] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const seasons = await fetchSeasons();
			setData(seasons);
			setIsLoading(false);
		})();
	}, []);

	return (
		<div>
			{/* Header Section */}

			<header className='w-full   md:px-10 px-3 py-8 bg-white dark:bg-gray-900'>
				<div className='container md:mx-auto flex flex-col md:flex-row justify-between items-center'>
					<div>
						<label
							htmlFor='HeadlineAct'
							className='block text-sm font-medium text-darkthird'>
							Year
						</label>
						<div className='relative'>
							<button
								onClick={() => setVisable(!visable)}
								aria-expanded={visable}
								aria-haspopup='listbox'
								className='w-full outline-none text-darksecoundry dark:text-white bg-darkforth dark:bg-darkthird hover:bg-darkthird dark:hover:bg-darksecoundry font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>
								Dropdown button
							</button>
							{visable && (
								<ul
									id='dropdown'
									role='listbox'
									className='absolute top-10 flex flex-col-reverse bg-primary h-44 overflow-x-hidden overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-secoundry
  [&::-webkit-scrollbar-thumb]:bg-forth
  dark:[&::-webkit-scrollbar-track]:bg-darksecoundry
  dark:[&::-webkit-scrollbar-thumb]:bg-darkthird overflow-scroll m-auto  text-center dark:bg-darkprimary w-full rounded-lg shadow'>
									{isLoading ? (
										<li className='p-2 text-center'>Loading...</li>
									) : (
										data.map((item, index) => (
											<li
												key={index}
												role='option'>
												<a
													href='#'
													className='block px-4 py-2 hover:bg-third dark:hover:bg-gray-600'>
													{item.strSeason}
												</a>
											</li>
										))
									)}
								</ul>
							)}
						</div>
					</div>

					{/* Desktop Links */}
					<nav className='hidden md:flex gap-5'>
						{navbarData.links.map((link) => (
							<Link
								key={link.text}
								href={link.href}
								className='text-lg font-bold text-blue-500 dark:text-blue-100 hover:text-[#6c83ff]'>
								{link.text}
							</Link>
						))}
					</nav>

					{/* Mobile Links */}
					<nav className='md:hidden py-4 px-3 mt-3 text-xl flex gap-4'>
						{navbarData.links.map((link) => (
							<Link
								key={link.text}
								href={link.href}
								className='text-blue-500 dark:text-blue-100 hover:text-[#6c83ff]'>
								{link.text}
							</Link>
						))}
					</nav>
				</div>
			</header>
		</div>
	);
}
