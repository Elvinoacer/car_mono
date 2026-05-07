import React from 'react';

export default function SEOHealthPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Admin Console</p>
          <h1 className="text-6xl font-serif font-bold text-zinc-900 mb-6">SEO Health Dashboard</h1>
          <p className="text-lg text-zinc-500">Monitor and validate technical SEO requirements across the active inventory portfolio. Ensure schema markup and canonical routing meet structural integrity standards.</p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-8 py-4 flex items-center gap-3 hover:bg-amber-600 transition-colors">
            <span className="material-symbols-outlined text-base">troubleshoot</span>
            Validate All
          </button>
        </div>
      </header>

      {/* Metrics Overview Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200 shadow-sm">
        {[
          { label: 'Published Vehicles', value: '142', alert: false },
          { label: 'Schema Valid', value: '138', sub: '97%', alert: false },
          { label: 'OG Tags Missing', value: '4', alert: true },
          { label: 'Canonical Issues', value: '0', alert: false },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 flex flex-col justify-between min-h-[160px]">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{item.label}</p>
            <div className="flex items-baseline gap-2">
              <p className={`text-4xl font-serif font-bold ${item.alert ? 'text-red-600' : 'text-zinc-900'}`}>{item.value}</p>
              {item.sub && <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{item.sub}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Data Table */}
      <div className="bg-white border border-zinc-200 shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-1 bg-zinc-50 border-b border-zinc-200 py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <div className="col-span-4">Vehicle Identity</div>
          <div className="col-span-2 text-center">Schema Valid</div>
          <div className="col-span-2 text-center">OG Tags</div>
          <div className="col-span-2 text-center">Canonical</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {[
            { name: 'Porsche 911 GT3 RS', year: '2023', status: 'valid', og: true, canonical: true },
            { name: 'Aston Martin DBS', year: '2022', status: 'error', og: false, canonical: true },
            { name: 'Mercedes-AMG G 63', year: '2024', status: 'valid', og: true, canonical: true },
            { name: 'Ferrari F8 Tributo', year: '2021', status: 'valid', og: true, canonical: true },
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-1 items-center border-b border-zinc-100 py-4 px-6 hover:bg-zinc-50 transition-colors">
              <div className="col-span-4 text-sm font-medium text-zinc-900">
                <span className="text-zinc-400 mr-2">{row.year}</span> {row.name}
              </div>
              <div className="col-span-2 flex justify-center">
                <div className={`border px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${row.status === 'valid' ? 'border-zinc-200 text-zinc-900' : 'border-red-200 text-red-600 bg-red-50'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'valid' ? 'bg-amber-500' : 'bg-red-500'}`}></div> 
                  {row.status === 'valid' ? 'Valid' : 'Error'}
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <span className={`material-symbols-outlined ${row.og ? 'text-zinc-400' : 'text-red-500'}`}>
                  {row.og ? 'check_circle' : 'error'}
                </span>
              </div>
              <div className="col-span-2 flex justify-center">
                <span className={`material-symbols-outlined ${row.canonical ? 'text-zinc-400' : 'text-red-500'}`}>
                  {row.canonical ? 'check_circle' : 'error'}
                </span>
              </div>
              <div className="col-span-2 flex justify-end gap-4">
                <button className="text-zinc-400 hover:text-amber-600 transition-colors" title="Google Rich Results Test">
                  <span className="material-symbols-outlined text-base">plagiarism</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table Pagination */}
        <div className="py-6 px-6 flex justify-between items-center border-t border-zinc-100 bg-zinc-50/50">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Showing 1-4 of 142</span>
          <div className="flex gap-4">
            <button className="text-zinc-300 hover:text-zinc-900 transition-colors disabled:opacity-50">
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
