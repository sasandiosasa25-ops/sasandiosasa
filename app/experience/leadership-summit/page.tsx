'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LeadershipSummitPage() {
  return (
    <div className="min-h-screen bg-brand-bg-light">
      <div className="relative overflow-hidden bg-white min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/mountain2.jpg"
            alt="Leadership Summit on Kilimanjaro"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-secondary/75 to-[#7b4c35]/85" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">SasaNdioSasa Beyond Safari</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-comfortaa font-black text-white leading-tight tracking-tight">
              Leadership Summit
            </h1>
            <p className="mt-8 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              A conscious leadership experience on Kilimanjaro, shaped by breath, reflection, and perspective.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-10">
            <section className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-comfortaa font-bold text-brand-heading">The Leadership Summit</h2>
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
                <p>The Leadership Summit is a guided experience on Kilimanjaro for leaders who want to step away from the noise of everyday responsibility and reconnect with clarity, purpose, and presence.</p>
                <p>It combines the physical challenge of the mountain with mindful movement, breathwork, reflection, and meaningful conversation. In that setting, leadership becomes less reactive and more grounded.</p>
                <p>Participants walk together through a powerful environment, have space to reflect, and return with fresh perspective that can support both personal growth and professional impact.</p>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">On the Mountain</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">A guided ascent with intention</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The climb becomes a shared practice of endurance, breath, and grounded leadership. Each step invites presence, patience, and trust in the group.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">Beyond the Summit</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">Reflection that continues after the climb</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The experience leaves room for dialogue, personal insight, and practical integration so leaders return home with renewed clarity and steady direction.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-8 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">Why leaders choose this summit</p>
              <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                It offers a rare setting to pause, reconnect, and return with sharper perspective. The mountain becomes a mirror for resilience, humility, and conscious leadership.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Clarity</p>
                <p className="mt-2 text-base text-stone-700">Create space to think beyond the pressure of your everyday role.</p>
              </div>
              <div className="rounded-2xl bg-brand-secondary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-secondary">Resilience</p>
                <p className="mt-2 text-base text-stone-700">Build steadiness through challenge, breath, and shared support.</p>
              </div>
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Presence</p>
                <p className="mt-2 text-base text-stone-700">Return to leadership with more awareness, intention, and calm.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">A summit for leaders</p>
            <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
              This is more than a climb. It is a journey into clarity, courage, and conscious leadership.
            </p>
          </div>
          <Link href="/experience" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors">
            Back to Beyond Safari <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
