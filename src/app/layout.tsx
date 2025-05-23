import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReactQueryProvider from '@/providers/react-query-provider';
import NextTopLoader from 'nextjs-toploader';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Next.js 14 Starter - Adamm',
	description:
		'Next.js 14 Starter with Tailwind CSS, TypeScript, React, React Query, Axios, and more.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<NextTopLoader showSpinner={false} height={5} color='#129bf0' />
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
