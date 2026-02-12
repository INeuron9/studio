import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We would be delighted to hear from you. Whether you have a question about our products, a press inquiry, or simply want to share your Legacy Leather story, please reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-md">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
              <a href="mailto:support@legacyleather.com" className="text-accent-foreground hover:underline">support@legacyleather.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-md">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-muted-foreground">Mon - Fri, 9am - 5pm EST</p>
              <a href="tel:+1-234-567-890" className="text-accent-foreground hover:underline">+1 (234) 567-890</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-md">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Our Atelier</h3>
              <p className="text-muted-foreground">By appointment only.</p>
              <p className="text-accent-foreground">123 Heritage Lane, Craftsville, USA</p>
            </div>
          </div>
        </div>

        <div>
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input type="text" placeholder="Your Name" className="h-12 text-base" />
                    <Input type="email" placeholder="Your Email" className="h-12 text-base" />
                </div>
                <Input type="text" placeholder="Subject" className="h-12 text-base" />
                <Textarea placeholder="Your Message" rows={6} className="text-base" />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
        </div>
      </div>
    </div>
  )
}
