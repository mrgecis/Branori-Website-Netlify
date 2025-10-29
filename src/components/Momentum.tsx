import { TurnaroundAnimation } from './TurnaroundAnimation'

const features = [
  'Distressed buy‑outs',
  'Carve‑outs',
  'Negative purchase price',
  'Rapid cash control',
  'AI strategy',
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
              <p className="text-muted-foreground text-[13px] md:text-[15px]">
                We turn distressed equity into value.
              </p>
              <div className="mt-3 md:mt-3 flex flex-wrap gap-1.5">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center py-1.5 px-2.5 md:py-2 md:px-3 rounded-full border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.08)] whitespace-nowrap text-[12px] md:text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-[13px] md:text-[15px] leading-relaxed">
                <strong>Positioning:</strong> We advise investors. We are not a fund. We deliver
                the plan and lead execution so that the asset emerges stabilized, focused and
                investable.
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
