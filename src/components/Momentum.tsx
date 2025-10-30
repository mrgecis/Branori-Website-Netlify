import { TurnaroundAnimation } from './TurnaroundAnimation'

const features = [
  'Distressed buy‑outs',
  'Carve‑outs',
  'Negative purchase price',
  'Rapid cash control',
  'AI strategy',
]

const marketConditions = [
  '💰 Rising interest rates create distressed opportunities',
  '📈 Supply chain disruption affects SME valuations',
  '⚡ Energy costs pressure manufacturing companies',
  '🏦 Bank lending restrictions increase distressed assets',
  '🌍 Geopolitical uncertainty drives portfolio optimization',
  '🤖 AI transformation creates legacy business distress',
]

const opportunityFactors = [
  'Lower competition from traditional PE funds',
  'Motivated sellers with realistic expectations', 
  'Government incentives for business restructuring',
  'Access to skilled workforce from consolidation',
]

export function Momentum() {
  return (
    <section id="momentum" className="py-8 md:py-[70px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal relative rounded-[20px] md:rounded-[26px] p-5 md:p-7 bg-[var(--glass)] border border-[var(--border)] backdrop-blur-[14px] overflow-hidden">
          <div
            className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] left-[-60px] md:left-[-80px] top-[-40px] md:top-[-60px] rounded-full opacity-35 mix-blend-screen animate-[float1_32s_ease-in-out_infinite] md:animate-[float1_18s_ease-in-out_infinite]"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, oklch(0.78 0.12 250), oklch(0.78 0.12 250 / 0))',
              filter: 'blur(70px)',
            }}
          />
          <div
            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] right-[-80px] md:right-[-120px] bottom-[-70px] md:bottom-[-100px] rounded-full opacity-35 mix-blend-screen animate-[float2_38s_ease-in-out_infinite] md:animate-[float2_22s_ease-in-out_infinite]"
            style={{
              background: 'radial-gradient(circle at 60% 60%, #ff8db3, rgba(255,141,179,0))',
              filter: 'blur(70px)',
            }}
          />

          <div className="relative grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-[18px] items-center">
            <div>
              <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">
                Momentum
              </h3>
              <p className="text-muted-foreground text-[13px] md:text-[15px] mb-4">
                We turn distressed equity into value.
              </p>

              {/* Market Opportunity Section */}
              <div className="mb-5 p-4 rounded-xl border border-[oklch(1_0_0_/_0.1)] bg-[oklch(1_0_0_/_0.03)]">
                <h4 className="text-[15px] md:text-[16px] font-semibold mb-3 text-[oklch(0.78_0.12_250)]">
                  🚀 Perfect Market Timing for Distressed M&A
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {marketConditions.map((condition, index) => (
                    <div
                      key={index}
                      className="text-[11px] md:text-[12px] text-muted-foreground leading-relaxed"
                    >
                      {condition}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Advantages */}
              <div className="mb-4 p-4 rounded-xl border border-[oklch(1_0_0_/_0.1)] bg-[oklch(1_0_0_/_0.03)]">
                <h4 className="text-[14px] md:text-[15px] font-semibold mb-2 text-[oklch(0.75_0.10_290)]">
                  ⚡ Current Opportunity Drivers:
                </h4>
                {opportunityFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="text-[11px] md:text-[12px] text-muted-foreground leading-relaxed mb-1"
                  >
                    • {factor}
                  </div>
                ))}
              </div>

              {/* Service Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center py-1.5 px-2.5 md:py-2 md:px-3 rounded-full border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.08)] whitespace-nowrap text-[12px] md:text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Positioning Statement */}
              <div className="mt-4 p-3 rounded-lg border border-[oklch(0.78_0.12_250_/_0.3)] bg-[oklch(0.78_0.12_250_/_0.08)]">
                <div className="text-[12px] md:text-[14px] leading-relaxed">
                  <strong className="text-[oklch(0.78_0.12_250)]">Positioning:</strong> We advise investors. We are not a fund. We deliver
                  the plan and lead execution so that the asset emerges stabilized, focused and
                  investable.
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <TurnaroundAnimation />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(18px); }
          100% { transform: translateY(0); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  )
}
