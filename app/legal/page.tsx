import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-gutter py-section-padding">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-8 border-b border-outline-variant pb-4">Legal & Policy</h1>
        <div className="prose prose-zinc prose-invert max-w-none space-y-8 font-body-lg text-body-lg text-on-surface-variant">
          <section>
            <h2 className="text-primary font-headline-md text-headline-md mb-4">Privacy Policy</h2>
            <p>At MONOLITH, we value your privacy and are committed to protecting your personal data. This policy outlines how we handle information collected through our premium brokerage platform.</p>
          </section>
          <section>
            <h2 className="text-primary font-headline-md text-headline-md mb-4">Terms of Service</h2>
            <p>By using our services, you agree to comply with our professional standards and contractual obligations regarding vehicle brokerage and reservations.</p>
          </section>
          <section>
            <h2 className="text-primary font-headline-md text-headline-md mb-4">Cookie Policy</h2>
            <p>We use essential cookies to maintain your session and provide a high-fidelity browsing experience across our inventory and administrative consoles.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
