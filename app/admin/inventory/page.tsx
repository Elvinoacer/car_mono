import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function AdminInventory() {
  const inventory = [
    { id: "MNL-8924", name: "2023 Aston Martin DBS", price: "$345,000", status: "Available", mileage: "1,245 mi" },
    { id: "MNL-7210", name: "2024 Porsche 911 GT3 RS", price: "$295,000", status: "Reserved", mileage: "124 mi" },
    { id: "MNL-5532", name: "2022 Ferrari SF90 Stradale", price: "$625,000", status: "Sold", mileage: "2,100 mi" },
  ];

  return (
    <>
      <AdminHeader title="Inventory Management" />
      <main className="p-gutter overflow-y-auto">
        <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md text-primary">Active Stock</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-outline-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary transition-colors">Filter</button>
              <button className="px-4 py-2 border border-outline-variant font-label-sm text-label-sm uppercase tracking-widest hover:border-secondary transition-colors">Export</button>
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">ID</th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Vehicle</th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Price</th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors group">
                  <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">{item.id}</td>
                  <td className="p-4">
                    <div className="font-body-md text-body-md text-primary font-bold">{item.name}</div>
                    <div className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-tighter">{item.mileage}</div>
                  </td>
                  <td className="p-4 font-technical-data text-technical-data text-primary">{item.price}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 font-label-sm text-[10px] uppercase tracking-widest ${
                      item.status === "Available" ? "bg-green-100 text-green-800" : 
                      item.status === "Reserved" ? "bg-amber-100 text-amber-800" : "bg-zinc-100 text-zinc-800"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link 
                      href={`/admin/inventory/${item.id}/edit`}
                      className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
