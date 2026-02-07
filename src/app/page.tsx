import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Code, LineChart, Palette, ShoppingCart, Search, DraftingCompass, ClipboardCheck, Rocket, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioPreviews = PlaceHolderImages.filter((image) => image.id.startsWith("portfolio-preview"));

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <ProcessOverview />
      <PortfolioPreview />
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 flex items-center justify-center text-center bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Crafting Digital Excellence
        </h1>
        <p className="mt-4 md:mt-6 max-w-lg md:max-w-2xl mx-auto text-lg md:text-xl text-foreground">
          We build stunning, high-performing websites and digital solutions that drive growth and deliver exceptional user experiences.
        </p>
        <div className="mt-8 md:mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-primary">
            <Link href="/portfolio">Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years of Experience" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="container mx-auto px-4 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold">Trusted by Visionary Brands</h2>
      <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
        Our commitment to excellence is reflected in our results. We are proud of the value we deliver to our clients.
      </p>
      <div className="mt-12 bg-card rounded-lg p-8 md:p-12 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="transition-transform duration-300 hover:scale-105">
              <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
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
          <Card key={service.title} className="text-center transition-transform duration-300 hover:-translate-y-2 bg-card">
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

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and target audience. This phase involves in-depth research, competitive analysis, and strategic planning to create a solid foundation for your project.",
  },
  {
    icon: DraftingCompass,
    title: "2. Design & Prototyping",
    description:
      "Our design team crafts intuitive wireframes and stunning high-fidelity mockups. We focus on user experience (UX) and user interface (UI) to create a product that is both beautiful and easy to use. You'll get to see and approve the design before we write a single line of code.",
  },
  {
    icon: Code,
    title: "3. Development & Implementation",
    description:
      "Our developers bring the approved designs to life using clean, efficient, and scalable code. We follow best practices and use modern technologies to build a robust and high-performing digital solution.",
  },
  {
    icon: ClipboardCheck,
    title: "4. Testing & Quality Assurance",
    description:
      "We conduct rigorous testing across multiple devices and browsers to ensure your project is bug-free, fast, and secure. Our QA process guarantees a flawless user experience before the final launch.",
  },
  {
    icon: Rocket,
    title: "5. Launch & Deployment",
    description:
      "Once everything is perfect, we handle the deployment process to get your project live on the internet. We ensure a smooth transition and monitor the launch to address any unforeseen issues.",
  },
  {
    icon: TrendingUp,
    title: "6. Support & Growth",
    description:
      "Our partnership doesn't end at launch. We offer ongoing support, maintenance, and optimization services to help your digital presence grow and adapt to new challenges and opportunities.",
  },
];

function ProcessOverview() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Collaborative Process</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          We follow a structured and transparent process to ensure your project is a success, from initial discovery to post-launch support.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border md:left-12 md:translate-x-0"></div>
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-start group"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 md:mb-0 md:absolute md:left-0 md:transform md:-translate-x-1/2 md:bg-background md:border-4 md:border-primary transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                  <step.icon className="h-10 w-10 transition-transform duration-300 ease-in-out group-hover:-rotate-3" />
                </div>
                <div className="md:ml-24 pl-8 md:pl-16 w-full">
                    <div className="bg-card p-6 rounded-lg border transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-primary/20">
                        <h3 className="font-headline text-2xl font-bold">
                            {step.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                            {step.description}
                        </p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function PortfolioPreview() {
  return (
    <section className="bg-secondary py-16 md:py-24">
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
              <Card className="overflow-hidden group bg-card transition-all duration-300 hover:shadow-xl">
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
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
