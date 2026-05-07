import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-surface text-on-surface border-b border-outline-variant docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary"
          >
            MONOLITH
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/inventory"
              className="font-label-sm text-label-sm uppercase tracking-widest text-secondary border-b border-secondary pb-1 hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-70"
            >
              Inventory
            </Link>
            <Link
              href="/locations/beverly-hills"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-70 pb-1"
            >
              Locations
            </Link>
            <Link
              href="/finance-calculator"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-70 pb-1"
            >
              Finance
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/inventory"
            className="hidden md:block px-6 py-3 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Reserve
          </Link>
          <Link
            href="/account"
            className="p-2 text-on-surface-variant hover:text-secondary transition-colors"
            aria-label="Account"
          >
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
