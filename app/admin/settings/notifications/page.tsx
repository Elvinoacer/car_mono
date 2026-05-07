import React from 'react';

export default function NotificationSettingsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Settings Side Nav */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-28">
          <h2 className="text-2xl font-serif font-bold text-on-surface mb-8">Settings</h2>
          <nav className="flex flex-col space-y-4 border-l border-outline-variant pl-4">
            {[
              { label: 'General', active: false },
              { label: 'Team Access', active: false },
              { label: 'Notifications', active: true },
              { label: 'Integrations', active: false },
              { label: 'Billing', active: false },
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors py-1 text-left ${item.active ? 'text-secondary border-l-2 border-secondary -ml-4.25 pl-4' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <div className="grow space-y-12">
        <header className="border-b border-outline-variant pb-6 mb-8">
          <h1 className="text-6xl font-serif font-bold text-on-surface">Notification Preferences</h1>
          <p className="text-lg text-on-surface-variant mt-4 max-w-2xl">Configure global alert thresholds and define how system events are routed to administrative personnel.</p>
        </header>

        {/* SLA Configuration Grid */}
        <section>
          <h3 className="text-2xl font-serif font-bold text-on-surface mb-6">Service Level Agreements (SLA)</h3>
          <div className="bg-surface-container-lowest border border-outline-variant p-8 space-y-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface block mb-2">Lead Response Threshold</label>
                <p className="text-sm text-on-surface-variant mb-4">Time elapsed before a new web lead is escalated.</p>
                <select className="bg-surface-container-low border border-outline-variant text-on-surface text-sm font-medium py-2 px-4 focus:ring-secondary focus:border-secondary w-full md:w-auto">
                  <option>15 Minutes</option>
                  <option selected>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>4 Hours</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface block mb-2">Escalation Recipients</label>
                <p className="text-sm text-on-surface-variant mb-4">Users notified when SLA thresholds are breached.</p>
                <div className="flex flex-wrap gap-2 border-b border-outline-variant pb-2">
                  {['Management Team', 'Director of Sales'].map((tag, idx) => (
                    <span key={idx} className="bg-surface-container text-on-surface px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      {tag}
                      <button className="hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </span>
                  ))}
                  <button className="ml-auto text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Routing Matrix */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-2xl font-serif font-bold text-on-surface">Event Routing Matrix</h3>
            <button className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-secondary transition-colors">Reset to Defaults</button>
          </div>
          <div className="bg-outline-variant gap-[1px] grid grid-cols-4 w-full border border-outline-variant">
            {/* Table Header */}
            <div className="bg-surface-container-low p-4 col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Event Type</span>
            </div>
            {['Email', 'SMS', 'WhatsApp'].map(type => (
              <div key={type} className="bg-surface-container-low p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{type}</span>
              </div>
            ))}
            
            {/* Table Rows */}
            {[
              { label: 'New Lead Received', channels: [true, true, false] },
              { label: 'New Vehicle Reservation', channels: [true, true, true] },
              { label: 'SLA Threshold Breach', channels: [true, true, false], alert: true },
              { label: 'Accounting Sync Failure', channels: [true, false, false], alert: true },
            ].map((row, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-surface-container-lowest p-4 flex items-center">
                  <span className={`text-sm font-medium ${row.alert ? 'text-error' : 'text-on-surface'}`}>{row.label}</span>
                </div>
                {row.channels.map((active, cIdx) => (
                  <div key={cIdx} className="bg-surface-container-lowest p-4 flex justify-center items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={active} readOnly className="sr-only peer" />
                      <div className={`w-11 h-6 bg-outline-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-secondary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all ${row.alert ? 'peer-checked:bg-error' : 'peer-checked:bg-secondary'}`}></div>
                    </label>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Action Bar */}
        <div className="flex justify-end gap-4 border-t border-outline-variant pt-8 mt-12">
          <button className="border border-outline-variant text-on-surface text-[10px] font-bold uppercase tracking-widest py-4 px-8 hover:border-secondary hover:text-secondary transition-all">
            Discard Changes
          </button>
          <button className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest py-4 px-8 hover:bg-secondary transition-colors">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
