import React from "react";

export default function DealAnalysisPage() {
  return (
    <div className="space-y-16">
      {/* Header & Stepper */}
      <div className="space-y-12">
        <div className="flex justify-between items-end border-b border-outline-variant pb-8">
          <div>
            <h1 className="text-6xl font-serif font-bold text-on-surface mb-2">
              Deal #D-8942
            </h1>
            <p className="text-xl text-on-surface-variant">
              2023 Porsche 911 GT3 Touring
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
              Synced to Xero
            </span>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between w-full relative pt-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10 translate-y-[-50%]"></div>
          <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-secondary -z-10 translate-y-[-50%]"></div>

          {[
            { label: "Enquiry", status: "completed" },
            { label: "Reserved", status: "completed" },
            { label: "Inspection", status: "completed" },
            { label: "Closed", status: "pending" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 bg-surface-container-lowest px-4"
            >
              <div
                className={`w-4 h-4 rounded-full border ${step.status === "completed" ? "border-secondary bg-secondary" : "border-outline-variant bg-surface-container-lowest"} flex items-center justify-center`}
              >
                {step.status === "completed" && (
                  <span className="material-symbols-outlined text-[10px] text-on-secondary font-bold">
                    check
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${step.status === "completed" ? "text-on-surface" : "text-on-surface-variant"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Financials */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Financial Breakdown Table */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-on-surface mb-6">
              Financial Breakdown
            </h2>
            <div className="border border-outline-variant bg-outline-variant gap-[1px] flex flex-col">
              {[
                { label: "Sale Price", value: "£245,000.00", type: "positive" },
                {
                  label: "Purchase Cost",
                  value: "-£190,000.00",
                  type: "negative",
                },
                {
                  label: "Reconditioning",
                  value: "-£3,500.00",
                  type: "negative",
                },
                {
                  label: "Floorplan Interest",
                  value: "-£1,200.00",
                  type: "negative",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 bg-surface-container-lowest"
                >
                  <span className="text-sm font-medium text-on-surface-variant">
                    {row.label}
                  </span>
                  <span
                    className={`text-sm font-bold ${row.type === "negative" ? "text-error" : "text-on-surface"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center p-6 bg-surface-container-low mt-[1px]">
                <span className="text-xl font-serif font-bold text-on-surface">
                  Gross Profit
                </span>
                <span className="text-xl font-serif font-bold text-secondary">
                  £50,300.00
                </span>
              </div>
            </div>
          </section>

          {/* Vehicle Info Card */}
          <section className="border border-outline-variant p-1 bg-surface-container-lowest relative group">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
                alt="Vehicle"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <div className="p-6 flex justify-between items-end border-t border-outline-variant mt-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">
                  VIN
                </span>
                <span className="text-sm font-bold text-on-surface">
                  WP0ZZZ99ZNS2XXXXX
                </span>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1">
                View Specs{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Commission & Actions */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Commission Section */}
          <section className="border border-outline-variant p-8 bg-surface-container-low flex flex-col justify-between h-full min-h-100">
            <div>
              <h2 className="text-2xl font-serif font-bold text-on-surface mb-6">
                Commission
              </h2>
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">
                  Salesperson
                </span>
                <span className="text-lg text-on-surface">Julian Vance</span>
              </div>
              <div className="flex flex-col gap-[1px] bg-outline-variant border border-outline-variant mb-8">
                <div className="flex justify-between items-center p-3 bg-surface-container-lowest">
                  <span className="text-xs font-medium text-on-surface-variant">
                    Rate (Tier 2)
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    5.0%
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface-container-lowest">
                  <span className="text-xs font-medium text-on-surface-variant">
                    Basis (Gross)
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    £50,300.00
                  </span>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-6 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Final Payout
                </span>
                <span className="text-2xl font-serif font-bold text-on-surface">
                  £2,515.00
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-8">
              <button className="w-full bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                Approve Commission
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
              </button>
              <button className="w-full border border-outline-variant text-on-surface text-[10px] font-bold uppercase tracking-widest py-4 hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-2">
                Force Accounting Sync
                <span className="material-symbols-outlined text-base">
                  sync
                </span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
