'use server';
/**
 * @fileOverview A Genkit flow for generating high-quality, "Old Money" themed lifestyle images for leather products.
 *
 * - generateLifestyleImages - A function that handles the image generation process.
 * - GenerateLifestyleImagesInput - The input type for the generateLifestyleImages function.
 * - GenerateLifestyleImagesOutput - The return type for the generateLifestyleImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLifestyleImagesInputSchema = z.object({
  productName: z.string().describe('The name of the leather product.'),
  productDescription: z.string().describe('A detailed description of the product, including its features and characteristics.'),
  contextKeywords: z.string().optional().describe('Optional keywords to guide the visual context of the image, e.g., "vintage interiors, classic cars, heritage vibes".'),
});
export type GenerateLifestyleImagesInput = z.infer<typeof GenerateLifestyleImagesInputSchema>;

const GenerateLifestyleImagesOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated lifestyle image.'),
});
export type GenerateLifestyleImagesOutput = z.infer<typeof GenerateLifestyleImagesOutputSchema>;

export async function generateLifestyleImages(input: GenerateLifestyleImagesInput): Promise<GenerateLifestyleImagesOutput> {
  return generateLifestyleImagesFlow(input);
}

const generateLifestyleImagesFlow = ai.defineFlow(
  {
    name: 'generateLifestyleImagesFlow',
    inputSchema: GenerateLifestyleImagesInputSchema,
    outputSchema: GenerateLifestyleImagesOutputSchema,
  },
  async (input) => {
    const promptText = `Generate a high-quality, professional lifestyle product image for a luxury leather brand named "Legacy Leather". The image should convey an 'Old Money' aesthetic, featuring elegant, timeless, and sophisticated elements. Use a neutral color palette with deep browns, beiges, creams, blacks, and dark greens. The setting should evoke luxury, such as vintage interiors, classic cars, or environments with rich wood textures and heritage vibes. Focus on presenting the product in a way that highlights its premium, handcrafted quality.

Product Name: ${input.productName}
Product Description: ${input.productDescription}
${input.contextKeywords ? `Additional context for the scene: ${input.contextKeywords}` : ''}

The image should be a lifestyle shot, showcasing the product in use or in a carefully curated environment, emphasizing its refined elegance and durability. The image should be visually consistent with the brand's luxury aesthetic.`;

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: promptText,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image or image URL is missing.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
