import { useEffect, useState } from 'react'
import { MagnifyingGlass, FileText, Clock, CheckCircle, Package } from '@phosphor-icons/react'

const steps = [
  {
    icon: MagnifyingGlass,
    label: 'Deal Sourcing',
  },
  {
    icon: Package,
    label: 'Deal Structuring',
  },
  {
    icon: FileText,
    label: 'SPA Creation',
  },
  {
    icon: Clock,
    label: 'Cash Burn Stop',
  },
  {
    icon: CheckCircle,
    label: 'EAT Stabilized',
  },
]

export function RestructuringFlow() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="restructuring"
      className="py-[40px] md:py-[100px] px-5 relative"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="reveal text-[22px] md:text-[28px] font-semibold mb-1.5">
          Restructuring Journey
        </h2>
        <p className="reveal text-muted-foreground mt-1 text-[13px] md:text-[15px] mb-8 md:mb-0">
          From distress to stability in five key steps.
        </p>

        <div className="reveal relative mt-8 md:mt-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,oklch(0.78_0.12_250_/_0.3),transparent)] -translate-y-1/2" />

          <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center items-start gap-x-4 gap-y-8 md:gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center z-[2] flex flex-col items-center max-w-[140px]"
              >
                <div
                  className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full mx-auto mb-2.5 md:mb-[18px] grid place-items-center bg-[oklch(1_0_0_/_0.04)] border backdrop-blur-[20px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
                    index === activeStep
                      ? 'border-[oklch(0.78_0.12_250_/_0.6)] bg-[linear-gradient(135deg,oklch(0.78_0.12_250_/_0.25),oklch(0.75_0.10_290_/_0.15))] shadow-[0_0_30px_oklch(0.78_0.12_250_/_0.4),inset_0_0_20px_oklch(0.78_0.12_250_/_0.1)] scale-115 animate-[softPulse_2s_ease-in-out_infinite]'
                      : 'border-[oklch(1_0_0_/_0.1)]'
                  }`}
                >
                  <step.icon
                    size={28}
                    weight="regular"
                    className={`transition-all duration-500 ${
                      index === activeStep
                        ? 'text-[var(--brand-blue)] drop-shadow-[0_0_8px_oklch(0.78_0.12_250_/_0.5)]'
                        : 'text-[oklch(1_0_0_/_0.6)]'
                    }`}
                  />
                </div>
                <div
                  className={`text-[11px] md:text-[14px] tracking-wide font-medium transition-all duration-500 whitespace-nowrap ${
                    index === activeStep
                      ? 'text-[var(--brand-blue)] font-semibold'
                      : 'text-[oklch(1_0_0_/_0.65)]'
                  }`}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes softPulse {
          0%, 100% {
            box-shadow: 0 0 30px oklch(0.78 0.12 250 / 0.4), inset 0 0 20px oklch(0.78 0.12 250 / 0.1);
          }
          50% {
            box-shadow: 0 0 40px oklch(0.78 0.12 250 / 0.6), inset 0 0 25px oklch(0.78 0.12 250 / 0.15);
          }
        }
      `}</style>
    </section>
  )
}
