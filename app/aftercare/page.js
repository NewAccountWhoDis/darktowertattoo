import Link from "next/link";
import AftercareGuide from "@/app/components/aftercare-guide";
import { shopInfo } from "@/lib/site-data";

export const metadata = {
  title: "Aftercare | Dark Tower Tattoo",
  description:
    "Tattoo aftercare instructions from Dark Tower Tattoo in Troy, NY. How to care for your new tattoo so it heals sharp and lasts.",
};

export default function AftercarePage() {
  const steps = [
    {
      title: "Remove the bandage and wash",
      body:
        "Wear your bandage for around 1 hour, then remove it and wash the tattoo gently with Dial Antibacterial Soap."
    },
    {
      title: "Pat dry - don't rub",
      body: "Gently pat dry with a paper towel. Do not rub back and forth."
    },
    {
      title: "Apply a thin layer of A&D ointment",
      body:
        "Apply a very thin layer of vitamin A&D ointment to your tattoo a few minutes after washing. Pat off any excess - you should have no buildup of ointment on your tattoo."
    },
    {
      title: "Repeat 2-3 times daily",
      body:
        "Wash your new tattoo 2 to 3 times daily as described above and re-apply A&D ointment as needed."
    }
  ];

  const warnings = [
    {
      title: "Do not pick scabs.",
      body: "Picking will cause your tattoo to bleed and pull ink out of your skin."
    },
    {
      title: "Avoid fragranced products.",
      body: "No bodywash, lotions, or shampoos that contain fragrances."
    },
    {
      title: "No swimming or hot tubs",
      body: "for at least 2 weeks."
    },
    {
      title: "Avoid direct sun exposure",
      body: "on the tattoo while it heals."
    }
  ];

  return (
    <main className="aftercare-page">
      <div className="aftercare-top-bar">
        <Link href="/" className="aftercare-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <section className="aftercare-hero">
        <span className="aftercare-eyebrow">Dark Tower Tattoo</span>
        <h1 className="aftercare-title">Tattoo Aftercare</h1>
        <p className="aftercare-subtitle">
          How you care for your tattoo in the first few weeks determines how it looks for life.
          Follow these steps carefully.
        </p>
      </section>

      <AftercareGuide steps={steps} warnings={warnings} shopInfo={shopInfo} />

      <footer className="aftercare-footer">
        <div className="container aftercare-footer-inner">
          <img src="/DTT Logo v2.png" alt="Dark Tower Tattoo" className="aftercare-footer-logo" />
          <p>© 2026 Dark Tower Tattoo · Troy, NY · {shopInfo.phoneDisplay}</p>
          <Link href="/" className="home-pill">Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
