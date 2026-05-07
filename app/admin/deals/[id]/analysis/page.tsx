import React from 'react';

export default function DealAnalysisPage() {
  return (
    <div className="space-y-16">
      {/* Header & Stepper */}
      <div className="space-y-12">
        <div className="flex justify-between items-end border-b border-zinc-200 pb-8">
          <div>
            <h1 className="text-6xl font-serif font-bold text-zinc-900 mb-2">Deal #D-8942</h1>
            <p className="text-xl text-zinc-500">2023 Porsche 911 GT3 Touring</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">Synced to Xero</span>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between w-full relative pt-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-200 -z-10 translate-y-[-50%]"></div>
          <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-amber-500 -z-10 translate-y-[-50%]"></div>
          
          {[
            { label: 'Enquiry', status: 'completed' },
            { label: 'Reserved', status: 'completed' },
            { label: 'Inspection', status: 'completed' },
            { label: 'Closed', status: 'pending' },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 bg-white px-4">
              <div className={`w-4 h-4 rounded-full border ${step.status === 'completed' ? 'border-amber-500 bg-amber-500' : 'border-zinc-200 bg-white'} flex items-center justify-center`}>
                {step.status === 'completed' && <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${step.status === 'completed' ? 'text-zinc-900' : 'text-zinc-400'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Financials */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Financial Breakdown Table */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Financial Breakdown</h2>
            <div className="border border-zinc-200 bg-zinc-200 gap-[1px] flex flex-col">
              {[
                { label: 'Sale Price', value: '£245,000.00', type: 'positive' },
                { label: 'Purchase Cost', value: '-£190,000.00', type: 'negative' },
                { label: 'Reconditioning', value: '-£3,500.00', type: 'negative' },
                { label: 'Floorplan Interest', value: '-£1,200.00', type: 'negative' },
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white">
                  <span className="text-sm font-medium text-zinc-500">{row.label}</span>
                  <span className={`text-sm font-bold ${row.type === 'negative' ? 'text-red-600' : 'text-zinc-900'}`}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-6 bg-zinc-50 mt-[1px]">
                <span className="text-xl font-serif font-bold text-zinc-900">Gross Profit</span>
                <span className="text-xl font-serif font-bold text-amber-600">£50,300.00</span>
              </div>
            </div>
          </section>

          {/* Vehicle Info Card */}
          <section className="border border-zinc-200 p-1 bg-white relative group">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                alt="Vehicle" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <div className="p-6 flex justify-between items-end border-t border-zinc-200 mt-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">VIN</span>
                <span className="text-sm font-bold text-zinc-900">WP0ZZZ99ZNS2XXXXX</span>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:text-zinc-900 transition-colors flex items-center gap-1">
                View Specs <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Commission & Actions */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Commission Section */}
          <section className="border border-zinc-200 p-8 bg-zinc-50 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Commission</h2>
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">Salesperson</span>
                <span className="text-lg text-zinc-900">Julian Vance</span>
              </div>
              <div className="flex flex-col gap-[1px] bg-zinc-200 border border-zinc-200 mb-8">
                <div className="flex justify-between items-center p-3 bg-white">
                  <span className="text-xs font-medium text-zinc-500">Rate (Tier 2)</span>
                  <span className="text-xs font-bold text-zinc-900">5.0%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white">
                  <span className="text-xs font-medium text-zinc-500">Basis (Gross)</span>
                  <span className="text-xs font-bold text-zinc-900">£50,300.00</span>
                </div>
              </div>
              <div className="border-t border-zinc-200 pt-6 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Final Payout</span>
                <span className="text-2xl font-serif font-bold text-zinc-900">£2,515.00</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-8">
              <button className="w-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                Approve Commission
                <span className="material-symbols-outlined text-base">check_circle</span>
              </button>
              <button className="w-full border border-zinc-200 text-zinc-900 text-[10px] font-bold uppercase tracking-widest py-4 hover:border-amber-500 hover:text-amber-600 transition-colors flex items-center justify-center gap-2">
                Force Accounting Sync
                <span className="material-symbols-outlined text-base">sync</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
