import AdminHeader from "@/components/admin/AdminHeader";

export default function LocalSEOAdmin() {
  return (
    <>
      <AdminHeader title="Location SEO Management" />
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding overflow-y-auto">
        {/* Header Section */}
        <div className="mb-12 flex justify-between items-end border-b border-outline-variant pb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
              Location SEO Management
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Manage the public visibility and SEO metadata for all global
              Monolith showrooms. Ensure technical accuracy before publishing
              landing pages.
            </p>
          </div>
          <button className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 uppercase tracking-widest hover:bg-secondary transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Location
          </button>
        </div>

        {/* Technical Admin Table Grid */}
        <div className="bg-surface-container-low border border-outline-variant shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-px bg-outline-variant border-b border-outline-variant">
            <div className="col-span-4 bg-surface p-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Showroom Name
              </span>
            </div>
            <div className="col-span-3 bg-surface p-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                City / Region
              </span>
            </div>
            <div className="col-span-2 bg-surface p-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Status
              </span>
            </div>
            <div className="col-span-2 bg-surface p-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Visibility
              </span>
            </div>
            <div className="col-span-1 bg-surface p-4 text-right">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Edit
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-px bg-outline-variant">
            {[
              { name: "Monolith Beverly Hills", city: "Los Angeles, CA", status: "Active", published: true },
              { name: "Monolith Miami Design District", city: "Miami, FL", status: "Active", published: true },
              { name: "Monolith Mayfair", city: "London, UK", status: "Coming Soon", published: false },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-px group hover:bg-surface-variant transition-colors duration-200"
              >
                <div className="col-span-4 bg-surface group-hover:bg-surface-container-low p-4 flex items-center">
                  <span className="font-technical-data text-technical-data text-primary">
                    {row.name}
                  </span>
                </div>
                <div className="col-span-3 bg-surface group-hover:bg-surface-container-low p-4 flex items-center">
                  <span className="font-body-md text-body-md text-on-surface">
                    {row.city}
                  </span>
                </div>
                <div className="col-span-2 bg-surface group-hover:bg-surface-container-low p-4 flex items-center">
                  <span className={`inline-block px-3 py-1 border border-outline-variant font-label-sm text-label-sm uppercase tracking-widest ${row.status === "Active" ? "text-secondary" : "text-on-surface-variant"}`}>
                    {row.status}
                  </span>
                </div>
                <div className="col-span-2 bg-surface group-hover:bg-surface-container-low p-4 flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked={row.published}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-surface-variant border border-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-container"></div>
                    <span className={`ml-3 font-label-sm text-label-sm uppercase tracking-widest ${row.published ? "text-on-surface" : "text-on-surface-variant"}`}>
                      {row.published ? "Published" : "Draft"}
                    </span>
                  </label>
                </div>
                <div className="col-span-1 bg-surface group-hover:bg-surface-container-low p-4 flex items-center justify-end">
                  <button className="text-on-surface-variant hover:text-secondary transition-colors duration-200">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
