import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const plans = {
  monthly: [
    {
      title: "Basic",
      price: "$2,500+",
      frequency: "one-time",
      description: "Perfect for startups and small businesses needing a professional online presence.",
      features: [
        "Custom Landing Page",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
      ],
      cta: "Choose Basic",
      popular: false,
    },
    {
      title: "Pro",
      price: "$5,000+",
      frequency: "one-time",
      description: "Ideal for growing businesses looking for a feature-rich website and more customization.",
      features: [
        "Everything in Basic, plus:",
        "Up to 10 Pages",
        "Content Management System (CMS)",
        "Advanced SEO",
        "Blog & News Section",
        "Priority Support",
      ],
      cta: "Choose Pro",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      frequency: "",
      description: "Tailored solutions for large businesses with complex needs and e-commerce.",
      features: [
        "Everything in Pro, plus:",
        "E-commerce Functionality",
        "Custom API Integrations",
        "Dedicated Account Manager",
        "Advanced Security",
        "Performance Optimization",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]
};

export default function PricingPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Pricing</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              Transparent Pricing for Every Need
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              Choose a plan that fits your business goals and budget. All our plans are designed to deliver value and drive results. Custom solutions are always available.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.monthly.map((plan) => (
            <Card key={plan.title} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase py-1 px-4 self-center -mt-3 rounded-full">Most Popular</div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.frequency && <span className="text-muted-foreground">/{plan.frequency}</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="font-headline text-xl font-semibold">Need a custom plan?</h3>
          <p className="text-muted-foreground mt-2">We can create a tailored package to meet your specific requirements.</p>
          <Button asChild variant="link" className="mt-4 text-primary text-lg">
            <Link href="/contact">Get a Custom Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
