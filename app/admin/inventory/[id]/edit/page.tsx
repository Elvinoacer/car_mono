import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function CreateVehicle() {
  return (
    <>
      <AdminHeader title="Edit Vehicle" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-4xl mx-auto space-y-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-12 shadow-[40px_40px_80px_rgba(0,0,0,0.03)]">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant pb-4 uppercase tracking-widest">
              Modify Listing
            </h2>
            
            <form className="space-y-12">
              {/* Basic Information */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Year</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="2024" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Make</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="Aston Martin" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Model</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="Vantage V8" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Price (USD)</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="185,000" type="text" />
                </div>
              </section>

              {/* Technical Details */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">VIN / Chassis</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="AMV8-XXXX-XXXX" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Exterior Color</label>
                  <input className="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-technical-data text-technical-data text-primary focus:ring-0 focus:border-primary" placeholder="Xenon Grey" type="text" />
                </div>
              </section>

              {/* Actions */}
              <div className="pt-12 flex gap-4">
                <Link
                  href="/admin/inventory"
                  className="flex-1 bg-primary text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-inverse-surface transition-colors duration-300 text-center"
                >
                  Create Listing
                </Link>
                <Link
                  href="/admin/inventory"
                  className="px-8 border border-outline-variant text-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-300 text-center"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
