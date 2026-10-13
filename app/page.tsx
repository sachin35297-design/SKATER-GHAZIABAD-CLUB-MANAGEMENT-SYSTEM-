import { GalleryHeader } from "@/components/gallery-header";
import { PhotoGallery } from "@/components/photo-gallery";
import { photos } from "@/lib/photos";

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <GalleryHeader photoCount={photos.length} />
      <PhotoGallery photos={photos} />
    </main>
  );
}
