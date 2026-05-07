import Link from "next/link";

export default function SecureReservation() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen antialiased selection:bg-secondary-container selection:text-on-secondary-container flex flex-col">
      {/* Minimal Transactional Header */}
      <header className="w-full bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
          <Link
            href="/inventory"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-label-sm text-label-sm uppercase">Cancel</span>
          </Link>
          <div className="font-headline-md text-headline-md tracking-widest text-primary uppercase">
            MONOLITH
          </div>
          <div className="w-[80px]"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-container-max mx-auto px-gutter py-[80px] w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-[120px]">
        {/* Left Column: Flow */}
        <div className="lg:col-span-7 flex flex-col gap-[64px]">
          {/* Progress Stepper */}
          <nav aria-label="Progress">
            <ol className="flex items-center" role="list">
              <li className="relative pr-8 sm:pr-20">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-[1px] w-full bg-primary"></div>
                </div>
                <div className="relative flex h-6 w-6 items-center justify-center bg-primary rounded-none">
                  <span
                    className="material-symbols-outlined text-[14px] text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    done
                  </span>
                </div>
                <span className="absolute -bottom-6 left-0 font-label-sm text-label-sm text-primary uppercase whitespace-nowrap">
                  Details
                </span>
              </li>
              <li className="relative pr-8 sm:pr-20">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-[1px] w-full bg-primary"></div>
                </div>
                <div className="relative flex h-6 w-6 items-center justify-center bg-primary rounded-none">
                  <span
                    className="material-symbols-outlined text-[14px] text-on-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    done
                  </span>
                </div>
                <span className="absolute -bottom-6 left-0 font-label-sm text-label-sm text-primary uppercase whitespace-nowrap">
                  Identity
                </span>
              </li>
              <li className="relative pr-8 sm:pr-20">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-[1px] w-full bg-outline-variant"></div>
                </div>
                <div className="relative flex h-6 w-6 items-center justify-center bg-surface border border-primary rounded-none">
                  <span className="font-technical-data text-[12px] text-primary">
                    3
                  </span>
                </div>
                <span className="absolute -bottom-6 left-0 font-label-sm text-label-sm text-primary uppercase whitespace-nowrap border-b border-secondary pb-[2px]">
                  Deposit
                </span>
              </li>
              <li className="relative">
                <div className="relative flex h-6 w-6 items-center justify-center bg-surface border border-outline-variant rounded-none">
                  <span className="font-technical-data text-[12px] text-outline-variant">
                    4
                  </span>
                </div>
                <span className="absolute -bottom-6 left-0 font-label-sm text-label-sm text-outline-variant uppercase whitespace-nowrap">
                  Confirm
                </span>
              </li>
            </ol>
          </nav>
          <div className="h-[1px] w-full bg-outline-variant mt-4"></div>
          {/* Active Step: Deposit */}
          <section className="flex flex-col gap-8">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
                Secure Deposit
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A fully refundable deposit is required to secure this vehicle
                and initiate the final acquisition process. Your vehicle will be
                removed from public inventory.
              </p>
            </div>
            {/* Payment Form */}
            <div className="bg-surface border border-outline-variant p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end mb-4 border-b border-outline-variant pb-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Due Today
                </span>
                <span className="font-headline-md text-headline-md text-primary">
                  £5,000.00
                </span>
              </div>
              {/* Payment Details Grid */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label
                    className="font-label-sm text-label-sm text-primary uppercase"
                    htmlFor="card-name"
                  >
                    Name on Card
                  </label>
                  <input
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-0 rounded-none font-technical-data text-technical-data text-primary px-4 py-3 placeholder:text-outline"
                    id="card-name"
                    name="card-name"
                    placeholder="ALEXANDER WRIGHT"
                    required
                    type="text"
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2 relative">
                  <label
                    className="font-label-sm text-label-sm text-primary uppercase"
                    htmlFor="card-number"
                  >
                    Card Number
                  </label>
                  <input
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-0 rounded-none font-technical-data text-technical-data text-primary px-4 py-3 pl-12 placeholder:text-outline"
                    id="card-number"
                    name="card-number"
                    placeholder="0000 0000 0000 0000"
                    required
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-[34px] text-on-surface-variant">
                    credit_card
                  </span>
                </div>
                <div className="space-y-2">
                  <label
                    className="font-label-sm text-label-sm text-primary uppercase"
                    htmlFor="expiry"
                  >
                    Expiry Date
                  </label>
                  <input
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-0 rounded-none font-technical-data text-technical-data text-primary px-4 py-3 placeholder:text-outline"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="font-label-sm text-label-sm text-primary uppercase"
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <input
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-0 rounded-none font-technical-data text-technical-data text-primary px-4 py-3 placeholder:text-outline"
                    id="cvc"
                    name="cvc"
                    placeholder="123"
                    required
                    type="text"
                  />
                </div>
              </form>
              <div className="flex items-start gap-3 mt-4">
                <span
                  className="material-symbols-outlined text-on-surface-variant mt-1"
                  style={{ fontSize: "20px" }}
                >
                  lock
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Payments are securely processed. Your card details are never
                  stored on our servers. By proceeding, you agree to the{" "}
                  <Link
                    className="text-primary underline decoration-outline-variant underline-offset-4 hover:decoration-primary transition-colors"
                    href="/legal"
                  >
                    Deposit Terms
                  </Link>
                  .
                </p>
              </div>
            </div>
            {/* Actions */}
            <div className="flex justify-between items-center pt-8 border-t border-outline-variant">
              <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Identity
              </button>
              <Link
                href="/reserve/success"
                className="bg-primary text-on-primary font-label-sm text-label-sm uppercase px-8 py-4 hover:bg-inverse-surface transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">
                  lock
                </span>
                Authorise £5,000
              </Link>
            </div>
          </section>
        </div>
        {/* Right Column: Context/Summary (Sticky) */}
        <div className="lg:col-span-5 relative">
          <aside className="sticky top-[120px] bg-surface flex flex-col border border-outline-variant">
            <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden border-b border-outline-variant">
              <img
                alt="1964 Aston Martin DB5"
                className="w-full h-full object-cover grayscale-[20%] contrast-125 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgoMjflElk8m0OftDh9qs3l2WriXRQu84lTYS7zUKoXvAmOHjkPnS1s3ugZiRfJUdJ0yTXA-pMuWuBGAD4rWxNxFBmOeA7xkKV6d_0u2QRaoTqEy9lQv9UMdqqthrApZRt6lhDJzf936PTOIO7dH404NLvRIiliogSpuD5aIYA5Y9Y3BeH8fL_9gpvI6-B3jYU8_rhxQWgEZWj9UBZAW01mbAc0jQLiAJ_u1UViZA1p-SjW0GqakDhb-DqorqU9f8dB5lVFWJ06bI"
              />
              <div className="absolute top-4 left-4 bg-surface px-3 py-1 border border-outline-variant font-label-sm text-label-sm text-primary uppercase">
                Reserved
              </div>
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-1">
                  1964 Aston Martin DB5
                </h2>
                <p className="font-technical-data text-technical-data text-on-surface-variant">
                  Vantage Specification
                </p>
              </div>
              {/* Technical Molecular Grid */}
              <div className="grid grid-cols-2 gap-technical-grid-gap bg-outline-variant border border-outline-variant">
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Chassis
                  </span>
                </div>
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-technical-data text-technical-data text-primary">
                    DB5C/1255/R
                  </span>
                </div>
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Mileage
                  </span>
                </div>
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-technical-data text-technical-data text-primary">
                    42,100 mi
                  </span>
                </div>
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Total Price
                  </span>
                </div>
                <div className="bg-surface p-4 flex flex-col justify-center">
                  <span className="font-technical-data text-technical-data text-primary">
                    £850,000
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant">
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Collection scheduled for{" "}
                  <span className="text-primary font-technical-data">
                    London Heritage Vault
                  </span>{" "}
                  upon completion of final paperwork.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
