import Link from "next/link";
import Footer from "@/components/Footer";

export default function ReserveSuccess() {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-on-surface relative selection:bg-secondary-fixed selection:text-on-secondary-fixed bg-background">
      <main className="flex-grow flex items-center py-section-padding px-gutter w-full max-w-container-max mx-auto relative z-10">
        {/* Subtle Architectural Background */}
        <div
          className="absolute inset-0 z-[-1] opacity-[0.03] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpInkBb84X7Sv8giMHQNLa08QWe7o0O1sO7dTb3GPOkRm0oT3GYaiLaqpmGC1oOffDLQWnWGcCUN9yqRn7WTTDBUpg14QycmPQW51mmot1yLHPWODboAKKIBfA0pF9YMgg-ytb3udx5p8s9KuEVNSGF0MCozHpNOgO2BZLYHMWPDiHSVbAEyqECivmbOesPyadSJKlIwrsgCw8eXhw_ouqsveYT7f1PyD5U--JmTMnnBjVPAfS2GMzQ_eGCTdogOBaqdDPYrPs-XQ')",
          }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-gutter w-full items-center">
          {/* Left Column: Primary Success Message */}
          <div className="md:col-span-5 flex flex-col">
            <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-none border border-outline bg-surface-container-lowest">
              <span
                className="material-symbols-outlined text-secondary text-3xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                done
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl text-primary mb-6">
              Reservation
              <br />
              Confirmed
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
              Your allocation has been secured. Our concierge team is now
              preparing your personalized dossier for final review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/account"
                className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-inverse-surface transition-colors duration-300 shadow-[0_40px_40px_-20px_rgba(0,0,0,0.04)] text-center"
              >
                View My Account
              </Link>
              <Link
                href="/"
                className="border border-outline bg-transparent text-primary font-label-sm text-label-sm uppercase tracking-widest px-8 py-4 rounded-none hover:border-secondary hover:text-secondary transition-colors duration-300 text-center"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
          {/* Right Column: Technical Details */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            {/* Reference Card */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <span
                  className="material-symbols-outlined text-6xl"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  qr_code_scanner
                </span>
              </div>
              <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">
                Booking Reference
              </h2>
              <div className="font-headline-lg text-headline-lg text-primary tracking-tight">
                MNL-8472-X9
              </div>
            </div>
            {/* Next Steps Grid */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8">
              <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">
                Immediate Next Steps
              </h2>
              {/* Molecular Technical Grid */}
              <div className="flex flex-col gap-technical-grid-gap bg-outline-variant border border-outline-variant">
                {[
                  {
                    icon: "support_agent",
                    title: "Concierge Contact",
                    desc: "A salesperson will contact you within 24 hours.",
                  },
                  {
                    icon: "storefront",
                    title: "Physical Inspection",
                    desc: "Visit our showroom for a final inspection.",
                  },
                  {
                    icon: "key",
                    title: "Final Handover",
                    desc: "Complete purchase in person.",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest p-6 flex items-start gap-6 hover:bg-surface-container transition-colors duration-300"
                  >
                    <span
                      className="material-symbols-outlined text-secondary mt-1"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {step.icon}
                    </span>
                    <div>
                      <div className="font-technical-data text-technical-data text-primary mb-1">
                        {step.title}
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
