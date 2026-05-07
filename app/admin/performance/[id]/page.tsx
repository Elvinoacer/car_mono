import React from 'react';

export default function BrokerPerformancePage() {
  return (
    <div className="space-y-12">
      {/* Header Profile & Controls */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-zinc-200 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Arthur Vance" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-serif font-bold text-zinc-900">Arthur Vance</h1>
              <span className="px-3 py-1 border border-amber-200 rounded-full text-[10px] font-bold text-amber-700 uppercase tracking-widest flex items-center gap-2 bg-amber-50">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Active
              </span>
            </div>
            <p className="text-lg text-zinc-500">Senior Fleet Broker • London Showroom</p>
            <div className="flex items-center gap-6 pt-2">
              <a href="mailto:arthur.vance@monolith.com" className="flex items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-base">mail</span> arthur.vance@monolith.com
              </a>
              <a href="tel:+442079460958" className="flex items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors text-sm font-medium">
                <span className="material-symbols-outlined text-base">phone</span> +44 20 7946 0958
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none bg-white border border-zinc-200 text-zinc-900 text-sm font-medium py-3 pl-4 pr-10 rounded-none focus:outline-none focus:border-zinc-900 transition-colors cursor-pointer">
              <option>Q3 2024</option>
              <option>Q2 2024</option>
              <option>YTD 2024</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">expand_more</span>
          </div>
          <button className="border border-zinc-200 bg-white text-zinc-900 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-amber-500 hover:text-amber-600 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-base">swap_horiz</span> Switch Broker
          </button>
        </div>
      </header>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
        <div className="bg-white p-8 space-y-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-between">
            Total Revenue
            <span className="material-symbols-outlined text-zinc-400 text-base">payments</span>
          </p>
          <p className="text-4xl font-serif font-bold text-zinc-900">£4.2M</p>
          <div className="flex items-center gap-2 text-amber-600 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">trending_up</span> +12% vs Q2
          </div>
        </div>
        <div className="bg-white p-8 space-y-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-between">
            Units Sold
            <span className="material-symbols-outlined text-zinc-400 text-base">directions_car</span>
          </p>
          <p className="text-4xl font-serif font-bold text-zinc-900">28</p>
          <div className="flex items-center gap-2 text-amber-600 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">trending_up</span> +3 units vs Q2
          </div>
        </div>
        <div className="bg-white p-8 space-y-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-between">
            Avg. Deal Value
            <span className="material-symbols-outlined text-zinc-400 text-base">calculate</span>
          </p>
          <p className="text-4xl font-serif font-bold text-zinc-900">£150K</p>
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">horizontal_rule</span> Steady vs Q2
          </div>
        </div>
        <div className="bg-white p-8 space-y-4">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-between">
            SLA Compliance
            <span className="material-symbols-outlined text-zinc-400 text-base">verified</span>
          </p>
          <p className="text-4xl font-serif font-bold text-zinc-900">98.5%</p>
          <div className="flex items-center gap-2 text-red-600 text-xs font-bold">
            <span className="material-symbols-outlined text-sm">trending_down</span> -0.5% vs Target
          </div>
        </div>
      </section>

      {/* Detailed Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 border-b border-zinc-200 pb-4">Revenue Breakdown</h2>
          <div className="space-y-4">
            {[
              { label: 'New Vehicle Sales', value: '£2.8M', percent: 65 },
              { label: 'Certified Pre-Owned', value: '£1.1M', percent: 25 },
              { label: 'Fleet Contracts', value: '£300K', percent: 10 },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600">{item.label}</span>
                  <span className="font-bold text-zinc-900">{item.value}</span>
                </div>
                <div className="h-1 bg-zinc-100 w-full overflow-hidden">
                  <div 
                    className="h-full bg-zinc-900" 
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 border-b border-zinc-200 pb-4">Activity Log</h2>
          <div className="space-y-6">
            {[
              { time: '2h ago', action: 'Closed Deal #D-8942', detail: '2023 Porsche 911 GT3 Touring' },
              { time: '5h ago', action: 'Lead Assigned', detail: 'Inquiry from London Showroom' },
              { time: 'Yesterday', action: 'Valuation Completed', detail: '2021 Ferrari F8 Tributo' },
            ].map((log, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-px bg-zinc-200 relative">
                  <div className="absolute top-2 -left-1 w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <div className="space-y-1 pb-4">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{log.time}</p>
                  <p className="text-sm font-bold text-zinc-900">{log.action}</p>
                  <p className="text-sm text-zinc-500">{log.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
