import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function LeadDetails() {
  return (
    <>
      <AdminHeader title="Client Profile" />
      <main className="w-full px-gutter max-w-container-max mx-auto py-12 min-h-screen overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/admin/leads"
            className="text-on-surface-variant hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline-lg text-headline-lg text-primary">
            Alexander Sterling
          </h1>
          <span className="ml-4 px-3 py-1 bg-secondary-container text-on-secondary-container border border-secondary font-label-sm text-label-sm uppercase tracking-widest">
            High Intent (A)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1 & 2: Main CRM Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact & Context */}
            <section className="bg-surface-container-low p-8 border border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-1">
                    Email Address
                  </label>
                  <p className="font-body-lg text-primary">
                    a.sterling@private-equity.com
                  </p>
                </div>
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-1">
                    Phone Number
                  </label>
                  <p className="font-body-lg text-primary">+1 (310) 555-0198</p>
                </div>
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-1">
                    Preferred Location
                  </label>
                  <p className="font-body-lg text-primary">Beverly Hills</p>
                </div>
              </div>
              <div className="space-y-6 border-l border-outline-variant pl-8">
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-1">
                    Primary Interest
                  </label>
                  <p className="font-headline-md text-primary">
                    2023 Porsche 911 GT3 RS
                  </p>
                  <Link
                    href="/inventory/porsche-911-gt3-rs"
                    className="text-secondary font-label-sm text-[10px] uppercase tracking-widest mt-2 block hover:text-primary transition-colors"
                  >
                    View Listing Details
                  </Link>
                </div>
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest block mb-1">
                    Budget Range
                  </label>
                  <p className="font-body-lg text-primary">$300,000 - $350,000</p>
                </div>
              </div>
            </section>

            {/* Activity Timeline */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-8">
                Interaction Timeline
              </h2>
              <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant">
                {[
                  {
                    date: "Oct 24, 2024",
                    time: "14:30",
                    event: "Inquiry Received",
                    desc: "Customer submitted interest form for the GT3 RS. High intent markers detected in budget specification.",
                    icon: "inbox",
                  },
                  {
                    date: "Oct 24, 2024",
                    time: "15:45",
                    event: "Initial Outreach",
                    desc: "Broker Julian Pierce initiated introductory call. Customer confirmed availability for showroom visit.",
                    icon: "call",
                  },
                  {
                    date: "Oct 25, 2024",
                    time: "10:00",
                    event: "Status Update: Qualified",
                    desc: "Lead moved to Qualified status after financing pre-approval confirmation.",
                    icon: "verified",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-0 bg-surface border border-outline-variant w-5 h-5 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[12px] text-on-surface-variant">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                      <div className="w-32 shrink-0">
                        <div className="font-technical-data text-technical-data text-primary">
                          {item.date}
                        </div>
                        <div className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                          {item.time}
                        </div>
                      </div>
                      <div>
                        <div className="font-headline-md text-headline-md text-primary text-[18px] mb-2">
                          {item.event}
                        </div>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 3: Sidebar Actions */}
          <aside className="space-y-8">
            <div className="bg-primary text-on-primary p-8 space-y-6">
              <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
                Broker Actions
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-on-primary text-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary-container transition-colors">
                  Log Interaction
                </button>
                <button className="w-full border border-on-primary-container text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:border-on-primary transition-colors">
                  Schedule Call
                </button>
                <button className="w-full border border-on-primary-container text-on-primary py-4 font-label-sm text-label-sm uppercase tracking-widest hover:border-on-primary transition-colors">
                  Send Proposal
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant p-8 space-y-6">
              <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                Internal Notes
              </h3>
              <textarea
                className="w-full h-40 bg-surface border border-outline-variant p-4 font-body-md text-primary outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Add a private note..."
              />
              <button className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors">
                Save Note
              </button>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
