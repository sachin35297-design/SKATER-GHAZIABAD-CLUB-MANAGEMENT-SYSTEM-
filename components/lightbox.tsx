"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const controlClass =
  "flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null && photos[index] !== undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const photo = isOpen ? photos[index] : null;
  const total = photos.length;

  const showPrevious = () => index !== null && onNavigate((index - 1 + total) % total);
  const showNext = () => index !== null && onNavigate((index + 1) % total);

  return (
    <dialog
      ref={dialogRef}
      aria-label={photo ? photo.title : "Photo viewer"}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/90"
    >
      {photo && (
        <div
          className="flex h-full flex-col"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <div className="flex items-center justify-between gap-4 p-4 text-white">
            <p className="text-sm tabular-nums text-white/70" aria-live="polite">
              {index! + 1} / {total}
            </p>
            <button type="button" onClick={onClose} className={controlClass} aria-label="Close viewer">
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
          >
            <Image
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              className="max-h-full w-auto max-w-full rounded-md object-contain"
            />
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className={`${controlClass} absolute left-2 top-1/2 -translate-y-1/2 sm:left-4`}
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className={`${controlClass} absolute right-2 top-1/2 -translate-y-1/2 sm:right-4`}
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          <div className="p-4 text-center text-white sm:p-6">
            <p className="font-display text-lg font-semibold">{photo.title}</p>
            <p className="text-sm text-white/70">
              {photo.category} · {photo.date}
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}
