interface NewsItem {
	title: string;
	description: string;
	image: string;
	link: string;
	tag: string;
	timestamp: string;
	id: number;
}

const newsItems: NewsItem[] = [
	{
		title: 'Football Championship Final: The Ultimate Showdown',
		description:
			'Get ready for the most anticipated football final of the year!',
		image:
			'https://www.thesportsdb.com/images/media/team/badge/eqayrf1523184794.png',
		link: '#',
		tag: 'Football',
		timestamp: '5 mins ago',
		id: 1,
	},
	{
		title: 'Player Transfer Rumours Heat Up Before Winter Break',
		description: 'The latest transfer news as teams gear up for new signings.',
		image:
			'https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png',
		link: '#',
		tag: 'Transfer News',
		timestamp: '3 hours ago',
		id: 2,
	},
	{
		title: 'Match Review: Last Night’s Thrilling Derby',
		description: 'A complete breakdown of last night’s football derby action.',
		image:
			'https://www.thesportsdb.com/images/media/league/badge/dsnjpz1679951317.png',
		link: '#',
		tag: 'Match Review',
		timestamp: '1 hour ago',
		id: 3,
	},
	{
		title: 'Top Football Clubs Face Off in UEFA Champions League',
		description:
			'The top European clubs battle it out in this thrilling competition.',
		image:
			'https://www.thesportsdb.com/images/media/event/poster/0gjodd1718956054.jpg',
		link: '#',
		tag: 'UEFA Champions League',
		timestamp: '5 hours ago',
		id: 4,
	},
	{
		title: 'Player Spotlight: Rising Star Shines in Latest Match',
		description:
			'Meet the young footballer who is making headlines this season.',
		image:
			'https://www.thesportsdb.com/images/media/team/badge/ggqtd01621593274.png',
		link: '#',
		tag: 'Player Spotlight',
		timestamp: '3 hours ago',
		id: 5,
	},
	{
		title: 'Football World Cup: Top Teams to Watch',
		description:
			'A preview of the most promising teams for the upcoming World Cup.',
		image:
			'https://www.thesportsdb.com/images/media/event/poster/4qnshw1689062686.jpg',
		link: '#',
		tag: 'World Cup',
		timestamp: '1 hour ago',
		id: 6,
	},
	{
		title: 'Football Fitness: How Top Athletes Stay in Shape',
		description:
			'Explore the fitness regimes of the world’s top football stars.',
		image:
			'https://www.thesportsdb.com/images/media/event/poster/06rycb1718956056.jpg',
		link: '#',
		tag: 'Fitness',
		timestamp: '5 hours ago',
		id: 7,
	},
	{
		title: 'Tactics Breakdown: How Teams Prepare for Big Matches',
		description:
			'An inside look at the tactical preparation behind every great football team.',
		image:
			'https://www.thesportsdb.com/images/media/event/poster/tefnyc1689062744.jpg',
		link: '#',
		tag: 'Tactics',
		timestamp: '3 hours ago',
		id: 8,
	},
	{
		title: 'Injury Report: Key Players Out for the Season',
		description:
			'A look at the major injuries affecting top players in football.',
		image:
			'https://www.thesportsdb.com/images/media/event/poster/06rycb1718956056.jpg',
		link: '#',
		tag: 'Injury Report',
		timestamp: '1 hour ago',
		id: 9,
	},
	{
		title: 'Football Fans React: Social Media Buzz After Last Game',
		description:
			'Fans are taking to social media to share their reactions after the latest football match.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Fan Reactions',
		timestamp: '5 hours ago',
		id: 10,
	},
	{
		title: 'Football History: The Greatest Moments of All Time',
		description: 'A look back at the most iconic moments in football history.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'History',
		timestamp: '5 hours ago',
		id: 11,
	},
	{
		title: 'Women’s Football: Breaking Barriers on the Global Stage',
		description:
			'A rise in popularity for women’s football and its impact worldwide.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Women’s Football',
		timestamp: '3 hours ago',
		id: 12,
	},
	{
		title: 'Football Rivalries: The Best Matches Between Top Clubs',
		description:
			'An exploration of the greatest rivalries in football and their unforgettable matches.',
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Rivalries',
		timestamp: '1 hour ago',
		id: 13,
	},
	{
		title: 'Football Gear Review: Best Boots of the Season',
		description:
			'Our top picks for the best football boots worn by professionals.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Gear Review',
		timestamp: '5 hours ago',
		id: 14,
	},
	{
		title: 'Football Fan Culture: Celebrating the Passion',
		description:
			'Exploring the incredible culture that surrounds football fandom.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Fan Culture',
		timestamp: '3 hours ago',
		id: 15,
	},
	{
		title: 'Football Strategy: The Evolution of Tactics',
		description:
			'How football tactics have evolved over the years and the future of play.',
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Strategy',
		timestamp: '1 hour ago',
		id: 16,
	},
	{
		title: 'Football Legends: Who Will Be Remembered as the Greatest?',
		description:
			'A debate on who deserves the title of the greatest football player of all time.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Legends',
		timestamp: '5 hours ago',
		id: 17,
	},
	{
		title: 'Football Nutrition: How the Pros Eat to Win',
		description:
			'What the world’s best football players eat to stay at the top of their game.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Nutrition',
		timestamp: '5 hours ago',
		id: 18,
	},
	{
		title: 'Football Awards: Who Will Win Player of the Year?',
		description:
			'Predictions for this year’s football awards and who is in the running.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Awards',
		timestamp: '3 hours ago',
		id: 19,
	},
	{
		title: 'Football Fan Experience: A Day in the Life of a Supporter',
		description:
			'An inside look at the exciting and passionate life of a football fan.',
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Fan Experience',
		timestamp: '1 hour ago',
		id: 20,
	},
	{
		title: 'Football in Asia: Growth and Development',
		description: 'The growing popularity and development of football in Asia.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Asia',
		timestamp: '5 hours ago',
		id: 21,
	},
	{
		title: 'Football Club Finances: How the Richest Clubs Make Their Money',
		description: 'A breakdown of how top football clubs generate revenue.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg',
		link: '#',
		tag: 'Finance',
		timestamp: '3 hours ago',
		id: 22,
	},
	{
		title: 'Football and Technology: Innovations Changing the Game',
		description:
			'How technology is shaping the future of football from VAR to wearable tech.',
		image:
			'https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg',
		link: '#',
		tag: 'Technology',
		timestamp: '1 hour ago',
		id: 23,
	},
	{
		title: 'Football Legends: The Icons of the Game',
		description:
			'Celebrating the legendary figures that have shaped football’s history.',
		image:
			'https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg',
		link: '#',
		tag: 'Legends',
		timestamp: '5 hours ago',
		id: 24,
	},
];

export default newsItems;
