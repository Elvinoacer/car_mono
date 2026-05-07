import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function AdminReservations() {
  const reservations = [
    {
      id: "RES-4421",
      vehicle: "2024 Porsche 911 GT3 RS",
      client: "John Smith",
      date: "May 12, 2024",
      status: "Active",
    },
    {
      id: "RES-3908",
      vehicle: "2023 Aston Martin DBS",
      client: "Sarah Miller",
      date: "May 10, 2024",
      status: "Pending",
    },
  ];

  return (
    <>
      <AdminHeader title="Reservations" />
      <main className="p-gutter overflow-y-auto">
        <div className="bg-surface-container-lowest border border-outline-variant shadow-sm">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md text-primary">
              Pending & Active
            </h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  ID
                </th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Vehicle
                </th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Client
                </th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Status
                </th>
                <th className="p-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr
                  key={res.id}
                  className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors"
                >
                  <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">
                    {res.id}
                  </td>
                  <td className="p-4 font-body-md text-body-md text-primary font-bold">
                    {res.vehicle}
                  </td>
                  <td className="p-4 font-body-md text-body-md text-primary">
                    {res.client}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 font-label-sm text-[10px] uppercase tracking-widest ${
                        res.status === "Active"
                          ? "bg-secondary-container text-on-secondary-container"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {res.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-secondary font-label-sm text-label-sm uppercase tracking-widest hover:text-primary transition-colors">
                      Details
                    </button>
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
