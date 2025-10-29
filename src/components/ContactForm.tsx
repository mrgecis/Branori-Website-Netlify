import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ContactFormProps {
  variant?: 'hero' | 'contact'
}

export function ContactForm({ variant = 'hero' }: ContactFormProps) {
  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  })

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleContinue = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !validateEmail(formData.email),
    }
    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email) {
      setStep(2)
    }
  }

  const handleSubmit = () => {
    if (formData.company) return
    setStep('done')
  }

  const formId = variant === 'hero' ? 'hero-form' : 'contact-form'
  const isContact = variant === 'contact'

  const inputClassName = (hasError = false) =>
    `rounded-[12px] md:rounded-[14px] border bg-[oklch(1_0_0_/_0.06)] text-foreground px-3.5 py-3 placeholder:text-[oklch(1_0_0_/_0.45)] focus-visible:border-[oklch(0.78_0.12_250_/_0.5)] focus-visible:ring-[oklch(0.78_0.12_250_/_0.12)] focus-visible:ring-[3px] text-base ${
      hasError ? 'border-[oklch(0.65_0.20_20_/_0.6)]' : 'border-[var(--border)]'
    }`

  const buttonClassName = `w-full justify-center gap-2 rounded-[12px] md:rounded-[14px] border border-[oklch(1_0_0_/_0.18)] bg-[oklch(1_0_0_/_0.12)] hover:bg-[oklch(1_0_0_/_0.18)] text-foreground px-4 py-3 ${
    isContact ? 'mt-5 md:py-3.5 min-h-[50px] text-[15px]' : ''
  }`

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
        <div className="flex items-center justify-between text-[oklch(1_0_0_/_0.85)] text-[12px] md:text-sm mb-3 md:mb-3.5">
          <div>Start a confidential conversation</div>
        </div>

        <form id={formId} noValidate className="space-y-0">
          {step === 1 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor={`${formId}-name`} className="text-xs text-[oklch(1_0_0_/_0.7)]">
                  Name
                </Label>
                <Input
                  id={`${formId}-name`}
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    setErrors({ ...errors, name: false })
                  }}
                  className={inputClassName(errors.name)}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`${formId}-email`} className="text-xs text-[oklch(1_0_0_/_0.7)]">
                  Email
                </Label>
                <Input
                  id={`${formId}-email`}
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setErrors({ ...errors, email: false })
                  }}
                  className={inputClassName(errors.email)}
                  autoComplete="email"
                  required
                />
              </div>

              <Button type="button" onClick={handleContinue} className={buttonClassName}>
                Continue
                <ArrowRight size={16} weight="regular" />
              </Button>

              <p className="text-[11px] md:text-xs text-muted-foreground mt-2.5">
                We work with private equity investors on SME acquisitions.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor={`${formId}-phone`} className="text-xs text-[oklch(1_0_0_/_0.7)]">
                  Phone
                </Label>
                <Input
                  id={`${formId}-phone`}
                  type="tel"
                  placeholder="+357 97 475707"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClassName()}
                  autoComplete="tel"
                />
              </div>

              <Button type="button" onClick={handleSubmit} className={buttonClassName}>
                Send details
              </Button>

              <p className="text-[11px] md:text-xs text-muted-foreground mt-2.5">
                We'll call you back within hours.
              </p>
            </div>
          )}

          {step === 'done' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-2.5 my-1 p-3 rounded-[12px] md:rounded-[14px] border border-[var(--border)] bg-[oklch(1_0_0_/_0.06)]">
                <div className="w-5 h-5 rounded-full bg-[oklch(0.78_0.12_250_/_0.3)] border border-[oklch(0.78_0.12_250_/_0.6)]" />
                <div className="text-[13px] md:text-sm">Thanks — we'll call you shortly.</div>
              </div>
            </div>
          )}

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] opacity-0"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            aria-hidden="true"
          />
        </form>
      </div>
    </div>
  )
}
