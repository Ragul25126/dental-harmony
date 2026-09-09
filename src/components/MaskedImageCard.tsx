import React from "react";

interface MaskedImageCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  subtitle?: string;
  tag?: string;
  aspect?: string;
  className?: string;
}

export function MaskedImageCard({
  imageSrc,
  alt,
  title,
  subtitle,
  tag = "Zenith Dentistry",
  className = "",
}: MaskedImageCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-[2.5rem] bg-[#304240] text-white shadow-xl transition-all duration-500 hover:shadow-2xl ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142e2b]/90 via-[#142e2b]/30 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
        <span className="w-fit rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          {tag}
        </span>
        <div className="mt-20">
          <h3 className="font-serif text-3xl font-normal leading-tight text-white sm:text-4xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-xs text-white/80 leading-relaxed max-w-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
