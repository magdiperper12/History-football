import '../../globals.css';

import NestedNavbar from './nestnavbar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className=' m-auto container '>
			<NestedNavbar />
			<main className='flex-grow'>{children}</main>
		</div>
	);
}
