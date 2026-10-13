import Image from "next/image";
import type { Photo } from "@/lib/photos";

type MasonryGridProps = {
  photos: Photo[];
  onOpen: (index: number) => void;
};

export function MasonryGrid({ photos, onOpen }: MasonryGridProps) {
  if (photos.length === 0) {
    return <p className="py-20 text-center text-muted-foreground">No photos in this category yet.</p>;
  }

  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      {photos.map((photo, index) => (
        <li key={photo.id} className="mb-4 break-inside-avoid">
          <button
            type="button"
            onClick={() => onOpen(index)}
            aria-label={`View ${photo.title}`}
            className="group relative block w-full overflow-hidden rounded-lg bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={index < 4}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-12 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
              <div>
                <p className="font-display text-base font-semibold text-white">{photo.title}</p>
                <p className="text-xs text-white/75">{photo.date}</p>
              </div>
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                {photo.category}
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
