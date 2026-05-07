import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BeverlyHillsShowroom() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[614px] flex items-end pb-section-padding pt-section-padding px-gutter">
          <div className="absolute inset-0 z-0">
            <img
              alt="Beverly Hills Showroom"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlbTje8kgQZXj6PEQcwurt_fzF1NVnRdEr0lfRGO7yzMIfqGQGoR7rBCYKNAmtlrs4Kh-nuOLGZMtjjSKeeprsutY5rJreqgDsOEKvgeqz9fsUyyPuDbl1Ua34N7wWouTph6qO4b2So9U4ob2CfbN7DqyTQ-B8aoAM5MnKPDYh4S9IRkv-O4hlq_7ANSkff_nN8QVn_mU_uaVTLIr04pISkpjCgjHStTX1nhPhfCPmBqM_n5R-USri6PWklBxYfiT0BIau4_5LTI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent/30"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">
                California Hub
              </span>
              <h1 className="font-display-xl text-display-xl text-primary mb-6">
                Premium Vehicles Available in Beverly Hills.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Experience the pinnacle of automotive engineering at our
                flagship Southern California showroom. Private viewings and
                bespoke consultations available by appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Location Info & Map Bento Grid */}
        <section className="py-section-padding px-gutter bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              {/* Contact & Hours */}
              <div className="lg:col-span-4 flex flex-col gap-12">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-6">
                    Showroom Details
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-outline mt-1">
                        location_on
                      </span>
                      <div>
                        <p className="font-body-md text-primary">
                          420 N Rodeo Dr.
                        </p>
                        <p className="font-body-md text-on-surface-variant">
                          Beverly Hills, CA 90210
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-outline">
                        call
                      </span>
                      <p className="font-technical-data text-primary">
                        +1 (310) 555-0199
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-outline">
                        mail
                      </span>
                      <p className="font-technical-data text-primary">
                        beverlyhills@monolith.com
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-4">
                    Operating Hours
                  </h3>
                  <div className="bg-outline-variant gap-[1px] flex flex-col">
                    <div className="bg-surface flex justify-between py-3 px-4">
                      <span className="font-technical-data text-on-surface-variant">
                        Monday - Friday
                      </span>
                      <span className="font-technical-data text-primary">
                        10:00 AM - 7:00 PM
                      </span>
                    </div>
                    <div className="bg-surface flex justify-between py-3 px-4">
                      <span className="font-technical-data text-on-surface-variant">
                        Saturday
                      </span>
                      <span className="font-technical-data text-primary">
                        11:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="bg-surface flex justify-between py-3 px-4">
                      <span className="font-technical-data text-on-surface-variant">
                        Sunday
                      </span>
                      <span className="font-technical-data text-primary">
                        By Appointment
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full border border-outline text-primary font-label-sm text-label-sm uppercase tracking-widest py-4 hover:border-secondary hover:text-secondary transition-colors duration-300">
                  Book Private Viewing
                </button>
              </div>
              {/* Map */}
              <div className="lg:col-span-8 h-[600px] bg-surface-container-low border border-outline-variant relative group overflow-hidden">
                <img
                  alt="Map of Beverly Hills location"
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply filter grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApf6edQ2uaWLUqoXTrMQbE2GhZuKhb1iqNRmxP0mzQViBbUGYqvveqIssxd2oiQCAGFHsgTa8HIHqE5bKIXnYYqv4tQAjrdMQptesS92OMZ7HgxK2aM9X1TbSB70TG2kI6SzMxu64pejS8QPxkOJL51o33vfIxkD-290AOKrjg4vtMSkbfGt9B7GSxDm5Oee49wFdH9e7GX83Rc96WybLZT3ZBhVGb68xJxaVElVa4iyUOGdO5PxOBOgvz2XFirLbNvS7ci6tHnak"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-surface p-4 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.04)] border border-outline-variant flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="font-technical-data text-primary">
                      Monolith Beverly Hills
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Inventory */}
        <section className="py-section-padding px-gutter bg-surface-container-lowest border-t border-outline-variant">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Available Locally
                </h2>
                <p className="font-body-md text-on-surface-variant">
                  Curated inventory currently housed at our Beverly Hills
                  location.
                </p>
              </div>
              <a
                className="font-label-sm text-label-sm text-primary uppercase tracking-widest hover:text-secondary flex items-center gap-2 transition-colors"
                href="/inventory"
              >
                View All Local Inventory
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-16">
              {/* Local Vehicle 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-surface-container mb-6 relative">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 border border-outline bg-surface/90 backdrop-blur">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Available
                    </span>
                  </div>
                  <img
                    alt="Vehicle 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm5PqF3Gw1if_7l7Z-r1GuIlcEha9_AN8iQM26a5H_BUTDMrARgufLmNWeXxiLfyAFxEpPJ1G3DY7zuj4qAS0Z00TtmZ3vuX4XK0_zcSLu89BaHCIJgYNOO-EeIA9tqiupKfA0s5udmq9-yrHRDRssxt6_sqqhvzgH2lqte18NiXqUc9w-b5FnmwwiJZ1RoRo3hFuQ7USBDAbJqUSLouPjSMFBB0fJnYdkDWVhZktAHmgy3udvvc8oYHszFJY0ME6Q0Z950b4oKPE"
                  />
                </div>
                <div className="flex justify-between items-start border-b border-outline-variant pb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Project M-01
                    </h3>
                    <p className="font-body-md text-on-surface-variant mt-1">
                      V8 Bi-Turbo / Obsidian Black
                    </p>
                  </div>
                  <span className="font-technical-data text-primary">
                    $185,000
                  </span>
                </div>
              </div>
              {/* Local Vehicle 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-surface-container mb-6 relative">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 border border-outline bg-surface/90 backdrop-blur">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Available
                    </span>
                  </div>
                  <img
                    alt="Vehicle 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD64mmRL-U9bmXBiCyaEIeeyL8jmn35b1e0t38C9zWIiDfNbS5La8ZQ97__nTwkZWZoudrF9Ym_W6OiewdFmOaB8xRTZLuWVG4XoAVkJFDZ6DL8_b8ecG03TTmJPjBHQb4JKFhsurYrgZi5xsFJ6syctWrPXSy3abRgLQa50cnBM75L05PMVDNgqVCP0j8o-IT9uZsF5D-zouOSVU1XmCY4L6HuF-8poZGB3rl4DGdo3xJR5BRGScouG4xrNTMvKoWha_GWqoYVYA"
                  />
                </div>
                <div className="flex justify-between items-start border-b border-outline-variant pb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Project GT-R
                    </h3>
                    <p className="font-body-md text-on-surface-variant mt-1">
                      Hybrid V6 / Metallic Grey
                    </p>
                  </div>
                  <span className="font-technical-data text-primary">
                    $210,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
