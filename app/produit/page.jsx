// app/produit/page.jsx

"use client";

import { motion } from "framer-motion";
import { FolderLock, CalendarDays, Files, Shield, BarChart3, Workflow, ArrowRight, Check, Sparkles } from "lucide-react";

const BRAND = "HOLD — Holdings & Fiscal Ops";
const CALENDLY_URL = "https://calendly.com/zeribi-antoine/30min";

const modules = [
  {
    icon: FolderLock,
    title: "Coffre‑fort intragroupe",
    bullets: [
      "Centralisation : statuts, PV d'AG, conventions, liasses, registres",
      "Versionning + tags + recherche plein texte",
      "Partage sécurisé avec droits par entité"
    ]
  },
  {
    icon: CalendarDays,
    title: "Calendrier d'échéances",
    bullets: [
      "AG approbation, dépôts des comptes, liasse fiscale",
      "TVA/URSSAF/IS, marques, baux, assurances",
      "Rappels automatiques + export ICS"
    ]
  },
  {
    icon: Files,
    title: "Conventions intragroupe",
    bullets: [
      "Modèles: mère‑fille, trésorerie, management fees",
      "Workflows de validation + pistes d'audit",
      "Tableau de bord de conformité"
    ]
  },
  {
    icon: BarChart3,
    title: "Suivi fiscal & flux",
    bullets: [
      "Vue intégration fiscale (base, neutralisations)",
      "Cartographie des flux (dividendes, avances, intérêts)",
      "Exports CSV/Excel et data room prête"
    ]
  },
  {
    icon: Shield,
    title: "Gouvernance & risques",
    bullets: [
      "Journal des risques avec propriétaires et échéances",
      "Plan d'actions priorisé et suivi",
      "Journal d'audit / CAC"
    ]
  },
  {
    icon: Workflow,
    title: "Automations",
    bullets: [
      "Checklists récurrentes (mensuel/trimestriel/annuel)",
      "Tâches assignables et rappels",
      "Webhooks / Zapier (sur demande)"
    ]
  }
];

const comparisons = [
  { label: "Cadrage holdings (mère‑fille, intégration)", hold: true, cabinet: "selon dossier" },
  { label: "Calendrier obligations groupe intégré", hold: true, cabinet: false },
  { label: "Coffre‑fort + traçabilité intragroupe", hold: true, cabinet: "partiel" },
  { label: "Workflows & modèles prêts à l'emploi", hold: true, cabinet: "variable" },
  { label: "Vue flux intra‑groupe & exports", hold: true, cabinet: false }
];

export default function ProduitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Sub‑header */}
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-5 h-5" /> <a href="/" className="hover:opacity-80">{BRAND}</a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/#pricing" className="hover:opacity-70">Offres</a>
            <a href="/#faq" className="hover:opacity-70">FAQ</a>
            <a href={CALENDLY_URL} className="hover:opacity-70">Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight">
              La boîte à outils des holdings : documents, échéances, intégration & conformité
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">Tout ce qu'il faut pour exploiter proprement une holding multi‑entités, sans tableurs dispersés ni mails perdus.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CALENDLY_URL} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">Voir une démo <ArrowRight className="w-4 h-4" /></a>
              <a href="/#pricing" className="inline-flex items-center px-5 py-3 rounded-2xl border hover:bg-slate-100">Tarifs</a>
            </div>
            <div className="mt-4 text-sm text-slate-500 flex gap-4">
              <span className="flex items-center gap-2"><Check className="w-4 h-4"/> Données hébergées dans l'UE</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4"/> Export data room</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border">
            <div className="grid md:grid-cols-2 gap-4">
              {modules.map((m) => (
                <div key={m.title} className="rounded-2xl border p-4">
                  <m.icon className="w-6 h-6" />
                  <div className="text-base font-semibold mt-2">{m.title}</div>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Pourquoi HOLD vs cabinet traditionnel ?</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2 pr-4">Capacité</th>
                <th className="py-2 pr-4">HOLD</th>
                <th className="py-2">Cabinet traditionnel</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.label} className="border-t">
                  <td className="py-3 pr-4">{row.label}</td>
                  <td className="py-3 pr-4">{row.hold ? <span className="inline-flex items-center gap-1"><Check className="w-4 h-4"/>Oui</span> : "—"}</td>
                  <td className="py-3">{typeof row.cabinet === "string" ? row.cabinet : row.cabinet ? "Oui" : "Non"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Feuille de route</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Q4 • Import automatique</div>
              <div className="text-slate-600 text-sm">Lecture des dépôts BODACC/INPI, import RCS, OCR contrats et indexation.</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Q1 • Connecteurs comptables</div>
              <div className="text-slate-600 text-sm">Exports normalisés + webhooks vers logiciels compta (sur demande).</div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Q2 • Module consolidation</div>
              <div className="text-slate-600 text-sm">Guides pas‑à‑pas, éliminations intragroupe, packs de travail CAC.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité & conformité */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Sécurité & conformité</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-slate-600">
          <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>Hébergement UE, chiffrement en transit</li>
          <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>Contrats de sous‑traitance (DPA) disponibles</li>
          <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>Journal d'audit et sauvegardes</li>
          <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5"/>Suppression des données sur demande</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Prêt à sécuriser votre holding ?</h2>
        <p className="text-slate-600 mt-2">Commencez par un audit unique, puis activez les modules dont vous avez besoin.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={CALENDLY_URL} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">Réserver une démo <ArrowRight className="w-4 h-4" /></a>
          <a href="/#pricing" className="inline-flex items-center px-5 py-3 rounded-2xl border hover:bg-slate-100">Voir les offres</a>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} HOLD. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
