import { Button } from "@/components/ui/button";
import {
  Search,
  DraftingCompass,
  Code,
  ClipboardCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

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

export default function ProcessPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Our Workflow</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              Our Collaborative Process
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              We follow a structured and transparent process to ensure your
              project is a success. Here’s a step-by-step look at how we bring
              your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border md:left-12 md:translate-x-0"></div>
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-start"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 md:mb-0 md:absolute md:left-0 md:transform md:-translate-x-1/2 md:bg-background md:border-4 md:border-primary transition-transform duration-300 hover:scale-110">
                    <step.icon className="h-10 w-10" />
                  </div>
                  <div className="md:ml-24 pl-8 md:pl-16">
                    <h3 className="font-headline text-2xl font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Ready to Start Building?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
            Our process is designed for clarity and success. Let's apply it to
            your next big idea.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-200"
            >
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
