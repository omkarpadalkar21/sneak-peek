import { Button } from "@/components/ui/button"

export default function PersonalizationSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight text-gray-900 text-balance mb-6">
            Personalize with Precision
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-lg">
            Elevate your purchase with our exclusive customization feature. From refined sneakers to tailored shirts,
            curate every detail — from colors and finishes to monograms and motifs. Experience a seamless live preview
            and own a product crafted to reflect your individuality with sophistication.
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex items-center justify-center lg:justify-end">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-8 text-lg font-black rounded-full h-auto"
          >
            CREATE YOURS
          </Button>
        </div>
      </div>
    </section>
  )
}
