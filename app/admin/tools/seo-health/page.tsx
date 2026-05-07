import React from "react";

export default function SEOHealthPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Admin Console
          </p>
          <h1 className="text-6xl font-serif font-bold text-on-surface mb-6">
            SEO Health Dashboard
          </h1>
          <p className="text-lg text-on-surface-variant">
            Monitor and validate technical SEO requirements across the active
            inventory portfolio. Ensure schema markup and canonical routing meet
            structural integrity standards.
          </p>
        </div>
        <div className="shrink-0">
          <button className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-8 py-4 flex items-center gap-3 hover:bg-secondary transition-colors">
            <span className="material-symbols-outlined text-base">
              troubleshoot
            </span>
            Validate All
          </button>
        </div>
      </header>

      {/* Metrics Overview Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-outline-variant border border-outline-variant shadow-sm">
        {[
          { label: "Published Vehicles", value: "142", alert: false },
          { label: "Schema Valid", value: "138", sub: "97%", alert: false },
          { label: "OG Tags Missing", value: "4", alert: true },
          { label: "Canonical Issues", value: "0", alert: false },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-40"
          >
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              {item.label}
            </p>
            <div className="flex items-baseline gap-2">
              <p
                className={`text-4xl font-serif font-bold ${item.alert ? "text-error" : "text-on-surface"}`}
              >
                {item.value}
              </p>
              {item.sub && (
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                  {item.sub}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Data Table */}
      <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-1 bg-surface-container-low border-b border-outline-variant py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          <div className="col-span-4">Vehicle Identity</div>
          <div className="col-span-2 text-center">Schema Valid</div>
          <div className="col-span-2 text-center">OG Tags</div>
          <div className="col-span-2 text-center">Canonical</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {[
            {
              name: "Porsche 911 GT3 RS",
              year: "2023",
              status: "valid",
              og: true,
              canonical: true,
            },
            {
              name: "Aston Martin DBS",
              year: "2022",
              status: "error",
              og: false,
              canonical: true,
            },
            {
              name: "Mercedes-AMG G 63",
              year: "2024",
              status: "valid",
              og: true,
              canonical: true,
            },
            {
              name: "Ferrari F8 Tributo",
              year: "2021",
              status: "valid",
              og: true,
              canonical: true,
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 gap-1 items-center border-b border-outline-variant py-4 px-6 hover:bg-surface-container-low transition-colors"
            >
              <div className="col-span-4 text-sm font-medium text-on-surface">
                <span className="text-on-surface-variant mr-2">{row.year}</span>{" "}
                {row.name}
              </div>
              <div className="col-span-2 flex justify-center">
                <div
                  className={`border px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${row.status === "valid" ? "border-outline-variant text-on-surface" : "border-error-container text-error bg-error-container"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${row.status === "valid" ? "bg-secondary" : "bg-error"}`}
                  ></div>
                  {row.status === "valid" ? "Valid" : "Error"}
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <span
                  className={`material-symbols-outlined ${row.og ? "text-on-surface-variant" : "text-error"}`}
                >
                  {row.og ? "check_circle" : "error"}
                </span>
              </div>
              <div className="col-span-2 flex justify-center">
                <span
                  className={`material-symbols-outlined ${row.canonical ? "text-on-surface-variant" : "text-error"}`}
                >
                  {row.canonical ? "check_circle" : "error"}
                </span>
              </div>
              <div className="col-span-2 flex justify-end gap-4">
                <button
                  className="text-on-surface-variant hover:text-secondary transition-colors"
                  title="Google Rich Results Test"
                >
                  <span className="material-symbols-outlined text-base">
                    plagiarism
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table Pagination */}
        <div className="py-6 px-6 flex justify-between items-center border-t border-outline-variant bg-surface-container-low/50">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            Showing 1-4 of 142
          </span>
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50">
              <span className="material-symbols-outlined text-base">
                chevron_left
              </span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
