import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AIDescriptionStudio({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <>
      <AdminHeader title="AI Description Studio" />
      
      {/* Sticky Action Bar */}
      <div className="sticky top-20 z-40 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              className="text-on-surface-variant hover:text-secondary transition-colors"
              href={`/admin/inventory/${id}/edit`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="font-headline-md text-headline-md text-primary">
                2024 Porsche 911 GT3 RS
              </h1>
              <p className="font-technical-data text-technical-data text-on-surface-variant">
                VIN: WP0AD2A9XRS209841
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="font-label-sm text-label-sm uppercase tracking-widest border border-outline-variant text-primary px-6 py-3 hover:border-secondary hover:text-secondary transition-colors duration-300 bg-surface flex items-center gap-2">
              <span className="material-symbols-outlined">visibility</span> Preview VDP
            </button>
            <button className="font-label-sm text-label-sm uppercase tracking-widest bg-primary text-on-primary px-6 py-3 hover:bg-inverse-surface transition-colors duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center gap-2">
              <span className="material-symbols-outlined">save</span> Save Draft
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-container-max mx-auto px-gutter py-12 flex-1">
        {/* Studio Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Source Data & Configuration */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Source Data Panel */}
            <section className="bg-surface-container-lowest border border-outline-variant p-6 flex flex-col gap-6 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">database</span> Source Data
                </h2>
                <span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 uppercase tracking-widest">Decoded</span>
              </div>
              
              <div className="bg-outline-variant gap-[1px] flex flex-col">
                {[
                  { label: "Make", value: "Porsche" },
                  { label: "Model", value: "911 GT3 RS" },
                  { label: "Year", value: "2024" },
                  { label: "Engine", value: "4.0L Naturally Aspirated Flat-6" },
                  { label: "Color", value: "Guards Red / Black Race-Tex" }
                ].map((item, idx) => (
                  <div key={idx} className="flex bg-surface-container-lowest">
                    <div className="w-1/3 p-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest flex items-center">{item.label}</div>
                    <div className="w-2/3 p-3 font-technical-data text-technical-data text-primary">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-2">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Key Options</p>
                <ul className="font-body-md text-body-md text-primary list-disc list-inside space-y-1">
                  <li>Weissach Package</li>
                  <li>Porsche Ceramic Composite Brakes (PCCB)</li>
                  <li>Front Axle Lift System</li>
                </ul>
              </div>
            </section>
            
            {/* Configuration Panel */}
            <section className="bg-surface-container-lowest border border-outline-variant p-6 flex flex-col gap-6 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.04)]">
              <div className="border-b border-outline-variant pb-4">
                <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">tune</span> Tone & Style
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { id: "persuasive", icon: "psychology", label: "Persuasive", defaultChecked: true },
                  { id: "technical", icon: "build", label: "Technical", defaultChecked: false },
                  { id: "story", icon: "auto_stories", label: "Story-driven", defaultChecked: false },
                  { id: "concise", icon: "short_text", label: "Concise", defaultChecked: false },
                ].map((tone) => (
                  <label key={tone.id} className="flex items-center justify-between p-3 border border-outline-variant cursor-pointer hover:border-secondary transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">{tone.icon}</span>
                      <span className="font-technical-data text-technical-data">{tone.label}</span>
                    </div>
                    <input className="text-secondary focus:ring-secondary" name="tone" type="radio" defaultChecked={tone.defaultChecked} />
                  </label>
                ))}
              </div>
              
              <div className="mt-4">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">Keyword Optimization</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-outline-variant px-3 py-1 font-label-sm text-label-sm text-primary uppercase flex items-center gap-1 cursor-pointer hover:bg-surface-variant">
                    Track-ready <span className="material-symbols-outlined text-[14px]">close</span>
                  </span>
                  <span className="border border-outline-variant px-3 py-1 font-label-sm text-label-sm text-primary uppercase flex items-center gap-1 cursor-pointer hover:bg-surface-variant">
                    Low Mileage <span className="material-symbols-outlined text-[14px]">close</span>
                  </span>
                  <span className="border border-outline px-3 py-1 font-label-sm text-label-sm text-on-surface-variant uppercase flex items-center gap-1 cursor-pointer hover:border-primary border-dashed">
                    <span className="material-symbols-outlined text-[14px]">add</span> Add Keyword
                  </span>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column: Generation Workspace */}
          <div className="lg:col-span-8 flex flex-col gap-8 h-full">
            <section className="bg-surface-container-lowest border border-outline-variant flex flex-col flex-1 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.04)] min-h-[600px]">
              {/* Editor Toolbar */}
              <div className="flex justify-between items-center p-4 border-b border-outline-variant bg-surface-container-low">
                <div className="flex gap-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Bold" type="button">
                    <span className="material-symbols-outlined text-[20px]">format_bold</span>
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Italic" type="button">
                    <span className="material-symbols-outlined text-[20px]">format_italic</span>
                  </button>
                  <div className="w-[1px] bg-outline-variant mx-2 my-1"></div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="Bullet List" type="button">
                    <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                  </button>
                </div>
                <button className="bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest px-6 py-2 rounded-none hover:bg-secondary transition-colors duration-300 flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined">auto_awesome</span> AI Compose
                </button>
              </div>
              
              {/* Text Area */}
              <div className="flex-1 p-8 relative">
                <div className="font-body-lg text-body-lg text-primary leading-relaxed space-y-6 outline-none" contentEditable={true} suppressContentEditableWarning={true}>
                  <p>Commanding attention in striking Guards Red, this 2024 Porsche 911 GT3 RS is the pinnacle of naturally aspirated performance and aerodynamic engineering. Designed without compromise, it bridges the gap between road-going sports car and dedicated track weapon.</p>
                  <p>At its heart lies a masterful 4.0-liter flat-six engine, paired with Porsche&apos;s lightning-fast PDK transmission, delivering an visceral driving experience that demands respect. This specific example is elevated by the highly desirable Weissach Package, reducing weight and adding exposed carbon fiber elements that underscore its motorsport pedigree.</p>
                  <p>Stopping power is handled by Porsche Ceramic Composite Brakes (PCCB), ensuring fade-free performance lap after lap. The Front Axle Lift system provides necessary practicality for urban environments, protecting the aggressive front splitter.</p>
                  <p>Inside, the Black Race-Tex interior offers an unyielding, driver-focused environment, stripping away distractions to focus purely on the art of driving. This is not merely a vehicle; it is an instrument of precision, awaiting a driver capable of exploiting its immense potential.</p>
                </div>
                
                {/* Floating metrics */}
                <div className="absolute bottom-4 right-4 flex gap-4 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest bg-surface-container-lowest/80 backdrop-blur px-4 py-2 border border-outline-variant">
                  <span>184 Words</span>
                  <span>1,205 Chars</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
