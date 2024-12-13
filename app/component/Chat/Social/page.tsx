'use client';

import React, { useState } from 'react';
import DiscussionSection from '../../../live-match/Details/Comment';
import { Tweet } from 'react-tweet';
import Usersocial from './usersocial';
import { Suspense } from 'react';
import { TweetSkeleton } from 'react-tweet';
import { getTweet as _getTweet } from 'react-tweet/api';

function SocialPage() {
	const items = [
		{ Itemid: '1866120145959092556' },
		{ Itemid: '1866202409808417001' },
		{ Itemid: '1864620020505989170' },
		{ Itemid: '1862601632199921702' },
		{ Itemid: '1862612771679965427' },
		{ Itemid: '1866260562574807292' },
		{ Itemid: '1866139109590204668' },
		{ Itemid: '1864627963607634149' },
	];
	return (
		<div className='   m-auto flex flex-col justify-center items-center '>
			<Suspense fallback={<TweetSkeleton />}>
				{items.map((id) => (
					<Tweet id={id.Itemid} />
				))}
			</Suspense>

			<div>
				<Usersocial />
				<DiscussionSection />
			</div>
		</div>
	);
}

export default SocialPage;
