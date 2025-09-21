"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, HandCoins, LineChart, Shield, Workflow, Sparkles } from "lucide-react";

const BRAND = "Minds — Chief Legal & Financial Ops";
const CALENDLY_URL = "https://calendly.com/zeribi-antoine/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovngrvw";

const features = [
  {
    icon: HandCoins,
    title: "Levée de dette",
    desc: "Montage de dossier, calibrage du besoin, relation banques/Bpifrance, financement d'actifs (leasing)."
  },
  {
    icon: LineChart,
    title: "Business plan solide",
    desc: "Prévisions financières, scénarios, plan d'action commercial, indicateurs de suivi."
  },
  {
    icon: Shield,
    title: "Structuration juridique",
    desc: "Choix de forme (micro, SASU, EURL…), statuts, contrats clés, conformité RGPD de base."
  },
  {
    icon: Workflow,
    title: "Legal Ops",
    desc: "Checklists, modèles, workflows, rappels d'échéances et documentation centralisée."
  }
];

const tiers = [
  {
    name: "Lancement",
    price: "990€",
    tagline: "Idéal pour démarrer bien cadré",
    points: [
      "Choix du statut + immatriculation",
      "BP synthétique (12 mois)",
      "Dossier financement < 50k€",
      "Kit contrats essentiels"
    ]
  },
  {
    name: "Croissance",
    price: "2 490€",
    tagline: "Pour structurer et accélérer",
    points: [
      "BP détaillé (24–36 mois)",
      "Levée de dette jusqu'à 200k€",
      "Statuts + CGV/Prestation",
      "Process Legal Ops sur mesure"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "Sur devis",
    tagline: "Accompagnement continu",
    points: [
      "Pilotage trimestriel",
      "Mise à jour juridique",
      "Suivi de la dette et covenants",
      "Accès prioritaire partenaires"
    ]
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>{BRAND}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">Offre</a>
            <a href="#pricing" className="hover:opacity-70">Tarifs</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#calendly" className="hover:opacity-70">Réserver</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
            Parler à un expert
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Financement, Business Plan et Structuration juridique — <span className="text-slate-600">en un seul endroit</span>
            </motion.h1>
            <p className="mt-5 text-slate-600 text-lg">
              Nous aidons les indépendants et TPE à obtenir un financement, bâtir un business plan crédible et sécuriser leur cadre juridique, rapidement et sereinement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                Démarrer gratuitement <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex items-center px-5 py-3 rounded-2xl border hover:bg-slate-100">
                Voir l'offre
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Diagnostic offert</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Délais rapides</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> RGPD & confidentialité</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border">
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border p-4">
                  <f.icon className="w-6 h-6" />
                  <div className="text-base font-semibold mt-2">{f.title}</div>
                  <div className="text-sm text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-5 bg-white">
              <f.icon className="w-7 h-7" />
              <div className="text-lg font-semibold mt-2">{f.title}</div>
              <div className="text-slate-600 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Comment ça marche</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { title: "Diagnostic gratuit (30 min)", desc: "Compréhension du projet, besoins et contraintes." },
              { title: "Feuille de route", desc: "Checklist, livrables, calendrier et data à fournir." },
              { title: "Montage & structuration", desc: "BP, statuts/contrats, dossier prêteur prêt à soumettre." },
              { title: "Soumission & suivi", desc: "Itérations avec prêteurs/partenaires, jusqu'à décision." }
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border p-5">
                <div className="text-base font-semibold">{s.title}</div>
                <div className="text-sm text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Des packs clairs</h2>
        <p className="text-slate-600 mt-2">Honoraires fixes + option de success fees sur la dette levée (1–3% au-delà de 100k€).</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-5 bg-white ${t.highlight ? "ring-2 ring-slate-900" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{t.name}</span>
                {t.highlight && <span className="text-xs bg-slate-900 text-white px-2 py-1 rounded-full">Populaire</span>}
              </div>
              <div className="text-3xl font-bold mt-2">{t.price}</div>
              <div className="text-slate-500 text-sm">{t.tagline}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="w-4 h-4 mt-0.5" /> {p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                Discuter de ce pack
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Questions fréquentes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Êtes-vous un cabinet d'avocats ?</div>
              <div className="text-slate-600">Non. Nous proposons un accompagnement opérationnel, de l'information juridique et des modèles. Les actes/avis personnalisés sont réalisés par nos avocats partenaires si nécessaire.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Avez-vous un statut pour la mise en relation bancaire ?</div>
              <div className="text-slate-600">Selon la mission, nous préparons le dossier et vous représentez la demande auprès des établissements. Pour le courtage, nous opérons via partenaires immatriculés (IOBSP) ou vous mettons en relation.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Délais habituels ?</div>
              <div className="text-slate-600">De 2 à 6 semaines selon la complexité, la réactivité et les échanges avec les prêteurs.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Protection des données ?</div>
              <div className="text-slate-600">Hébergement UE, accès restreint, DPA disponible. Nous appliquons les bonnes pratiques RGPD et supprimons les données sur demande.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Parlons de votre projet</h2>
        <p className="text-slate-600 mt-2">Laissez vos coordonnées et recevez une proposition sous 48h ou réservez un créneau directement.</p>

        <form action={FORMSPREE_ENDPOINT} method="POST" className="mt-8 grid gap-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Nom" required aria-label="Nom" className="border rounded-2xl px-3 py-2" />
            <input name="email" type="email" placeholder="Email" required aria-label="Email" className="border rounded-2xl px-3 py-2" />
          </div>
          <input name="sector" placeholder="Secteur / CA visé" aria-label="Secteur ou CA visé" className="border rounded-2xl px-3 py-2" />
          <textarea name="message" placeholder="Décrivez brièvement votre besoin (financement, BP, juridique)" rows={5} aria-label="Message" required className="border rounded-2xl px-3 py-2" />
          <input type="hidden" name="_next" value="https://minds-site.vercel.app/merci" />
          <div className="grid md:grid-cols-2 gap-3">
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
              Obtenir un diagnostic gratuit
            </button>
            <a href="#calendly" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl border hover:bg-slate-100">
              Réserver un diagnostic
            </a>
          </div>
        </form>
        <p className="text-xs text-slate-500 mt-3">Formulaire alimenté par Formspree. Endpoint : {FORMSPREE_ENDPOINT}</p>
      </section>

      {/* Calendly */}
      <section id="calendly" className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Réserver un diagnostic de 30 minutes</h2>
        <p className="text-slate-600 mt-2">Choisissez un créneau qui vous convient ci-dessous.</p>
        <div className="mt-6 bg-white border rounded-2xl shadow">
          <div className="aspect-[16/9]">
            <iframe
              title="Calendly"
              src={CALENDLY_URL}
              className="w-full h-full rounded-2xl"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Lien Calendly configuré : {CALENDLY_URL}</p>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Minds. Tous droits réservés.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">Mentions légales</a>
            <a href="#" className="hover:opacity-70">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
