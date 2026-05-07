import Link from "next/link";

export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="h-20 bg-surface flex items-center justify-between px-gutter border-b border-outline-variant shrink-0">
      <div>
        <h1 className="font-headline-md text-headline-md text-primary">{title}</h1>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/admin/notifications" className="relative group">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer group-hover:text-primary transition-colors duration-200">
            notifications
          </span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border border-surface"></span>
        </Link>
        <div className="w-[1px] h-6 bg-outline-variant"></div>
        <Link 
          href="/admin/inventory/create"
          className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 flex items-center gap-2 hover:bg-inverse-surface transition-colors duration-300"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add Vehicle
        </Link>
      </div>
    </header>
  );
}
