import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminSettings() {
  return (
    <>
      <AdminHeader title="Platform Settings" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-4xl mx-auto space-y-gutter">
          {/* Account Settings */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-6 uppercase tracking-widest">Broker Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">Display Name</label>
                <input className="bg-transparent border-0 border-b border-outline-variant py-2 font-technical-data text-primary focus:ring-0 focus:border-primary" defaultValue="Alexander Director" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">Email</label>
                <input className="bg-transparent border-0 border-b border-outline-variant py-2 font-technical-data text-primary focus:ring-0 focus:border-primary" defaultValue="a.director@monolith.com" />
              </div>
            </div>
          </section>

          {/* Platform Configuration */}
          <section className="bg-surface-container-lowest border border-outline-variant p-8">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-6 uppercase tracking-widest">Global Parameters</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-outline-variant">
                <div>
                  <div className="font-label-sm text-label-sm text-primary uppercase">Maintenance Mode</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Take the public site offline for updates</div>
                </div>
                <div className="w-12 h-6 bg-surface-variant relative cursor-pointer">
                   <div className="absolute left-1 top-1 w-4 h-4 bg-outline"></div>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-outline-variant">
                <div>
                  <div className="font-label-sm text-label-sm text-primary uppercase">Currency Display</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Primary currency for public listings</div>
                </div>
                <select className="bg-transparent font-technical-data text-primary border-none focus:ring-0">
                  <option>USD ($)</option>
                  <option>GBP (£)</option>
                  <option>EUR (€)</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button className="bg-primary text-on-primary px-12 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-inverse-surface transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
