import Link from 'next/link';
import { Logo } from './icons';
import { Button } from './ui/button';
import { Github, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Github, href: '#', name: 'Github' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo className="h-8 w-auto text-primary-foreground" />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Timeless Leather. Defined by Legacy. Premium handcrafted goods for a life well-lived.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/admin/image-generator" className="hover:underline">Admin</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Join our community and stay updated on new arrivals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Legacy Leather. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
