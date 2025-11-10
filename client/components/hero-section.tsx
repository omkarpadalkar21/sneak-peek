import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Featured Product */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-900 group">
          <Image
            src="/streetwear-supreme-week-1-spring-summer.jpg"
            alt="Supreme Week 1 Collection"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge Overlay */}
          <div className="absolute top-6 left-6 z-10">
            <Badge className="bg-white text-black px-3 py-1 text-xs font-bold">SUPREME WEEK 1</Badge>
            <p className="text-white text-xs mt-1 font-medium">Spring / Summer 2025</p>
          </div>

          {/* Arrow Button Overlay */}
          <button
            className="absolute top-6 right-6 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            aria-label="View collection"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Column - 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Top - Full Width Image */}
          <div className="sm:col-span-2 relative h-64 rounded-2xl overflow-hidden bg-gray-900">
            <Image src="/group-of-athletes-running-training.jpg" alt="Athletes training" fill className="object-cover" />
          </div>

          {/* Bottom Left - Authenticity Card */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-black leading-tight tracking-tight mb-4">
                AUTHENTICITY?
                <br />
                CHECKED.
              </h2>
            </div>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold w-fit rounded-full">Know More</Button>
          </div>

          {/* Bottom Right - FAQ Card */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <p className="text-sm mb-3">Have questions? Contact our manager.</p>
              <h3 className="text-3xl font-black mb-1">#FAQ</h3>
              <Badge className="bg-red-600 text-white text-xs">Popular</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Card - Full Width Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 mt-6">
        <div className="sm:col-span-2 lg:col-span-2">{/* Placeholder for layout spacing */}</div>
        <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-black mb-2">#QUALITY</h3>
            <p className="text-2xl font-black">UNBEATABLE.</p>
          </div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full w-fit transition-colors mt-auto"
            aria-label="View quality info"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
