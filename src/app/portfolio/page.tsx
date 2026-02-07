import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = PlaceHolderImages.filter((image) => image.id.startsWith("portfolio-item"));

export default function PortfolioPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Our Work</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              A Showcase of Our Finest Projects
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              We take pride in our work. Browse through our portfolio to see the quality and creativity we bring to every project, from dynamic websites to robust e-commerce platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold">{project.description}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">Web Development &amp; Design</p>
                  {project.slug ? (
                     <Button asChild variant="link" className="p-0 h-auto mt-4 text-primary">
                        <Link href={`/portfolio/${project.slug}`}>
                            View Case Study <ArrowRight className="ml-2 h-4 w-4"/>
                        </Link>
                    </Button>
                  ) : (
                    <Button variant="link" className="p-0 h-auto mt-4 text-primary" disabled>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Inspired by Our Work?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
            Let's turn your idea into our next success story. Reach out to us to discuss your project.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
