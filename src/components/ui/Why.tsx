import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-50 pt-24 pb-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start gap-6">

          {/* Headline + Description Card */}
          <div className="flex flex-col gap-3 rounded-2xl bg-white border border-zinc-200 p-5 w-full max-w-md">
            <h2 className="text-lg font-black text-zinc-900 md:text-4xl lg:text-xl">
              WHY CHOOSE OUR FARM
            </h2>
            <p className="text-sm text-zinc-400 md:text-lg">
              We supply fresh, naturally grown agro produce directly from trusted farms no chemicals, no middlemen, just quality food you can trust.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="relative flex aspect-square flex-col justify-end rounded-2xl bg-indigo-200 p-5 border border-indigo-200">
              <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/50 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>

              <span className="text-4xl font-semibold text-indigo-900">120+</span>
              <p className="text-indigo-900/60 font-medium mt-1 text-sm">Partner Farms</p>
            </div>

            {/* Fresh Agro Produce Card with Image */}
            <div className="relative flex aspect-square flex-col items-start justify-end rounded-2xl bg-white p-5 border border-zinc-200 overflow-hidden">
              
              {/* Image inside card */}
              <div className="absolute inset-0">
                <Image
                  src="/why2.jpg" 
                  alt="Fresh Agro Produce"
                  fill
                  className="object-cover rounded-2xl opacity-80"
                />
              </div>

              {/* Text overlay */}
              <p className="relative z-10 text-base md:text-lg font-extrabold text-black leading-tight">
                Fresh <br /> Agro Produce
              </p>
            </div>
          </div>

         {/* Email / Order CTA */}
<div className="mt-3 w-full max-w-sm">
  <div className="flex items-center gap-1.5 rounded-lg bg-zinc-100 p-1 border border-zinc-200">
    <input
      type="email"
      placeholder="Email us your order"
      className="w-full bg-transparent text-xs font-medium text-zinc-600 outline-none placeholder:text-zinc-400 py-1 px-2"
    />
    <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-emerald-500">
      Order Now
    </button>
  </div>
</div>

        </div>

        {/* Right Column */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-3xl md:h-auto">
          <Image
            src="/why.jpg"
            alt="Fresh agro produce"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 flex items-end justify-between p-6 bg-linear-to-t from-black/60 via-black/0 to-transparent">
            <p className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg max-w-[60%] leading-tight">
              Fresh from farm to your doorstep
            </p>

            <button className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-zinc-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
