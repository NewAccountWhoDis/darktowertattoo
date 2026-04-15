import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://dartktt.netlify.app"),
  title: "Dark Tower Tattoo",
  description:
    "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
  icons: {
    icon: "/DTT.jpeg",
    shortcut: "/DTT.jpeg",
    apple: "/DTT.jpeg"
  },
  openGraph: {
    title: "Dark Tower Tattoo",
    description:
      "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
    images: [
      {
        url: "/DTT.jpeg",
        alt: "Dark Tower Tattoo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Tower Tattoo",
    description:
      "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
    images: ["/DTT.jpeg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
