import {
  MagnifyingGlass,
  FileText,
  SquaresFour,
  Wrench,
  GitMerge,
  Compass,
} from '@phosphor-icons/react'

const services = [
  {
    icon: MagnifyingGlass,
    title: 'AI Deal Sourcing',
    description:
      'Pattern‑matching for distress signals, automated target scoring, pipeline heatmaps.',
  },
  {
    icon: FileText,
    title: 'Due Diligence',
    description:
      'Red‑flag and focused diligence for loss‑makers; operations, contracts, cash, labor.',
  },
  {
    icon: SquaresFour,
    title: 'M&A & Deal Structuring',
    description:
      'Design for negative purchase price, ring‑fencing risk, carve‑out perimeter, TSA.',
  },
  {
    icon: Wrench,
    title: 'Turnaround Planning',
    description: 'Cash control (13‑week), cost‑out, footprint/FTE, supplier resets — executed fast.',
  },
  {
    icon: GitMerge,
    title: 'Post‑Merger Integration',
    description: '100‑day plan, leadership cadence, cash KPIs, TSA exit with minimal disruption.',
  },
  {
    icon: Compass,
    title: 'Corporate Development',
    description: 'Long‑term value path: portfolio strategy, bolt‑ons, pricing, exit readiness.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-8 md:py-[70px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="reveal text-[22px] md:text-[28px] font-semibold mb-1.5">
          Services for Distressed Investors
        </h2>
        <p className="reveal text-muted-foreground mt-1 mb-6 md:mb-0 text-[13px] md:text-[15px]">
          Purpose‑built for negative purchase price and loss‑making assets.
        </p>

        <div className="mt-6 md:grid md:grid-cols-3 md:gap-[18px] flex md:flex-none overflow-x-auto overflow-y-hidden md:overflow-visible gap-[14px] snap-x snap-mandatory md:snap-none pb-2 md:pb-0">
          {services.map((service, index) => (
            <article
              key={index}
              className="reveal rounded-[14px] md:rounded-[18px] bg-[var(--glass)] border border-[var(--border)] backdrop-blur-[12px] p-4 md:p-5 transition-all duration-250 hover:translate-y-[-3px] hover:bg-[oklch(1_0_0_/_0.09)] min-w-[260px] max-w-[260px] md:min-w-0 md:max-w-none snap-start flex flex-col shrink-0 first:ml-0 last:mr-0"
            >
              <div className="w-14 h-14 rounded-[16px] grid place-items-center bg-[oklch(1_0_0_/_0.06)] border border-[var(--border)] mb-2.5 shrink-0">
                <service.icon size={26} weight="regular" className="opacity-90" />
              </div>
              <h3 className="text-base font-semibold mb-1.5">{service.title}</h3>
              <p className="text-muted-foreground text-[13px] md:text-[15px] leading-[1.5]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
