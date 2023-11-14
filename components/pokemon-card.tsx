import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-400 w-full"
      key={name + "Card"}
    >
      <h2 className=" text-2xl font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
