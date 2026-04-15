import "./globals.css";

export const metadata = {
  title: "Dark Tower Tattoo",
  description:
    "Dark Tower Tattoo in Troy, NY. Custom tattoos, professional piercing, artist galleries, and booking links."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
