'use server';
/**
 * @fileOverview An AI assistant flow for Legacy Leather customers.
 *
 * - getAICustomerAssistantResponse - A function that handles customer queries.
 * - AICustomerAssistantInput - The input type for the getAICustomerAssistantResponse function.
 * - AICustomerAssistantOutput - The return type for the getAICustomerAssistantResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICustomerAssistantInputSchema = z.object({
  question: z.string().describe("The customer's question about products, shipping, returns, or brand heritage."),
});
export type AICustomerAssistantInput = z.infer<typeof AICustomerAssistantInputSchema>;

const AICustomerAssistantOutputSchema = z.object({
  answer: z.string().describe("The AI assistant's answer to the customer's question."),
});
export type AICustomerAssistantOutput = z.infer<typeof AICustomerAssistantOutputSchema>;

export async function getAICustomerAssistantResponse(input: AICustomerAssistantInput): Promise<AICustomerAssistantOutput> {
  return aiCustomerAssistantFlow(input);
}

const aiCustomerAssistantPrompt = ai.definePrompt({
  name: 'aiCustomerAssistantPrompt',
  input: {schema: AICustomerAssistantInputSchema},
  output: {schema: AICustomerAssistantOutputSchema},
  prompt: `You are 'Legacy Leather AI Assistant', a helpful and knowledgeable customer service representative for 'Legacy Leather', a premium leather goods brand. Our brand embodies elegant, timeless, and sophisticated aesthetics, offering high-quality, handcrafted leather products including jackets (men & women), wallets, shoes, and belts. We pride ourselves on our heritage, craftsmanship, and commitment to quality.

You can answer questions regarding:
- Our products (materials, features, availability)
- Shipping policies
- Return policies
- Our brand heritage and craftsmanship process

Please provide concise, accurate, and helpful answers in a luxurious, confident, and refined tone.

Customer's question: {{{question}}}`,
});

const aiCustomerAssistantFlow = ai.defineFlow(
  {
    name: 'aiCustomerAssistantFlow',
    inputSchema: AICustomerAssistantInputSchema,
    outputSchema: AICustomerAssistantOutputSchema,
  },
  async input => {
    const {output} = await aiCustomerAssistantPrompt(input);
    return output!;
  }
);
