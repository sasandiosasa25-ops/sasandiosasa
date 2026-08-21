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
            src="/mountain2.jpg"
            alt="Sky & Soul on Kilimanjaro"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-secondary/75 to-[#7b4c35]/85" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">SasaNdioSasa Paths</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-comfortaa font-black text-white leading-tight tracking-tight">
              Sky &amp; Soul
            </h1>
            <p className="mt-8 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              A mindful journey to the roof of Africa, where the climb, the landscape, and the inner experience come together in one profound expedition.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-10">
            <section className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-comfortaa font-bold text-brand-heading">The Sky &amp; Soul experience</h2>
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
                <p>
                  Sky &amp; Soul is a transformative Kilimanjaro experience that blends adventure, reflection, and{' '}
                  <a
                    href="https://www.sasandiosasa.co.tz/experience/leadership-summit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary underline underline-offset-4 hover:text-brand-secondary"
                  >
                    conscious leadership
                  </a>
                  . It is designed for those who want to go beyond the ordinary and step into a deeper connection with themselves, their purpose, and the world around them.
                </p>
                <p>The journey invites participants to move with intention through a powerful landscape, guided by breath, presence, and shared reflection. Every step on the mountain becomes part of a wider conversation about resilience, awareness, and personal growth.</p>
                <p>What makes Sky &amp; Soul distinctive is the balance between challenge and meaning. The climb offers physical endurance and extraordinary scenery, while the experience creates space for insight, conversation, and lasting perspective.</p>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">On the Mountain</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">A climb with meaning</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The ascent becomes more than a physical challenge. It is a journey of presence, patience, and courage shaped by the mountain and the people walking it together.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">Beyond the Summit</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">Reflection that stays with you</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The experience leaves room for insight, conversation, and practical integration so the lessons of the mountain continue long after the climb ends.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-8 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">Why travellers choose Sky &amp; Soul</p>
              <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                It offers a rare opportunity to pause, reconnect, and return with renewed perspective. The journey is as much inward as it is outward.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Clarity</p>
                <p className="mt-2 text-base text-stone-700">Create space to reflect beyond the demands of everyday life.</p>
              </div>
              <div className="rounded-2xl bg-brand-secondary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-secondary">Presence</p>
                <p className="mt-2 text-base text-stone-700">Move with intention and experience the mountain in a deeper way.</p>
              </div>
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">Transformation</p>
                <p className="mt-2 text-base text-stone-700">Return home with renewed perspective, calm, and purpose.</p>
              </div>
            </div>

            <a
              href="https://skyandsoul.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
            >
              Visit Sky &amp; Soul <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">A journey of meaning and altitude</p>
            <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
              Sky &amp; Soul is a powerful invitation to encounter the mountain with awareness, courage, and a deeper sense of self.
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
