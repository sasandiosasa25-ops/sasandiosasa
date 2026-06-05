'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SkyAndSoulPage() {
  return (
    <div className="min-h-screen bg-brand-bg-light">
      <div className="relative overflow-hidden bg-white min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hema1.jpeg"
            alt="Sky & Soul at Kilimanjaro"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            style={{ objectPosition: 'center 70%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-secondary/75 to-[#7b4c35]/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">SasaNdioSasa Peaks</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-comfortaa font-black text-white leading-tight tracking-tight">
              Sky & Soul
            </h1>
            <p className="mt-8 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              Kilimanjaro is more than a summit. It becomes a space for breath, awareness, reflection, and perspective.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-10">
            <section className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-comfortaa font-bold text-brand-heading">Sky & Soul</h2>
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
                <p>Kilimanjaro is more than a summit. It becomes a space for breath, awareness, reflection, and perspective.</p>
                <p>Sky & Soul includes two different experiences inspired by the mountain and the idea of conscious movement.</p>
                <p>The On-Mountain journey is created for people who want to physically experience Kilimanjaro through a guided expedition in Tanzania. Together with experienced local mountain teams, the journey combines adventure, nature, breathwork, mindfulness, reflection, and personal challenge on Africa’s highest mountain.</p>
                <p>The Off-Mountain experience is designed for people who want to explore the same themes of awareness, routines, breath, mindfulness, and personal movement without climbing the mountain itself. Through guided online sessions and structured practices, participants experience their own journey from wherever they are in the world.</p>
                <p>Both experiences are inspired by the idea that Kilimanjaro can move people far beyond the summit.</p>
              </div>
              <div className="mt-6">
                <a
                  href="https://skyandsoul.co.tz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
                >
                  Explore Sky and Soul
                </a>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">On-Mountain</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">A guided expedition with presence</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  A physical journey on Kilimanjaro, supported by local mountain teams and designed to bring breath, mindfulness, and personal reflection into every step.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">Off-Mountain</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">An inner journey from wherever you are</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  Guided online sessions and structured practices that explore the same themes of awareness, movement, breath, and personal growth without climbing the mountain.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-8 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">Why Sky & Soul</p>
              <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                This offering is for people who want Kilimanjaro’s wisdom without limiting the journey to the summit. It honors the mountain’s energy through presence, practice, and expanded perspective.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Intention</p>
                <p className="mt-2 text-base text-stone-700">Move with awareness, not just distance.</p>
              </div>
              <div className="rounded-2xl bg-brand-secondary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-secondary">Connection</p>
                <p className="mt-2 text-base text-stone-700">Feel the mountain’s guidance through breath and presence.</p>
              </div>
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Choice</p>
                <p className="mt-2 text-base text-stone-700">Choose the experience that fits your path, whether on or off the mountain.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Inspired by Kilimanjaro</p>
            <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
              Sky & Soul is a conversation between mountain and mind. It is an invitation to move more consciously, wherever your journey begins.
            </p>
          </div>
          <Link href="/paths/peaks" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
            Back to Peaks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
