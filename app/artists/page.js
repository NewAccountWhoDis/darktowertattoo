import Link from "next/link";
import { artists } from "@/lib/site-data";

export const metadata = {
  title: "Artists | Dark Tower Tattoo",
  description: "Browse artist profiles and portfolios for Dark Tower Tattoo."
};

export default function ArtistsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container section-header">
          <Link href="/" className="inline-link">
            Back to home
          </Link>
          <p className="eyebrow">Artists</p>
          <h1>Choose an artist</h1>
          <p className="section-copy">
            This route replaces the old static `artists/index.html` page and gives
            you a clean starting point for adding or editing artist entries later.
          </p>
        </div>

        <div className="container artist-grid">
          {artists.map((artist) => (
            <article key={artist.slug} className="artist-card">
              <img src={artist.portraitImage} alt={artist.name} />
              <div className="artist-card-copy">
                <p className="artist-role">{artist.role}</p>
                <h2>{artist.name}</h2>
                <p>{artist.shortBio}</p>
                <Link href={`/artists/${artist.slug}`} className="button">
                  View profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
