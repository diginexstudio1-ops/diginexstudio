import { BarChart, LineChart, TrendingUp } from "lucide-react";
import { ChartConfig } from "@/components/ui/chart";

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  imageUrl: string;
  imageHint: string;
  results: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  performanceData: {
    name: string;
    chartType: 'bar' | 'line';
    data: any[];
    config: ChartConfig;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "portfolio-item-1",
    slug: "urban-style-ecommerce",
    title: "E-commerce Platform for 'Urban Style'",
    client: "Urban Style",
    industry: "Fashion & Apparel",
    services: ["E-commerce Development", "UI/UX Design", "Conversion Rate Optimization"],
    challenge:
      "Urban Style, a growing fashion brand, was struggling with an outdated e-commerce site that had a high cart abandonment rate and poor mobile experience. They needed a modern, scalable platform to boost sales and enhance customer engagement.",
    solution:
      "We designed and developed a new Shopify Plus store from the ground up. The project focused on a mobile-first, visually-driven UI/UX, a streamlined checkout process, and integration with their inventory management system. We also implemented a custom loyalty program to improve customer retention.",
    imageUrl: "https://images.unsplash.com/photo-1629828367362-ed0269bef233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmYXNoaW9uJTIwZWNvbW1lcmNlfGVufDB8fHx8MTc3MDM4Njg2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "fashion ecommerce",
    results: [
      {
        icon: TrendingUp,
        title: "45% Increase in Conversion Rate",
        description: "The streamlined checkout and improved user experience led to a significant boost in completed purchases.",
      },
      {
        icon: LineChart,
        title: "60% Increase in Mobile Traffic",
        description: "A fully responsive, mobile-first design captured a larger audience on smartphones and tablets.",
      },
      {
        icon: BarChart,
        title: "30% Reduction in Cart Abandonment",
        description: "Simplifying the purchasing journey kept more customers engaged through to payment.",
      },
    ],
    performanceData: [
        {
            name: "Conversion Rate",
            chartType: 'line',
            data: [
                { month: "Jan", conversionRate: 2.1 },
                { month: "Feb", conversionRate: 2.5 },
                { month: "Mar", conversionRate: 2.8 },
                { month: "Apr", conversionRate: 3.2 },
                { month: "May", conversionRate: 3.9 },
                { month: "Jun", conversionRate: 4.5 },
              ],
            config: {
                conversionRate: {
                    label: "Conversion Rate (%)",
                    color: "hsl(var(--chart-1))",
                },
            }
        },
        {
            name: "Cart Abandonment",
            chartType: 'bar',
            data: [
                { quarter: "Q1 '23", abandonmentRate: 48 },
                { quarter: "Q2 '23", abandonmentRate: 42 },
                { quarter: "Q3 '23", abandonmentRate: 35 },
                { quarter: "Q4 '23", abandonmentRate: 30 },
              ],
            config: {
                abandonmentRate: {
                    label: "Abandonment Rate (%)",
                    color: "hsl(var(--chart-2))",
                },
            }
        }
    ],
  },
  {
    id: "portfolio-item-2",
    slug: "fitlife-tracker-app",
    title: "Mobile App for 'FitLife Tracker'",
    client: "FitLife Tracker",
    industry: "Health & Fitness",
    services: ["Mobile App Development", "UI/UX Design", "API Integration"],
    challenge:
      "FitLife Tracker wanted to create a cross-platform mobile app to help users track their workouts and nutrition. They needed an intuitive interface and seamless synchronization with popular fitness wearables.",
    solution:
      "We developed a React Native application for both iOS and Android. The app features personalized workout plans, a food logging diary, and real-time data sync with Apple HealthKit and Google Fit. The design focused on simplicity and motivation, with gamification elements like badges and progress streaks.",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmaXRuZXNzJTIwYXBwfGVufDB8fHx8MTc3MDM3Mjg1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "fitness app",
    results: [
      {
        icon: TrendingUp,
        title: "200,000+ Downloads in 6 Months",
        description: "The app quickly gained traction in both the App Store and Google Play Store.",
      },
      {
        icon: LineChart,
        title: "4.8 Star Average Rating",
        description: "Positive user reviews praised the app's intuitive design and reliable performance.",
      },
      {
        icon: BarChart,
        title: "75% Daily Active User Rate",
        description: "Gamification and personalized content led to high user retention and engagement.",
      },
    ],
    performanceData: [
        {
            name: "User Growth",
            chartType: 'line',
            data: [
                { month: "Launch", users: 10000 },
                { month: "Month 2", users: 35000 },
                { month: "Month 3", users: 75000 },
                { month: "Month 4", users: 125000 },
                { month: "Month 5", users: 170000 },
                { month: "Month 6", users: 200000 },
              ],
            config: {
                users: {
                    label: "Total Users",
                    color: "hsl(var(--chart-1))",
                },
            }
        },
        {
            name: "Daily Active Users",
            chartType: 'bar',
            data: [
                { month: "Launch", dau: 60 },
                { month: "Month 2", dau: 65 },
                { month: "Month 3", dau: 72 },
                { month: "Month 4", dau: 70 },
                { month: "Month 5", dau: 74 },
                { month: "Month 6", dau: 75 },
              ],
            config: {
                dau: {
                    label: "Daily Active Users (%)",
                    color: "hsl(var(--chart-2))",
                },
            }
        }
    ],
  },
];
