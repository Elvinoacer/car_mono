import Link from "next/link";

export default function ReserveStep3() {
  return (
    <div className="bg-background text-on-background antialiased font-body-md min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-section-padding px-gutter w-full max-w-container-max mx-auto">
        <div className="w-full max-w-[800px]">
          {/* Header & Progress */}
          <div className="mb-16 flex flex-col items-center text-center gap-6">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Step 3 of 3
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Secure Deposit
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[500px]">
              Please provide your payment details to place a hold. You will not
              be charged until final confirmation.
            </p>
            <div className="flex gap-2 items-center mt-4">
              <div className="h-1 w-12 bg-outline-variant"></div>
              <div className="h-1 w-12 bg-outline-variant"></div>
              <div className="h-1 w-12 bg-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Payment Form */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant rounded-none shadow-[0_40px_80px_rgba(0,0,0,0.04)]">
              <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant pb-4">
                Payment Method
              </h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 font-technical-data text-technical-data text-primary focus:outline-none focus:border-primary transition-colors placeholder:text-outline"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                      credit_card
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
                      Expiry
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 font-technical-data text-technical-data text-primary focus:outline-none focus:border-primary transition-colors placeholder:text-outline"
                      placeholder="MM/YY"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
                      CVC
                    </label>
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 font-technical-data text-technical-data text-primary focus:outline-none focus:border-primary transition-colors placeholder:text-outline"
                      placeholder="123"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
                    Name on Card
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 font-technical-data text-technical-data text-primary focus:outline-none focus:border-primary transition-colors"
                    type="text"
                  />
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <Link
                    href="/reserve/success"
                    className="w-full bg-primary text-on-primary py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary-container transition-colors duration-300 text-center"
                  >
                    Place $1,000 Hold
                  </Link>
                  <Link
                    href="/reserve/contact"
                    className="w-full border border-outline-variant text-primary py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_back
                    </span>
                    Back
                  </Link>
                </div>
              </form>
            </div>
            {/* Summary & Security */}
            <div className="flex flex-col gap-8">
              <div className="border border-outline-variant p-8 bg-surface-container-low">
                <h3 className="font-headline-md text-headline-md text-primary mb-6">
                  Hold Summary
                </h3>
                <div className="flex flex-col gap-[1px] bg-outline-variant border border-outline-variant">
                  <div className="flex justify-between p-4 bg-surface-container-lowest">
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Vehicle Reserve Deposit
                    </span>
                    <span className="font-technical-data text-technical-data text-primary">
                      $1,000.00
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-surface-container-lowest">
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Tax
                    </span>
                    <span className="font-technical-data text-technical-data text-primary">
                      $0.00
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-surface-container-lowest items-center">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                      Total Hold Amount
                    </span>
                    <span className="font-headline-md text-headline-md text-primary">
                      $1,000.00
                    </span>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-6 text-sm">
                  This is a temporary authorization hold on your card to secure
                  your reservation. Your card will not be charged until the
                  final purchase agreement is signed.
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center py-6 border border-outline-variant">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined">lock</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    SSL Secured
                  </span>
                </div>
                <div className="h-4 w-[1px] bg-outline-variant"></div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    PCI-DSS Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
