'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HowItWorks from '@/components/HowItWorks';

export default function LeadershipSummitPage() {
  return (
    <div className="min-h-screen bg-brand-bg-light">
      <div className="relative overflow-hidden bg-white min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/climb3.jpeg"
            alt="Sky & Soul Leadership Summit at Kilimanjaro"
            fill
            sizes="100vw"
            quality={100}
            priority
            className="object-cover object-bottom scale-[1.03] contrast-[1.05] brightness-[1.02]"
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
              <h2 className="text-3xl sm:text-4xl font-comfortaa font-bold text-stone-600">Sky & Soul Leadership Summit</h2>
              <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
                <p>The Sky & Soul Leadership Summit is a 12-day executive leadership experience designed for leaders, entrepreneurs and decision-makers who are ready to step beyond routine and invest in their personal and professional growth.</p>
                <p>Set on Africa&apos;s highest free-standing mountain, the experience combines a guided Kilimanjaro ascent with leadership development, mindfulness, breathwork and intentional reflection. Every stage of the journey is carefully designed to create space for perspective, resilience, self-awareness and authentic leadership.</p>
                <p>The journey begins with arrival and preparation before participants embark on a nine-day ascent via the Lemosho Route. More than a route to the summit, the mountain offers a unique environment to slow down, reflect, listen, challenge assumptions and reconnect with what truly matters in leadership.</p>
                <div className="grid gap-4 sm:grid-cols-2 my-2">
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb4.jpeg" alt="Leadership summit preparation view" fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} className="object-cover scale-[1.03] contrast-[1.05] brightness-[1.02]" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb5.jpeg" alt="Leadership summit mountain trail view" fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} className="object-cover scale-[1.03] contrast-[1.05] brightness-[1.02]" />
                  </div>
                </div>
                <p>Throughout the journey, experienced mountain professionals and Sky & Soul facilitators guide both the ascent and the leadership experience. Through facilitated leadership sessions, mindfulness practices, breathwork and structured reflection, participants explore how they lead through challenge, uncertainty and change. The mountain provides the environment; Sky & Soul provides the framework that transforms each experience into lasting leadership development.</p>
                <p>The experience concludes with dedicated time for integration, ensuring that insights gained on the mountain become practical tools for everyday leadership, decision-making and collaboration.</p>
                <p>Participants return with more than the achievement of reaching Africa&apos;s highest free-standing mountain. They return with renewed clarity, deeper self-awareness and practical leadership insights that continue to shape the way they lead long after the journey has ended.</p>
                <div className="grid gap-4 sm:grid-cols-2 my-2">
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb2.jpeg" alt="Leadership summit trail view" fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} className="object-cover scale-[1.03] contrast-[1.05] brightness-[1.02]" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl border border-brand-border">
                    <Image src="/climb3.jpeg" alt="Leadership summit mountain view" fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} className="object-cover scale-[1.03] contrast-[1.05] brightness-[1.02]" />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-[#099990]">Executive Leadership</span>
                <h3 className="mt-4 text-2xl font-semibold text-stone-600">A guided ascent with purpose</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  The summit journey combines mountain challenge with facilitated reflection, creating a powerful environment for leadership growth.
                </p>
              </div>
              <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
                <span className="text-sm uppercase tracking-[0.3em] text-[#099990]">Integration</span>
                <h3 className="mt-4 text-2xl font-semibold text-stone-600">Insights that continue after the climb</h3>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                  Structured integration ensures the lessons from the mountain become practical tools for everyday leadership and collaboration.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-8 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#099990]">Why Sky & Soul</p>
              <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                This offering is for people who want Kilimanjaro&apos;s wisdom without limiting the journey to the summit. It honors the mountain&apos;s energy through presence, practice, and expanded perspective.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#099990]">Intention</p>
                <p className="mt-2 text-base text-stone-600">Move with awareness, not just distance.</p>
              </div>
              <div className="rounded-2xl bg-brand-secondary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#099990]">Connection</p>
                <p className="mt-2 text-base text-stone-600">Feel the mountain&apos;s guidance through breath and presence.</p>
              </div>
              <div className="rounded-2xl bg-brand-primary/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-[#099990]">Choice</p>
                <p className="mt-2 text-base text-stone-600">Choose the experience that fits your path, whether on or off the mountain.</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12 overflow-hidden rounded-3xl border border-[#099990]/25 bg-gradient-to-br from-[#0f6f6c] via-[#099990] to-[#7ecbc5] p-6 shadow-[0_18px_50px_rgba(9,153,144,0.18)] sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#dff8f5]">Program</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-comfortaa font-bold text-stone-200">
              The Sky &amp; Soul Experience
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white">
              A 12-day leadership journey shaped to move from arrival and preparation into expedition, reflection, and lasting integration.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/12 bg-white/8 p-5 min-h-[240px] shadow-sm backdrop-blur-md">
              <div className="max-w-3xl">
                <h4 className="text-lg font-semibold text-stone-200">Day 1 | Arrival &amp; Opening</h4>
                <p className="mt-2 text-sm leading-6 text-white"><span className="font-semibold text-white">Arrival:</span> Kilimanjaro International Airport (JRO) or Arusha Airport (ARK)</p>
                <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Accommodation:</span> Melia Arusha</p>
                <p className="mt-2 text-sm leading-6 text-white">Arrive in Tanzania and transfer to Melia Arusha. The evening marks the official start of the Sky &amp; Soul Leadership Journey. During our Networking Cocktail and opening session, you will meet the group, discover the journey ahead and be introduced to the practical leadership, mindfulness and performance tools that will accompany you throughout the experience.</p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-5 shadow-sm backdrop-blur-md">
                <h4 className="text-lg font-semibold text-stone-200">Day 2 | Building Your Leadership Toolkit</h4>
                <p className="mt-2 text-sm leading-6 text-white"><span className="font-semibold text-white">Accommodation:</span> Melia Arusha</p>
                <p className="mt-2 text-sm leading-6 text-white">Great expeditions begin with preparation. Today combines expedition planning and equipment preparation with an immersive leadership experience designed to prepare both body and mind. Together, we explore practical tools for focus, resilience, decision making and self leadership. By the end of the day, you will have a toolkit that supports you on the mountain and long after you return home.</p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/8 p-5 shadow-sm backdrop-blur-md">
                <h4 className="text-lg font-semibold text-stone-200">Day 3 | The Mountain Takes Over</h4>
                <p className="mt-2 text-sm leading-6 text-white"><span className="font-semibold text-white">Route:</span> Londorossi Gate to Mti Mkubwa Camp</p>
                <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Mti Mkubwa Camp</p>
                <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 2,650 m | 8,694 ft</p>
                <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 3 to 4 hours</p>
                <p className="mt-2 text-sm leading-6 text-white">After breakfast, we travel to Kilimanjaro National Park, where the climb begins. From this point forward, the mountain becomes your learning environment. Supported by our experienced mountain team, guided audio sessions, daily reflections and practical exercises accompany your journey, turning every challenge into an opportunity to learn through experience.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/8 p-6 sm:p-8 min-h-[420px] shadow-sm backdrop-blur-md">
              <div>
                <h4 className="text-lg font-semibold text-stone-200">Days 4–8 | The Mountain Becomes Your Teacher</h4>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white">From the first high camp to the approach of summit day, the mountain invites a deeper leadership practice: awareness, steadiness, patience, and trust under pressure.</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 4 | Expanding Your Perspective</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Shira One Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 3,500 m | 11,500 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 5 to 6 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">Leaving the rainforest behind, the landscape opens dramatically. As the altitude changes, so does your perspective. Every stage of the climb introduces a new leadership principle, inviting you to strengthen awareness, focus and the ability to lead yourself before leading others. Guided reflections and practical exercises help translate every experience on the mountain into insights that last far beyond the expedition.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 5 | Leading Through Challenge</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Shira Cathedral Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 3,900 m | 12,800 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 4 to 5 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">As the environment becomes more demanding, resilience, adaptability and conscious decision making become increasingly important. Rather than avoiding challenges, you learn to work with them. Every stage of the climb becomes an opportunity to strengthen the mindset and habits that define exceptional leadership.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 6 | Strength Through Stability</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Moir Hut</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 4,200 m | 13,800 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 5 to 6 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">Progress is no longer measured by speed but by consistency. Higher altitude rewards calm thinking, clear priorities and trust in your own judgement. Through guided practices and reflection, you discover how stability under pressure becomes one of the most valuable leadership skills.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 7 | Seeing Beyond the Obvious</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Buffalo Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 4,000 m | 13,100 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 5 to 6 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">With breathtaking views across the mountain, the invitation is to slow down and observe. Great leaders rarely react to everything around them. They notice patterns, create space for better decisions and act with intention. The mountain offers the perfect environment to practice exactly that.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm md:col-span-2 xl:col-span-1">
                    <p className="text-sm font-semibold text-stone-200">Day 8 | Embracing the Unknown</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Third Cave Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 3,900 m | 12,800 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 4 to 5 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">As summit day approaches, recovery becomes preparation. Curiosity, flexibility and openness replace control, allowing both body and mind to adapt to the journey ahead. Some of the strongest leadership insights emerge when we stop trying to control every outcome and learn to work with what the moment offers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/8 p-6 sm:p-8 min-h-[360px] shadow-sm backdrop-blur-md">
              <div>
                <h4 className="text-lg font-semibold text-stone-200">Days 9–12 | Summit, Recovery, and Carrying It Forward</h4>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white">The closing stretch moves from the summit itself into recovery, integration, and the return home with clearer purpose and lasting insight.</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 9 | Preparing for the Summit</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Kibo Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 4,700 m | 15,400 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 4 to 5 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">The final day before the summit is intentionally quieter. Body, breath and mind are aligned while the focus shifts from preparation to trust. Everything needed for the ascent has already been built. Tonight is about applying it.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 10 | Reaching the Roof of Africa</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Route:</span> Kibo Camp → Uhuru Peak → Millennium Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Highest Point:</span> 5,895 m | 19,341 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Accommodation:</span> Millennium Camp | 3,800 m | 12,500 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white">In the early hours of the morning, you begin the final ascent to Uhuru Peak, the Roof of Africa. One step at a time, you reach the summit before beginning the descent. Reaching Uhuru Peak is the milestone. The person returning home is the achievement.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 11 | Recovery &amp; Integration</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Mweka Camp</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Altitude:</span> 1,640 m | 5,381 ft</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 3 to 4 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">You return to base, recover, and begin translating the experience into lasting leadership insight.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-stone-200">Day 12 | Carrying It Forward</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Camp:</span> Arusha / Moshi</p>
                    <p className="mt-1 text-sm leading-6 text-white"><span className="font-semibold text-white">Hiking:</span> 0 to 1 hours</p>
                    <p className="mt-1 text-sm leading-6 text-white">The journey closes with reflection, gratitude, and a renewed sense of how the mountain continues to shape leadership long after the climb.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/12 bg-white/8 p-6 sm:p-8 shadow-sm backdrop-blur-md">
            <h4 className="text-lg font-semibold text-stone-200">Your Leadership Journey</h4>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                <h5 className="text-base font-semibold text-stone-200">Before the Mountain</h5>
                <p className="mt-1 text-sm leading-6 text-white">Receive simple preparation practices, reflection prompts and training recommendations before your arrival. An optional Leadership Alignment Call helps you prepare with confidence and clarity.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                <h5 className="text-base font-semibold text-stone-200">Preparation Day</h5>
                <p className="mt-1 text-sm leading-6 text-white">Build your leadership toolkit through practical workshops, mindfulness, expedition preparation and shared experiences. This is where the team is built and the journey truly begins.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                <h5 className="text-base font-semibold text-stone-200">On the Mountain</h5>
                <p className="mt-1 text-sm leading-6 text-white">The mountain becomes your coach. Experienced, certified and coached Guides, along side with guided recordings, practical tools and daily reflections support your experience and growth journey.</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                <h5 className="text-base font-semibold text-stone-200">Beyond the Summit</h5>
                <p className="mt-1 text-sm leading-6 text-white">We offer continuing your development through executive coaching, leadership workshops or peer learning groups, turning mountain insights into lasting leadership impact.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 max-w-5xl px-2 sm:px-0">
          <HowItWorks
            copy={{
              title: 'How It Works',
              intro: 'Every journey begins with a thoughtful conversation and is shaped carefully with you so the experience feels personal, well prepared and meaningful.',
              steps: [
                { title: 'Discovery Call', body: 'Every journey begins with a conversation. Book a complimentary discovery call so we can understand your interests, goals and expectations.' },
                { title: 'Your Personal Proposal', body: 'Based on our conversation, we design a personalised experience tailored to your interests, travel style and desired outcomes.' },
                { title: 'Refine Together', body: 'We review the proposal together and adjust every detail until it perfectly reflects the experience you are looking for.' },
                { title: 'Confirm & Prepare', body: 'Once your journey is confirmed, you receive all practical travel information, preparation guidance and continuous support to ensure you feel confident and well prepared.' },
                { title: 'Experience & Integrate', body: 'Your journey does not end when you leave Tanzania. We encourage reflection, integration and meaningful action so the insights continue to create value long after your journey has ended.' },
              ],
            }}
          />
        </div>

        <div className="mt-12 rounded-3xl border border-brand-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Leadership in motion</p>
              <p className="text-base text-stone-700 leading-relaxed max-w-3xl">
                The summit becomes more than an achievement; it becomes a space to reconnect with clarity, resilience, and the way you lead.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="https://tally.so/r/aQXXq2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary">
                Book Your Discovery Call Here.
              </Link>
              <a
                href="/Sky%20and%20soul%20leadership%20summit.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-brand-primary bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/5"
              >
                Download Flyer
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
