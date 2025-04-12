import { ProductType } from '@/features/products/product-schema';
import { API_DUMMY } from '@/lib/axios';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
	{ params }: { params: { id: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { id } = params;

	try {
		const res = await fetch(`${API_DUMMY}/products/${id}`);
		const product = (await res.json()) as ProductType;

		return {
			title: `${product.title} - Next.js Starter`,
			description: product.description,
			openGraph: {
				title: product.title,
				description: product.description,
				images: [
					{
						url: product.thumbnail,
					},
				],
			},
		};
	} catch (error) {
		return {
			title: 'Product Not Found - Next.js Starter',
			description: 'This product not found',
		};
	}
}

export { default } from '@/features/products/pages/preview-product-page';
