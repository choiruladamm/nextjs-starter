'use client';

import React from 'react';
import { useGetProducts } from '../api';

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = ({}) => {
	const { data, isPending, error } = useGetProducts();

	if (isPending) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			{data.products.map(product => {
				return (
					<div key={product.id}>
						<h2>{product.title}</h2>
						<p>{product.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ProductPage;
