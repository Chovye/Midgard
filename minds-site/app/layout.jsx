import "./globals.css";

export const metadata = {
  title: "Minds — Chief Legal & Financial Ops",
  description: "Financement, business plan et structuration juridique pour indépendants et TPE."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
