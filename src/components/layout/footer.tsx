import { Github, Linkedin, Twitter, Wind } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl text-primary">
                            <Wind className="h-6 w-6" />
                            <span>DigiNexStudio</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Crafting digital excellence and innovative solutions for modern businesses.
                        </p>
                    </div>
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {navLinks.map(({ href, label }) => (
                                    <li key={label}>
                                        <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-headline font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-headline font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <Button key={label} variant="ghost" size="icon" asChild>
                                        <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                                            <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 DigiNexStudio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
