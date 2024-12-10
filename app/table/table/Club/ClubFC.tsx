'use client'; // Ensure this is client-side rendering.

import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { FaYoutube } from 'react-icons/fa';

interface Profile {
	strTeam: string;
	strDescriptionEN: string;
	strStadium: string;
	strLocation: string;
	strWebsite: string;
	strTeamBadge?: string;
	strCountry: string;
	strFacebook: string;
	strTwitter: string;
	strInstagram: string;
	strYoutube: string;
	strColour1: string;
	strKeywords: string;
	strBadge: string;
	strRender: string;
	strBanner: string;
	strFanart1: string;
	strFanart2: string;
	strFanart3: string;
	strFanart4: string;
	strLogo: string;
	strEquipment: string;
}

interface Player {
	strPlayer: string;
	strPosition: string;
	strThumb: string;
}

interface MatchResult {
	strHomeTeam: string;
	strHomeTeamBadge: string;
	intHomeScore: number;
	strAwayTeam: string;
	strAwayTeamBadge: string;
	intAwayScore: number;
	strTimestamp: string;
	strColour1: string;
}

interface ClubFcProps {
	teamName: string;
}

const ClubFc: React.FC<ClubFcProps> = ({ teamName }) => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const tabs = ['Profile', 'Players', 'Last 5 Matches'];
	const [profile, setProfile] = useState<Profile | null>(null);
	const [players, setPlayers] = useState<Player[]>([]);
	const [matches, setMatches] = useState<MatchResult[]>([]);
	const [teamId, setTeamId] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const fetchData = async (url: string, setData: (data: any) => void) => {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Network response was not ok');
			const data = await response.json();
			setData(data);
		} catch (error) {
			console.error(`Error fetching data from ${url}:`, error);
		}
	};
	const fetchTeamId = async () => {
		const url = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`;
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Failed to fetch team data');
			const data = await response.json();
			if (data?.teams?.[0]) {
				setTeamId(data.teams[0].idTeam);
			}
		} catch (error) {
			console.error('Error fetching team ID:', error);
		}
	};

	const fetchMatches = async () => {
		if (!teamId) return;
		setLoading(true);
		try {
			const response = await fetch(
				`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${teamId}`
			);
			if (!response.ok) throw new Error('Failed to fetch matches');
			const data = await response.json();
			setMatches(data?.results || []);
		} catch (error) {
			console.error('Error fetching matches:', error);
		} finally {
			setLoading(false);
		}
	};

	// Fetch data for the selected tab
	useEffect(() => {
		if (activeTab === 0) {
			fetchData(
				`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamName}`,
				(data) => setProfile(data?.teams?.[0] || null)
			);
		} else if (activeTab === 1) {
			fetchData(
				`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${teamName}`,
				(data) => setPlayers(data?.player || [])
			);
		} else if (activeTab === 2 && teamId) {
			fetchMatches(); // Fetch matches when the 'Last 5 Matches' tab is selected
		}
	}, [activeTab, teamName, teamId]);

	// Fetch team ID when component mounts or when the team name changes
	useEffect(() => {
		fetchTeamId();
	}, [teamName]);
	if (!profile)
		return <div className='text-center text-gray-600'>Loading...</div>;
	const galleryImages = [
		{ src: profile.strEquipment, alt: profile.strTeam, size: 'half' },
		{ src: profile.strBadge, alt: profile.strTeam, size: 'half' },
		{ src: profile.strBanner, alt: profile.strTeam, size: 'full' },
		{ src: profile.strFanart1, alt: profile.strTeam, size: 'half' },
		{ src: profile.strFanart2, alt: profile.strTeam, size: 'half' },
		{ src: profile.strFanart3, alt: profile.strTeam, size: 'half' },
		{ src: profile.strFanart4, alt: profile.strTeam, size: 'half' },
	];

	return (
		<div className='container mx-auto p-8'>
			<div className='flex space-x-4 border-b-2 border-gray-300'>
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`p-2 py-5 flex-1 text-xl ${
							activeTab === index ? 'border-b-2 border-blue-500' : ''
						}`}
						onClick={() => setActiveTab(index)}>
						{tab}
					</button>
				))}
			</div>

			<div className='mt-4'>
				{activeTab === 0 && profile ? (
					<div className='space-y-10'>
						<div>
							<div
								className={`mb-8  rounded-lg overflow-hidden transition-all duration-300 transform `}>
								<img
									src={profile.strLogo}
									alt={''}
									className='w-full h-auto object-cover shadow-lg'
								/>
							</div>
							<h2 className='text-2xl font-bold mb-4 text-darkthird '>
								{profile?.strTeam || 'Team Name Not Available'}
							</h2>
							<p>{profile?.strDescriptionEN || 'Description not available.'}</p>
						</div>
						<div className='flex flex-col lg:flex-row justify-between gap-6'>
							{/* Details Section */}
							<div className='text-darkthird dark:text-darkforth space-y-3'>
								{[
									{ label: 'Stadium', value: profile?.strStadium },
									{ label: 'Keywords', value: profile?.strKeywords },
									{ label: 'Location', value: profile?.strLocation },
									{ label: 'Country', value: profile?.strCountry },
								].map(
									(item, index) =>
										item.value && (
											<p key={index}>
												<strong className='text-slate-700 me-3 dark:text-darkthird text-lg'>
													{item.label}:
												</strong>
												{item.value}
											</p>
										)
								)}
							</div>

							{/* Social Links Section */}
							<div
								className='flex flex-wrap gap-3 text-2xl items-center text-blue-700 dark:text-blue-400'
								role='navigation'
								aria-label='Social Media Links'>
								{[
									{
										href: profile?.strWebsite,
										Icon: CgWebsite,
										label: 'Website',
									},
									{
										href: profile?.strTwitter,
										Icon: FaSquareXTwitter,
										label: 'Twitter',
									},
									{
										href: profile?.strYoutube,
										Icon: FaYoutube,
										label: 'YouTube',
									},
									{
										href: profile?.strFacebook,
										Icon: FaFacebook,
										label: 'Facebook',
									},

									{
										href: profile?.strInstagram,
										Icon: FaInstagram,
										label: 'Instagram',
									},
								].map(
									(link, index) =>
										link.href && (
											<a
												key={index}
												href={`https://${link.href}`}
												target='_blank'
												rel='noopener noreferrer'
												aria-label={`Visit ${link.label}`}>
												<link.Icon className='transition-transform duration-200 hover:scale-125' />
											</a>
										)
								)}
							</div>
						</div>
						<div className='p-16'>
							<div className='grid grid-cols-2 gap-4 md:gap-6'>
								{galleryImages.map((image, index) =>
									image.src ? (
										<div
											key={index}
											className={`${
												image.size === 'full' ? 'col-span-2' : ''
											} rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105`}>
											<img
												src={image.src}
												alt={image.alt || 'Gallery Image'}
												className='w-full h-auto object-cover shadow-lg'
											/>
										</div>
									) : null
								)}
							</div>
						</div>
					</div>
				) : activeTab === 0 ? (
					<div>Loading...</div>
				) : null}

				{activeTab === 1 && players.length > 0 ? (
					<div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4'>
						{players.map((player, index) => (
							<div
								key={index}
								className='aspect-[1/1] relative rounded-lg hover:scale-105 overflow-hidden duration-200'>
								<img
									src={player.strThumb}
									className='object-cover'
									alt={player.strPlayer}
								/>
								<div className='bg-gradient-to-t from-black from-[1%] aspect-[1/1] w-full h-full top-0 left-0 absolute'></div>
								<div className='absolute text-white bottom-5 left-6 z-10 text-sm opacity-70 hover:opacity-100 font-medium'>
									<p>{player.strPlayer}</p>
									<p className='font-light text-base'>{player.strPosition}</p>
								</div>
							</div>
						))}
					</div>
				) : activeTab === 1 ? (
					<div>Loading players...</div>
				) : null}

				{activeTab === 2 && matches.length > 0 ? (
					<div>
						<ul>
							{matches.map((match, index) => (
								<div className='cursor-pointer my-5 flex items-center justify-between bg-secoundry dark:bg-darkthird rounded-full  shadow-md w-full'>
									<div className='flex items-center  justify-start space-x-2 bg-third text-darkthird dark:bg-darksecoundry p-4 dark:text-darkforth px-4  w-5/12 rounded-s-full'>
										<span className='md:text-lg text-sm  flex gap-2 font-semibold'>
											<img
												src={match.strHomeTeamBadge}
												alt={''}
												width={30}
											/>
											{match.strHomeTeam}
										</span>
									</div>
									<div className='md:text-xl text-sm font-bold text-darkthird dark:text-darkforth px-0'>
										{match.intHomeScore && match.intAwayScore
											? `${match.intHomeScore} / ${match.intAwayScore}`
											: match.strTimestamp}
									</div>
									<div className='flex items-center justify-end space-x-2 bg-primary text-darkthird dark:bg-darkprimary dark:text-darkforth px-4 p-4 w-5/12 rounded-e-full'>
										<span className='md:text-lg  text-sm flex gap-2 font-semibold'>
											{match.strAwayTeam}
											<img
												src={match.strAwayTeamBadge}
												alt={''}
												width={30}
											/>
										</span>
									</div>
								</div>
							))}
						</ul>
					</div>
				) : activeTab === 2 ? (
					<div>Loading matches...</div>
				) : null}
			</div>
		</div>
	);
};

export default ClubFc;
