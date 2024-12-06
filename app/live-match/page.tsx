'use client';

import React, { useState, useEffect } from 'react';
import CommentSection from './Details/Comment';
import TeamForm from './Details/team-form';
import { FaTrophy } from 'react-icons/fa';

interface Match {
	strHomeTeam: string;
	strAwayTeam: string;
	intHomeScore: string | null;
	intAwayScore: string | null;
	dateEventLocal: string;
	strTime: string;
	strVenue: string;
	strCountry: string;
	strBanner: string | null;
	strStatus: string;
	strFilename: string;
	strVideo: string | null;
	strHomeTeamBadge: string;
	strAwayTeamBadge: string;
	strLeague: string;
	strLeagueBadge: string;
}

interface League {
	id: string;
	name: string;
	url: string;
}

const leagues: League[] = [
	{
		id: '4328',
		name: 'Premier League',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2024-2025',
	},
	{
		id: '4332',
		name: 'Serie A',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4332&s=2024-2025',
	},
	{
		id: '4331',
		name: 'Bundesliga',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4331&s=2024-2025',
	},
	{
		id: '4334',
		name: 'League 1',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4334&s=2024-2025',
	},
	{
		id: '4335',
		name: 'La Liga',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4335&s=2024-2025',
	},
	{
		id: '4344',
		name: 'Liga NOS',
		url: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4344&s=2024-2025',
	},
];

const Live: React.FC = () => {
	const [matches, setMatches] = useState<Match[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedLeague, setSelectedLeague] = useState<League | null>(null);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
	const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
	const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
	const [selectedAwayTeam, setSelectedAwayTeam] = useState<string | null>(null);

	// Fetch matches for the selected league
	const fetchMatches = async (leagueUrl: string) => {
		try {
			setLoading(true);
			setError(null);
			const response = await fetch(leagueUrl);

			if (!response.ok) {
				throw new Error(`Failed to fetch matches. Status: ${response.status}`);
			}

			const result = await response.json();
			setMatches(result.events || []);
		} catch (err: unknown) {
			setError(
				err instanceof Error ? err.message : 'An unknown error occurred.'
			);
		} finally {
			setLoading(false);
		}
	};
	const handleTeamClick = (teamName: string, opponentName: string) => {
		// Set selected team and opponent team name
		setSelectedTeam(teamName);
		setSelectedAwayTeam(opponentName);
	};
	const toggleDiscussion = (index: number) => {
		setVisibleIndex(visibleIndex === index ? null : index);
	};
	// Handle league selection
	const handleLeagueClick = (league: League) => {
		setSelectedLeague(league);
		fetchMatches(league.url);
		setDropdownVisible(false);
	};

	// Helper function to embed YouTube video
	const embedYouTubeVideo = (videoId: string): string => {
		return `https://www.youtube.com/embed/${videoId}`;
	};
	useEffect(() => {
		if (leagues.length > 0) {
			const firstLeague = leagues[0];
			setSelectedLeague(firstLeague);
			fetchMatches(firstLeague.url);
		}
	}, []);

	return (
		<div className='w-full md:max-w-screen-md m-auto p-4 rounded-lg'>
			<h2 className='text-2xl font-semibold m-4 text-darkthird dark:text-darkforth flex justify-center'>
				Last Matches
			</h2>

			{/* League Dropdown */}
			<div className='relative'>
				<button
					onClick={() => setDropdownVisible((prev) => !prev)}
					className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600'>
					Select League
					<svg
						className={`ml-2 w-4 h-4 transform ${
							dropdownVisible ? 'rotate-180' : ''
						}`}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 10 6'
						fill='none'>
						<path
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M1 1l4 4 4-4'
						/>
					</svg>
				</button>
				{dropdownVisible && (
					<ul className='absolute bg-darkthird  rounded-lg mt-2 w-48 z-10'>
						{leagues.map((league) => (
							<li
								key={league.id}
								className='p-2 hover:bg-gray-100 hover:text-darksecoundry cursor-pointer'
								onClick={() => handleLeagueClick(league)}>
								{league.name}
							</li>
						))}
					</ul>
				)}
			</div>

			{/* Selected League Display */}
			{selectedLeague && (
				<h1 className='text-2xl font-bold flex items-center gap-2 mt-4'>
					<FaTrophy className='text-yellow-500' />
					{selectedLeague.name}
				</h1>
			)}

			{/* Loading / Error Handling */}
			{loading ? (
				<div className='flex justify-center items-center min-h-screen'>
					<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
				</div>
			) : error ? (
				<p className='text-red-500 text-lg font-medium mt-4'>{error}</p>
			) : (
				<div className='flex flex-col w-full justify-center gap-5'>
					{matches.map((match, index) => (
						<div
							key={index}
							className='w-full mt-5 cursor-pointer'>
							<div
								onClick={() => toggleDiscussion(index)}
								className='cursor-pointer flex items-center justify-between bg-secoundry dark:bg-darkthird rounded-full shadow-md w-full mt-2'>
								{/* Home Team */}
								<div
									onClick={() =>
										handleTeamClick(match.strHomeTeam, match.strAwayTeam)
									}
									className='flex items-center justify-start space-x-2 bg-third text-darkthird dark:bg-darksecoundry p-4 px-4 w-5/12 rounded-s-full'>
									<span className='md:text-lg text-sm flex gap-2 font-semibold'>
										<img
											src={match.strHomeTeamBadge || 'default-team-badge.png'}
											alt={`${match.strHomeTeam || 'Home Team'} badge`}
											loading='lazy'
											width={30}
										/>
										{match.strHomeTeam}
									</span>
								</div>
								{/* Score or Date */}
								<div className='md:text-xl text-sm font-bold text-darkthird dark:text-darkforth px-0'>
									{match.intHomeScore && match.intAwayScore
										? `${match.intHomeScore} - ${match.intAwayScore}`
										: match.dateEventLocal || '--'}
								</div>
								{/* Away Team */}
								<div
									onClick={() =>
										handleTeamClick(match.strAwayTeam, match.strHomeTeam)
									}
									className='flex items-center justify-end space-x-2 bg-primary text-darkthird dark:bg-darkprimary dark:text-darkforth px-4 p-4 w-5/12 rounded-e-full'>
									<span className='md:text-lg text-sm flex gap-2 font-semibold'>
										{match.strAwayTeam}
										<img
											src={match.strAwayTeamBadge || 'default-team-badge.png'}
											alt={`${match.strAwayTeam || 'Away Team'} badge`}
											loading='lazy'
											width={30}
										/>
									</span>
								</div>
							</div>
							{/* Match Details - Video, Team Form, Comments */}
							{visibleIndex === index && (
								<div className='mt-4 shadow-custom shadow-blue-200 transition-transform duration-500 ease-in-out'>
									{match.strVideo ? (
										<iframe
											width='560'
											height='315'
											src={embedYouTubeVideo(match.strVideo)}
											frameBorder='0'
											allow='autoplay; fullscreen'
											allowFullScreen
											title={match.strFilename}
											className='m-auto mt-5 rounded-xl'
										/>
									) : (
										<p className='text-center text-gray-500 mt-4'>
											No video available for this match.
										</p>
									)}

									{/* Team Form and Comments */}
									<div>
										{selectedTeam && selectedAwayTeam && (
											<TeamForm
												teamName={selectedTeam} // Correct prop
												opponentName={selectedAwayTeam} // Correct prop
											/>
										)}
										<CommentSection />
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Live;
