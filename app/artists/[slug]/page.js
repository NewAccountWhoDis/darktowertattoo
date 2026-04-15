import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="page-shell">
      <section
        className="artist-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 6, 6, 0.2), rgba(6, 6, 6, 0.88)), url('${artist.heroImage}')`
        }}
      >
        <div className="container">
          <Link href="/artists" className="inline-link">
            Back to artists
          </Link>
          <p className="eyebrow">Dark Tower Tattoo</p>
          <h1>{artist.name}</h1>
          <p className="hero-subhead">{artist.role}</p>
        </div>
      </section>

      <section className="section">
        <div className="container profile-grid">
          <div className="profile-image-card">
            <img src={artist.portraitImage} alt={artist.name} />
          </div>
          <div className="profile-copy">
            <h2>{artist.title}</h2>
            {artist.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="meta-block">
              <p>
                <span>Focus</span>
                {artist.focus}
              </p>
              <p>
                <span>Shop</span>
                {shopInfo.name} · {shopInfo.address}
              </p>
            </div>

            <div className="button-row">
              <a
                className="button button-primary"
                href={artist.primaryLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {artist.primaryLink.label}
              </a>
              {(artist.secondaryLinks || []).map((link) => (
                <a
                  key={link.href}
                  className="button"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
              <a className="button" href={`tel:${shopInfo.phoneLink}`}>
                Call the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {artist.gallery.map((image, index) => (
              <a key={image} href={image} target="_blank" rel="noreferrer" className="gallery-card">
                <img src={image} alt={`${artist.name} portfolio item ${index + 1}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {artist.extraGallery ? (
        <section className="section">
          <div className="container">
            <p className="eyebrow">More Work</p>
            <h2>{artist.extraGalleryTitle}</h2>
            <p className="section-copy">{artist.extraGalleryIntro}</p>
            <div className="gallery-grid">
              {artist.extraGallery.map((image, index) => (
                <a key={image} href={image} target="_blank" rel="noreferrer" className="gallery-card">
                  <img src={image} alt={`${artist.name} jewelry item ${index + 1}`} />
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
