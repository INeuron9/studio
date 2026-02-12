import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Lock } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Heritage Lane" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Craftsville" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" placeholder="12345" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="**** **** **** 1234" className="pl-10" />
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground mt-2" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" placeholder="MM / YY" />
                </div>
                 <div className="relative">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="pr-10" />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground mt-2" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input id="name-on-card" placeholder="John M. Doe" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* This would be populated from cart context */}
                <div className="flex justify-between items-center">
                    <p>Artisan Leather Jacket</p>
                    <p>$699.99</p>
                </div>
                 <div className="flex justify-between items-center">
                    <p>Heritage Leather Wallet</p>
                    <p>$129.99</p>
                </div>
              <Separator />
              <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$829.98</p>
              </div>
              <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>$15.00</p>
              </div>
               <div className="flex justify-between">
                  <p>Taxes</p>
                  <p>$68.47</p>
              </div>
              <Separator />
               <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>$913.45</p>
              </div>
            </CardContent>
            <CardFooter>
                 <Button size="lg" className="w-full">
                    <Lock className="mr-2 h-5 w-5" /> Place Order
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
