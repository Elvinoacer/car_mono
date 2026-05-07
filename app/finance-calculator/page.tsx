import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FinanceCalculator() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-gutter py-12 md:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display-xl text-display-xl text-primary mb-4">
            Financial Configuration
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Tailor a comprehensive financing structure to align perfectly with
            your wealth management strategy. Use our precision tools below to
            forecast your commitment.
          </p>
        </div>

        {/* Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-24 mb-section-padding">
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Input Group: Vehicle Price */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2">
                <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                  Vehicle Price
                </label>
                <span className="font-technical-data text-technical-data text-primary text-xl">
                  $145,000
                </span>
              </div>
              <input
                className="w-full h-1 bg-outline-variant appearance-none rounded-none outline-none"
                max="500000"
                min="50000"
                step="1000"
                type="range"
                defaultValue="145000"
              />
              <div className="flex justify-between mt-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  $50k
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  $500k+
                </span>
              </div>
            </div>

            {/* Input Group: Deposit */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2">
                <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                  Deposit / Down Payment
                </label>
                <span className="font-technical-data text-technical-data text-primary text-xl">
                  $25,000
                </span>
              </div>
              <input
                className="w-full h-1 bg-outline-variant appearance-none rounded-none outline-none"
                max="100000"
                min="0"
                step="1000"
                type="range"
                defaultValue="25000"
              />
              <div className="flex justify-between mt-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  $0
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  $100k
                </span>
              </div>
            </div>

            {/* Input Group: Term */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end mb-2">
                <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">
                  Loan Term
                </label>
                <span className="font-technical-data text-technical-data text-primary text-xl">
                  48 Months
                </span>
              </div>
              <div className="grid grid-cols-5 gap-technical-grid-gap bg-outline-variant p-[1px]">
                {["12", "24", "36", "48", "60"].map((term) => (
                  <button
                    key={term}
                    className={`py-3 font-technical-data text-technical-data transition-colors ${
                      term === "48"
                        ? "bg-primary text-on-primary"
                        : "bg-surface text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Group: Interest Rate */}
            <div className="flex flex-col gap-4">
              <label className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mb-2">
                Estimated Annual Interest Rate (APR)
              </label>
              <div className="relative">
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-technical-data text-technical-data text-primary text-xl focus:border-primary focus:ring-0 transition-colors rounded-none"
                  step="0.1"
                  type="number"
                  defaultValue="4.9"
                />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-technical-data text-technical-data text-on-surface-variant">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Results Panel */}
          <div className="lg:col-span-5 h-full">
            <div className="sticky top-32 bg-surface border border-outline-variant p-8 lg:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.04)] flex flex-col h-auto">
              <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Estimated Monthly Payment
              </h2>
              <div className="font-display-xl text-display-xl text-primary mb-12 border-b border-outline-variant pb-8">
                $2,758<span className="text-3xl text-on-surface-variant">.42</span>
              </div>
              <div className="flex flex-col gap-6 mb-12 flex-grow">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Principal Amount
                  </span>
                  <span className="font-technical-data text-technical-data text-primary">
                    $120,000.00
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Total Interest
                  </span>
                  <span className="font-technical-data text-technical-data text-primary">
                    $12,404.16
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/50">
                  <span className="font-body-md text-body-md text-primary font-bold">
                    Total Amount Payable
                  </span>
                  <span className="font-technical-data text-technical-data text-secondary">
                    $132,404.16
                  </span>
                </div>
              </div>
              <Link 
                href="/reserve/contact"
                className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-5 hover:bg-inverse-surface transition-colors duration-300 mb-6 text-center"
              >
                Apply for Financing
              </Link>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-center opacity-70 leading-relaxed">
                Estimate only. Not a credit offer. Final terms are subject to
                credit approval and may vary based on your personal financial
                situation.
              </p>
            </div>
          </div>
        </div>

        {/* Amortization Table */}
        <div className="w-full border-t border-outline-variant pt-12">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none outline-none">
              <h3 className="font-headline-md text-headline-md text-primary">
                View Amortization Schedule
              </h3>
              <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">
                keyboard_arrow_down
              </span>
            </summary>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline">
                    <th className="py-4 px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal">
                      Month
                    </th>
                    <th className="py-4 px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-right">
                      Payment
                    </th>
                    <th className="py-4 px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-right">
                      Principal
                    </th>
                    <th className="py-4 px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-right">
                      Interest
                    </th>
                    <th className="py-4 px-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-right">
                      Remaining Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="font-technical-data text-technical-data">
                  {[1, 2, 3].map((month) => (
                    <tr
                      key={month}
                      className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-4 px-4 text-on-surface-variant">
                        {month}
                      </td>
                      <td className="py-4 px-4 text-primary text-right">
                        $2,758.42
                      </td>
                      <td className="py-4 px-4 text-primary text-right">
                        $2,268.42
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant text-right">
                        $490.00
                      </td>
                      <td className="py-4 px-4 text-primary text-right">
                        $117,731.58
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      className="py-8 text-center text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase"
                      colSpan={5}
                    >
                      <span className="material-symbols-outlined align-middle mr-2">
                        more_horiz
                      </span>
                      Additional 45 months omitted
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </main>
      <Footer />
    </div>
  );
}
