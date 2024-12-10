import { IoChatbubbleEllipsesSharp, IoNewspaper } from 'react-icons/io5';
import { FaCartShopping, FaUsers } from 'react-icons/fa6';
import { FaChartLine } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';

type SidebarItem = {
	id: string;
	icon: React.ReactNode;
	label: string;
	href: string;
};
const SidebarData: SidebarItem[] = [
	{
		id: 'chat',
		icon: (
			<div>
				<span className='bg-red-600 w-5 h-5 flex justify-center items-center text-white text-xs rounded-full absolute top-0 end-0'>
					8
				</span>
				<IoChatbubbleEllipsesSharp className='text-2xl dark:text-indigo-600  text-indigo-600' />
			</div>
		),
		label: 'Message',
		href: '/component/Chat/Massege',
	},
	{
		id: 'News',
		icon: <IoNewspaper className='text-xl' />,
		label: 'News',
		href: '/component/news',
	},
	{
		id: 'Users ',
		icon: <FaUsers className='text-2xl' />,
		label: 'Users',
		href: '/component/Chat/users',
	},
	{
		id: 'notifications',
		icon: (
			<div>
				<span className='bg-red-600 w-5 h-5 flex justify-center items-center text-white text-xs rounded-full absolute top-0 end-0'>
					4
				</span>
				<IoIosNotifications className='text-2xl' />
			</div>
		),
		label: 'Notification',
		href: '#',
	},

	{
		id: 'standing',
		icon: <FaChartLine className='text-xl' />,
		label: 'Standing',
		href: '#',
	},
	{
		id: 'shop',
		icon: <FaCartShopping className='text-xl' />,
		label: 'Shop',
		href: '/component/shop',
	},
];
export default SidebarData;
