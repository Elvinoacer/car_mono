import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function DealCloser() {
  return (
    <>
      <AdminHeader title="Deal Closer" />
      <main className="w-full px-gutter max-w-container-max mx-auto py-12 min-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/deals"
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary">
                Finalizing Transaction: #DL-8821
              </h1>
              <p className="font-technical-data text-technical-data text-on-surface-variant">
                Client: Alexander Sterling • Vehicle: 2023 Porsche 911 GT3 RS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary px-4 py-2 border border-secondary">
              Stage: Contracts
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Closing Workflow */}
          <div className="lg:col-span-2 space-y-12">
            {/* Step 1: Inspection & Reconditioning Sign-off */}
            <section className="bg-surface-container-low border border-outline-variant p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary">
                    1. Inspection Sign-off
                  </h2>
                  <p className="font-body-md text-on-surface-variant mt-2">
                    Verify all mechanical and cosmetic reconditioning is
                    complete.
                  </p>
                </div>
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
              </div>
              <div className="space-y-4">
                {[
                  "Multi-point mechanical inspection verified",
                  "Cosmetic detailing & ceramic coating applied",
                  "All factory recalls addressed",
                  "Technical manual & spare keys accounted for",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-4 p-4 border border-outline-variant bg-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 border-outline-variant text-primary focus:ring-secondary"
                    />
                    <span className="font-body-md text-primary">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Step 2: Financial Reconciliation */}
            <section className="bg-surface-container-low border border-outline-variant p-8">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                2. Financial Reconciliation
              </h2>
              <div className="bg-outline-variant gap-px grid grid-cols-1 md:grid-cols-2">
                <div className="bg-surface p-6">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-4">
                    Sale Price
                  </label>
                  <p className="font-headline-md text-primary">$315,000.00</p>
                </div>
                <div className="bg-surface p-6">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-4">
                    Trade-In Value
                  </label>
                  <p className="font-headline-md text-secondary">-$45,000.00</p>
                </div>
                <div className="bg-surface p-6">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-4">
                    Taxes & Fees
                  </label>
                  <p className="font-headline-md text-primary">+$28,450.00</p>
                </div>
                <div className="bg-primary text-on-primary p-6">
                  <label className="font-label-sm text-label-sm uppercase text-on-primary-container tracking-widest block mb-4">
                    Total Amount Due
                  </label>
                  <p className="font-headline-md">$298,450.00</p>
                </div>
              </div>
            </section>

            {/* Step 3: Contract Execution */}
            <section className="bg-surface-container-low border border-outline-variant p-8">
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                3. Digital Contract Sign-off
              </h2>
              <div className="border-2 border-dashed border-outline-variant p-12 flex flex-col items-center justify-center bg-surface">
                <span className="material-symbols-outlined text-4xl text-outline mb-4">
                  draw
                </span>
                <p className="font-body-md text-primary mb-4 text-center">
                  Contracts have been generated and sent to client via Docusign.
                </p>
                <button className="bg-primary text-on-primary px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors">
                  Verify Digital Signatures
                </button>
              </div>
            </section>
          </div>

          {/* Closing Sidebar */}
          <aside className="space-y-8">
            <div className="bg-surface-container p-8 border border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">
                Closing Actions
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-primary text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-inverse-surface transition-colors">
                  Generate Final Invoice
                </button>
                <button className="w-full border border-outline-variant text-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors">
                  Notify Logistics
                </button>
                <div className="pt-8 border-t border-outline-variant">
                  <button className="w-full bg-secondary text-on-secondary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      lock_open
                    </span>
                    Mark Deal as Closed
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
