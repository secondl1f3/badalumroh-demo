import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import BadalUmrohInfo from "@/components/BadalUmrohInfo"
import Requirements from "@/components/Requirements"
import Procedure from "@/components/Procedure"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BadalUmrohInfo />
        <Requirements />
        <Procedure />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

