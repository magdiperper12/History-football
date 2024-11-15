'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../image/logo2-remove.png';

const MatchRow: React.FC<{ team1: string; score: string; team2: string }> = ({
	team1,
	score,
	team2,
}) => {
	return (
		<div className='flex items-center justify-center w-full py-3'>
			{/* Left team */}
			<div className='flex items-center justify-start space-x-2 bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-100 px-2 py-2 w-5/12 rounded-s-full transition-all duration-300 ease-in-out'>
				<Image
					src={logo}
					alt={team1}
					className='w-10 h-10 rounded-full'
				/>
				<span className='text-sm font-semibold'>{team1}</span>
			</div>

			{/* Score */}
			<div className='text-sm font-bold text-blue-900 dark:text-blue-100 p-3 text-nowrap'>
				{score}
			</div>

			{/* Right team */}
			<div className='flex items-center justify-end space-x-2 bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-2 py-2 w-5/12 rounded-e-full transition-all duration-300 ease-in-out'>
				<span className='text-sm font-semibold'>{team2}</span>
				<Image
					src={logo}
					alt={team2}
					className='w-10 h-10 rounded-full'
				/>
			</div>
		</div>
	);
};

const Match: React.FC = () => {
	return (
		<div
			className={`w-full bg-blue-50 dark:bg-gray-800 flex items-center h-screen flex-col p-4 md:p-10 transition-all duration-500 ease-in-out`}>
			{/* Dark Mode Toggle */}

			{/* Matches */}
			<div className='w-full space-y-4'>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
				<MatchRow
					team1='Man United'
					score='2 - 3'
					team2='Liverpool'
				/>
			</div>
		</div>
	);
};

export default Match;
