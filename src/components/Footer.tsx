export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[oklch(1_0_0_/_0.08)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-[18px] items-start md:items-center justify-between text-[oklch(1_0_0_/_0.65)] text-sm py-5 md:py-[26px]">
          <div>© {currentYear} Branori International Ltd.</div>
          <div className="flex gap-4 md:gap-[18px]">
            <a href="#imprint" className="hover:text-foreground transition-colors">
              Imprint
            </a>
            <a href="#privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
