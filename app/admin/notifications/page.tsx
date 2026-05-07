import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

export default function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      title: "New Reservation Hold",
      desc: "E. Sterling has placed a hold on the 2024 V-Series Blackwing.",
      time: "2 mins ago",
      type: "reservation",
      unread: true,
    },
    {
      id: 2,
      title: "Valuation Request",
      desc: "New trade-in inquiry received for a 2022 Porsche 911 GT3.",
      time: "1 hour ago",
      type: "lead",
      unread: true,
    },
    {
      id: 3,
      title: "Inventory Alert",
      desc: "Inventory aging alert: 2021 Bentley Continental GT has been in stock for 90+ days.",
      time: "4 hours ago",
      type: "alert",
      unread: false,
    }
  ];

  return (
    <>
      <AdminHeader title="Notifications" />
      <div className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-4xl mx-auto space-y-4">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={`p-6 border border-outline-variant flex gap-6 items-start transition-all duration-300 hover:shadow-lg ${n.unread ? "bg-surface-container-low border-l-4 border-l-secondary" : "bg-surface-container-lowest"}`}
            >
              <div className="bg-surface-variant p-3">
                <span className="material-symbols-outlined text-primary">
                  {n.type === "reservation" ? "event_seat" : n.type === "lead" ? "group" : "warning"}
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-sm text-headline-sm text-primary">{n.title}</h3>
                  <span className="font-technical-data text-[10px] text-on-surface-variant uppercase">{n.time}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {n.desc}
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="font-label-sm text-[10px] uppercase tracking-widest text-primary hover:text-secondary transition-colors">Mark as Read</button>
                  <button className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
