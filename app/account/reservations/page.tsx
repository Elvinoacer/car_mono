import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AccountReservations() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row gap-12 lg:gap-[120px] flex-grow w-full">
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-8">
          <nav className="flex flex-col gap-4">
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account">Dashboard</Link>
            <Link className="font-body-md text-secondary border-l-2 border-secondary pl-4 -ml-[2px] transition-colors duration-300" href="/account/reservations">Reservations</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account/enquiries">Enquiries</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account/profile">Profile</Link>
          </nav>
        </aside>
        <div className="flex-1">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-12">My Reservations</h1>
          <div className="bg-surface-container-low p-12 border border-outline-variant text-center">
            <p className="font-body-lg text-on-surface-variant mb-8">You have 2 active reservation holds.</p>
            <div className="grid grid-cols-1 gap-8">
              {/* Simplified cards */}
              <div className="p-6 border border-outline flex justify-between items-center bg-surface">
                <span className="font-headline-sm text-primary">2024 Vantage GT3</span>
                <span className="font-technical-data text-secondary">ACTIVE HOLD</span>
              </div>
              <div className="p-6 border border-outline flex justify-between items-center bg-surface">
                <span className="font-headline-sm text-primary">2023 GT3 RS</span>
                <span className="font-technical-data text-secondary">ACTIVE HOLD</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
