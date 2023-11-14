"use client";
import Image from "next/image";

export function PokemonImage({ image }: { image: string; name: string }) {
  return (
    <Image
      src={image}
      priority
      fill
      style={{ objectFit: "contain" }}
      alt="Pictures"
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
