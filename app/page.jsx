"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Files, CalendarDays, Shield, Workflow, Sparkles, FolderLock, BarChart3 } from "lucide-react";

const BRAND = "HOLD — Holdings & Fiscal Ops";
const CALENDLY_URL = "https://calendly.com/zeribi-antoine/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovngrvw";

const features = [
  { icon: Shield, title: "Structuration de holding", desc: "Création de holdings, statuts adaptés, pactes d'actionnaires, conventions mère-fille." },
  { icon: Files, title: "Audit one-shot", desc: "Vérification des conventions intragroupe, intégration fiscale, obligations d'AG et dépôts, plan d'amélioration." },
  { icon: FolderLock, title: "Coffre-fort intragroupe", desc: "Centralisez conventions, AG, comptes consolidés, registres, PV, contrats de management fees." },
  { icon: CalendarDays, title: "Calendrier d'échéances", desc: "Rappels automatiques : AG d'approbation, dépôts comptes, liasses fiscales, obligations groupe." },
  { icon: BarChart3, title: "Suivi fiscal & intragroupe", desc: "Tableau de bord : intégration fiscale, crédits d'impôt, suivi des flux financiers intra-groupe." },
  { icon: Workflow, title: "Workflows de conformité", desc: "Modèles : conventions de trésorerie, management fees, procédures de consolidation, checklists CAC." }
];

const tiers = [
  { name: "Audit Holding", price: "990€", tagline: "Analyse des conventions et obligations de groupe",
    points: ["Entretien 90 min","Revue conventions mère-fille & intégration","Score conformité juridique/fiscale","Feuille de route sous 5 jours"] },
  { name: "Abonnement Groupe", price: "249€/mois", tagline: "Coffre-fort + rappels + modèles holdings",
    points: ["Coffre-fort intragroupe sécurisé","Calendrier obligations groupe","Modèles conventions & PV","Support email"], highlight: true },
  { name: "Abonnement Premium", price: "Sur devis", tagline: "+ Suivi fiscal & consolidation",
    points: ["Suivi intégration fiscale","Rapports trimestriels de conformité","Sessions expert fiscal/juridique","Support prioritaire"] }
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
            <a href="/produit" className="hover:opacity-70">Produit</a>
            <a href="#features" className="hover:opacity-70">Fonctionnalités</a>
            <a href="#pricing" className="hover:opacity-70">Offres</a>
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
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight">
              Le SaaS spécialisé dans les holdings et l'intégration fiscale
            </motion.h1>
            <p className="mt-5 text-slate-600 text-lg">
              Un audit unique pour sécuriser vos conventions mère-fille et votre intégration fiscale. Puis un abonnement pour centraliser vos documents, suivre vos obligations et piloter vos flux intragroupe.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
                Voir les offres <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#calendly" className="inline-flex items-center px-5 py-3 rounded-2xl border hover:bg-slate-100">
                Réserver un diagnostic (30 min)
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Audit livré sous 5 jours</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Rappels AG & dépôts automatiques</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Données hébergées dans l'UE</div>
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
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-5 bg-white">
              <f.icon className="w-7 h-7" />
              <div className="text-lg font-semibold mt-2">{f.title}</div>
              <div className="text-slate-600 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Offres</h2>
        <p className="text-slate-600 mt-2">Commencez par un audit, passez à l'abonnement pour un suivi continu.</p>
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
                Discuter de cette offre
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
              <div className="text-slate-600">Nous n'exerçons pas la profession d'avocat. Les actes/avis personnalisés sont réalisés par nos avocats partenaires si nécessaire.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Couverture fiscale ?</div>
              <div className="text-slate-600">Cadrage intégration fiscale et obligations groupe. Pour l'optimisation pointue, nous travaillons avec fiscalistes/experts partenaires.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Mes données sont-elles en sécurité ?</div>
              <div className="text-slate-600">Hébergement UE, chiffrement, accès restreints, DPA disponible. Suppression des données sur demande.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Puis-je commencer uniquement par l'audit ?</div>
              <div className="text-slate-600">Oui. L'audit est indépendant. Vous pourrez basculer sur un abonnement ensuite si besoin.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Parlons de votre projet de holding</h2>
        <p className="text-slate-600 mt-2">Laissez vos coordonnées et recevez une proposition sous 72h, ou réservez un créneau.</p>

        <form action={FORMSPREE_ENDPOINT} method="POST" className="mt-8 grid gap-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Nom" required aria-label="Nom" className="border rounded-2xl px-3 py-2" />
            <input name="email" type="email" placeholder="Email" required aria-label="Email" className="border rounded-2xl px-3 py-2" />
          </div>
          <input name="sector" placeholder="Secteur / CA / nb de filiales" aria-label="Infos groupe" className="border rounded-2xl px-3 py-2" />
          <textarea name="message" placeholder="Décrivez vos besoins (audit, conventions, intégration, suivi)" rows={5} aria-label="Message" required className="border rounded-2xl px-3 py-2" />
          <input type="hidden" name="_next" value="https://hold-site.vercel.app/merci" />
          <div className="grid md:grid-cols-2 gap-3">
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
              Obtenir un diagnostic gratuit
            </button>
            <a href="#calendly" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-2xl border hover:bg-slate-100">
              Réserver un diagnostic
            </a>
          </div>
        </form>
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
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} HOLD. Tous droits réservés.</div>
          <div className="flex gap-4">
            <a href="/produit" className="hover:opacity-70">Produit</a>
            <a href="#" className="hover:opacity-70">Mentions légales</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
