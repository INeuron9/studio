"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Your Cart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          You have {cartCount} item(s) in your cart.
        </p>
      </div>

      {cartCount > 0 ? (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex items-start gap-6 p-4">
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={item.product.imageHints[0]}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Unit Price: ${item.product.price.toFixed(2)}
                  </p>
                  {item.size && (
                    <p className="text-sm text-muted-foreground">
                      Size: {item.size}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium">Quantity:</label>
                      <Input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="h-9 w-20"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
             <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-muted-foreground">Calculated at next step</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="text-muted-foreground">Calculated at next step</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold">
                  <span>Estimated Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Your cart is currently empty.</h2>
          <p className="text-muted-foreground mb-6">
            Browse our collection to find your next timeless piece.
          </p>
          <Button asChild size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
