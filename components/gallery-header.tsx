export function GalleryHeader({ photoCount }: { photoCount: number }) {
  return (
    <header className="mb-8 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Skater Ghaziabad Club
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
          Moments on wheels
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Races, training sessions, and championship days from our skaters and coaches.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        <span className="font-display text-2xl font-semibold text-foreground">{photoCount}</span>{" "}
        photos
      </p>
    </header>
  );
}
