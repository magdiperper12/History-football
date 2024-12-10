import '../globals.css';
import Image from 'next/image';
import NestedNavbar from './nestnavbar';
import Carousel from './Carousel';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className=' m-auto container '>
			<Carousel />
			<NestedNavbar />
			<main className='flex-grow'>{children}</main>
		</div>
	);
}
