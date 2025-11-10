import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DeliveryBanner from "@/components/delivery-banner"
import PersonalizationSection from "@/components/personalization-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <Header />
      <HeroSection />
      <DeliveryBanner />
      <PersonalizationSection />
      <Footer />
    </main>
  )
}
