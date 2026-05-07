import AdminHeader from "@/components/admin/AdminHeader";

export default function CommunicationTemplates() {
  return (
    <>
      <AdminHeader title="Communications" />
      <main className="w-full px-gutter max-w-container-max mx-auto py-12 min-h-screen overflow-y-auto">
        <div className="flex justify-between items-end border-b border-outline-variant pb-8 mb-12">
          <div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">
              BROKER EFFICIENCY
            </p>
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Response Templates
            </h1>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-inverse-surface transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Initial Outreach",
              category: "New Inquiry",
              usage: "Used 142 times",
              desc: "Professional introductory response for high-end vehicle inquiries.",
            },
            {
              title: "Financing Follow-up",
              category: "Finance",
              usage: "Used 85 times",
              desc: "Request for additional documentation for credit applications.",
            },
            {
              title: "Reservation Confirmation",
              category: "Transactional",
              usage: "Used 32 times",
              desc: "Post-deposit confirmation and next steps for the client.",
            },
            {
              title: "Trade-In Valuation",
              category: "Valuation",
              usage: "Used 56 times",
              desc: "Formal breakdown of trade-in appraisal and methodology.",
            },
          ].map((template, i) => (
            <div
              key={i}
              className="bg-surface-container-low border border-outline-variant p-8 flex flex-col hover:border-secondary transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-label-sm text-[10px] uppercase tracking-widest bg-outline-variant px-2 py-1">
                  {template.category}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  more_vert
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                {template.title}
              </h3>
              <p className="font-body-md text-on-surface-variant flex-1 leading-relaxed">
                {template.desc}
              </p>
              <div className="mt-8 pt-6 border-t border-outline-variant flex justify-between items-center font-technical-data text-[12px] text-on-surface-variant">
                <span>{template.usage}</span>
                <button className="text-secondary font-label-sm uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                  Edit Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
