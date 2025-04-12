import Link from 'next/link';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<div className='grid min-h-dvh place-items-center'>
			<h1>Home</h1>
			<Link href='/about'>About</Link>
		</div>
	);
};

export default HomePage;
