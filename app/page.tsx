import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[819px] min-h-[600px] flex items-center bg-surface-container-lowest">
          <div className="absolute inset-0 z-0">
            <img
              alt="Hero Image"
              className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfoEnQXPWq_Y0odx-moq_K87d-bY-jgtTLJxgiXA-bk76IbM_TdLRrgiMzxb1Epy9Xho2n1Oa-G2I_-IDVKeqjPCKlX4qvw-hPcr7sPZLgnTVRg5yMlBX4bfVLTlY51URJj1LlBNnygtbNqE5YMGx7Z2u1jptGPxsgDFu2cJymBpawfqLB2BqKuqPb7VItX4Mu5rgKeXEZejF4DyszYXwG-LCxIoBSWBPqv7bh68DMi0r44b32CqBq8GL1EPSjvOU5IbGpa0YlrkE"
            />
          </div>
          <div className="relative z-10 w-full px-gutter max-w-container-max mx-auto">
            <div className="max-w-2xl bg-surface/90 backdrop-blur-sm p-12 border border-outline-variant/30">
              <h1 className="font-display-xl text-display-xl mb-6 text-primary">
                The Pinnacle of Automotive Excellence.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Curated mechanical precision. Uncompromising luxury. Discover a
                collection reserved for those who demand the absolute peak of
                engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="px-8 py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors"
                  href="/inventory"
                >
                  Browse Inventory
                </Link>
                <Link
                  className="px-8 py-4 border border-outline text-primary font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors"
                  href="/reserve"
                >
                  Reserve a Vehicle
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Inventory */}
        <section
          className="py-section-padding bg-background px-gutter max-w-container-max mx-auto"
          id="inventory"
        >
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant pb-6">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
                Curated Collection
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Featured Inventory
              </h2>
            </div>
            <Link
              className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1"
              href="/inventory"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card 1 */}
            <div className="group relative bg-surface-container-lowest border-b border-outline-variant pb-6">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-surface-container-low">
                <img
                  alt="Luxury Vehicle 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCErUFCSR3DWFyNvh0PxEGcw59jqfC74924ZoMiPHAvWgaUUtcQqyhbnjR-2rYtW99Whabd4ZvCXkm_lQXbfnLQzAFldu37n0cKKstdwSIxiYd0pQI31Zujf3yD5AAQIERfmJ1pPfea0v-Tqt9LVomWX6IZZ2ABgsvHGjswspJF7HcUOhXVYIsRLPbmQYBIcEJuRlzBOP0P3tZpTnOya2De2nxjiLmwDFAQKhJKGtVa0EbqsZDXHUl7AzDLEBHLk9KsfdZzYpaykk8"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 border border-secondary text-secondary font-label-sm text-label-sm uppercase tracking-widest bg-surface-container-lowest/80 backdrop-blur-sm">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Aetherion V8 Vantage
              </h3>
              <div className="font-technical-data text-technical-data text-on-surface-variant flex gap-4">
                <span>2024</span>
                <span>•</span>
                <span>120 Miles</span>
                <span>•</span>
                <span>£185,000</span>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="group relative bg-surface-container-lowest border-b border-outline-variant pb-6">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-surface-container-low">
                <img
                  alt="Luxury Vehicle 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJl4NNa30SgveE4b5MhVjuhElH0CzIxyGAPA9sXNNx4NX43bFRWxu4WZNAE4lx3wrgNvGdafr2hqVtmGjq1jjXEs7o_RdkFjtvpt2djNQ-NHyQYQjQwbJAwUH0J_FAEXKQKDum3B-u7hZLnCC4IqyRTs0mU6omqcvddxuL_V2IKRIkArAaCTg03fqGsaGF-9EX8ymLbVy9lJp9DmcC0rga-YcwcBoPemSFE8hmg5vblAlZqn4mad5AoZJ4CDdbS-br1qLlr33BvUg"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 border border-outline text-outline font-label-sm text-label-sm uppercase tracking-widest bg-surface-container-lowest/80 backdrop-blur-sm">
                    Reserved
                  </span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Obsidian GT RS
              </h3>
              <div className="font-technical-data text-technical-data text-on-surface-variant flex gap-4">
                <span>2023</span>
                <span>•</span>
                <span>1,500 Miles</span>
                <span>•</span>
                <span>£240,000</span>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="group relative bg-surface-container-lowest border-b border-outline-variant pb-6">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-surface-container-low">
                <img
                  alt="Luxury Vehicle 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV1fm7431zjL-w8zRskI7Bwkh9cG-O3JNjibgtPn8Lfe33lqyXHjLVfnlbA-XGgSBB44DXS4rGdmsx0iXVR7Dj9L88sibYLnv_ifesodJ-uqmLOnbpw1uLaxBoqhPjgemcOVnvh15oaH-fSk4pnA7Bjvvwsqnhaf3nrABbdhGfzr3HR1tnAINRejVFPRI8NlVQqJblsBINh4X34JMWF-w-J-sgSQmrjSLNJQlAiFF5lunC1GuEII5Ss5GA5LHrNuyrAr20MOUAX90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 border border-secondary text-secondary font-label-sm text-label-sm uppercase tracking-widest bg-surface-container-lowest/80 backdrop-blur-sm">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Silver Phantom Series II
              </h3>
              <div className="font-technical-data text-technical-data text-on-surface-variant flex gap-4">
                <span>2024</span>
                <span>•</span>
                <span>Delivery</span>
                <span>•</span>
                <span>£320,000</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
