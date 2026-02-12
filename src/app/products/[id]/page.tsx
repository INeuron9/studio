'use client';
import { notFound, useParams } from 'next/navigation';
import { products } from '@/lib/data';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';

export default function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]);
    const [quantity, setQuantity] = useState(1);
    
    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        if (product.sizes && !selectedSize) {
            alert('Please select a size.');
            return;
        }
        addToCart(product, selectedSize);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                     <Carousel className="w-full">
                        <CarouselContent>
                            {product.images.map((img, index) => (
                            <CarouselItem key={index}>
                                <div className="aspect-[4/5] relative">
                                <Image
                                    src={img}
                                    alt={`${product.name} image ${index + 1}`}
                                    fill
                                    className="object-cover rounded-md"
                                    data-ai-hint={product.imageHints[index % product.imageHints.length]}
                                />
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">{product.name}</h1>
                    <p className="text-2xl text-muted-foreground mb-6">${product.price.toFixed(2)}</p>
                    <p className="text-lg leading-relaxed mb-8">{product.longDescription}</p>

                    {product.sizes && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-3">Select Size</h3>
                            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                <div key={size}>
                                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                                    <Label
                                    htmlFor={`size-${size}`}
                                    className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-14 h-14 cursor-pointer"
                                    >
                                    {size}
                                    </Label>
                                </div>
                                ))}
                            </RadioGroup>
                        </div>
                    )}
                    
                    <div className="flex gap-4 mb-8">
                        <Button size="lg" onClick={handleAddToCart} className="flex-1">Add to Cart</Button>
                        <Button size="lg" variant="secondary" className="flex-1">Buy Now</Button>
                    </div>

                    <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Materials & Craftsmanship</AccordionTrigger>
                            <AccordionContent>
                                {product.materials}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Reviews</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                                        <span className="ml-2 font-semibold">5.0 (2 reviews)</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold">Exceptional Quality</p>
                                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                                        </div>
                                        <p className="text-sm">"The craftsmanship is truly remarkable. This piece feels like it will last forever. An instant heirloom."</p>
                                        <p className="text-xs text-muted-foreground mt-2">- Alex D. on June 1, 2024</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
