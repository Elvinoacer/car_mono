import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradeInValuation() {
  return (
    <div className="bg-surface text-on-surface antialiased font-body-md min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col md:flex-row w-full max-w-container-max mx-auto">
        {/* Left Side: Editorial Image */}
        <div className="hidden md:block w-[40%] min-h-[calc(100vh-80px)] relative border-r border-outline-variant">
          <div className="sticky top-20 w-full h-[calc(100vh-80px)]">
            <img
              alt="Vehicle detail"
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BT8ja-Z51T2gwifUlLvmGihPek0IEsl3bxavsMyHzadci1UpXuXWKlHEnJj9QtjNpdLb3iD1N785NlmHfi4IRPMq2YgmUxztSQDQkrZWwV92wBv7Plo_GniFXFp88XcwMipw3g103aZfvtzNblvaZZij2ZC-z3Bb5HhdQEkbCpqSwqh5GBp9isT21jfeFJdqkLZgBH5LV9ZKqPESIpp4-XSsKbBb5_cCBbjTCWY9o9SCLziF6WJWFZJsZxpz3TcqTstaO8Fouyc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-24 left-12 right-12 text-primary">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">
                Expert Valuation.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Our brokers assess every detail of your vehicle to provide a
                precise, market-reflective acquisition offer.
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: The Form */}
        <div className="w-full md:w-[60%] px-6 py-16 md:px-24 md:py-24">
          <div className="max-w-2xl mx-auto">
            <header className="mb-16">
              <h1 className="font-display-xl text-display-xl text-primary mb-4">
                Trade-In Valuation
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Provide your vehicle specifics to initiate the review process.
              </p>
            </header>
            <form className="space-y-16">
              {/* Step 01: Vehicle Details */}
              <section className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    01
                  </span>
                  <div className="h-px bg-outline-variant flex-grow"></div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Vehicle Details
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="make"
                    >
                      Make
                    </label>
                    <select
                      className="w-full font-technical-data text-technical-data text-primary appearance-none cursor-pointer bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="make"
                      name="make"
                    >
                      <option disabled selected value="">
                        Select Make
                      </option>
                      <option value="aston-martin">Aston Martin</option>
                      <option value="bentley">Bentley</option>
                      <option value="ferrari">Ferrari</option>
                      <option value="porsche">Porsche</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline pointer-events-none text-sm">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="model"
                    >
                      Model
                    </label>
                    <input
                      className="w-full font-technical-data text-technical-data text-primary placeholder:text-outline bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="model"
                      name="model"
                      placeholder="e.g. 911 GT3"
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="year"
                    >
                      Year
                    </label>
                    <select
                      className="w-full font-technical-data text-technical-data text-primary appearance-none cursor-pointer bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="year"
                      name="year"
                    >
                      <option disabled selected value="">
                        Select Year
                      </option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 bottom-3 text-outline pointer-events-none text-sm">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="mileage"
                    >
                      Mileage
                    </label>
                    <input
                      className="w-full font-technical-data text-technical-data text-primary placeholder:text-outline bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="mileage"
                      name="mileage"
                      placeholder="Current Odometer"
                      type="text"
                    />
                  </div>
                </div>
              </section>

              {/* Step 02: Condition */}
              <section className="relative pt-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    02
                  </span>
                  <div className="h-px bg-outline-variant flex-grow"></div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Condition & History
                  </h3>
                </div>
                <div className="space-y-10">
                  {/* Condition Cards */}
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-4">
                      Overall Condition
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          id: "excellent",
                          label: "Excellent",
                          desc: "Flawless exterior and interior. Mechanically perfect.",
                        },
                        {
                          id: "good",
                          label: "Good",
                          desc: "Minor cosmetic wear. Mechanically sound.",
                        },
                        {
                          id: "fair",
                          label: "Fair",
                          desc: "Noticeable wear or minor mechanical issues.",
                        },
                        {
                          id: "poor",
                          label: "Poor",
                          desc: "Requires significant repair or restoration.",
                        },
                      ].map((cond) => (
                        <label
                          key={cond.id}
                          className="relative cursor-pointer group"
                        >
                          <input
                            className="peer sr-only"
                            name="condition"
                            type="radio"
                            value={cond.id}
                          />
                          <div className="p-6 border border-outline-variant bg-surface transition-all duration-300 group-hover:shadow-[0_40px_40px_-15px_rgba(0,0,0,0.04)] peer-checked:border-secondary h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-4">
                              <span className="font-technical-data text-technical-data text-primary uppercase">
                                {cond.label}
                              </span>
                              <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center peer-checked:border-secondary">
                                <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-secondary transition-colors"></div>
                              </div>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                              {cond.desc}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Service History Radios */}
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-4">
                      Service History
                    </label>
                    <div className="flex flex-col sm:flex-row gap-6">
                      {["Full Documented", "Partial", "None"].map((label) => (
                        <label
                          key={label}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            className="peer sr-only"
                            name="service"
                            type="radio"
                            value={label.toLowerCase()}
                          />
                          <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center shrink-0 peer-checked:border-secondary">
                            <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-secondary transition-colors"></div>
                          </div>
                          <span className="font-technical-data text-technical-data text-primary uppercase">
                            {label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Known Issues Textarea */}
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-2"
                      htmlFor="issues"
                    >
                      Known Issues or Modifications
                    </label>
                    <textarea
                      className="w-full font-technical-data text-technical-data text-primary placeholder:text-outline resize-none bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="issues"
                      name="issues"
                      placeholder="Briefly describe any specific notes regarding the vehicle's state..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Step 03: Contact */}
              <section className="relative pt-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-label-sm text-label-sm text-outline tracking-widest">
                    03
                  </span>
                  <div className="h-px bg-outline-variant flex-grow"></div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Contact Protocol
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <div className="relative md:col-span-2">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full font-technical-data text-technical-data text-primary bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full font-technical-data text-technical-data text-primary bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="relative">
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest block mb-1"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full font-technical-data text-technical-data text-primary bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-secondary rounded-none"
                      id="phone"
                      name="phone"
                      type="tel"
                    />
                  </div>
                </div>
              </section>

              {/* Submit Action */}
              <div className="pt-12">
                <Link
                  href="/trade-in/financing"
                  className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-5 px-8 hover:bg-inverse-surface transition-colors duration-300 flex items-center justify-center gap-3 text-center"
                >
                  Get My Valuation
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'wght' 700" }}
                  >
                    arrow_forward
                  </span>
                </Link>
                <p className="font-body-md text-[13px] text-on-surface-variant text-center mt-6">
                  By submitting this form, you authorize a MONOLITH broker to
                  contact you regarding your vehicle. All valuations are subject
                  to physical inspection.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
