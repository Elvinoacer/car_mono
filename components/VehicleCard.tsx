import Link from "next/link";

interface VehicleCardProps {
  image: string;
  year: number;
  make: string;
  model: string;
  mileage: string;
  engine: string;
  price: string;
  status: "Available" | "Reserved" | "Sold";
  slug: string;
}

export default function VehicleCard({
  image,
  year,
  make,
  model,
  mileage,
  engine,
  price,
  status,
  slug,
}: VehicleCardProps) {
  const isAvailable = status === "Available";

  return (
    <article className="group bg-surface-container-lowest border-b border-outline-variant pb-6 flex flex-col">
      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-surface-container-low">
        <img
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center justify-center px-3 py-1 border font-label-sm text-label-sm uppercase bg-surface-container-lowest/80 backdrop-blur-sm ${
              isAvailable
                ? "border-secondary text-secondary"
                : "border-outline text-on-surface-variant"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md text-primary mb-1">
          {year} {make}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          {model}
        </p>
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-px bg-outline-variant border border-outline-variant mb-6">
            <div className="bg-surface-container-lowest p-3 flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                Mileage
              </span>
              <span className="font-technical-data text-technical-data text-primary">
                {mileage}
              </span>
            </div>
            <div className="bg-surface-container-lowest p-3 flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                Engine
              </span>
              <span className="font-technical-data text-technical-data text-primary">
                {engine}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="font-headline-md text-headline-md text-primary">
              {price}
            </span>
            <Link
              href={`/inventory/${slug}`}
              className="font-label-sm text-label-sm uppercase tracking-widest text-primary border border-outline-variant px-4 py-2 hover:border-secondary hover:text-secondary transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
