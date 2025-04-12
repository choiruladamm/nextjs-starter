import { z } from 'zod';

export const dimensionsSchema = z.object({
	width: z.number(),
	height: z.number(),
	depth: z.number(),
});

export const reviewSchema = z.object({
	rating: z.number(),
	comment: z.string(),
	date: z.string(),
	reviewerName: z.string(),
	reviewerEmail: z.string(),
});

export const metaSchema = z.object({
	createdAt: z.string(),
	updatedAt: z.string(),
	barcode: z.string(),
	qrCode: z.string(),
});

export const productSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	category: z.string(),
	price: z.number(),
	discountPercentage: z.number(),
	rating: z.number(),
	stock: z.number(),
	tags: z.array(z.string()),
	brand: z.string(),
	sku: z.string(),
	weight: z.number(),
	dimensions: dimensionsSchema,
	warrantyInformation: z.string(),
	shippingInformation: z.string(),
	availabilityStatus: z.string(),
	reviews: z.array(reviewSchema),
	returnPolicy: z.string(),
	minimumOrderQuantity: z.number(),
	meta: metaSchema,
	thumbnail: z.string(),
	images: z.array(z.string()),
});

export const productResponseSchema = z.object({
	products: z.array(productSchema),
});

export type ProductType = z.infer<typeof productSchema>;
export type ProductResponseType = z.infer<typeof productResponseSchema>;
