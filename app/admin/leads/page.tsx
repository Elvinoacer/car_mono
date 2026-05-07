import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLeads() {
  const leads = [
    { name: "Ethan Sterling", vehicle: "2024 V-Series Blackwing", date: "2024-05-07", status: "New" },
    { name: "Marco Rossi", vehicle: "2023 GT3 RS", date: "2024-05-06", status: "Contacted" },
    { name: "Julian Thorne", vehicle: "2024 G63 AMG", date: "2024-05-05", status: "Negotiating" },
    { name: "Sarah Jenkins", vehicle: "2024 Vantage GT3", date: "2024-05-04", status: "Qualified" },
  ];

  return (
    <>
      <AdminHeader title="Active Inquiries & Leads" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max mx-auto">
          <div className="bg-surface-container-lowest border border-outline-variant">
            <table className="w-full text-left font-technical-data text-technical-data border-collapse">
              <thead>
                <tr className="bg-surface text-on-surface-variant border-b border-outline-variant">
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Client Name</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Interest</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Received</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Status</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-surface transition-colors duration-200">
                    <td className="p-4 text-primary">{lead.name}</td>
                    <td className="p-4 text-on-surface-variant">{lead.vehicle}</td>
                    <td className="p-4 text-on-surface-variant">{lead.date}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-[10px] uppercase font-bold border border-outline-variant">
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                        open_in_new
                      </button>
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
