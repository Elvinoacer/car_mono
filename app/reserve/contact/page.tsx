import Link from "next/link";

export default function ReserveStep2() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased selection:bg-surface-variant selection:text-primary min-h-screen flex flex-col">
      {/* Minimal Transactional Header */}
      <header className="w-full py-6 px-gutter border-b border-outline-variant bg-surface-container-lowest sticky top-0 z-50">
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          <Link
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary no-underline"
            href="/"
          >
            MONOLITH
          </Link>
          <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Form Section */}
        <section className="lg:col-span-7 flex flex-col gap-12">
          {/* Progress Indicator */}
          <div className="flex flex-col gap-3">
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Step 02 / 03 — Contact Verification
            </div>
            <div className="flex gap-1 h-[2px] w-full bg-surface-variant">
              <div className="w-1/3 bg-primary h-full"></div>
              <div className="w-1/3 bg-primary h-full"></div>
              <div className="w-1/3 bg-transparent h-full"></div>
            </div>
          </div>
          {/* Headers */}
          <div className="flex flex-col gap-4">
            <h1 className="font-display-xl text-display-xl text-primary">
              Contact Details
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Please provide your information below to proceed with the
              reservation. <br />
              Existing client?{" "}
              <Link
                className="text-primary underline hover:text-secondary transition-colors duration-300"
                href="/account"
              >
                Sign In
              </Link>{" "}
              for a faster checkout.
            </p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-3">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline transition-colors rounded-none"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  required
                  type="text"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-3">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline transition-colors rounded-none"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  required
                  type="text"
                />
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-3">
              <label
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline transition-colors rounded-none"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                type="email"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-3">
              <label
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary placeholder:text-outline transition-colors rounded-none"
                id="phone"
                name="phone"
                placeholder="+1 (000) 000-0000"
                required
                type="tel"
              />
              <span className="font-label-sm text-label-sm text-outline mt-1">
                Required for logistics coordinator contact.
              </span>
            </div>
            {/* Action Area */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                href="/reserve"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_back
                </span>
                Back to Configuration
              </Link>
              <Link
                href="/reserve/payment"
                className="w-full sm:w-auto bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-5 px-10 hover:bg-inverse-surface transition-colors flex justify-center items-center gap-3 rounded-none"
              >
                Continue to Payment
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </form>
        </section>
        {/* Right Column: Sidebar Summary */}
        <aside className="lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
          {/* Sticky Container for Sidebar */}
          <div className="sticky top-32 flex flex-col bg-surface-container-low border border-outline-variant">
            {/* Vehicle Image */}
            <div className="w-full aspect-[16/10] bg-surface-variant relative border-b border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Mul6kfMgTujAyHtQsvp66F03W8Z5Nq2Orm1_XIoyR7be3B-x6JbS0vD3Evla3aYtG6XD2aKaIRKRDm9VKVrS7sVJbH5VnHa2loDu7Em6OAOE7yN_UpA9_0AjG8f0ylAXX2vgg9qYInspwD5L7XHCYx8N80LJfaGx9PvnbNY0Q6FitH8-GruKjvHpdIcfNFn1Ae5weaBY-hsxmnKek7lCc4DxiGMYB32NyS4Yc1vNx62TKq3CdYlaPaJSgi92vE4zna2YoEVfuQ0"
                alt="2024 Aston Martin Vantage V8"
              />
            </div>
            {/* Summary Details */}
            <div className="p-8 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Reservation Intent
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">
                  2024 Aston Martin Vantage V8
                </h2>
              </div>
              {/* Technical Spec Grid Pattern for Data */}
              <div className="grid grid-cols-2 gap-[1px] bg-outline-variant border border-outline-variant">
                <div className="bg-surface-container-low p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center">
                  Chassis / VIN
                </div>
                <div className="bg-surface-container-lowest p-4 font-technical-data text-technical-data text-primary text-right flex items-center justify-end">
                  AMV8-77X-9012
                </div>
                <div className="bg-surface-container-low p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center">
                  Exterior
                </div>
                <div className="bg-surface-container-lowest p-4 font-technical-data text-technical-data text-primary text-right flex items-center justify-end">
                  Xenon Grey
                </div>
                <div className="bg-surface-container-low p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center">
                  Location
                </div>
                <div className="bg-surface-container-lowest p-4 font-technical-data text-technical-data text-primary text-right flex items-center justify-end">
                  Beverly Hills, CA
                </div>
                <div className="bg-surface-container-low p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant flex items-center">
                  Required Deposit
                </div>
                <div className="bg-surface-container-lowest p-4 font-technical-data text-technical-data text-primary text-right flex items-center justify-end">
                  $5,000 USD
                </div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                Your deposit is fully refundable until the final contract is
                signed. A dedicated Monolith representative will contact you
                shortly after completion.
              </p>
            </div>
          </div>
        </aside>
      </main>
      {/* Reusing Footer for precision */}
      <footer className="w-full bg-primary dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline mt-auto">
        <div className="flex flex-col items-center w-full py-section-padding px-gutter max-w-container-max mx-auto gap-12">
          <Link
            className="font-headline-md text-headline-md text-on-primary dark:text-on-surface font-bold tracking-tighter"
            href="#"
          >
            MONOLITH
          </Link>
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Corporate",
              "Contact",
            ].map((link, idx) => (
              <Link
                key={idx}
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary transition-colors duration-300 cursor-pointer"
                href={link === "Contact" ? "/reserve/contact" : "/legal"}
              >
                {link}
              </Link>
            ))}
          </nav>
          <p className="font-body-md text-body-md text-on-primary-container dark:text-on-surface-variant text-center">
            © 2024 MONOLITH AUTOMOTIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
