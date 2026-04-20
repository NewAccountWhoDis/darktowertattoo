import { notFound } from "next/navigation";
import ArtistDetailContent from "@/app/components/artist-detail-content";
import { artists, getArtist, shopInfo } from "@/lib/site-data";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export function generateMetadata({ params }) {
  const artist = getArtist(params.slug);

  if (!artist) {
    return {};
  }

  return {
    title: `${artist.name} | Dark Tower Tattoo`,
    description: `${artist.name} at Dark Tower Tattoo in Troy, NY.`
  };
}

export default function ArtistPage({ params }) {
  const artist = getArtist(params.slug);

  if (!artist) {
    notFound();
  }

  return <ArtistDetailContent artist={artist} shopInfo={shopInfo} />;
}
