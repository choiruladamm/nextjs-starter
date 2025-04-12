// Get product module

import { clientDummy } from '@/lib/axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ProductType } from '../product-schema';

export async function getProduct(id: string): Promise<ProductType> {
	const res = await clientDummy.get(`/products/${id}`);
	return res.data;
}

export function useGetProduct(
	id: string,
	options?: UseQueryOptions<ProductType>,
) {
	return useQuery({
		queryKey: ['product', id],
		queryFn: () => getProduct(id),
		...options,
	});
}
