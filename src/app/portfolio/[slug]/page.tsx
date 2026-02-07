'use client';
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Bar, Line, LineChart as RechartsLineChart, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMemo } from "react";

// Since we are using this on the client, we cannot use generateStaticParams
// export async function generateStaticParams() {
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = useMemo(() => caseStudies.find((study) => study.slug === params.slug), [params.slug]);

  if (!caseStudy) {
    // notFound() can only be used in Server Components
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Case Study Not Found</h1>
            <p className="mt-4 text-muted-foreground">The case study you are looking for does not exist.</p>
            <Button asChild className="mt-8">
                <Link href="/portfolio">Back to Portfolio</Link>
            </Button>
        </main>
    )
  }

  return (
    <main className="flex flex-col">
      <section className="relative h-[60vh] bg-secondary">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover"
          data-ai-hint={caseStudy.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-center items-center text-white">
          <p className="font-semibold text-primary">Case Study</p>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mt-2 max-w-4xl">
            {caseStudy.title}
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-24 relative z-10">
        <Card>
          <CardContent className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold">Client</h3>
              <p className="text-muted-foreground">{caseStudy.client}</p>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Industry</h3>
              <p className="text-muted-foreground">{caseStudy.industry}</p>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Services</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {caseStudy.services.map((service) => (
                  <Badge key={service} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="font-headline text-3xl font-bold">The Challenge</h2>
            <p className="mt-4 text-muted-foreground text-lg">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold">The Solution</h2>
            <p className="mt-4 text-muted-foreground text-lg">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Measurable Results</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Our solutions delivered tangible improvements and a significant return on investment.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.results.map((result) => (
              <Card key={result.title} className="text-center bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <result.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline pt-4 text-2xl">{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 my-16 md:my-24">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Performance Data</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              A closer look at the key performance indicators before and after our intervention.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.performanceData.map(chart => {
                const dataKey = Object.keys(chart.data[0])[1];
                const colorVar = `var(--color-${dataKey})`;

                return (
                  <Card key={chart.name}>
                      <CardHeader>
                          <CardTitle>{chart.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ChartContainer config={chart.config} className="h-[250px] w-full">
                              {chart.chartType === 'line' ? (
                                  <RechartsLineChart data={chart.data} margin={{ left: 12, right: 12 }}>
                                      <CartesianGrid vertical={false} />
                                      <XAxis dataKey={Object.keys(chart.data[0])[0]} tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => String(value).slice(0, 3)}/>
                                      <YAxis />
                                      <Tooltip cursor={false} content={<ChartTooltipContent />} />
                                      <Line dataKey={dataKey} type="monotone" stroke={colorVar} strokeWidth={2} dot={false} />
                                  </RechartsLineChart>
                              ) : (
                                  <RechartsBarChart data={chart.data} margin={{ left: 12, right: 12 }}>
                                      <CartesianGrid vertical={false} />
                                      <XAxis dataKey={Object.keys(chart.data[0])[0]} tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => String(value).slice(0, 6)} />
                                      <YAxis />
                                      <Tooltip cursor={false} content={<ChartTooltipContent />} />
                                      <Bar dataKey={dataKey} fill={colorVar} radius={4} />
                                  </RechartsBarChart>
                              )}
                          </ChartContainer>
                      </CardContent>
                  </Card>
                )
            })}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Have a similar project?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80 md:text-lg">
            Let's discuss how we can achieve the same great results for your business.
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
