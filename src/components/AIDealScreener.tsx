import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AIDealScreenerProps {
  variant?: 'hero' | 'contact'
}

export function AIDealScreener({ variant = 'hero' }: AIDealScreenerProps) {
  const [companyName, setCompanyName] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    description: string
    distressLevel: string
    keywords: string[]
  } | null>(null)

  const handleScreen = async () => {
    if (!companyName.trim()) return

    setLoading(true)
    setResult(null)

    try {
      const prompt = `You are an AI assistant analyzing companies for distress signals. Analyze the company "${companyName}" and provide:

1. A brief 1-2 sentence description of what the company does
2. An assessment of how distressed this company might be (use one of: "Low Risk", "Moderate Risk", "High Risk", "Critical")
3. 3-5 relevant keywords about their business

Return the result as a JSON object with properties "description", "distressLevel", and "keywords" (array of strings).`

      const response = await window.spark.llm(prompt, 'gpt-4o-mini', true)
      const data = JSON.parse(response)
      setResult(data)
    } catch (error) {
      setResult({
        description: 'Unable to analyze this company at the moment.',
        distressLevel: 'Unknown',
        keywords: ['Analysis unavailable'],
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleScreen()
    }
  }

  const isContact = variant === 'contact'

  const inputClassName = `rounded-[12px] md:rounded-[14px] border bg-[oklch(1_0_0_/_0.06)] text-foreground px-3.5 py-3 placeholder:text-[oklch(1_0_0_/_0.45)] focus-visible:border-[oklch(0.78_0.12_250_/_0.5)] focus-visible:ring-[oklch(0.78_0.12_250_/_0.12)] focus-visible:ring-[3px] text-base border-[var(--border)]`

  const buttonClassName = `w-full justify-center gap-2 rounded-[12px] md:rounded-[14px] border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.12)] hover:bg-[oklch(1_0_0_/_0.18)] text-foreground px-4 py-3 ${
    isContact ? 'mt-5 md:py-3.5 min-h-[50px] text-[15px]' : ''
  }`

  const getRiskColor = (level: string) => {
    if (level.includes('Low')) return 'oklch(0.75 0.15 145)'
    if (level.includes('Moderate')) return 'oklch(0.78 0.15 85)'
    if (level.includes('High')) return 'oklch(0.75 0.15 45)'
    if (level.includes('Critical')) return 'oklch(0.65 0.20 20)'
    return 'oklch(1 0 0 / 0.6)'
  }

  return (
    <div
      className={`rounded-[16px] md:rounded-[26px] bg-[oklch(1_0_0_/_0.06)] border border-[oklch(1_0_0_/_0.14)] backdrop-blur-[16px] p-3 md:p-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_0_0_1px_oklch(1_0_0_/_0.05)] ${
        isContact ? 'md:p-10' : ''
      }`}
    >
      <div
        className={`rounded-[14px] md:rounded-[22px] border border-[oklch(1_0_0_/_0.14)] bg-[oklch(0.10_0.02_250_/_0.35)] p-4 md:p-[22px] shadow-[inset_0_0_0_1px_oklch(1_0_0_/_0.04)] ${
          isContact ? 'md:p-0 md:border-0 md:bg-transparent md:shadow-none' : ''
        }`}
      >
        <div className="flex items-center gap-2 text-[oklch(1_0_0_/_0.85)] text-[12px] md:text-sm mb-3 md:mb-3.5">
          <MagnifyingGlass size={16} weight="regular" />
          <div>AI Deal Screener</div>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="company-name" className="text-xs text-[oklch(1_0_0_/_0.7)]">
              Company Name
            </Label>
            <Input
              id="company-name"
              type="text"
              placeholder="Enter company name..."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onKeyPress={handleKeyPress}
              className={inputClassName}
              disabled={loading}
            />
          </div>

          <Button
            type="button"
            onClick={handleScreen}
            className={buttonClassName}
            disabled={loading || !companyName.trim()}
          >
            {loading ? 'Analyzing...' : 'Screen Company'}
            <MagnifyingGlass size={16} weight="regular" />
          </Button>

          {result && (
            <div className="space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300 mt-4">
              <div className="p-3 rounded-[12px] md:rounded-[14px] border border-[var(--border)] bg-[oklch(1_0_0_/_0.06)]">
                <div className="text-[11px] text-[oklch(1_0_0_/_0.5)] mb-1">Business</div>
                <div className="text-[13px] md:text-sm text-[oklch(1_0_0_/_0.85)] leading-relaxed">
                  {result.description}
                </div>
              </div>

              <div className="p-3 rounded-[12px] md:rounded-[14px] border border-[var(--border)] bg-[oklch(1_0_0_/_0.06)]">
                <div className="text-[11px] text-[oklch(1_0_0_/_0.5)] mb-1">Distress Assessment</div>
                <div
                  className="text-[13px] md:text-sm font-semibold"
                  style={{ color: getRiskColor(result.distressLevel) }}
                >
                  {result.distressLevel}
                </div>
              </div>

              <div className="p-3 rounded-[12px] md:rounded-[14px] border border-[var(--border)] bg-[oklch(1_0_0_/_0.06)]">
                <div className="text-[11px] text-[oklch(1_0_0_/_0.5)] mb-2">Keywords</div>
                <div className="flex flex-wrap gap-1.5">
                  {result.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center py-1 px-2 rounded-full border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.08)] text-[11px] md:text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="text-[11px] md:text-xs text-muted-foreground mt-2.5">
            AI-powered preliminary assessment. Not investment advice.
          </p>
        </div>
      </div>
    </div>
  )
}
