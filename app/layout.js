import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.darktowertattoo.com"),
  title: "Dark Tower Tattoo",
  description:
    "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/DTT.jpeg",
    shortcut: "/DTT.jpeg",
    apple: "/DTT.jpeg"
  },
  openGraph: {
    url: "https://www.darktowertattoo.com",
    siteName: "Dark Tower Tattoo",
    title: "Dark Tower Tattoo",
    description:
      "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
    images: [
      {
        url: "https://www.darktowertattoo.com/DTT.jpeg",
        width: 720,
        height: 720,
        alt: "Dark Tower Tattoo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Tower Tattoo",
    description:
      "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links.",
    images: ["https://www.darktowertattoo.com/DTT.jpeg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
