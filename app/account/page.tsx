import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccountOverview() {
  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row gap-12 lg:gap-[120px] flex-grow">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-8">
          <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant border-b border-outline-variant pb-4">
            Account
          </h3>
          <nav className="flex flex-col gap-4">
            <Link
              className="font-body-md text-body-md text-secondary border-l-2 border-secondary pl-4 -ml-[2px] transition-colors duration-300"
              href="/account"
            >
              Dashboard
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300"
              href="/account/reservations"
            >
              Reservations
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300"
              href="/account/enquiries"
            >
              Enquiries
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300"
              href="/account/profile"
            >
              Profile
            </Link>
            <Link
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary pl-4 border-l-2 border-transparent transition-colors duration-300"
              href="/account/privacy"
            >
              Privacy
            </Link>
          </nav>
          <button className="mt-8 self-start font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              logout
            </span>
            Sign Out
          </button>
        </aside>
        {/* Canvas */}
        <div className="flex-1 flex flex-col gap-section-padding">
          {/* Greeting */}
          <section className="flex flex-col gap-4">
            <h1 className="font-headline-lg text-headline-lg text-primary">
              Welcome back, Alexander.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Your portfolio overview. Track the status of your active
              reservations and review recent vehicle inquiries with our
              concierge team.
            </p>
          </section>
          {/* Active Reservations */}
          <section className="flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                Active Reservations
              </h2>
              <Link
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300 flex items-center gap-1"
                href="/account/reservations"
              >
                View All{" "}
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {[
                {
                  id: "MN-7842-AX",
                  title: "Monolith Phantom V8",
                  eta: "Q3 2024",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5EYiw-GyE28cOMQuIBb9G2whjAOvN7v7icKqs4Wa0hpiR54P-l9YFicyBAWbPmZ_MQa5XOM11pY5_zVdB0hEKDMlj_3QlAYjRgYB7wuzZw46kweCHmRK6J-TwZQZDCYo7ECCSkLiSV-JXNBU5eW18JX4sgStmEQw2AdVBY3O2UrOlustmG_muuXdBATyAKtvmRywd2i3OsqewPD6xAhbTTIcl7XQkbGhY3nuhIYVrNCPqypz9wJ8u7-YuEJpeyw59BrtS8Gr09J8",
                },
                {
                  id: "MN-9910-BZ",
                  title: "Monolith Apex GT",
                  eta: "Q4 2024",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqtYoYFjiJ9V48ErZt7YCNWDdstQ3-oogFVK_co2pERNe82M0Hk-nnNHkbsB71cNJUcioggfCn0hSDhalbkhi-YYaaRoD23mLh_Lz0qnKgAggCk2Xd07Qfs00PfJ2LOBfG3gzi6bCubJabCfOWtb8Q_0nii9dVoAQY2ClM4jeVCOjIDbw4JZc73PcQg00rHEeL_f41SesSrn0o43eAHAtrM05oDbi8LVqOY-WVVCLTqT3YfIaBxblAUfH3fPKcBd2T962nEOlbU0",
                },
              ].map((res) => (
                <article
                  key={res.id}
                  className="group flex flex-col gap-6 pb-6 border-b border-outline-variant"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden bg-surface-variant relative">
                    <img
                      alt={res.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={res.img}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {res.title}
                      </h3>
                      <span className="border border-secondary text-secondary px-3 py-1 font-label-sm uppercase tracking-widest rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-technical-data text-technical-data text-on-surface-variant">
                        REF: {res.id}
                      </span>
                      <span className="font-technical-data text-technical-data text-on-surface-variant">
                        ETA: {res.eta}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* Recent Enquiries */}
          <section className="flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                Recent Enquiries
              </h2>
            </div>
            {/* Technical Spec Table Style */}
            <div className="flex flex-col gap-technical-grid-gap bg-outline-variant border border-outline-variant p-[1px]">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-surface px-6 py-4">
                <div className="col-span-5 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Vehicle of Interest
                </div>
                <div className="col-span-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  Date
                </div>
                <div className="col-span-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-right">
                  Status
                </div>
              </div>
              {/* Row 1 */}
              {[
                {
                  name: "Monolith Spectre Reserve",
                  date: "Oct 12, 2023",
                  status: "Qualified",
                },
                {
                  name: "Monolith V-Series Prototype",
                  date: "Sep 28, 2023",
                  status: "Contacted",
                },
                {
                  name: "Monolith Heritage Edition",
                  date: "Aug 15, 2023",
                  status: "Closed",
                },
              ].map((enq, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 bg-surface px-6 py-5 items-center group cursor-pointer hover:bg-surface-container-low transition-colors duration-300"
                >
                  <div className="col-span-5 font-technical-data text-technical-data text-primary group-hover:text-secondary transition-colors">
                    {enq.name}
                  </div>
                  <div className="col-span-4 font-technical-data text-technical-data text-on-surface-variant">
                    {enq.date}
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <span className="border border-outline text-on-surface-variant px-3 py-1 font-label-sm uppercase tracking-widest">
                      {enq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
