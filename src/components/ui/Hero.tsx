import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
   <section className="relative px-4 pt-4 md:pt-10 pb-2 bg-[#3EAD46]   min-h-[65dvh] md:min-h-[90dvh] lg:min-h-screen">

      <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-15 ">
        
        {/* Text */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold tracking-tight ">
          Buy fresh produce to daily <br /> essential, shop smarter!
          </h1>
        
        </div>

        {/* Call to Actions */}
        <div className="flex flex-row gap-4">
  <Button size="sm">contact us</Button>
  <Button size="sm" variant="outline">
    View Collection
  </Button>
</div>


        {/* Image */}
        <div className="w-full max-w-3xl">
          <Image
            src="/hero.png"
            alt="Backpack showcase"
            width={1200}
            height={800}
            className="w-full h-auto "
            priority
          />
        </div>

      </div>
    </section>
  )
}
