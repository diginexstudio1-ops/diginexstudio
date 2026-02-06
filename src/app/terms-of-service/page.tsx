export default function TermsOfServicePage() {
    return (
      <main className="flex flex-col">
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="font-semibold text-primary">Legal</p>
              <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                Last Updated: July 25, 2024
              </p>
            </div>
          </div>
        </section>
  
        <section className="container mx-auto px-4 my-16 md:my-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Welcome to DigiNexStudio. These Terms of Service ("Terms") govern your use of our website and the services we offer. By accessing our site, you agree to these Terms.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">1. Our Services</h2>
              <p className="text-muted-foreground">
                DigiNexStudio provides web design, web development, e-commerce solutions, and digital marketing services. All services are subject to a separate contractual agreement.
              </p>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">2. Use of Our Website</h2>
              <p className="text-muted-foreground">
                You agree to use our website for lawful purposes only. You are prohibited from using our site to post or transmit any material that is threatening, defamatory, obscene, or otherwise objectionable.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">3. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, and images, is the property of DigiNexStudio or its content suppliers and is protected by international copyright laws. Our portfolio work is displayed for demonstration purposes and the respective intellectual property rights belong to our clients.
              </p>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                DigiNexStudio will not be liable for any damages of any kind arising from the use of this site or from any information, content, or services included on or otherwise made available to you through this site.
              </p>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">5. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law principles.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">6. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at: <a href="mailto:info@diginexstudio.com" className="text-primary hover:underline">info@diginexstudio.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
