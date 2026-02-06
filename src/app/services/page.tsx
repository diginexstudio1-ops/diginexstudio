import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, LineChart, Palette, ShoppingCart, Smartphone, Store, BarChart3, Search } from "lucide-react";

const services = [
  {
    category: "Design & Development",
    items: [
      {
        icon: Palette,
        title: "Custom Website Design",
        description: "We create bespoke, visually appealing designs that provide an intuitive user experience and embody your brand's unique identity.",
      },
      {
        icon: Code,
        title: "Full-Stack Web Development",
        description: "From front-end to back-end, we build fast, scalable, and secure websites using modern technologies like Next.js and serverless architectures.",
      },
      {
        icon: Smartphone,
        title: "Responsive & Mobile-First",
        description: "All our websites are crafted to look and perform flawlessly on all devices, from desktops to smartphones, ensuring a wide reach.",
      },
    ],
  },
  {
    category: "E-commerce",
    items: [
      {
        icon: Store,
        title: "E-commerce Storefronts",
        description: "We build powerful online stores with platforms like Shopify and WooCommerce, tailored to your business needs for maximum sales.",
      },
      {
        icon: ShoppingCart,
        title: "Custom Checkout & Cart",
        description: "Optimize your conversion rates with a seamless, user-friendly shopping cart and checkout process designed to reduce friction.",
      },
      {
        icon: BarChart3,
        title: "Inventory & Sales Analytics",
        description: "Integrate powerful analytics tools to track your sales, manage inventory, and gain insights into customer behavior.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      {
        icon: Search,
        title: "Search Engine Optimization (SEO)",
        description: "Improve your search engine rankings, drive organic traffic, and increase visibility with our comprehensive SEO strategies.",
      },
      {
        icon: LineChart,
        title: "Performance Marketing",
        description: "We manage and optimize your paid ad campaigns (PPC) on Google and social media to deliver a high return on investment.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Our Services</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              A Full Spectrum of Digital Solutions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              We provide end-to-end services to establish, grow, and elevate your online presence. Explore our offerings designed to meet your business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        {services.map((serviceCategory) => (
          <div key={serviceCategory.category} className="mb-16">
            <h2 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">{serviceCategory.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategory.items.map((service) => (
                <Card key={service.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                       <div className="bg-primary/10 text-primary p-3 rounded-full w-fit">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="font-headline pt-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
            We're ready to listen. Let us know your requirements, and we'll craft a solution that's perfect for you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
