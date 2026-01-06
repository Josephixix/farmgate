import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative px-4 pt-4 md:pt-10 pb-10 bg-[#F5EEE9] min-h-[65dvh] md:min-h-[90dvh] lg:min-h-screen overflow-hidden">

      {/* Thick lemon S-swoosh UNDER content */}
      <svg
        className="absolute bottom-28 left-0 w-full pointer-events-none z-0"
        viewBox="0 0 1200 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="
            M -50 150
            C 250 40, 550 260, 850 150
            S 1350 40, 1550 160
          "
          stroke="#B9E356"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-14 relative z-10">

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#2B5631] tracking-tight leading-tight">

            From{" "}
            <span className="relative inline-block px-2">

              {/* Pencil-style circle */}
              <svg
                className="absolute inset-0 w-full h-full -z-10"
                viewBox="0 0 220 90"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 45 C 25 8, 195 8, 210 45 C 195 82, 25 82, 10 45 Z"
                  stroke="#B9E356"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              fresh produce
            </span>{" "}
            to daily <br />essentials,
            shop smarter!
          </h1>
        </div>

    {/* CTA */}
<div className="flex flex-row gap-4">
  <Button
    size="sm"
    className="rounded-full bg-[#2B5631]"
  >
    Contact Us
  </Button>

  <Button
    size="sm"
    variant="outline"
    className="rounded-full"
  >
    View Collection
  </Button>
</div>

{/* Image */}
<div className="relative w-full max-w-8xl md:max-w-6xl">
  <Image
    src="/hero3.png"
    alt="Fresh agro produce"
    width={1200}
    height={800}
    className="w-full h-auto relative z-10"
    priority
  />
</div>

      </div>
    </section>
  )
}
