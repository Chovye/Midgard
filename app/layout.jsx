import "./globals.css";

export const metadata = {
  title: "HOLD — Holdings & Fiscal Ops",
  description: "SaaS spécialisé pour les holdings : conventions mère-fille, intégration fiscale, coffre-fort, échéances et flux intragroupe."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
