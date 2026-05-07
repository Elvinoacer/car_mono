import React from "react";

export default function MarketingSettingsPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-serif font-bold text-on-surface">
          Marketing Integrations
        </h1>
        <p className="text-lg text-on-surface-variant">
          Centralized configuration for external communications, social
          syndication, and global metadata. Adjustments here propagate across
          the entire Monolith digital ecosystem.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Configuration Column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Google Business Profile */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-on-surface-variant">
                storefront
              </span>
              <h2 className="text-2xl font-serif font-bold text-on-surface">
                Google Business Profile
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                  htmlFor="gbp-id"
                >
                  Location ID
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-primary transition-colors"
                  id="gbp-id"
                  type="text"
                  defaultValue="MNLTH-HQ-8492"
                />
              </div>
              <div className="flex flex-col justify-end gap-3">
                <div className="flex items-center gap-3 h-13.5 px-4 bg-surface-container-low border border-outline-variant">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">
                    Status: Synchronized
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Presence */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-on-surface-variant">
                share
              </span>
              <h2 className="text-2xl font-serif font-bold text-on-surface">
                Social Presence
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  label: "Instagram Handle",
                  id: "social-instagram",
                  value: "@monolithautomotive",
                },
                {
                  label: "LinkedIn Company ID",
                  id: "social-linkedin",
                  value: "monolith-auto-group",
                },
                {
                  label: "YouTube Channel URL",
                  id: "social-youtube",
                  value: "youtube.com/c/MonolithExclusive",
                  span: true,
                },
              ].map((field, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-3 ${field.span ? "md:col-span-2" : ""}`}
                >
                  <label
                    className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-primary transition-colors"
                    id={field.id}
                    type="text"
                    defaultValue={field.value}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Default Metadata */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-on-surface-variant">
                language
              </span>
              <h2 className="text-2xl font-serif font-bold text-on-surface">
                Global Metadata Defaults
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                  htmlFor="meta-title"
                >
                  Default SEO Title
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-primary transition-colors"
                  id="meta-title"
                  type="text"
                  defaultValue="Monolith Automotive | Precision & Heritage"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                  htmlFor="meta-desc"
                >
                  Default SEO Description
                </label>
                <textarea
                  className="w-full bg-surface-container-low border border-outline-variant p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                  id="meta-desc"
                  rows={3}
                  defaultValue="Explore our curated collection of high-performance vehicles. Monolith Automotive offers an uncompromising standard of luxury and mechanical excellence."
                />
              </div>
            </div>
          </section>
        </div>

        {/* Side Configuration Column */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* WhatsApp Business */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-on-surface-variant">
                forum
              </span>
              <h2 className="text-2xl font-serif font-bold text-on-surface">
                WhatsApp Business
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label
                  className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant"
                  htmlFor="wa-number"
                >
                  Concierge Number
                </label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-primary transition-colors"
                  id="wa-number"
                  type="text"
                  defaultValue="+1 (555) 019-8234"
                />
              </div>
              <p className="text-xs text-on-surface-variant">
                Ensure this number matches the verified business account
                registered in the Meta developer console.
              </p>
              <button className="w-full border border-outline-variant bg-transparent text-on-surface text-[10px] font-bold uppercase tracking-widest py-4 hover:border-secondary hover:text-secondary transition-all">
                Verify Connection
              </button>
            </div>
          </section>

          {/* Actions */}
          <section className="bg-primary p-8 flex flex-col justify-between h-full min-h-60 text-on-primary">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-secondary">
                Pending Changes
              </h3>
              <p className="text-sm text-on-primary-container">
                Review all integration settings carefully. Publishing will
                immediately update the live environment.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest py-4 hover:opacity-90 transition-colors">
                Save Configuration
              </button>
              <button className="w-full bg-transparent text-on-primary-container text-[10px] font-bold uppercase tracking-widest py-4 hover:text-on-primary transition-colors">
                Discard Edits
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
