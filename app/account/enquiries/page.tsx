import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AccountPlaceholder() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row gap-12 lg:gap-[120px] flex-grow w-full">
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-8">
          <nav className="flex flex-col gap-4">
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account">Dashboard</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account/reservations">Reservations</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account/enquiries">Enquiries</Link>
            <Link className="font-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300" href="/account/profile">Profile</Link>
          </nav>
        </aside>
        <div className="flex-1">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6 text-center">Section Under Construction</h1>
          <p className="text-center text-on-surface-variant font-body-lg">We are currently refining this part of your portfolio experience. Please check back shortly.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
