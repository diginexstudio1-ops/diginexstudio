import { Award, BarChart, LineChart, TrendingUp, UserCheck } from "lucide-react";
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
  websiteUrl?: string;
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
  galleryImages?: {
    src: string;
    alt: string;
    hint: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "portfolio-item-10",
    slug: "trending-brains-skill-platform",
    title: "Trending Brains: Online Skill Development Platform",
    client: "Trending Brains Academy",
    industry: "Online Education",
    services: ["Web Development", "UI/UX Design", "Platform Development"],
    challenge: "Trending Brains needed to position itself as a premier career-oriented online education platform in India. Their goal was to attract students by showcasing practical, employment-focused courses, demonstrating credibility through success stories, and ultimately converting visitors into enrolled learners.",
    solution: "We developed a comprehensive online learning platform from the ground up, focusing on a seamless user experience. The platform features an intuitive course catalog, easy enrollment, and integration with a learning management system. We designed a clean, responsive interface that highlights course benefits, student testimonials, and clear calls-to-action for enrollment and support.",
    imageUrl: "/trending-brains-hero.jpg",
    imageHint: "custom hero",
    websiteUrl: "https://www.trendingbrains.com",
    results: [
      {
        icon: TrendingUp,
        title: "70% Increase in Course Enrollment",
        description: "The new user-friendly platform and clear calls-to-action dramatically boosted student sign-ups within the first quarter."
      },
      {
        icon: LineChart,
        title: "50% Higher User Engagement",
        description: "An improved site structure and engaging course layouts led to users spending more time on the platform and exploring more courses."
      },
      {
        icon: UserCheck,
        title: "95% Positive Student Feedback",
        description: "Feedback from new students praised the platform's ease of use and the clarity of the course information."
      }
    ],
    performanceData: [
      {
        name: "Course Enrollment Growth",
        chartType: "line",
        data: [
          { month: "Pre-Launch", enrollment: 500 },
          { month: "Month 1", enrollment: 1200 },
          { month: "Month 2", enrollment: 2500 },
          { month: "Month 3", enrollment: 4800 },
          { month: "Month 4", enrollment: 8500 }
        ],
        config: {
          enrollment: {
            label: "New Enrollments",
            color: "hsl(var(--chart-1))"
          }
        }
      },
      {
        name: "User Engagement (Avg. Session)",
        chartType: "bar",
        data: [
          { metric: "Before", duration: 8 },
          { metric: "After", duration: 15 }
        ],
        config: {
          duration: {
            label: "Avg. Minutes",
            color: "hsl(var(--chart-2))"
          }
        }
      }
    ],
    galleryImages: [
      {
        src: "/trending-brains-screenshot-1.jpg",
        alt: "Screenshot of the Trending Brains homepage",
        hint: "website homepage"
      },
      {
        src: "/trending-brains-screenshot-2.jpg",
        alt: "Screenshot of a course page on Trending Brains",
        hint: "course details"
      }
    ]
  },
  {
    id: "portfolio-item-11",
    slug: "toolzenweb-digital-solutions",
    title: "ToolZenWeb — Digital Solutions & Web Services Provider",
    client: "ToolZenWeb",
    industry: "Digital Services & Technology",
    services: ["Web Development", "UI/UX Design", "Digital Tools"],
    challenge: "ToolZenWeb’s offerings were diverse but lacked a central visual narrative that communicated what each digital service does, why users should trust the platform, and how services help business outcomes. The goal was to represent ToolZenWeb as a professional, trustworthy digital solutions partner.",
    solution: "We designed a clean, professional, and user-centric website that clearly categorizes ToolZenWeb's diverse services. The new platform features intuitive navigation, detailed service pages with clear benefit descriptions, and a showcase of their digital tools. The design emphasizes clarity and trust, helping users quickly understand the value of each offering.",
    imageUrl: "/toolzenweb-hero.jpg",
    imageHint: "web tools",
    websiteUrl: "https://www.toolzenweb.com",
    results: [
      {
        icon: TrendingUp,
        title: "40% Increase in User Engagement",
        description: "A clear service structure and intuitive navigation led to users spending more time exploring the platform's offerings."
      },
      {
        icon: LineChart,
        title: "30% Rise in Service Inquiries",
        description: "Simplified contact forms and clear calls-to-action made it easier for potential clients to get in touch."
      },
      {
        icon: UserCheck,
        title: "Positive Feedback on Clarity",
        description: "Users praised the new design for its professionalism and how easily they could find the information they needed."
      }
    ],
    performanceData: [
      {
        name: "User Engagement (Time on Site)",
        chartType: 'line',
        data: [
          { month: 'Jan', time: 2.5 },
          { month: 'Feb', time: 2.8 },
          { month: 'Mar', time: 3.5 },
          { month: 'Apr', time: 4.1 },
          { month: 'May', time: 4.5 },
        ],
        config: {
          time: {
            label: "Avg. Mins",
            color: "hsl(var(--chart-1))"
          },
        }
      },
      {
        name: "Service Inquiries",
        chartType: 'bar',
        data: [
          { month: 'Jan', inquiries: 25 },
          { month: 'Feb', inquiries: 30 },
          { month: 'Mar', inquiries: 42 },
          { month: 'Apr', inquiries: 55 },
          { month: 'May', inquiries: 65 },
        ],
        config: {
          inquiries: {
            label: "Inquiries",
            color: "hsl(var(--chart-2))"
          },
        }
      }
    ],
    galleryImages: [
      {
        src: "/toolzenweb-screenshot-1.jpg",
        alt: "Screenshot of ToolZenWeb homepage",
        hint: "website homepage"
      },
      {
        src: "/toolzenweb-screenshot-2.jpg",
        alt: "Screenshot of the digital tools section",
        hint: "digital tools"
      }
    ]
  },
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
  {
    id: "portfolio-item-3",
    slug: "corporate-website-innovate-inc",
    title: "Corporate Website Redesign for 'Innovate Inc.'",
    client: "Innovate Inc.",
    industry: "Technology & SaaS",
    services: ["Web Design", "Web Development", "Brand Identity", "SEO"],
    challenge: "Innovate Inc.'s existing website was outdated, failed to communicate their position as an industry leader, and generated very few qualified leads. It lacked a modern user experience and didn't reflect their innovative software solutions.",
    solution: "We executed a complete website overhaul, creating a sleek, modern design that aligns with their brand identity. The new site features clear value propositions, interactive product demonstrations, and a streamlined 'Request a Demo' workflow. We built it on a scalable CMS to allow their marketing team to easily update content.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0ZWNoJTIwY29tcGFueXxlbnwwfHx8fDE3NzAzMjk2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "tech company",
    results: [
      {
        icon: TrendingUp,
        title: "200% Increase in Demo Requests",
        description: "The new, intuitive lead capture form and clear calls-to-action tripled the number of qualified leads in the first quarter."
      },
      {
        icon: LineChart,
        title: "50% Reduction in Bounce Rate",
        description: "The engaging design and improved site structure kept visitors on the site longer, significantly reducing bounce rates."
      },
      {
        icon: UserCheck,
        title: "Enhanced Brand Perception",
        description: "Post-launch surveys showed a significant improvement in how customers perceived the brand, viewing them as more modern and trustworthy."
      }
    ],
    performanceData: [
      {
        name: "Demo Requests per Month",
        chartType: 'line',
        data: [
          { month: "Jan", requests: 15 },
          { month: "Feb", requests: 22 },
          { month: "Mar", requests: 30 },
          { month: "Apr", requests: 45 },
          { month: "May", requests: 55 },
          { month: "Jun", requests: 60 }
        ],
        config: {
          requests: {
            label: "Demos",
            color: "hsl(var(--chart-1))"
          }
        }
      },
      {
        name: "Website Bounce Rate",
        chartType: 'bar',
        data: [
          { period: "Before", bounceRate: 85 },
          { period: "After", bounceRate: 42 }
        ],
        config: {
          bounceRate: {
            label: "Bounce Rate (%)",
            color: "hsl(var(--chart-2))"
          }
        }
      }
    ],
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc3MDQ3NTEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Screenshot of the Innovate Inc. dashboard.",
        hint: "saas dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZmVhdHVyZSUyMGdyaWR8ZW58MHx8fHwxNzcwNDc1MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Close-up on a product feature grid.",
        hint: "product feature"
      }
    ]
  },
  {
    id: "portfolio-item-7",
    slug: "creative-agency-landing-page",
    title: "Landing Page for 'Bold & Brilliant' Creative Agency",
    client: "Bold & Brilliant",
    industry: "Creative & Marketing",
    services: ["Web Design", "UI/UX", "Animation"],
    challenge: "The agency's own landing page was paradoxically uninspired. It failed to showcase their creative talent, leading to low engagement and a high bounce rate. They needed a digital front door that was as bold and brilliant as their work.",
    solution: "We designed a highly interactive, single-page experience filled with micro-interactions, bold typography, and fluid animations. The page tells the agency's story, showcases their best portfolio pieces through an immersive gallery, and uses a conversational tone to connect with potential clients.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXNpZ24lMjBhZ2VuY3l8ZW58MHx8fHwxNzAzNTkxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "creative agency",
    results: [
      {
        icon: TrendingUp,
        title: "80% Increase in Client Inquiries",
        description: "A clear, compelling call-to-action and an engaging user journey led to a dramatic rise in project inquiries."
      },
      {
        icon: Award,
        title: "Won 'Digital Design' Award",
        description: "The landing page was recognized by industry peers for its outstanding UI/UX and innovative design."
      },
      {
        icon: UserCheck,
        title: "Double the Engagement Time",
        description: "Users spent twice as long on the new page, interacting with the various animated elements and portfolio showcases."
      }
    ],
    performanceData: [
      {
        name: "New Client Inquiries",
        chartType: 'line',
        data: [
          { month: "Jan", inquiries: 12 },
          { month: "Feb", inquiries: 15 },
          { month: "Mar", inquiries: 28 },
          { month: "Apr", inquiries: 35 },
          { month: "May", inquiries: 40 },
        ],
        config: {
          inquiries: {
            label: "Inquiries",
            color: "hsl(var(--chart-1))"
          }
        }
      },
      {
        name: "Average Session Duration",
        chartType: 'bar',
        data: [
          { period: "Before", duration: 45 },
          { period: "After", duration: 95 }
        ],
        config: {
          duration: {
            label: "Seconds",
            color: "hsl(var(--chart-2))"
          }
        }
      }
    ],
    galleryImages: [
       {
        src: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHRleHR1cmV8ZW58MHx8fHwxNzcwNDc1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Close-up of the bold typography used on the page.",
        hint: "bold typography"
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcG9ydGZvbGlvJTIwc2hvd2Nhc2V8ZW58MHx8fHwxNzcwNDc1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "The portfolio showcase section with interactive elements.",
        hint: "portfolio showcase"
      }
    ]
  }
];
