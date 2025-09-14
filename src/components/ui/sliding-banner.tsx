'use client'

import Image from 'next/image'

interface SlidingBannerProps {
  imageSrc?: string
  speed?: number
  height?: string
}

export function SlidingBanner({ 
  imageSrc = '/banner.png', 
  speed = 20,
  height = 'h-80'
}: SlidingBannerProps) {
  return (
    <div className={`relative overflow-hidden ${height} bg-transparent`}>
      <div 
        className="absolute inset-0 flex animate-slide-infinite"
        style={{
          animationDuration: `${speed}s`
        }}
      >
        {/* Multiple banner instances for seamless infinite scroll */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-shrink-0 h-full">
            <Image
              src={imageSrc}
              alt="Sliding banner"
              width={3840}
              height={400}
              className="h-full w-auto object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-slide-infinite {
          animation: slide-infinite linear infinite;
        }
      `}</style>
    </div>
  )
}
