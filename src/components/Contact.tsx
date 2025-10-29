import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-[140px] px-5">
      <div className="max-w-[700px] mx-auto">
        <div className="reveal text-center mb-10 md:mb-20">
          <h2 className="text-[22px] md:text-[28px] font-semibold mb-3 md:mb-4">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-[13px] md:text-[15px]">
            Start a confidential conversation with our team.
          </p>
        </div>

        <div className="reveal">
          <ContactForm variant="contact" />
        </div>
      </div>
    </section>
  )
}
