import { Calendar, Home, Sparkles } from "lucide-react";

const BRAND = "Minds — Chief Legal & Financial Ops";
const CALENDLY_URL = "https://calendly.com/zeribi-antoine/30min";

export const dynamic = "force-static";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 font-semibold">
          <Sparkles className="w-5 h-5" />
          <span>{BRAND}</span>
        </div>
      </header>

      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">Merci ✅</h1>
        <p className="mt-4 text-slate-600">
          Votre demande a bien été envoyée. Nous revenons vers vous sous 48h.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
            <Home className="w-4 h-4" /> Retour à l’accueil
          </a>
          <a href={CALENDLY_URL} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border hover:bg-slate-100">
            <Calendar className="w-4 h-4" /> Réserver un diagnostic (30 min)
          </a>
        </div>

        <div className="mt-10 p-4 text-sm bg-white border rounded-2xl text-left">
          <p className="font-medium">Redirection configurée</p>
          <p className="mt-2 text-slate-600">
            Votre formulaire redirige automatiquement ici après envoi (Formspree, champ <code>_next</code>).
          </p>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Minds. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
