type HowItWorksCopy = {
  title: string;
  intro: string;
  steps: Array<{
    title: string;
    body: string;
  }>;
};

interface HowItWorksProps {
  copy: HowItWorksCopy;
  compact?: boolean;
}

export default function HowItWorks({ copy, compact = false }: HowItWorksProps) {
  return (
    <section className={compact
      ? 'mx-auto w-full max-w-4xl rounded-[1.25rem] border border-brand-border/80 bg-gradient-to-br from-white via-stone-50 to-brand-menu-hover/80 p-3 shadow-[0_12px_50px_-24px_rgba(36,64,46,0.28)] sm:p-4 lg:p-5'
      : 'mx-auto w-full max-w-5xl rounded-[1.75rem] border border-brand-border/80 bg-gradient-to-br from-white via-stone-50 to-brand-menu-hover/80 p-4 shadow-[0_20px_80px_-32px_rgba(36,64,46,0.28)] sm:p-6 lg:p-7'}>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className={compact ? 'text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-primary' : 'text-[11px] font-semibold uppercase tracking-[0.35em] text-brand-primary'}>
            {copy.title}
          </p>
          <h3 className={compact
            ? 'mt-1 font-comfortaa text-base sm:text-lg text-brand-heading font-bold leading-tight'
            : 'mt-2 font-comfortaa text-lg sm:text-xl lg:text-2xl text-brand-heading font-bold leading-tight'}>
            A clear path from first conversation to lasting impact
          </h3>
          <p className={compact ? 'mt-2 text-sm leading-relaxed text-stone-700' : 'mt-2 text-sm sm:text-base text-stone-700 leading-relaxed'}>
            {copy.intro}
          </p>
        </div>
        <div className={compact
          ? 'inline-flex w-fit items-center rounded-full border border-brand-border bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-primary shadow-sm'
          : 'inline-flex w-fit items-center rounded-full border border-brand-border bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-primary shadow-sm'}>
          5 steps
        </div>
      </div>

      <div className={compact ? 'mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-5' : 'mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5'}>
        {copy.steps.map((step, index) => (
          <div key={step.title} className={compact ? 'flex h-full flex-col rounded-xl border border-brand-border/70 bg-white/90 p-3 shadow-sm' : 'flex h-full flex-col rounded-2xl border border-brand-border/70 bg-white/90 p-4 shadow-sm'}>
            <div className="flex items-center gap-2">
              <div className={compact ? 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-semibold text-brand-primary' : 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary'}>
                {index + 1}
              </div>
              <h4 className={compact ? 'font-comfortaa text-xs sm:text-sm font-semibold text-brand-heading leading-snug' : 'font-comfortaa text-sm sm:text-base font-semibold text-brand-heading leading-snug'}>
                {step.title}
              </h4>
            </div>
            <p className={compact ? 'mt-2 text-xs leading-relaxed text-stone-700' : 'mt-3 text-sm leading-relaxed text-stone-700'}>
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
