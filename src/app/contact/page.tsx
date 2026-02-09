import { ContactForm } from "@/components/pages/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Contact Us</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-sm">
            <h2 className="font-headline text-3xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">Reach out to us via email for any inquiries.</p>
                <a href="mailto:info@diginexstudio.com" className="text-primary hover:underline">
                  info@diginexstudio.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">Give us a call to discuss your project.</p>
                <a href="tel:+918639856160" className="text-primary hover:underline block">
                  +91 86398 56160
                </a>
                <a href="tel:+917995849217" className="text-primary hover:underline block">
                  +91 79958 49217
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-muted-foreground">office no-564,5 floor, suryalok complex,abids,hyd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
