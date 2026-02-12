"use server";

import { generateLifestyleImages } from "@/ai/flows/generate-lifestyle-images";
import { z } from "zod";

const formSchema = z.object({
  productName: z.string(),
  productDescription: z.string(),
  contextKeywords: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export async function generateLifestyleImage(values: FormValues) {
  const validatedValues = formSchema.parse(values);
  try {
    const result = await generateLifestyleImages(validatedValues);
    return {
      imageUrl: result.imageUrl,
    };
  } catch (error) {
    console.error("Image generation failed:", error);
    return {
      error: "Failed to generate image. Please check the server logs.",
    };
  }
}
