"use client"

export default function DeliveryBanner() {
  return (
    <div className="bg-red-600 text-white py-4 overflow-hidden mt-8">
      <div className="flex items-center justify-center gap-8 whitespace-nowrap animate-scroll">
        <span className="text-sm font-bold">FREE DELIVERY ON YOUR FIRST ORDER!</span>
        <span className="text-gray-300">•</span>
        <span className="text-sm font-bold">FREE DELIVERY ON YOUR FIRST ORDER!</span>
        <span className="text-gray-300">•</span>
        <span className="text-sm font-bold">FREE DELIVERY ON YOUR FIRST ORDER!</span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
