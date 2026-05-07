import AdminHeader from "@/components/admin/AdminHeader";

export default function AuditLogs() {
  return (
    <>
      <AdminHeader title="System Audit" />
      <main className="w-full px-gutter max-w-container-max mx-auto py-12 min-h-screen overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-outline-variant pb-8">
          <div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">
              TRANSPARENCY & SECURITY
            </p>
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Global Audit Log
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-outline-variant text-primary px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors">
              Export Audit Trail
            </button>
          </div>
        </div>

        {/* Audit Filters */}
        <div className="flex flex-wrap items-center gap-6 mb-8 p-6 bg-surface-container-low border border-outline-variant">
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
              User
            </label>
            <select className="bg-transparent border-b border-outline-variant border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-primary font-technical-data text-technical-data py-2 px-0 pr-8 min-w-[150px] outline-none">
              <option>All Users</option>
              <option>A. Director</option>
              <option>J. Pierce</option>
              <option>E. Rostova</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">
              Action Category
            </label>
            <select className="bg-transparent border-b border-outline-variant border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-primary font-technical-data text-technical-data py-2 px-0 pr-8 min-w-[150px] outline-none">
              <option>All Actions</option>
              <option>Inventory Edit</option>
              <option>Deal Closure</option>
              <option>Price Adjustment</option>
              <option>Settings Update</option>
            </select>
          </div>
        </div>

        {/* Audit Table */}
        <div className="w-full overflow-x-auto border border-outline-variant bg-surface-container-lowest shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant">
                <th className="py-4 px-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-normal w-1/4">
                  Timestamp
                </th>
                <th className="py-4 px-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-normal w-1/4">
                  Admin User
                </th>
                <th className="py-4 px-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-normal">
                  Action Performed
                </th>
                <th className="py-4 px-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-normal text-right">
                  Severity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant font-technical-data text-technical-data text-primary">
              {[
                {
                  timestamp: "Oct 27, 2024 - 14:32:01",
                  user: "Alexander Director",
                  action: "Global Setting Change: Lead Notification Endpoint Updated",
                  severity: "MEDIUM",
                  severityClass: "text-secondary",
                },
                {
                  timestamp: "Oct 27, 2024 - 11:15:45",
                  user: "Julian Pierce",
                  action: "Deal Closed: #DL-8821 (A. Sterling / 2023 GT3 RS)",
                  severity: "HIGH",
                  severityClass: "text-primary border-primary bg-primary-container p-1",
                },
                {
                  timestamp: "Oct 26, 2024 - 16:20:12",
                  user: "Elena Rostova",
                  action: "Inventory Edit: Price Adjustment ($315k -> $310k) - 2023 GT3 RS",
                  severity: "HIGH",
                  severityClass: "text-primary border-primary bg-primary-container p-1",
                },
                {
                  timestamp: "Oct 26, 2024 - 09:45:33",
                  user: "Alexander Director",
                  action: "User Login: Success (IP: 192.168.1.1)",
                  severity: "LOW",
                  severityClass: "text-on-surface-variant",
                },
              ].map((log, i) => (
                <tr
                  key={i}
                  className="hover:bg-surface-container-low transition-colors duration-150"
                >
                  <td className="py-6 px-6 text-on-surface-variant">
                    {log.timestamp}
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-outline-variant flex items-center justify-center text-[10px] font-bold">
                        {log.user.charAt(0)}
                      </div>
                      {log.user}
                    </div>
                  </td>
                  <td className="py-6 px-6 text-primary max-w-md truncate">
                    {log.action}
                  </td>
                  <td className="py-6 px-6 text-right">
                    <span className={`font-label-sm text-[10px] uppercase tracking-widest ${log.severityClass}`}>
                      {log.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
