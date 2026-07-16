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
            src="/climb3.jpeg"
            alt="Sky & Soul Leadership Summit at Kilimanjaro"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            style={{ objectPosition: 'center 70%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-secondary/75 to-[#7b4c35]/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80 mb-4">SasaNdioSasa Beyond Safari</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-comfortaa font-black text-white leading-tight tracking-tight">
              Sky & Soul Leadership Summit
            </h1>
            <p className="mt-8 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              A 12-day executive leadership experience designed for leaders, entrepreneurs and decision-makers ready to step beyond routine and invest in growth.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-10">
            <section className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-comfortaa font-bold text-brand-heading">Sky & Soul Leadership Summit</h2>
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
                <p>The Sky & Soul Leadership Summit is a 12-day executive leadership experience designed for leaders, entrepreneurs and decision-makers who are ready to step beyond routine and invest in their personal and professional growth.</p>
                <p>Set on Africa's highest free-standing mountain, the experience combines a guided Kilimanjaro ascent with leadership development, mindfulness, breathwork and intentional reflection. Every stage of the journey is carefully designed to create space for perspective, resilience, self-awareness and authentic leadership.</p>
                <p>The journey begins with arrival and preparation before participants embark on a nine-day ascent via the Lemosho Route. More than a route to the summit, the mountain offers a unique environment to slow down, reflect, listen, challenge assumptions and reconnect with what truly matters in leadership.</p>
                <div className="grid gap-4 sm:grid-cols-2 my-2">
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb4.jpeg" alt="Leadership summit preparation view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb5.jpeg" alt="Leadership summit mountain trail view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
                <p>Throughout the journey, experienced mountain professionals and Sky & Soul facilitators guide both the ascent and the leadership experience. Through facilitated leadership sessions, mindfulness practices, breathwork and structured reflection, participants explore how they lead through challenge, uncertainty and change. The mountain provides the environment; Sky & Soul provides the framework that transforms each experience into lasting leadership development.</p>
                <p>The experience concludes with dedicated time for integration, ensuring that insights gained on the mountain become practical tools for everyday leadership, decision-making and collaboration.</p>
                <p>Participants return with more than the achievement of reaching Africa's highest free-standing mountain. They return with renewed clarity, deeper self-awareness and practical leadership insights that continue to shape the way they lead long after the journey has ended.</p>
                <div className="grid gap-4 sm:grid-cols-2 my-2">
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb2.jpeg" alt="Leadership summit trail view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb3.jpeg" alt="Leadership summit mountain view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">Executive Leadership</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">A guided ascent with purpose</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The summit journey combines mountain challenge with facilitated reflection, creating a powerful environment for leadership growth.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-brand-primary">Integration</span>
                <h3 className="mt-4 text-2xl font-semibold text-brand-heading">Insights that continue after the climb</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  Structured integration ensures the lessons from the mountain become practical tools for everyday leadership and collaboration.
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

        <div className="mt-12 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Leadership in motion</p>
              <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
                The summit becomes more than an achievement; it becomes a space to reconnect with clarity, resilience, and the way you lead.
              </p>
            </div>
            <Link href="#" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary">
              Explore if this journey is for you
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
