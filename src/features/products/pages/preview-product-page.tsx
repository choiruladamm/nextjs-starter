'use client';

import React from 'react';
import { useGetProduct } from '../api';

interface PreviewProductPageProps {
	params: { id: string };
}

const PreviewProductPage: React.FC<PreviewProductPageProps> = ({ params }) => {
	const { id: slug } = params;

	const { data, isPending, error } = useGetProduct(slug);

	if (isPending) return <div>Loading...</div>;
	if (!data) return <div>Product not found</div>;
	if (error) return <div>Error: {error.message}</div>;

	return <div>{data.title}</div>;
};

export default PreviewProductPage;
