import AdminHeader from "@/components/admin/AdminHeader";

export default function InventoryAgingReport() {
  const agingData = [
    { asset: "2021 Bentley Continental GT", vin: "BEN-772-XX", days: 112, value: "$215,000", action: "Review Price" },
    { asset: "2022 Porsche 911 Targa", vin: "POR-911-TG", days: 85, value: "$185,000", action: "None" },
    { asset: "2023 Ferrari 296 GTB", vin: "FER-296-XX", days: 42, value: "$345,000", action: "None" },
    { asset: "2024 Aston Martin DB12", vin: "AST-D12-XX", days: 12, value: "$285,000", action: "Featured" },
  ];

  return (
    <>
      <AdminHeader title="Inventory Aging Analysis" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max mx-auto space-y-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant">
            <div className="p-6 border-b border-outline-variant bg-surface">
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                This report tracks the duration assets have remained in the active inventory. 
                Assets exceeding 90 days are flagged for management review or promotional consideration.
              </p>
            </div>
            <table className="w-full text-left font-technical-data text-technical-data border-collapse">
              <thead>
                <tr className="bg-surface text-on-surface-variant border-b border-outline-variant">
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Asset</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">VIN</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest text-center">Days in Stock</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Current Value</th>
                  <th className="p-4 font-normal text-[12px] uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {agingData.map((item, i) => (
                  <tr key={i} className="hover:bg-surface transition-colors duration-200">
                    <td className="p-4 text-primary font-bold">{item.asset}</td>
                    <td className="p-4 text-on-surface-variant">{item.vin}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 ${item.days > 90 ? "bg-error-container text-on-error-container" : "text-primary"}`}>
                        {item.days}
                      </span>
                    </td>
                    <td className="p-4 text-primary">{item.value}</td>
                    <td className="p-4">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">
                        {item.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
