import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";

export default function InventoryPage() {
  const vehicles = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsd1jn2ayS9P0R6HHVIwxDk4YdIVxQx4UHw0XSYKrQCm1xdale-B6E9V3Rd2sH9Uv9THpmwSHl8c95OEWT7PqsnT_9V4SUxhtCiQwxuZDDkbiKdiNTtOExHkpxzeLPQI46DuVwnyMv2Dv4MZDiZIgR0NyHohp9GbDwLwDraHHvGv14clxPZ3vJl1DfYzkB63Ym5gRh8_zovMj2C1wnQWwzhGtMsmFSCfD3d9xDTBRerHOr4ywr9khdeZo8AO8Y0UROyDTgYtbkVtc",
      year: 2023,
      make: "Porsche",
      model: "911 GT3 RS",
      mileage: "1,200 mi",
      engine: "4.0L Flat-6",
      price: "$285,000",
      status: "Available" as const,
      slug: "2023-porsche-911-gt3-rs",
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxvcVmRDImCnKMLdHmA4afIMq2DtgfSQ8n2D4YxhXy_hujUfRGuFNqJgTDoLv7JSdCmNL61t5OHnx065IDqWHV8efyJYnM5H8bOneJyvZofzj9Rm9d0ZgOAsi8hiMPstv0NydpN8x_ScX0PMxAJx-h8gQyNFUHySOFZcnGJ7PkcFmE6ona0mpyTF5D2iWMkC4YvIod73OcuWSSid1I5O-QDz18o5iSCNSbpmUt_PXSYladKvh7SuFLtLGPCRmAv73BuwsYvhsMPXI",
      year: 2024,
      make: "Mercedes-Benz",
      model: "AMG GT Coupe",
      mileage: "50 mi",
      engine: "4.0L V8 Biturbo",
      price: "$175,000",
      status: "Reserved" as const,
      slug: "2024-mercedes-benz-amg-gt",
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiw0XKQaQug4mpEHMZWvWEULg2QxvzesDaq6WmpKduSfmjMqC7QkwFuMu7YCZF6-q709IHpZRtWP0H3oPjplehQvK7AgAEejxNh7UV5lyGI8050BCmQ4dg7R9ngjrwmtct3gkn3WqqZq_hngXKV-vI8agGGb8CAhzv_vyFyNLXv-mGL2wITQrmES0jG6KsXjVBqyfY0lVmTXogzoMgijqU-VlWV0KNn1d3O6LwAupdKP9PQ_LikHgb1higXpPHib_dAbNsj-uKV3s",
      year: 2022,
      make: "Ferrari",
      model: "Roma",
      mileage: "3,400 mi",
      engine: "3.9L V8",
      price: "$240,000",
      status: "Available" as const,
      slug: "2022-ferrari-roma",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Header / Title */}
        <div className="col-span-full mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-display-xl text-display-xl text-primary mb-4">
              Inventory
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Explore our curated selection of premium vehicles. Precision
              engineering meets uncompromising luxury.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary font-body-md text-body-md py-3 pl-10 pr-4 rounded-none transition-colors"
                placeholder="Search inventory..."
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
            </div>
            <div className="flex bg-surface-container-low border border-outline-variant rounded-none overflow-hidden">
              <button className="p-2 bg-surface text-secondary cursor-pointer border-r border-outline-variant">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  grid_view
                </span>
              </button>
              <button className="p-2 bg-surface-container-low text-on-surface-variant hover:text-secondary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className="col-span-1 lg:col-span-3 flex flex-col gap-8">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-none">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-headline-md text-primary">
                Filters
              </h2>
              <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary uppercase tracking-widest cursor-pointer transition-colors">
                Clear All
              </button>
            </div>
            {/* Active Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-low border border-outline-variant text-on-surface font-label-sm text-label-sm rounded-none">
                Porsche
                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error transition-colors">
                  close
                </span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container-low border border-outline-variant text-on-surface font-label-sm text-label-sm rounded-none">
                2022 - 2024
                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error transition-colors">
                  close
                </span>
              </span>
            </div>
            {/* Filter Sections */}
            <div className="space-y-6 divide-y divide-outline-variant">
              {/* Make */}
              <div className="pt-6 first:pt-0">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                  Make
                </h3>
                <div className="space-y-2">
                  {["Porsche", "Mercedes-Benz", "Aston Martin", "Ferrari"].map(
                    (make) => (
                      <label
                        key={make}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          className="form-checkbox h-4 w-4 text-secondary border-outline-variant focus:ring-secondary rounded-none"
                          type="checkbox"
                        />
                        <span className="font-body-md text-body-md text-on-surface group-hover:text-secondary transition-colors">
                          {make}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
              {/* Year Range */}
              <div className="pt-6">
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                  Year
                </h3>
                <div className="flex items-center gap-4">
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary font-body-md text-body-md py-2 px-3 rounded-none"
                    placeholder="Min"
                    type="number"
                    defaultValue="2022"
                  />
                  <span className="text-on-surface-variant">-</span>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface focus:ring-1 focus:ring-secondary focus:border-secondary font-body-md text-body-md py-2 px-3 rounded-none"
                    placeholder="Max"
                    type="number"
                    defaultValue="2024"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Vehicle Grid */}
        <div className="col-span-1 lg:col-span-9 flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {vehicles.map((v, idx) => (
              <VehicleCard key={idx} {...v} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-secondary bg-secondary text-on-secondary font-technical-data text-technical-data transition-colors cursor-pointer">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-primary hover:text-secondary hover:border-secondary font-technical-data text-technical-data transition-colors cursor-pointer">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-primary hover:text-secondary hover:border-secondary font-technical-data text-technical-data transition-colors cursor-pointer">
              3
            </button>
            <span className="text-on-surface-variant mx-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-primary hover:text-secondary hover:border-secondary font-technical-data text-technical-data transition-colors cursor-pointer">
              12
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
