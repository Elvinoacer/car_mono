import AdminHeader from "@/components/admin/AdminHeader";

export default function GoogleMerchantAdmin() {
  return (
    <>
      <AdminHeader title="Google Merchant Center" />
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-12 flex flex-col gap-12 overflow-y-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant pb-8">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Admin Console &gt; Integrations
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Google Merchant Center Feed
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Manage product data synchronization for Google Shopping campaigns.
              Review compliance issues and generate updated XML feeds for global
              distribution.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-surface text-primary border border-outline-variant font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 hover:border-secondary hover:text-secondary transition-colors duration-300 rounded-none flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                settings
              </span>
              Feed Settings
            </button>
            <button className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 hover:opacity-90 transition-opacity duration-300 rounded-none flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                sync
              </span>
              Generate Feed
            </button>
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status Card */}
          <div className="bg-surface-container-lowest shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 flex flex-col gap-6 border border-outline-variant col-span-1 md:col-span-2">
            <div className="flex justify-between items-start">
              <h2 className="font-headline-md text-headline-md text-primary">
                Feed Status
              </h2>
              <span className="px-3 py-1 border border-outline-variant font-label-sm text-label-sm text-secondary uppercase tracking-widest flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant">
              <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Last Generated
                </span>
                <span className="font-technical-data text-technical-data text-primary text-lg">
                  Oct 24, 2024 - 14:32 UTC
                </span>
              </div>
              <div className="bg-surface-container-lowest p-6 flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Total Vehicles
                </span>
                <span className="font-technical-data text-technical-data text-primary text-lg">
                  142
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Feed URL
              </span>
              <div className="flex items-center gap-0">
                <input
                  className="bg-surface-container w-full p-3 font-technical-data text-technical-data text-primary border border-outline-variant focus:ring-0 focus:border-outline-variant outline-none"
                  readOnly
                  type="text"
                  defaultValue="https://api.monolith.auto/feeds/gmc/v1/inventory.xml"
                />
                <button className="bg-surface-container p-3 border-y border-r border-outline-variant text-on-surface-variant hover:text-primary transition-colors h-[46px] flex items-center justify-center">
                  <span className="material-symbols-outlined">content_copy</span>
                </button>
              </div>
            </div>
          </div>

          {/* Compliance Summary */}
          <div className="bg-surface-container-lowest shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 flex flex-col gap-6 border border-outline-variant col-span-1">
            <h2 className="font-headline-md text-headline-md text-primary">
              Compliance
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "Missing VIN", value: "2 Vehicles", icon: "warning", color: "text-secondary" },
                { label: "Missing Images", value: "0 Vehicles", icon: "warning", color: "text-secondary" },
                { label: "Price Mismatch", value: "1 Vehicle", icon: "error", color: "text-error" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-outline-variant">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                    <span className={`material-symbols-outlined ${item.color}`} style={{ fontSize: "18px" }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  <span className="font-technical-data text-technical-data text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-auto text-secondary font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              View Compliance Report
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Feed Preview Table */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md text-primary">
              Feed Preview (Top 10)
            </h2>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Showing rows 1-10
            </span>
          </div>
          <div className="overflow-x-auto border border-outline-variant shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-surface-container-lowest">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant">
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    ID (VIN)
                  </th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Title
                  </th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Condition
                  </th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Price
                  </th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Availability
                  </th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="font-technical-data text-technical-data text-primary">
                {[
                  { vin: "WBA0M123456789012", title: "2023 BMW M8 Competition Gran Coupe", condition: "New", price: "$145,000.00 USD", availability: "in_stock", status: "check_circle", color: "text-secondary" },
                  { vin: "WP0AB2A9XMS123456", title: "2021 Porsche 911 Turbo S", condition: "Used", price: "$210,500.00 USD", availability: "in_stock", status: "check_circle", color: "text-secondary" },
                  { vin: "ZFF12345678901234", title: "2022 Ferrari Roma", condition: "Used", price: "$235,000.00 USD", availability: "in_stock", status: "error", color: "text-error" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="p-4">{row.vin}</td>
                    <td className="p-4">{row.title}</td>
                    <td className="p-4 text-on-surface-variant">{row.condition}</td>
                    <td className="p-4">{row.price}</td>
                    <td className="p-4">{row.availability}</td>
                    <td className="p-4">
                      <span className={`material-symbols-outlined ${row.color}`} style={{ fontSize: "18px" }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button className="border-b border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300">
              Load Full Preview
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
