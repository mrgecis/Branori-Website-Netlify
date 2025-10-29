export function GlobalReach() {
  return (
    <section id="global" className="pt-[40px] pb-[20px] md:pt-[70px] md:pb-[30px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
          <div
            className="reveal order-2 md:order-1"
            style={{
              width: '100%',
              maxWidth: '600px',
              aspectRatio: '1 / 1',
              margin: '0 auto',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))',
            }}
          >
            <svg
              className="w-full h-full md:scale-100 scale-[1.3]"
              style={{ overflow: 'visible' }}
              viewBox="0 0 500 500"
              aria-label="Global Network"
            >
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#b1c8ff" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#cabad" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#111827" stopOpacity="0" />
                </radialGradient>
                <filter id="globeSoft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" />
                </filter>
              </defs>

              <circle cx="250" cy="250" r="135" fill="url(#globeGlow)" filter="url(#globeSoft)" />

              <g style={{ animation: 'spin 25s linear infinite', transformOrigin: '250px 250px' }}>
                <circle
                  cx="250"
                  cy="250"
                  r="125"
                  fill="none"
                  stroke="rgba(177,200,255,.08)"
                  strokeWidth="0.8"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="100"
                  fill="none"
                  stroke="rgba(177,200,255,.06)"
                  strokeWidth="0.8"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="75"
                  fill="none"
                  stroke="rgba(177,200,255,.06)"
                  strokeWidth="0.8"
                />

                <g
                  style={{
                    animation: 'spin 35s linear infinite reverse',
                    transformOrigin: '250px 250px',
                  }}
                >
                  <ellipse
                    cx="250"
                    cy="250"
                    rx="125"
                    ry="125"
                    fill="none"
                    stroke="rgba(177,200,255,.05)"
                    strokeWidth="0.8"
                  />
                  <ellipse
                    cx="250"
                    cy="250"
                    rx="125"
                    ry="60"
                    fill="none"
                    stroke="rgba(177,200,255,.06)"
                    strokeWidth="0.8"
                  />
                  <ellipse
                    cx="250"
                    cy="250"
                    rx="60"
                    ry="125"
                    fill="none"
                    stroke="rgba(177,200,255,.06)"
                    strokeWidth="0.8"
                  />
                </g>
              </g>

              <g>
                <circle cx="296" cy="246" r="4" fill="rgba(177,200,255,.9)" />
                <circle
                  cx="296"
                  cy="246"
                  r="9"
                  fill="none"
                  stroke="rgba(177,200,255,.5)"
                  strokeOpacity="0.8"
                >
                  <animate attributeName="r" values="9;16;9" dur="2.4s" repeatCount="indefinite" />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.8;0.2;0.8"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="306"
                  y="242"
                  style={{
                    font: '500 11px Inter,system-ui,Arial',
                    fill: 'rgba(177,200,255,.9)',
                  }}
                >
                  Limassol
                </text>
              </g>

              <g style={{ opacity: 0.6 }}>
                <line
                  x1="300"
                  y1="246"
                  x2="385"
                  y2="215"
                  style={{ stroke: 'rgba(177,200,255,.3)', strokeWidth: 1 }}
                />
                <line
                  x1="296"
                  y1="246"
                  x2="375"
                  y2="270"
                  style={{ stroke: 'rgba(177,200,255,.3)', strokeWidth: 1 }}
                />
                <line
                  x1="296"
                  y1="246"
                  x2="355"
                  y2="315"
                  style={{ stroke: 'rgba(177,200,255,.3)', strokeWidth: 1 }}
                />
                <line
                  x1="296"
                  y1="246"
                  x2="140"
                  y2="230"
                  style={{ stroke: 'rgba(177,200,255,.3)', strokeWidth: 1 }}
                />
              </g>

              <g style={{ font: '500 12px Inter,system-ui,Arial' }}>
                <g transform="translate(395,205)">
                  <rect
                    rx="8"
                    ry="8"
                    width="75"
                    height="24"
                    fill="rgba(255,255,255,.05)"
                    stroke="rgba(177,200,255,.2)"
                    strokeWidth="0.8"
                  />
                  <text x="8" y="16" fill="rgba(177,200,255,.8)">
                    Europe
                  </text>
                </g>
                <g transform="translate(365,260)">
                  <rect
                    rx="8"
                    ry="8"
                    width="95"
                    height="24"
                    fill="rgba(255,255,255,.05)"
                    stroke="rgba(177,200,255,.2)"
                    strokeWidth="0.8"
                  />
                  <text x="8" y="16" fill="rgba(177,200,255,.8)">
                    Middle East
                  </text>
                </g>
                <g transform="translate(335,315)">
                  <rect
                    rx="8"
                    ry="8"
                    width="75"
                    height="24"
                    fill="rgba(255,255,255,.05)"
                    stroke="rgba(177,200,255,.2)"
                    strokeWidth="0.8"
                  />
                  <text x="8" y="16" fill="rgba(177,200,255,.8)">
                    Asia
                  </text>
                </g>
                <g transform="translate(50,220)">
                  <rect
                    rx="8"
                    ry="8"
                    width="80"
                    height="24"
                    fill="rgba(255,255,255,.05)"
                    stroke="rgba(177,200,255,.2)"
                    strokeWidth="0.8"
                  />
                  <text x="8" y="16" fill="rgba(177,200,255,.8)">
                    America
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <div className="reveal order-1 md:order-2">
            <h2 className="text-[22px] md:text-[28px] font-semibold mb-3">
              Limassol Hub
            </h2>
            <p className="text-muted-foreground mb-5 text-[13px] md:text-[15px] leading-relaxed">
              Branori operates from Limassol — strategically positioned at the intersection of
              Europe, Middle East, and Asia. From here, we connect dealflow, talent, and markets
              across three time zones with rapid decision-making.
            </p>

            <div className="grid gap-2.5 md:gap-3 mt-4">
              <div className="bg-[oklch(1_0_0_/_0.04)] border border-[oklch(0.78_0.12_250_/_0.15)] py-2.5 px-3 md:py-3 md:px-3.5 rounded-[12px] md:rounded-[14px] text-[12px] md:text-[13px] font-medium text-[oklch(1_0_0_/_0.8)]">
                <span className="text-[oklch(0.78_0.12_250_/_0.9)]">●</span>{' '}
                <strong>3-Region Coverage:</strong> Europe · Middle East · Asia
              </div>
              <div className="bg-[oklch(1_0_0_/_0.04)] border border-[oklch(0.78_0.12_250_/_0.15)] py-2.5 px-3 md:py-3 md:px-3.5 rounded-[12px] md:rounded-[14px] text-[12px] md:text-[13px] font-medium text-[oklch(1_0_0_/_0.8)]">
                <span className="text-[oklch(0.78_0.12_250_/_0.9)]">●</span>{' '}
                <strong>AI Hub:</strong> Limassol — one of Europe's emerging AI centers
              </div>
              <div className="bg-[oklch(1_0_0_/_0.04)] border border-[oklch(0.78_0.12_250_/_0.15)] py-2.5 px-3 md:py-3 md:px-3.5 rounded-[12px] md:rounded-[14px] text-[12px] md:text-[13px] font-medium text-[oklch(1_0_0_/_0.8)]">
                <span className="text-[oklch(0.78_0.12_250_/_0.9)]">●</span>{' '}
                <strong>Framework:</strong> EU jurisdiction, English business practice
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
