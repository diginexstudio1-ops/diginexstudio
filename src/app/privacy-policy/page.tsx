export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-primary">Legal</p>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              Privacy Policy
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
              DigiNexStudio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you contact us through the Site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Email you regarding our services.</li>
              <li>Improve our website and offerings.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">4. Data Security</h2>
            <p className="text-muted-foreground">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">5. Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data. To make a request, please contact us using the contact information provided below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">6. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info@diginexstudio.com" className="text-primary hover:underline">info@diginexstudio.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
