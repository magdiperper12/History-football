import { BsMicrosoftTeams } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';

type MenuItem = {
	icon?: React.ReactNode;
	label: string;
	href?: string;
	subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
	{
		icon: <MdOutlineDashboard />,
		label: 'Dashboard',
		href: '#',
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your Teams',
		subItems: [
			{ label: 'Manchester City', href: '#' },
			{ label: 'Arsenal', href: '#' },
			{ label: 'Liverpool', href: '#' },
			{ label: 'Barcenlona', href: '#' },
			{ label: 'tottenham', href: '#' },
		],
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your players',
		subItems: [
			{ label: 'messi', href: '#' },
			{ label: 'salah', href: '#' },
			{ label: 'treka', href: '#' },
			{ label: 'marmoush', href: '#' },
			{ label: 'inesta', href: '#' },
		],
	},
	{
		icon: <BsMicrosoftTeams />,
		label: 'your trophies',
		subItems: [
			{ label: 'Banned Users', href: '#' },
			{ label: 'Calendar', href: '#' },
		],
	},
];
export default menuItems;
