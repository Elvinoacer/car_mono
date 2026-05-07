import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VehicleDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-12 flex flex-col gap-section-padding">
        {/* Header & Main Media */}
        <section className="flex flex-col gap-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-label-sm uppercase tracking-widest border border-outline px-3 py-1 text-secondary">
                  Available
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  VIN: WBAJB1C54K
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl text-primary">
                2024 VANTAGE GT3
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="font-headline-lg text-headline-lg text-primary">
                $185,000
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Excludes taxes & fees
              </span>
            </div>
          </header>

          {/* Immersive Media Gallery */}
          <div className="flex flex-col gap-unit">
            <div className="w-full aspect-video bg-surface-container flex items-center justify-center relative overflow-hidden group">
              <img
                alt="Luxury car side profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQhlrgmDeSnbVCHC8eR1F-92_Y9G6ZeJ7lkbUIwIRjp2VsC7m6_9xw5N6Ye_Gg5fjy7J9J5Uwhp1Omj22QNFRVBL5CJ5sz4GVf48UbmKcgGMrkvYxcO_ym1qUEyixN8AsVKyislriyjBgyoO6WUk7U06kTS9A0h4CE3_pPW5oITlefIz24PgVkfQ7YFmZT0y-Dm18ZC6m8eHzAwNv4dkdcmEXbS-ZBxpECoCprK24wvRx_4j3ppfPvQ34o5pAD8Q-SxLp37eKGTBc"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="material-symbols-outlined text-white text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  360
                </span>
              </button>
            </div>
            <div className="grid grid-cols-6 gap-unit h-24">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2EWgA3x_9B42St8TdHmCuP41mTA9qXu3uQl0XNOhQFfKHt2qDX7ovkymKgjBL8QA2Kxji81T1q99ZYFItr5MUIf3rakDTlOzM56P00DhBFFw6R2KlVF-xYki7k65NmOZnUJpugnQ2U7WNyBAyw7hVH8RckR6Onf_Qi94Faon07dxQZ2NwV3oHQfFIX8f3LviE3X7nnz8v13B9-CwfSsI2LF93TsltKzNjJjsCoBYfGlrUSZQ19BYYOSeX3mYTq8Bo8J-vQe4w4E",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAqscpm_CUwK4_xLZQvxhKAfwNBSERzCA9b4-mwH0MZKXmj89gFArzf7DW2t-TbsAP-VgALq84Jva64yltrUjBX-n1lLixm691pP17TjrlHIgZjPYdGXYVTTdmPyM80q2auQyLjW08Vb6Q3_MUmdPwED9Ygr5Z5tQlTH924CeXWw-BJoxNhtthSUBmrUU9yExKR9ZRM47QfaSA_5OvWvk7EmkAmk9glgWx_VM4JRZjC40_zHioirwIfy6sPuEJJMOWX9VGj8MfRXwk",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDsBWBoKhCne3gyDboNaqacZACXcsmU9uH1OBjmJhNVHHASh0aV040VLsB9QS497_kjKHui99kJTmdxiXNzRwjUigIYA1WXufyuNN6Y7vG8fnFnjAyJLkLAtTCupT5Ig40uGZua88vF5P5nQUle-0bKUBSfUaOEM1neq1uCPU5dgYhsW9JiLLkv7sku4VgHKnAQR36hLMXOwjSp8dMXNoS9DdL1IRFykyRV5e7K8uo9PpB7j0uZ2bzJbepC2uDaDkJ8-Fx0cmXr7rc",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDHtXUbsX3V62pV0kRVRREf32eu5e_RlQxhQpQn0zFtXo37L1bH396y1YSlKswVZHYn3n1T1R6uxkYjRWDidGFV0k26bJpjDq5dORXZC-rskLq98ayJy1kfxzVfKkMEvK45fKBxPDodahFZuseGI6nAhxKnXg1Mi3UzcdpgwFN5YG0qVSL64520dIw6sYxlDdHOzkLeKxkmj6yAqC5tmJ3eozW9AEhC3ptZAgSXV86qLuit_epJJyTXOqBfyuhzUm3zcMElp0NUieU",
              ].map((src, idx) => (
                <img
                  key={idx}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`w-full h-full object-cover cursor-pointer hover:opacity-100 transition-opacity ${
                    idx === 0 ? "border-2 border-primary opacity-100" : "opacity-60"
                  }`}
                  src={src}
                />
              ))}
              <div className="bg-surface-container flex items-center justify-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <span className="font-label-sm text-label-sm uppercase">
                  +12 More
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Actions Dual Column */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Tech Specs */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-2">
                Technical Specifications
              </h2>
              <div className="flex flex-col gap-8">
                {/* Powertrain */}
                <div className="flex flex-col gap-technical-grid-gap bg-outline-variant">
                  <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant bg-surface py-2 px-4">
                    Powertrain
                  </h3>
                  {[
                    ["Engine", "4.0L Twin-Turbo V8"],
                    ["Power", "503 hp @ 6000 rpm"],
                    ["Torque", "505 lb-ft @ 2000 rpm"],
                    ["Transmission", "8-Speed Automatic"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-2 bg-surface gap-technical-grid-gap"
                    >
                      <div className="bg-surface-container-lowest p-4 text-on-surface-variant font-body-md">
                        {label}
                      </div>
                      <div className="bg-surface-container-lowest p-4 text-primary font-technical-data">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance */}
                <div className="flex flex-col gap-technical-grid-gap bg-outline-variant">
                  <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant bg-surface py-2 px-4">
                    Performance
                  </h3>
                  {[
                    ["0-60 mph", "3.5 seconds"],
                    ["Top Speed", "195 mph"],
                    ["Drivetrain", "Rear-Wheel Drive"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-2 bg-surface gap-technical-grid-gap"
                    >
                      <div className="bg-surface-container-lowest p-4 text-on-surface-variant font-body-md">
                        {label}
                      </div>
                      <div className="bg-surface-container-lowest p-4 text-primary font-technical-data">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Actions Column */}
          <div className="lg:col-span-4 sticky top-24 flex flex-col gap-8">
            <div className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col gap-6 shadow-[0_40px_80px_rgba(0,0,0,0.04)]">
              <Link 
                href="/reserve"
                className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-4 hover:bg-secondary transition-colors duration-300 text-center"
              >
                Reserve This Vehicle
              </Link>
              <Link 
                href="/reserve/contact"
                className="w-full border border-outline text-primary font-label-sm text-label-sm uppercase tracking-widest py-4 hover:border-secondary hover:text-secondary transition-colors duration-300 text-center"
              >
                Schedule Test Drive
              </Link>
              <p className="font-body-md text-on-surface-variant text-sm text-center">
                A fully refundable deposit of $1,000 is required to secure this
                vehicle.
              </p>
            </div>
            {/* Finance Calculator Widget */}
            <div className="bg-surface-container-low p-8 flex flex-col gap-6">
              <h3 className="font-headline-md text-headline-md text-primary">
                Estimated Finance
              </h3>
              <div className="flex justify-between items-end border-b border-outline-variant pb-4">
                <span className="font-body-md text-on-surface-variant">
                  Monthly Payment
                </span>
                <span className="font-headline-md text-headline-md text-primary">
                  $3,240
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                    Down Payment
                  </label>
                  <input
                    className="w-full h-1 bg-outline-variant appearance-none cursor-pointer accent-primary"
                    max="50000"
                    min="0"
                    type="range"
                    defaultValue="20000"
                  />
                  <div className="flex justify-between text-sm text-on-surface-variant font-technical-data">
                    <span>$0</span>
                    <span>$20,000</span>
                    <span>$50k</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/finance-calculator"
                className="font-label-sm text-label-sm uppercase tracking-widest text-secondary text-left hover:text-primary transition-colors block"
              >
                Apply for financing{" "}
                <span className="material-symbols-outlined text-sm align-middle">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
