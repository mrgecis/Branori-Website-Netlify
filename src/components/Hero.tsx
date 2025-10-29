import { AIDealScreener } from './AIDealScreener'

export function Hero() {
  return (
    <section className="pt-[120px] md:pt-[160px] pb-8 md:pb-10 px-5">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-7 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 text-[oklch(1_0_0_/_0.8)] text-[11px] md:text-xs rounded-full py-1.5 md:py-2 px-2.5 md:px-3 bg-[oklch(1_0_0_/_0.06)] border border-[oklch(1_0_0_/_0.12)]">
            AI‑Powered · Distressed M&amp;A for PE
          </div>
          <h1 className="text-[42px] md:text-[52px] leading-[1.15] md:leading-[1.08] mt-4 md:mt-3 mb-3 md:mb-2 font-bold">
            We turn{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--brand-blue), oklch(0.75 0.10 290), var(--brand-peach))',
              }}
            >
              distressed equity
            </span>{' '}
            into value.
          </h1>
          <p className="text-muted-foreground max-w-[720px] text-[14px] md:text-[15px] leading-[1.65] md:leading-[1.6]">
            AI‑powered advisory for distressed buy‑outs and carve‑outs across Europe, Asia and the
            USA. We advise PE investors on Deal Sourcing, Due Diligence, Transaction Structuring,
            Operational Restructuring and Post-Merger Integration in SME Acquisitions.
          </p>
          <div className="flex gap-3 flex-wrap mt-5">
            <a
              href="#services"
              className="hidden md:inline-flex items-center gap-2 py-3 px-4 rounded-[14px] border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.12)] text-foreground hover:bg-[oklch(1_0_0_/_0.18)] transition-colors"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="reveal">
          <AIDealScreener variant="hero" />
        </div>
      </div>
    </section>
  )
}
