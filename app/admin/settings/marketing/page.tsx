import React from 'react';

export default function MarketingSettingsPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-serif font-bold text-zinc-900">Marketing Integrations</h1>
        <p className="text-lg text-zinc-500">
          Centralized configuration for external communications, social syndication, and global metadata. Adjustments here propagate across the entire Monolith digital ecosystem.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Configuration Column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Google Business Profile */}
          <section className="bg-white border border-zinc-200 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-zinc-400">storefront</span>
              <h2 className="text-2xl font-serif font-bold text-zinc-900">Google Business Profile</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="gbp-id">Location ID</label>
                <input 
                  className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors" 
                  id="gbp-id" 
                  type="text" 
                  defaultValue="MNLTH-HQ-8492"
                />
              </div>
              <div className="flex flex-col justify-end gap-3">
                <div className="flex items-center gap-3 h-[54px] px-4 bg-zinc-50 border border-zinc-200">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Status: Synchronized</span>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Presence */}
          <section className="bg-white border border-zinc-200 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-zinc-400">share</span>
              <h2 className="text-2xl font-serif font-bold text-zinc-900">Social Presence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { label: 'Instagram Handle', id: 'social-instagram', value: '@monolithautomotive' },
                { label: 'LinkedIn Company ID', id: 'social-linkedin', value: 'monolith-auto-group' },
                { label: 'YouTube Channel URL', id: 'social-youtube', value: 'youtube.com/c/MonolithExclusive', span: true },
              ].map((field, idx) => (
                <div key={idx} className={`flex flex-col gap-3 ${field.span ? 'md:col-span-2' : ''}`}>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor={field.id}>{field.label}</label>
                  <input 
                    className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors" 
                    id={field.id} 
                    type="text" 
                    defaultValue={field.value}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Default Metadata */}
          <section className="bg-white border border-zinc-200 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-zinc-400">language</span>
              <h2 className="text-2xl font-serif font-bold text-zinc-900">Global Metadata Defaults</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="meta-title">Default SEO Title</label>
                <input 
                  className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors" 
                  id="meta-title" 
                  type="text" 
                  defaultValue="Monolith Automotive | Precision & Heritage"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="meta-desc">Default SEO Description</label>
                <textarea 
                  className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none" 
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
          <section className="bg-white border border-zinc-200 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-zinc-400">forum</span>
              <h2 className="text-2xl font-serif font-bold text-zinc-900">WhatsApp Business</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500" htmlFor="wa-number">Concierge Number</label>
                <input 
                  className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors" 
                  id="wa-number" 
                  type="text" 
                  defaultValue="+1 (555) 019-8234"
                />
              </div>
              <p className="text-xs text-zinc-500">
                Ensure this number matches the verified business account registered in the Meta developer console.
              </p>
              <button className="w-full border border-zinc-200 bg-transparent text-zinc-900 text-[10px] font-bold uppercase tracking-widest py-4 hover:border-amber-500 hover:text-amber-600 transition-all">
                Verify Connection
              </button>
            </div>
          </section>

          {/* Actions */}
          <section className="bg-zinc-900 p-8 flex flex-col justify-between h-full min-h-[240px] text-white">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-amber-500">Pending Changes</h3>
              <p className="text-sm text-zinc-400">
                Review all integration settings carefully. Publishing will immediately update the live environment.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full bg-amber-500 text-zinc-900 text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                Save Configuration
              </button>
              <button className="w-full bg-transparent text-zinc-400 text-[10px] font-bold uppercase tracking-widest py-4 hover:text-white transition-colors">
                Discard Edits
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
