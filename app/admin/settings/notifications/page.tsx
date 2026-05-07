import React from 'react';

export default function NotificationSettingsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Settings Side Nav */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-28">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-8">Settings</h2>
          <nav className="flex flex-col space-y-4 border-l border-zinc-200 pl-4">
            {[
              { label: 'General', active: false },
              { label: 'Team Access', active: false },
              { label: 'Notifications', active: true },
              { label: 'Integrations', active: false },
              { label: 'Billing', active: false },
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors py-1 text-left ${item.active ? 'text-amber-600 border-l-2 border-amber-600 -ml-[17px] pl-4' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <div className="flex-grow space-y-12">
        <header className="border-b border-zinc-200 pb-6 mb-8">
          <h1 className="text-6xl font-serif font-bold text-zinc-900">Notification Preferences</h1>
          <p className="text-lg text-zinc-500 mt-4 max-w-2xl">Configure global alert thresholds and define how system events are routed to administrative personnel.</p>
        </header>

        {/* SLA Configuration Grid */}
        <section>
          <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Service Level Agreements (SLA)</h3>
          <div className="bg-white border border-zinc-200 p-8 space-y-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 block mb-2">Lead Response Threshold</label>
                <p className="text-sm text-zinc-500 mb-4">Time elapsed before a new web lead is escalated.</p>
                <select className="bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm font-medium py-2 px-4 focus:ring-amber-500 focus:border-amber-500 w-full md:w-auto">
                  <option>15 Minutes</option>
                  <option selected>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>4 Hours</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 block mb-2">Escalation Recipients</label>
                <p className="text-sm text-zinc-500 mb-4">Users notified when SLA thresholds are breached.</p>
                <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-2">
                  {['Management Team', 'Director of Sales'].map((tag, idx) => (
                    <span key={idx} className="bg-zinc-100 text-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      {tag}
                      <button className="hover:text-red-600 transition-colors">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </span>
                  ))}
                  <button className="ml-auto text-zinc-400 hover:text-zinc-900 transition-colors">
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
            <h3 className="text-2xl font-serif font-bold text-zinc-900">Event Routing Matrix</h3>
            <button className="text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors">Reset to Defaults</button>
          </div>
          <div className="bg-zinc-200 gap-[1px] grid grid-cols-4 w-full border border-zinc-200">
            {/* Table Header */}
            <div className="bg-zinc-50 p-4 col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Event Type</span>
            </div>
            {['Email', 'SMS', 'WhatsApp'].map(type => (
              <div key={type} className="bg-zinc-50 p-4 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{type}</span>
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
                <div className="bg-white p-4 flex items-center">
                  <span className={`text-sm font-medium ${row.alert ? 'text-red-600' : 'text-zinc-900'}`}>{row.label}</span>
                </div>
                {row.channels.map((active, cIdx) => (
                  <div key={cIdx} className="bg-white p-4 flex justify-center items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={active} readOnly className="sr-only peer" />
                      <div className={`w-11 h-6 bg-zinc-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-amber-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${row.alert ? 'peer-checked:bg-red-600' : 'peer-checked:bg-amber-500'}`}></div>
                    </label>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Action Bar */}
        <div className="flex justify-end gap-4 border-t border-zinc-200 pt-8 mt-12">
          <button className="border border-zinc-200 text-zinc-900 text-[10px] font-bold uppercase tracking-widest py-4 px-8 hover:border-amber-500 hover:text-amber-600 transition-all">
            Discard Changes
          </button>
          <button className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest py-4 px-8 hover:bg-amber-600 transition-colors">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
