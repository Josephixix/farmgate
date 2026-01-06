"use client"; 
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#F5EEE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="shrink-0 flex items-center">
              <span className="text-lg font-bold">FarmGate</span>
            </a>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <a href="/" className="text-black hover:text-[#2B5631] text-sm font-medium">
              Home
            </a>
            <a href="/about" className="text-black hover:text-[#2B5631] text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-black hover:text-[#2B5631] text-sm font-medium">
              Contact
            </a>
            <a href="/delivery" className="text-black hover:text-[#2B5631] text-sm font-medium">
              Delivery
            </a>
            <a href="/support" className="text-black hover:text-[#2B5631] text-sm font-medium">
              Support
            </a>
          </div>

          {/* CTA Button (Desktop RHS) */}
          <div className="hidden md:flex items-center">
            <a
              href="/order"
              className="rounded-full bg-[#2B5631] px-5 py-2 text-sm font-semibold text-white hover:bg-[#234628] transition "
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu (UNCHANGED) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />

          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#F5EEE9]">
            <div className="flex flex-col h-full">

              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="p-2 text-black">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 px-6 py-8 space-y-6">
                {["Home", "About", "Contact", "Delivery", "Support"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block text-lg font-medium text-black"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
