import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group border-none shadow-none hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block aspect-[4/5] relative overflow-hidden rounded-md">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={product.imageHints[0]}
            />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4 pb-0">
        <CardTitle className="text-lg font-headline mb-1">
            <Link href={`/products/${product.id}`} className="hover:underline">{product.name}</Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between items-center transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <Button asChild size="sm">
          <Link href={`/products/${product.id}`}>
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
