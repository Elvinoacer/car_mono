import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-surface dark:bg-primary-container text-primary dark:text-primary-fixed border-b border-outline-variant dark:border-outline docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary dark:text-primary-fixed"
          >
            MONOLITH
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/inventory"
              className="font-label-sm text-label-sm uppercase tracking-widest text-secondary dark:text-secondary-fixed-dim border-b border-secondary pb-1 hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer active:opacity-70"
            >
              Inventory
            </Link>
            <Link
              href="/locations/beverly-hills"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer active:opacity-70 pb-1"
            >
              Locations
            </Link>
            <Link
              href="/finance-calculator"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-300 cursor-pointer active:opacity-70 pb-1"
            >
              Finance
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/inventory"
            className="hidden md:block px-6 py-3 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Reserve
          </Link>
          <Link
            href="/account"
            className="p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Account"
          >
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
