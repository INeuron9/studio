'use server';
/**
 * @fileOverview A Genkit flow for generating elegant and heritage-inspired product descriptions for leather items.
 *
 * - generateProductDescription - A function that handles the product description generation process.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productType: z.string().describe('The type of the product (e.g., "Leather Jacket", "Leather Wallet", "Leather Shoes", "Leather Belt").'),
  materialDetails: z.string().describe('Detailed information about the leather and craftsmanship (e.g., "Full-grain Italian leather, handcrafted stitching, polished brass buckle").'),
  keyFeatures: z.array(z.string()).describe('A list of key features of the product (e.g., "water-resistant finish", "internal compartments", "adjustable fit").'),
  targetAudience: z.string().optional().describe('Optional: The target audience for the product (e.g., "discerning gentlemen", "elegant women").'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated elegant and heritage-inspired product description.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert copywriter for 'Legacy Leather', a premium e-commerce brand specializing in luxury leather goods.
Your task is to generate an elegant, timeless, sophisticated, and heritage-inspired product description for the following item.

Adhere to the brand's style: luxurious, confident, heritage-inspired, refined.
Focus on craftsmanship, quality, and the timeless appeal of the product.

Product Name: {{{productName}}}
Product Type: {{{productType}}}
Material Details: {{{materialDetails}}}
Key Features:
{{#each keyFeatures}}- {{{this}}}
{{/each}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}{{/if}}

Generate a compelling product description, highlighting its unique qualities and evoking a sense of enduring luxury and legacy.`,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
