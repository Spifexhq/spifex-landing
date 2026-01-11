// src/components/mdx/MDXComponents.tsx
import Image from "next/image";
import React from "react";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function MdxImage({
  src,
  alt,
  width,
  height,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 768px, 100vw"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-slate-600">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function MdxImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { className, alt = "", ...rest } = props;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      {...rest}
      className={cn("my-8 w-full rounded-2xl border border-slate-200 bg-white", className)}
    />
  );
}

export const mdxComponents = {
  img: MdxImg,
  MdxImage,
};
