import Link from "next/link";
import ArtistFanSelector from "@/app/components/artist-fan-selector";
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
            The cards open from the center and fan outward. Click a card or use the
            dropdown in the middle to jump straight to an artist page.
          </p>
        </div>

        <div className="container">
          <ArtistFanSelector artists={artists} />
        </div>
      </section>
    </main>
  );
}
