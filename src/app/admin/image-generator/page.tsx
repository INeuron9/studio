"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { generateLifestyleImage } from "./actions";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  productName: z.string().min(3, "Product name is required."),
  productDescription: z.string().min(10, "A brief description is required."),
  contextKeywords: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ImageGeneratorPage() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productDescription: "",
      contextKeywords: "vintage interiors, classic cars, heritage vibes",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setGeneratedImage(null);
    try {
      const result = await generateLifestyleImage(values);
      if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
        toast({
          title: "Image Generated Successfully",
          description: "Your new lifestyle image is ready.",
        });
      } else {
        throw new Error("Image generation failed to return a URL.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Image Generation Failed",
        description: "An error occurred while generating the image. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">AI Lifestyle Image Generator</CardTitle>
            <CardDescription>
              Create compelling, "Old Money" themed lifestyle images for your products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="productName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Artisan Leather Jacket" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="productDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="A timeless statement piece, crafted for the modern pioneer." {...field} rows={4} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contextKeywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Context Keywords</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., vintage interiors, classic cars" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Generate Image"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
              <div className="flex items-center justify-center border-2 border-dashed rounded-md bg-muted/50 p-4">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <Loader2 className="h-10 w-10 animate-spin" />
                    <p>Generating your image...</p>
                  </div>
                ) : generatedImage ? (
                  <div className="relative w-full aspect-square">
                    <Image src={generatedImage} alt="Generated lifestyle" fill className="object-contain" />
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <p>Your generated image will appear here.</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
