import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "DigiNexStudio - Digital Solutions for Growth",
  description: "Crafting exceptional digital experiences to elevate your brand. From web design to SEO, we build solutions that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-stone-50 text-slate-800">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
