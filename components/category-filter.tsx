import clsx from "clsx";

type CategoryFilterProps<T extends string> = {
  options: readonly T[];
  active: T;
  onChange: (option: T) => void;
};

export function CategoryFilter<T extends string>({ options, active, onChange }: CategoryFilterProps<T>) {
  return (
    <div role="group" aria-label="Filter photos by category" className="mb-6 flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-transparent text-foreground hover:bg-muted",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
