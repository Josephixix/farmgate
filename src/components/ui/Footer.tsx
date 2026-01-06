export default function Footer() {
  return (
    <footer className="bg-[#8B5E3C] pt-24 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Top Row: Email + Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Email Subscription (LHS) */}
          <div className="flex flex-col gap-3 md:col-span-1">
            <h4 className="font-semibold text-lg">Subscribe for Fresh Updates</h4>
            <div className="flex gap-2 rounded-lg bg-white p-1 border border-gray-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400 px-3 py-2 rounded-md"
              />
              <button className="bg-emerald-400 px-4 py-2 rounded-md text-sm font-semibold text-black hover:bg-emerald-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Columns (RHS) */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Shop</h4>
              <a href="#" className="opacity-70 hover:opacity-100 transition">All Produce</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Vegetables</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Fruits</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Dairy & Eggs</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <a href="#" className="opacity-70 hover:opacity-100 transition">About Us</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Our Farms</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Careers</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Press</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Support</h4>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Help Center</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Shipping & Returns</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Contact Us</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">FAQs</a>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Legal</h4>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Privacy Policy</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Terms of Service</a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">Cookies</a>
            </div>

          </div>
        </div>

        {/* Brand Text */}
        <div className="relative flex justify-center mt-12">
          <h1 className="text-[15vw] font-extrabold leading-none tracking-tight text-center text-black/10 select-none translate-y-[15%]">
            FarmGate
          </h1>
        </div>

      </div>
    </footer>
  );
}
