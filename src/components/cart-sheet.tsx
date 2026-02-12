'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from './ui/button';
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Trash2 } from 'lucide-react';

export default function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  return (
    <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
      <SheetHeader className="px-6">
        <SheetTitle>Cart ({cartCount})</SheetTitle>
      </SheetHeader>
      <Separator />
      {cartCount > 0 ? (
        <>
          <ScrollArea className="flex-1 px-6">
            <div className="flex flex-col gap-6 py-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      data-ai-hint={item.product.imageHints[0]}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Price: ${(item.product.price).toFixed(2)}
                    </p>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">
                        Size: {item.size}
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="h-8 w-16"
                        aria-label={`Quantity for ${item.product.name}`}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="bg-secondary/50 p-6">
            <div className="flex w-full flex-col gap-4">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    Shipping and taxes will be calculated at checkout.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <SheetClose asChild>
                        <Button variant="outline" asChild><Link href="/cart">View Cart</Link></Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button asChild><Link href="/checkout">Checkout</Link></Button>
                    </SheetClose>
                </div>
            </div>
          </SheetFooter>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center px-6">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <SheetClose asChild>
            <Button asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </SheetClose>
        </div>
      )}
    </SheetContent>
  );
}
