import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradeInFinancing() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-container-max mx-auto px-gutter py-section-padding w-full">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="font-display-xl text-display-xl text-primary mb-6">
            Structuring Ownership
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Precision financial modeling and heritage vehicle valuation. Enter
            your current asset details to ascertain its market standing, or
            model acquisition scenarios for your next commission.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Asset Valuation (Left Column) */}
          <section className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-surface-container-low border border-outline-variant p-8">
              <h2 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  sync_alt
                </span>
                Asset Valuation
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 pb-8 border-b border-outline-variant">
                Determine the consignment or trade equity of your current
                vehicle.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-2 uppercase">
                      Year
                    </label>
                    <select className="w-full bg-transparent border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:border-secondary focus:ring-0 appearance-none rounded-none">
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-2 uppercase">
                      Make
                    </label>
                    <select className="w-full bg-transparent border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:border-secondary focus:ring-0 appearance-none rounded-none">
                      <option>Porsche</option>
                      <option>Ferrari</option>
                      <option>Aston Martin</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-2 uppercase">
                    Model & Trim
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:border-secondary focus:ring-0 placeholder-outline rounded-none"
                    placeholder="e.g., 911 GT3 RS"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-2 uppercase">
                    Verified Mileage
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-transparent border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:border-secondary focus:ring-0 placeholder-outline rounded-none"
                      placeholder="4,500"
                      type="number"
                    />
                    <span className="absolute right-0 top-3 font-technical-data text-technical-data text-on-surface-variant">
                      MI
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-4 uppercase">
                    Condition Standard
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-outline-variant border border-outline-variant p-[1px]">
                    <label className="cursor-pointer">
                      <input
                        checked
                        className="peer sr-only"
                        name="condition"
                        type="radio"
                      />
                      <div className="bg-surface py-3 text-center font-label-sm text-label-sm text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                        CONCOURS
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="condition" type="radio" />
                      <div className="bg-surface py-3 text-center font-label-sm text-label-sm text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                        EXCELLENT
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="condition" type="radio" />
                      <div className="bg-surface py-3 text-center font-label-sm text-label-sm text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                        GOOD
                      </div>
                    </label>
                  </div>
                </div>
                <Link
                  href="/reserve/contact"
                  className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 uppercase tracking-widest hover:bg-secondary transition-colors mt-8 text-center block"
                >
                  Request Appraisal
                </Link>
              </form>
            </div>
            {/* Visual Anchor Image */}
            <div className="h-64 bg-surface-variant overflow-hidden relative group">
              <img
                alt="Showroom Vehicle Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYH7ea9OvVozDEX3-23YNkExzQB5eNs81liHnwqkpbojLHM_TnDhYLNKyM8so4igsLve8npJR-7PhdsK1qeH9laz0Ljrl5JbhmWo5XFH1lSZiIidU9ALMMDmgDgfBEXroqQZ3JAxaFt-roI_BWnfKxBnjyFVSdlk11Ox2KZdZgt0qF8FY-SUKAkh3RXpiZYoZ82v3RNFAbUSH1dNbxLvgmqROhtjwaueWLkficV-zvhVk9EEtoTwpRHCBVpOjMRfuBs9Wyu-QczgE"
              />
              <div className="absolute inset-0 border border-outline-variant/30 pointer-events-none"></div>
            </div>
          </section>

          {/* Acquisition Modeling (Right Column) */}
          <section className="lg:col-span-7 bg-surface border border-outline-variant flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-surface-variant/50 to-transparent pointer-events-none"></div>
            <div className="p-8 md:p-12 z-10 flex-grow">
              <h2 className="font-headline-md text-headline-md text-primary mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  account_balance
                </span>
                Acquisition Modeling
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-12 pb-8 border-b border-outline-variant">
                Structure your capital allocation parameters.
              </p>
              {/* Total Cost Input */}
              <div className="mb-12">
                <label className="block font-label-sm text-label-sm text-on-surface mb-2 uppercase">
                  Target Vehicle Price
                </label>
                <div className="flex items-end border-b-2 border-primary pb-2">
                  <span className="font-display-xl text-display-xl text-primary leading-none mr-2">
                    $
                  </span>
                  <input
                    className="w-full bg-transparent border-none p-0 font-display-xl text-display-xl text-primary focus:ring-0 leading-none h-14"
                    type="text"
                    defaultValue="285,000"
                  />
                </div>
              </div>
              {/* Sliders */}
              <div className="space-y-12">
                {/* Down Payment */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-label-sm text-label-sm text-on-surface uppercase">
                      Capital Injection (Down Payment)
                    </label>
                    <span className="font-technical-data text-technical-data text-primary">
                      $57,000
                    </span>
                  </div>
                  <input
                    className="w-full h-1 bg-outline-variant appearance-none rounded-none outline-none"
                    max="285000"
                    min="0"
                    type="range"
                    defaultValue="57000"
                  />
                  <div className="flex justify-between mt-2 font-technical-data text-[10px] text-on-surface-variant uppercase">
                    <span>0%</span>
                    <span>20%</span>
                    <span>100%</span>
                  </div>
                </div>
                {/* Term */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-label-sm text-label-sm text-on-surface uppercase">
                      Term Duration
                    </label>
                    <span className="font-technical-data text-technical-data text-primary">
                      60 Months
                    </span>
                  </div>
                  <input
                    className="w-full h-1 bg-outline-variant appearance-none rounded-none outline-none"
                    max="84"
                    min="12"
                    step="12"
                    type="range"
                    defaultValue="60"
                  />
                  <div className="flex justify-between mt-2 font-technical-data text-[10px] text-on-surface-variant uppercase">
                    <span>12M</span>
                    <span>48M</span>
                    <span>84M</span>
                  </div>
                </div>
                {/* APR */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="font-label-sm text-label-sm text-on-surface uppercase">
                      Estimated Rate (APR)
                    </label>
                    <span className="font-technical-data text-technical-data text-primary">
                      6.5%
                    </span>
                  </div>
                  <input
                    className="w-full h-1 bg-outline-variant appearance-none rounded-none outline-none"
                    max="12"
                    min="3"
                    step="0.1"
                    type="range"
                    defaultValue="6.5"
                  />
                </div>
              </div>
            </div>
            {/* Results Output Block */}
            <div className="bg-tertiary text-on-tertiary p-8 md:p-12 mt-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                  <span className="block font-label-sm text-label-sm text-outline mb-2 uppercase tracking-widest">
                    Estimated Monthly
                  </span>
                  <div className="flex items-baseline">
                    <span className="font-headline-md text-headline-md mr-1">
                      $
                    </span>
                    <span className="font-display-xl text-display-xl leading-none">
                      4,462
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    <div className="font-label-sm text-label-sm text-outline uppercase">
                      Principal
                    </div>
                    <div className="font-technical-data text-technical-data text-right">
                      $228,000
                    </div>
                    <div className="font-label-sm text-label-sm text-outline uppercase">
                      Est. Interest
                    </div>
                    <div className="font-technical-data text-technical-data text-right">
                      $39,720
                    </div>
                  </div>
                  <Link 
                    href="/reserve/contact"
                    className="w-full md:w-auto border border-outline px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors text-center block"
                  >
                    Initiate Application
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
