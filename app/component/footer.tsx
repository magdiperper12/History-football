'use client';

import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Define the types for the footer items and social links
interface SocialLink {
	id: number;
	name: string;
	icon: JSX.Element;
	url: string;
}

interface FooterItem {
	name: string;
	url: string;
}

interface FooterSection {
	id: number;
	title: string;
	items: FooterItem[];
}

const Footer: React.FC = () => {
	// Define the social media links
	const socialLinks: SocialLink[] = [
		{
			id: 1,
			name: 'Twitter',
			icon: <FaTwitter />,
			url: '#',
		},
		{
			id: 2,
			name: 'LinkedIn',
			icon: <FaLinkedin />,
			url: '#',
		},
		{
			id: 3,
			name: 'Instagram',
			icon: <FaInstagram />,
			url: '#',
		},
	];

	// Define the footer content structure
	const footerLinks: FooterSection[] = [
		{
			id: 1,
			title: 'Company',
			items: [
				{ name: 'About Us', url: '#' },
				{ name: 'Careers', url: '#' },
				{ name: 'Blog', url: '#' },
			],
		},
		{
			id: 2,
			title: 'Support',
			items: [
				{ name: 'Help Center', url: '#' },
				{ name: 'Contact Us', url: '#' },
				{ name: 'Privacy Policy', url: '#' },
			],
		},
	];

	return (
		<div>
			<footer className={`bg-white dark:bg-[#0b0e14] py-6 md:py-10`}>
				<div className='container mx-auto px-6 md:px-16'>
					<div className='flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0'>
						{/* Footer links */}
						{footerLinks.map((section) => (
							<div
								key={section.id}
								className='py-5 md:py-10'>
								<h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
									{section.title}
								</h3>
								<ul className='space-y-2 text-gray-600 dark:text-gray-400'>
									{section.items.map((item, index) => (
										<li key={index}>
											<a
												href={item.url}
												className='hover:text-[#6c83ff] transition-colors duration-300'>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}

						{/* Social Media Links */}
						<div className='py-5 md:py-10'>
							<h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
								Follow Us
							</h3>
							<ul className='flex space-x-6 justify-center md:justify-start text-gray-600 dark:text-gray-400'>
								{socialLinks.map((social) => (
									<li key={social.id}>
										<Link
											href={social.url}
											className='hover:text-[#6c83ff] transition-colors duration-300 flex items-center space-x-2'>
											{social.icon}
											<span className='hidden sm:inline'>{social.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='text-center text-gray-500 dark:text-gray-400 mt-8'>
						<p className='text-sm'>
							&copy; 2024 - {new Date().getFullYear()} Historic. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
