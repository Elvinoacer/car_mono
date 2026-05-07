import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <AdminHeader title="Overview" />
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max mx-auto space-y-gutter">
          {/* KPI Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Total Inventory */}
            <Link href="/admin/inventory" className="bg-surface-container-lowest p-6 border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-40 hover:border-primary transition-colors group">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                  Total Inventory
                </span>
                <span className="material-symbols-outlined text-secondary">
                  directions_car
                </span>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">
                  142
                </div>
                <div className="font-technical-data text-[12px] text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>{" "}
                  12% vs last month
                </div>
              </div>
            </Link>
            {/* New Leads */}
            <Link href="/admin/leads" className="bg-surface-container-lowest p-6 border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-40 hover:border-primary transition-colors group">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                  New Leads
                </span>
                <span className="material-symbols-outlined text-secondary">
                  group_add
                </span>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">
                  28
                </div>
                <div className="font-technical-data text-[12px] text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>{" "}
                  5% vs last month
                </div>
              </div>
            </Link>
            {/* Active Reservations */}
            <Link href="/admin/reservations" className="bg-surface-container-lowest p-6 border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between h-40 hover:border-primary transition-colors group">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                  Active Reservations
                </span>
                <span className="material-symbols-outlined text-secondary">
                  event_seat
                </span>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">
                  15
                </div>
                <div className="font-technical-data text-[12px] text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    remove
                  </span>{" "}
                  No change
                </div>
              </div>
            </Link>
            {/* Gross Revenue */}
            <div className="bg-primary text-on-primary p-6 shadow-[20px_20px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between h-40">
              <div className="flex items-start justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
                  Gross Revenue (YTD)
                </span>
                <span className="material-symbols-outlined text-secondary-fixed-dim">
                  account_balance_wallet
                </span>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-primary">
                  $4.2M
                </div>
                <div className="font-technical-data text-[12px] text-on-primary-container mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>{" "}
                  18% vs last year
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Revenue Bar Chart (Simulated) */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-8 border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline-md text-headline-md text-primary">
                  Revenue Pipeline
                </h2>
                <select className="bg-surface border border-outline-variant text-on-surface font-technical-data text-technical-data px-4 py-2 focus:ring-secondary focus:border-secondary outline-none">
                  <option>Last 12 Months</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="flex-1 flex items-end gap-2 h-64 mt-auto">
                {[30, 45, 40, 60, 55, 70, 85, 65, 90, 75, 80, 100].map(
                  (height, i) => (
                    <div
                      key={i}
                      style={{ height: `${height}%` }}
                      className={`flex-1 transition-colors duration-300 relative group cursor-pointer ${
                        i === 11 ? "bg-primary" : "bg-surface-variant hover:bg-secondary"
                      }`}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-technical-data text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {height * 5}k
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-between mt-4 font-technical-data text-[10px] text-on-surface-variant uppercase tracking-widest border-t border-outline-variant pt-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Inventory Status Donut (Simulated) */}
            <div className="flex flex-col gap-gutter">
              <div className="bg-surface-container-lowest p-8 border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)] flex-1 flex flex-col">
                <h2 className="font-headline-md text-headline-md text-primary mb-6">
                  Inventory Status
                </h2>
                <div className="flex-1 flex items-center justify-center relative my-4">
                  <div className="w-32 h-32 rounded-full border-[16px] border-surface-variant relative flex items-center justify-center">
                    <div className="absolute inset-[-16px] rounded-full border-[16px] border-transparent border-t-primary border-r-primary transform rotate-45"></div>
                    <div className="text-center">
                      <div className="font-headline-md text-headline-md text-primary">
                        142
                      </div>
                      <div className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                        Total
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mt-auto border-t border-outline-variant pt-6">
                  <div className="flex justify-between items-center font-technical-data text-technical-data">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-primary rounded-none"></span>{" "}
                      <span className="text-on-surface-variant">Available</span>
                    </div>
                    <span className="text-primary">85</span>
                  </div>
                  <div className="flex justify-between items-center font-technical-data text-technical-data">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-secondary rounded-none"></span>{" "}
                      <span className="text-on-surface-variant">Reserved</span>
                    </div>
                    <span className="text-primary">42</span>
                  </div>
                  <div className="flex justify-between items-center font-technical-data text-technical-data">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-surface-variant rounded-none"></span>{" "}
                      <span className="text-on-surface-variant">In Transit</span>
                    </div>
                    <span className="text-primary">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Leads Table */}
          <div className="bg-surface-container-lowest border border-outline-variant shadow-[20px_20px_40px_rgba(0,0,0,0.02)]">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface">
              <h2 className="font-headline-md text-headline-md text-primary">
                Active Inquiries
              </h2>
              <Link href="/admin/leads" className="font-label-sm text-label-sm uppercase tracking-widest text-primary border border-outline-variant px-4 py-2 hover:border-secondary hover:text-secondary transition-colors duration-300">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-technical-data text-technical-data border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest text-on-surface-variant border-b border-outline-variant">
                    <th className="p-4 font-normal text-[12px] uppercase tracking-widest w-1/4">
                      Client
                    </th>
                    <th className="p-4 font-normal text-[12px] uppercase tracking-widest w-1/4">
                      Vehicle of Interest
                    </th>
                    <th className="p-4 font-normal text-[12px] uppercase tracking-widest w-1/6">
                      Status
                    </th>
                    <th className="p-4 font-normal text-[12px] uppercase tracking-widest w-1/6">
                      SLA
                    </th>
                    <th className="p-4 font-normal text-[12px] uppercase tracking-widest text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
                  {[
                    {
                      name: "E. Sterling",
                      email: "est**@gmail.com",
                      vehicle: "2024 V-Series Blackwing",
                      status: "New",
                      statusClass: "bg-secondary-container text-on-secondary-container border-secondary",
                      sla: "2h",
                      slaClass: "text-error",
                      warning: true,
                    },
                    {
                      name: "M. Rossi",
                      email: "m.r**@corp.com",
                      vehicle: "2023 GT3 RS",
                      status: "In Progress",
                      statusClass: "bg-surface-variant text-on-surface-variant border-outline-variant",
                      sla: "12h",
                      slaClass: "text-on-surface-variant",
                    },
                    {
                      name: "J. Thorne",
                      email: "jth**@private.com",
                      vehicle: "2024 G63 AMG",
                      status: "Scheduled Call",
                      statusClass: "bg-surface-variant text-on-surface-variant border-outline-variant",
                      sla: "24h",
                      slaClass: "text-on-surface-variant",
                    },
                  ].map((lead, i) => (
                    <tr
                      key={i}
                      className="hover:bg-surface transition-colors duration-200"
                    >
                      <td className="p-4">
                        <div className="text-primary">{lead.name}</div>
                        <div className="text-[12px] text-on-surface-variant font-normal">
                          {lead.email}
                        </div>
                      </td>
                      <td className="p-4 text-on-surface-variant">
                        {lead.vehicle}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 text-[10px] uppercase tracking-widest border font-bold ${lead.statusClass}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className={`p-4 font-bold flex items-center gap-1 ${lead.slaClass}`}>
                        {lead.warning && <span className="material-symbols-outlined text-[16px]">warning</span>}
                        {lead.sla}
                      </td>
                      <td className="p-4 text-right">
                        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                          chevron_right
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
