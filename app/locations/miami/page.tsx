import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MiamiShowroom() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[716px] flex items-center justify-center bg-inverse-surface overflow-hidden">
          <img
            alt="Miami luxury showroom exterior"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxs6mOFbn86hql1rPG37pP4twmgOT0Z0-i0ptcnX3cZL4kkbFpR38Q37Y7eCHZOh-FY0Zr-dids-GcMC_8bikdLujMf7SfHM5fXOK42vO1xMLeLMXkv55X8FxM7IRcgFjUzLa1Kf2n2WD2mkUuw1uuhix65h_iirQ_A0k_p87Ct2UCNvyf43tEmb3jAnxSRqHwGYJQCNjyjIsA0rF1x-EqHr6ubvUB9vkSlLCc8DB1iJrpJvIxXLwMBeLYITbHQldAfUTWT2_XNBQ"
          />
          <div className="relative z-10 text-center px-gutter max-w-container-max mx-auto">
            <h1 className="font-display-xl text-display-xl text-on-primary mb-6">
              The Finest Collection in Miami.
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto">
              Experience unparalleled mechanical precision and exclusive
              automotive heritage in the heart of South Florida. Monolith
              Automotive offers discrete, high-fidelity curation for the
              discerning collector.
            </p>
          </div>
        </section>

        {/* Location & Details Section */}
        <section className="py-section-padding px-gutter max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map (Visual Representation) */}
          <div className="w-full h-[500px] bg-surface-container-high border border-outline-variant flex items-center justify-center relative overflow-hidden">
            <img
              alt="Map of Miami location"
              className="w-full h-full object-cover opacity-80 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdHUJJS43E03CBRKNK0DA2oTMVVhvfjTAt1Ww1rh7lpMw6xYfx5Fayz6PpaqrQcV0hL4JDISnR2qr3bWV25G1eY2vaZ9h-_yLx26f_GY-9zyDxTB5-NO02T5DR1203snr_dNGp-oNbrrAC4Y8uydhZ-8zOZ_o3K6kcdOYKFawvXNJXflEySa0VucnHUED9AnsGBhtyjMJxkb6a7ew14GSWBpaTDYArFT4dekQnLjGHkJ6GhvyxoPEwgAsyjxFKbGHGaepV5WlLdRk"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-5xl bg-surface p-4 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
                location_on
              </span>
            </div>
          </div>
          {/* Business Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4 border-b border-outline-variant pb-4">
                Miami Showroom
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                1200 Brickell Avenue, Suite 100
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Miami, FL 33131
              </p>
              <p className="font-technical-data text-technical-data text-primary">
                +1 (305) 555-0198
              </p>
            </div>
            {/* Hours Table (Technical Grid) */}
            <div>
              <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-4 tracking-widest">
                Opening Hours
              </h3>
              <div className="grid grid-cols-2 gap-[1px] bg-outline-variant border border-outline-variant">
                <div className="bg-surface p-4 font-body-md text-body-md text-on-surface-variant">
                  Monday - Friday
                </div>
                <div className="bg-surface p-4 font-technical-data text-technical-data text-primary">
                  10:00 AM - 7:00 PM
                </div>
                <div className="bg-surface p-4 font-body-md text-body-md text-on-surface-variant">
                  Saturday
                </div>
                <div className="bg-surface p-4 font-technical-data text-technical-data text-primary">
                  By Appointment Only
                </div>
                <div className="bg-surface p-4 font-body-md text-body-md text-on-surface-variant">
                  Sunday
                </div>
                <div className="bg-surface p-4 font-technical-data text-technical-data text-primary">
                  Closed
                </div>
              </div>
            </div>
            <button className="self-start font-label-sm text-label-sm uppercase tracking-widest border border-outline text-primary px-8 py-4 hover:border-secondary hover:text-secondary transition-colors duration-300">
              Get Directions
            </button>
          </div>
        </section>

        {/* Local Inventory Preview */}
        <section className="py-section-padding px-gutter bg-surface-container-low border-t border-outline-variant">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Current Collection
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Exclusive vehicles currently housed in Miami.
                </p>
              </div>
              <a
                className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-secondary border-b border-primary hover:border-secondary transition-colors pb-1 hidden sm:block"
                href="/inventory"
              >
                View Full Inventory
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Local Vehicles */}
              {[
                {
                  name: "Phantom GT",
                  year: 2024,
                  miles: "1,200",
                  status: "Available",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChxc_ch8kA3KioLvZATURxceTgzKpQIhZ1sZTcAGok0eaMUw4k-M704MnKNDkZELfmKwbliXKYJTfrPEpx1zLvQEOo8xgra-pHPM5W50efhjdQrgezAo7cgK_ZpDMzv299BkdXe_Fzy2eB0JugV4PoagTAirhMk24kj47YGS2iIx78SSU_edgKRYV4GPVnVrFnbjN6l1UMbbjtFTKtmXt9rsH3wuKU5AFjQPIVA2L464WK6wPK_qmLfkWbsJKlz2Id5Y2yOxIewFc",
                },
                {
                  name: "Aura V8",
                  year: 2023,
                  miles: "4,500",
                  status: "Reserved",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEEtcSnrmxQ0pCX0zxtyat44FKe2PAFBOwNcRdwlGJD1MpHoH_9k74EL5wI6cyYSICMNiylGQCNcJ2YsBRgX4d1fYPwJQE-HcGtfqw2yNpSBDXzazMN1YdKPiQBNrzHi8r3vaXH0xqPctqCtOlYmvl48XVvIOnAEwlTrvyxNn7fUkGJwEsg3lZ2b5AXHUq155XoOsh4jsnAOvyKkpU0-LPBkWTJkswH_KWC48o5bDGgY5rFn89JY2-URgdL1qDnRLOhck4BFrbm1k",
                },
                {
                  name: "Heritage 99",
                  year: 1988,
                  miles: "22,000",
                  status: "Available",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6HR7Ypz0_aVG0YNd5fAR-IdIhALwst-CNFBzRLpp107RR915ff7oGdtYhxmk7klxRfGqpTtnoxowaQ0mmq0U4lwr9076YZf5SsXNBbtt0plXbqJMr_PfaWXU6VGxtZaGPKMch9yCGqdpsiRM3P0LVP7UjjlzBjCs5-QGl4fSEp0WuCj9wFhV6E1veOGlHZVvGZhMWuPaOY4zDCWDooRVfl_Y1MUbdUloq4NmEgKb0JwT_JRhaoGqONKE9vV5gmB-07pV7UeylLGM",
                },
                {
                  name: "Silvia S",
                  year: 2024,
                  miles: "50",
                  status: "Available",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMUTLjpW6yulIPiymd1Z1Gs6SYM_7pXVo27Sc3-C3e9YDxLbqX0dVxnyeHcyuTzkVgkLCEpffyTtYpHgOHxS2MBl-X06XBxxkwlr0H6PcZHO9qZvUJhIWYs8JMcaKCJB47zNs-6B8Rro6qSXc9gZXn6-2oT4F79sRFjxCcMl-D1gGLdd3ueNb86Pzw6fYOlFti_GalgkUZixQnDlqA0bzUKhoKrw2_PYA6bFeRq9TxTGtH-2Ed-Pz1AyZTePHyT8DGTgNMmVF33yA",
                },
              ].map((v, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer bg-surface border-b border-outline-variant pb-6 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] transition-shadow duration-500"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container mb-6">
                    <img
                      alt={v.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      src={v.img}
                    />
                  </div>
                  <div className="px-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {v.name}
                      </h3>
                      <span
                        className={`font-label-sm text-label-sm uppercase tracking-widest px-2 py-1 border rounded-full text-[10px] ${
                          v.status === "Available"
                            ? "text-secondary border-secondary"
                            : "text-on-surface-variant border-outline-variant"
                        }`}
                      >
                        {v.status}
                      </span>
                    </div>
                    <p className="font-technical-data text-technical-data text-on-surface-variant">
                      {v.year} • {v.miles} MILES
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-section-padding px-gutter max-w-container-max mx-auto border-t border-outline-variant">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">
            Miami Perspectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 border border-outline-variant flex flex-col justify-between">
              <p className="font-body-lg text-body-lg text-primary italic mb-8">
                "Monolith's Miami team secured a vehicle I thought was
                unattainable. The entire process was handled with absolute
                discretion and precision. A masterclass in luxury brokerage."
              </p>
              <div>
                <p className="font-technical-data text-technical-data text-primary">
                  J. CARTER
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant tracking-widest mt-1">
                  PRIVATE COLLECTOR
                </p>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-10 border border-primary md:col-span-2 flex flex-col justify-between">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md mb-8 leading-relaxed">
                "The showroom itself is an architectural triumph, but the
                service is what truly defines them. They understand the South
                 Florida market intimately. Seamless transaction, flawless
                delivery."
              </p>
              <div>
                <p className="font-technical-data text-technical-data">
                  E. VANDERBILT
                </p>
                <p className="font-label-sm text-label-sm text-secondary tracking-widest mt-1">
                  MIAMI BEACH
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
