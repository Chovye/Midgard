export const metadata = {
  title: "Minds — Chief Legal & Financial Ops",
  description:
    "Financement (dette), business plan et structuration juridique pour indépendants et TPE — en un seul endroit."
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
