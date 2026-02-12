import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Our Heritage, Your Legacy</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We believe that the finest things in life aren't made, they are crafted. Legacy Leather was founded on this principle, a dedication to an art form that has been passed down through generations.
          </p>
        </div>
      </div>

      <div className="relative h-80 md:h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1512428208352-22d1c252d3d8?w=1920&h=1080&fit=crop&q=80"
          alt="Panoramic view of a traditional leather tannery"
          fill
          className="object-cover"
          data-ai-hint="leather workshop panoramic"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">The Art of Craftsmanship</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Our journey begins with the selection of the world's finest hides. Each piece of leather is chosen for its unique character, durability, and beauty. We partner with tanneries that share our commitment to sustainable and ethical practices, ensuring that every product begins with a foundation of integrity.
              </p>
              <p>
                In our workshop, tradition meets precision. Our artisans, with decades of collective experience, employ age-old techniques to cut, stitch, and finish each item by hand. Every seam is a mark of strength, every edge a testament to patience. This meticulous process ensures that no two Legacy Leather pieces are exactly alike; each carries the subtle signature of its maker.
              </p>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559563459-7d8a9a2b5e43?w=800&h=1000&fit=crop&q=80"
              alt="Close-up of hands stitching leather"
              fill
              className="object-cover"
              data-ai-hint="leather stitching"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">A Vision of Timeless Elegance</h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8">
              In a world of fleeting trends, we stand for enduring style. Our designs are classic, refined, and built to transcend seasons. We create not just accessories, but companions for your life's journey—pieces that gather stories, bear the marks of your adventures, and become a part of your personal legacy.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">Explore the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
