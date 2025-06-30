"use client"
// Archivo principal del landing
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { userContent, technicianContent } from "./landing-data"
import { LandingSectionHero } from "./landing-section-hero"
import { LandingSectionValueProps } from "./landing-section-valueprops"
import { LandingSectionHowItWorks } from "./landing-section-howitworks"
import { LandingSectionPricing } from "./landing-section-pricing"
import { LandingSectionInterestForm } from "./landing-section-interestform"
import { LandingSectionTestimonials } from "./landing-section-testimonials"
import { LandingSectionFAQ } from "./landing-section-faq"
import { LandingSectionFooter } from "./landing-section-footer"
import { LandingNavbar } from "@/components/landing-navbar"

export default function LandingMain() {
  const [isUser, setIsUser] = useState(true)
  const currentContent = isUser ? userContent : technicianContent

  const handleScrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    const el = document.getElementById("contacto")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <LandingNavbar isUser={isUser} setIsUser={setIsUser} handleScrollToContact={handleScrollToContact} />
      <LandingSectionHero
        title={currentContent.hero.title}
        subtitle={currentContent.hero.subtitle}
        cta={currentContent.hero.cta}
        isUser={isUser}
        ButtonComponent={(props: any) => (
          <Button {...props} onClick={handleScrollToContact}>
            {currentContent.hero.cta}
          </Button>
        )}
      />
      {/* Sección valueprops directamente, sin div extra */}
      <LandingSectionValueProps valueProps={currentContent.valueProps} />
      <LandingSectionHowItWorks steps={currentContent.howItWorks} isUser={isUser} />
      <LandingSectionPricing isUser={isUser} />
      <LandingSectionInterestForm />
      {/* <LandingSectionTestimonials testimonial={currentContent.testimonial} /> */}
      <LandingSectionFAQ faqs={currentContent.faqs} />
      <LandingSectionFooter />
    </div>
  )
}
