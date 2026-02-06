import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Code, LineChart, Palette, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustLogos = PlaceHolderImages.filter((image) => image.id.startsWith("trust-logo"));
const portfolioPreviews = PlaceHolderImages.filter((image) => image.id.startsWith("portfolio-preview"));

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <PortfolioPreview />
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src="/hero-image.jpg"
        alt="A custom hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Crafting Digital Excellence
        </h1>
        <p className="mt-4 md:mt-6 max-w-lg md:max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          We build stunning, high-performing websites and digital solutions that drive growth and deliver exceptional user experiences.
        </p>
        <div className="mt-8 md:mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
            <Link href="/portfolio">Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  return (
    <section className="container mx-auto px-4 text-center">
      <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
        Trusted by Visionary Brands
      </h3>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {trustLogos.map((logo) => (
          <div key={logo.id} className="relative h-12 w-40 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300">
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              fill
              className="object-contain"
              data-ai-hint={logo.imageHint}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Creating visually stunning and user-friendly designs that captivate your audience and reflect your brand's identity.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and secure websites with the latest technologies to ensure a seamless digital presence.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Developing powerful e-commerce platforms that drive sales, manage inventory, and provide a smooth shopping experience.",
  },
  {
    icon: LineChart,
    title: "SEO & Digital Marketing",
    description: "Boosting your online visibility, driving organic traffic, and converting leads into loyal customers with tailored strategies.",
  },
];

function ServicesOverview() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Expertise</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          We offer a complete suite of digital services to bring your vision to life and help your business thrive online.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                <service.icon className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="link" className="text-lg text-primary hover:text-primary/80">
          <Link href="/services">
            Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Recent Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We are proud of the solutions we've delivered. Take a look at some of our featured projects.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioPreviews.map((project) => (
            <Link href="/portfolio" key={project.id}>
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={project.imageUrl}
                      alt={project.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold">{project.description}</h3>
                    <p className="text-muted-foreground mt-2">View Project</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="container mx-auto px-4 my-16">
      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
          Let's collaborate to create something amazing. Contact us today for a consultation and see how we can help you achieve your digital goals.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
