"use client";

import { useState } from "react";
import { categories, type Category, type Photo } from "@/lib/photos";
import { CategoryFilter } from "./category-filter";
import { MasonryGrid } from "./masonry-grid";
import { Lightbox } from "./lightbox";

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visiblePhotos =
    activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  return (
    <section aria-label="Photo gallery">
      <CategoryFilter
        options={["All", ...categories]}
        active={activeCategory}
        onChange={(category) => {
          setActiveCategory(category);
          setOpenIndex(null);
        }}
      />
      <MasonryGrid photos={visiblePhotos} onOpen={setOpenIndex} />
      <Lightbox
        photos={visiblePhotos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
