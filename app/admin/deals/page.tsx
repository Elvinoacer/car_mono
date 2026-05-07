import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminDeals() {
  const deals = [
    { client: "R. Vanderbilt", vehicle: "2024 DB12", value: "$310,000", status: "Closing" },
    { client: "L. Hamilton", vehicle: "2023 720S", value: "$285,000", status: "Financing" },
    { client: "D. Ricciardo", vehicle: "2022 Huracan", value: "$245,000", status: "Completed" },
  ];

  return (
    <>
      <AdminHeader title="Deals & Transactions" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant">
              <div className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Pending Value</div>
              <div className="font-headline-md text-headline-md text-primary">$1.8M</div>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant">
              <div className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Avg. Deal Cycle</div>
              <div className="font-headline-md text-headline-md text-primary">14 Days</div>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant">
              <div className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Conversion Rate</div>
              <div className="font-headline-md text-headline-md text-primary">8.4%</div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline-variant">
            <table className="w-full text-left font-technical-data text-technical-data border-collapse">
              <thead>
                <tr className="bg-surface text-on-surface-variant border-b border-outline-variant">
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Client</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Asset</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Value</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {deals.map((deal, i) => (
                  <tr key={i} className="hover:bg-surface transition-colors duration-200">
                    <td className="p-4 text-primary">{deal.client}</td>
                    <td className="p-4 text-on-surface-variant">{deal.vehicle}</td>
                    <td className="p-4 text-primary">{deal.value}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold border ${deal.status === "Completed" ? "bg-secondary text-on-secondary" : "border-outline-variant"}`}>
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
