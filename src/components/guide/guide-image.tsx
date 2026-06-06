import Image from "next/image";

interface GuideImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function GuideImage({ src, alt, caption, priority }: GuideImageProps) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-[var(--border)]">
      <div className="relative aspect-video overflow-hidden bg-[var(--bg)]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading={priority ? undefined : "lazy"}
        />
      </div>
      {caption && (
        <figcaption className="border-t border-[var(--border)] px-4 py-2.5 text-xs text-[var(--muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
