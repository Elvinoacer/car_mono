import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReserveStep1() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Vehicle Summary */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <div className="w-full aspect-[4/3] bg-surface-container relative overflow-hidden">
              <img
                alt="2024 Vantage GT3"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAks-c_YcQ7jvuM_WGti-3YCGTSwjGMaK4kmDB6Ev9jaVgqp6jvvQS34G6GFDdVHDp2n59g_12L0wdBK0lPYPQJjhtAZDdY5T_fUuXj7uPNOonOyK8qiWRQBtsDs8tC3HthNk_LpU0lXez7YxNJilekyOyzBSY6tYVREoLZzOzWzZQBYpgMzmi1bofYSBLafQWE-hwJLiQOCT3CxkEPc-FzcrWW4X94yJazBdQ5iWKvTpzmLp766LaqgBomQhn4OsLMNdrLsPgqavE"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-display-xl text-display-xl text-primary">
                2024 Vantage GT3
              </h1>
              <p className="font-headline-md text-headline-md text-on-surface-variant">
                $185,000
              </p>
            </div>
          </div>
          {/* Right Column: Reservation Form */}
          <div className="md:col-span-5 md:pl-12 flex flex-col gap-12">
            {/* Step Indicator */}
            <div className="flex items-center gap-4 text-secondary">
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                Step 01
              </span>
              <div className="h-[1px] w-12 bg-secondary"></div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                Reservation Detail
              </span>
            </div>
            {/* Deposit Details */}
            <div className="flex flex-col gap-6 p-8 bg-surface border border-outline-variant">
              <h2 className="font-headline-md text-headline-md text-primary">
                Reservation Deposit
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="font-display-xl text-display-xl text-primary">
                  $1,000
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  HOLD
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A temporary authorization to secure this vehicle. The amount
                will be applied to your final purchase or fully refunded upon
                cancellation.
              </p>
            </div>
            {/* Policy Summary */}
            <div className="flex flex-col gap-4">
              <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-2">
                Reservation Policy
              </h3>
              {[
                "7-Day exclusive hold on the inventory.",
                "Priority concierge assignment within 24 hours.",
                "Fully refundable deposit at any time prior to contract execution.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-secondary mt-1 text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                  <p className="font-body-md text-body-md text-on-surface">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-outline-variant"></div>
            {/* Form & Actions */}
            <form className="flex flex-col gap-8">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  className="mt-1 w-5 h-5 border-outline rounded-none text-primary focus:ring-primary bg-transparent focus:ring-offset-0 cursor-pointer"
                  type="checkbox"
                />
                <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors duration-200">
                  I agree to the{" "}
                  <Link
                    className="text-primary underline decoration-outline-variant underline-offset-4 hover:decoration-primary transition-colors duration-200"
                    href="/legal"
                  >
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link
                    className="text-primary underline decoration-outline-variant underline-offset-4 hover:decoration-primary transition-colors duration-200"
                    href="/legal"
                  >
                    Privacy Policy
                  </Link>{" "}
                  regarding this reservation hold.
                </span>
              </label>
              <Link
                href="/reserve/contact"
                className="w-full py-5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-tint transition-colors duration-300 flex justify-center items-center gap-2"
              >
                Continue to Contact
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
