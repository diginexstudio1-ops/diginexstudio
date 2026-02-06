import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutImage = PlaceHolderImages.find((image) => image.id === "about-us-image");

const values = [
  {
    icon: Gem,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Our business is built on a foundation of honesty, transparency, and ethical practices.",
  },
  {
    icon: Eye,
    title: "Client-Centricity",
    description: "We succeed when our clients succeed, and we are dedicated to their growth and success.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">About Us</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              The Creative Force Behind Digital Success
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              At DigiNexStudio, we are more than just a digital agency. We are a team of passionate creators, thinkers, and strategists dedicated to helping businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded on the principle of bridging creativity with technology, DigiNexStudio started as a small team with a big vision: to deliver exceptional digital experiences that are not only beautiful but also functional and results-driven. Over the years, we've grown into a full-service agency, but our core commitment to quality and client success remains unchanged.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe in the power of collaboration and work closely with our clients to understand their unique challenges and goals, ensuring every project is a perfect fit for their brand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="font-headline text-2xl font-bold flex items-center gap-3"><Target className="text-primary"/> Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To empower businesses with innovative and effective digital solutions that drive growth, enhance brand visibility, and create lasting connections with their audience.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold flex items-center gap-3"><Eye className="text-primary"/> Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To be a leading digital agency recognized for our creativity, strategic thinking, and unwavering commitment to delivering excellence and measurable results for clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our values guide every decision we make and every project we undertake.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="text-center transition-transform duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <value.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline pt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       <section className="container mx-auto px-4 mb-16 md:mb-24">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Us on Our Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
              Let's build the future of digital together. Explore our work and see how we can help you grow.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </section>
    </main>
  );
}
