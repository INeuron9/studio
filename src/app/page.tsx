import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-primary-foreground">
        <Image
          src="https://images.unsplash.com/photo-1446214814724-c277969634b4?w=1800&h=1200&fit=crop&q=80"
          alt="Vintage leather workshop"
          fill
          className="object-cover"
          priority
          data-ai-hint="vintage workshop"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl p-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 animate-fade-in-down">
            Timeless Leather. Defined by Legacy.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Experience the pinnacle of craftsmanship with our collection of premium, handcrafted leather goods designed to last a lifetime and beyond.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up animation-delay-300">
            <Link href="/shop">Shop Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-full w-full rounded-md overflow-hidden">
               <Image
                src="https://images.unsplash.com/photo-1543943343-24781c16b5e8?w=800&h=600&fit=crop&q=80"
                alt="Craftsman working on leather"
                fill
                className="object-cover"
                data-ai-hint="leather craft"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                A Heritage of Craft
              </h2>
              <p className="text-lg mb-6">
                Legacy Leather was born from a passion for timeless design and uncompromising quality. Our story is one of dedication to the art of leatherwork, passed down through generations.
              </p>
              <p className="mb-8">
                Each piece is a testament to our commitment, a blend of traditional techniques and modern sensibilities. We don't just sell products; we offer heirlooms.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
