import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-screen sticky top-0 shrink-0 shadow-[40px_0_40px_-10px_rgba(0,0,0,0.02)] z-20">
      <div className="p-8 border-b border-outline-variant">
        <Link href="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
          MONOLITH
        </Link>
        <div className="font-label-sm text-label-sm tracking-widest text-on-surface-variant mt-2 uppercase">
          Brokerage Admin
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2">
        <Link
          href="/admin"
          className="flex items-center gap-4 px-4 py-3 bg-primary text-on-primary rounded-none transition-colors duration-300"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dashboard
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Dashboard
          </span>
        </Link>
        <Link
          href="/admin/inventory"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">directions_car</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Inventory
          </span>
        </Link>
        <Link
          href="/admin/leads"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">group</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Leads
          </span>
          <span className="ml-auto bg-secondary text-on-secondary px-2 py-1 text-[10px] font-bold tracking-widest uppercase">
            New
          </span>
        </Link>
        <Link
          href="/admin/reservations"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">event_seat</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Reservations
          </span>
        </Link>
        <Link
          href="/admin/deals"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">handshake</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Deals
          </span>
        </Link>
        <Link
          href="/admin/reports/inventory-aging"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Reports
          </span>
        </Link>
      </nav>
      <div className="p-4 border-t border-outline-variant">
        <Link
          href="/admin/settings"
          className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Settings
          </span>
        </Link>
        <div className="flex items-center gap-4 px-4 py-3 mt-4">
          <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
              person
            </span>
          </div>
          <div>
            <div className="font-technical-data text-technical-data text-primary">
              A. Director
            </div>
            <div className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
              Admin
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
