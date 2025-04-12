// Get many products module

import { clientDummy } from '@/lib/axios';
import { ProductResponseType } from '../product-schema';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export async function getProducts(): Promise<ProductResponseType> {
	const res = await clientDummy.get('/products');
	return res.data;
}

export function useGetProducts(options?: UseQueryOptions<ProductResponseType>) {
	return useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
		...options,
	});
}
