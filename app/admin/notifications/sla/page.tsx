import React from 'react';

export default function SLAMonitoringPage() {
  return (
    <div className="space-y-12">
      <header className="flex justify-between items-end border-b border-outline-variant pb-8">
        <div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group mb-4">
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Notifications</span>
          </button>
          <h1 className="text-4xl font-serif font-bold text-on-surface">SLA Monitoring</h1>
        </div>
        <button className="bg-surface-container-low border border-outline-variant text-on-surface text-[10px] font-bold px-4 py-2 hover:border-secondary hover:text-secondary transition-all uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-base">download</span>
          Export Report
        </button>
      </header>

      {/* Summary Dashboard (Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Critical Card */}
        <div className="bg-error-container border border-error-container p-8 flex flex-col gap-6 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">warning</span>
          </div>
          <div className="flex items-center gap-2 text-error">
            <span className="material-symbols-outlined text-base">timer_off</span>
            <h2 className="text-[10px] font-bold uppercase tracking-widest">Breached SLA</h2>
          </div>
          <div>
            <span className="text-6xl font-serif font-bold text-error">12</span>
            <p className="text-sm text-on-error-container/80 mt-2 font-medium">Leads requiring immediate escalation</p>
          </div>
        </div>

        {/* Approaching Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col gap-6 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">schedule</span>
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-base">hourglass_empty</span>
            <h2 className="text-[10px] font-bold uppercase tracking-widest">Approaching Limit</h2>
          </div>
          <div>
            <span className="text-6xl font-serif font-bold text-on-surface">28</span>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">&lt; 15 mins to breach</p>
          </div>
        </div>

        {/* Team Avg Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col gap-6 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">speed</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-base">avg_time</span>
            <h2 className="text-[10px] font-bold uppercase tracking-widest">Avg Response Time</h2>
          </div>
          <div>
            <span className="text-6xl font-serif font-bold text-on-surface">14<span className="text-2xl ml-1">m</span></span>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">Target: &lt; 30 mins</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Critical Leads List */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant pb-4">
            <h3 className="text-2xl font-serif font-bold text-on-surface">Critical Escalations</h3>
            <div className="flex items-center gap-2 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
              <span>Sort by:</span>
              <select className="bg-transparent border-none p-0 text-on-surface font-bold uppercase tracking-widest focus:ring-0 cursor-pointer">
                <option>Time Overdue</option>
                <option>Value</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 'INQUIRY-90210', car: '2024 Monolith Phantom Series II', agent: 'J. Smith', time: '-42m', critical: true },
              { id: 'INQUIRY-88421', car: '2023 Monolith Ghost Black Badge', agent: 'A. Davis', time: '-18m', critical: true },
              { id: 'INQUIRY-77309', car: '2024 Monolith Cullinan', agent: 'M. Chen', time: '08m remaining', critical: false },
            ].map((lead, idx) => (
              <div key={idx} className={`bg-surface-container-lowest border p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm ${lead.critical ? 'border-error-container' : 'border-outline-variant'}`}>
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 shrink-0 flex items-center justify-center ${lead.critical ? 'bg-error-container text-error' : 'bg-surface-container-low text-secondary'}`}>
                    <span className="material-symbols-outlined">{lead.critical ? 'priority_high' : 'schedule'}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest">{lead.id}</h4>
                    <p className="text-sm text-on-surface-variant font-medium">{lead.car}</p>
                    <div className="flex items-center gap-4 pt-2">
                      <span className="px-2 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Assigned: {lead.agent}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${lead.critical ? 'text-error' : 'text-secondary'}`}>
                        <span className="material-symbols-outlined text-xs">timer</span> {lead.time}
                      </span>
                    </div>
                  </div>
                </div>
                <button className={`text-[10px] font-bold px-6 py-3 uppercase tracking-widest transition-all ${lead.critical ? 'bg-primary text-on-primary hover:bg-secondary' : 'border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary'}`}>
                  {lead.critical ? 'Reassign Lead' : 'Ping Agent'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Team Performance Chart Area */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant pb-4">
            <h3 className="text-2xl font-serif font-bold text-on-surface">Team Status</h3>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-8 shadow-sm space-y-8">
            <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Avg Response (Last 24h)</h4>
            <div className="space-y-6">
              {[
                { name: 'S. Roberts', time: '8m', percent: 25, color: 'bg-primary' },
                { name: 'M. Chen', time: '15m', percent: 50, color: 'bg-primary' },
                { name: 'A. Davis', time: '28m', percent: 90, color: 'bg-secondary' },
                { name: 'J. Smith', time: '45m', percent: 100, color: 'bg-error', target: true },
              ].map((agent, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-on-surface">{agent.name}</span>
                    <span className="text-xs font-bold text-on-surface-variant">{agent.time}</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-low relative">
                    <div className={`h-full ${agent.color}`} style={{ width: `${agent.percent}%` }} />
                    {agent.target && <div className="absolute top-[-4px] left-[66%] h-3.5 w-px bg-outline-variant z-10" title="Target (30m)" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Target Threshold</span>
              <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">30 Minutes</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
