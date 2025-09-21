export default function MerciPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Merci ✅</h1>
        <p className="text-slate-600 mb-6">
          Votre message a bien été envoyé. Nous revenons vers vous sous 48h avec une proposition personnalisée.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800"
          >
            Retour à l’accueil
          </a>

          <a
            href="https://calendly.com/zeribi-antoine/30min"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border hover:bg-slate-100"
          >
            Réserver un diagnostic (30 min)
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-6">
          Vous pouvez aussi réserver directement un créneau via Calendly si ce n’est pas déjà fait.
        </p>
      </div>
    </div>
  );
}
