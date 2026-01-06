import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B5E3C] pt-24 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 items-start">

          {/* Brand Name (LHS) */}
          <div className="md:col-span-2 relative flex items-center justify-center md:justify-start">
            
            {/* Leaf decorations */}
            <Leaf className="absolute -top-4 -left-4 w-6 h-6 text-[#B9E356] rotate-12" />
            <Leaf className="absolute -bottom-4 -right-6 w-6 h-6 text-[#B9E356] -rotate-12" />
            <Leaf className="absolute top-0 right-10 w-5 h-5 text-[#B9E356] rotate-45" />
            <Leaf className="absolute bottom-6 left-16 w-5 h-5 text-[#B9E356] -rotate-45" />
            <Leaf className="absolute -top-3 right-0 w-4 h-4 text-[#B9E356] rotate-30" />
            <Leaf className="absolute -bottom-2 left-10 w-4 h-4 text-[#B9E356] -rotate-30" />

            <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-[#2B5631] z-10">
              FarmGate
            </h1>
          </div>

          {/* RHS Content */}
          <div className="md:col-span-4 flex flex-col gap-10">

            {/* Email Subscription */}
            <div className="flex flex-col gap-3 max-w-md">
              <h4 className="font-semibold text-lg">Subscribe for Fresh Updates</h4>
              <div className="flex gap-2 rounded-lg bg-white p-1 border border-gray-200">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400 px-3 py-2"
                />
                <button className="bg-emerald-400 px-5 py-2 rounded-md text-sm font-bold text-black hover:bg-emerald-500 transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">

              <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Shop</h4>
                <a href="#" className="opacity-70 hover:opacity-100">All Produce</a>
                <a href="#" className="opacity-70 hover:opacity-100">Vegetables</a>
                <a href="#" className="opacity-70 hover:opacity-100">Fruits</a>
                <a href="#" className="opacity-70 hover:opacity-100">Dairy & Eggs</a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Company</h4>
                <a href="#" className="opacity-70 hover:opacity-100">About Us</a>
                <a href="#" className="opacity-70 hover:opacity-100">Our Farms</a>
                <a href="#" className="opacity-70 hover:opacity-100">Careers</a>
                <a href="#" className="opacity-70 hover:opacity-100">Press</a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Support</h4>
                <a href="#" className="opacity-70 hover:opacity-100">Help Center</a>
                <a href="#" className="opacity-70 hover:opacity-100">Shipping & Returns</a>
                <a href="#" className="opacity-70 hover:opacity-100">Contact Us</a>
                <a href="#" className="opacity-70 hover:opacity-100">FAQs</a>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-semibold">Legal</h4>
                <a href="#" className="opacity-70 hover:opacity-100">Privacy Policy</a>
                <a href="#" className="opacity-70 hover:opacity-100">Terms of Service</a>
                <a href="#" className="opacity-70 hover:opacity-100">Cookies</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
