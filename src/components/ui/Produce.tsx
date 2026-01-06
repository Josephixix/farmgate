import Image from "next/image";
import { Egg, Drumstick, Sprout, Apple } from "lucide-react";

const produce = [
  {
    title: "Fresh Eggs",
    icon: Egg,
    image: "/eggs.jpg",
  },
  {
    title: "Healthy Chicken",
    icon: Drumstick,
    image: "/chicken.jpg",
  },
  {
    title: "Yam & Root Crops",
    icon: Sprout,
    image: "/yam2.jpg",
  },
  {
    title: "Fruits & Vegetables",
    icon: Apple,
    image: "/fruits.jpg",
  },
];

export default function Produce() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-sm font-bold text-gray-700 tracking-wide mb-2">
            WHAT WE PRODUCE
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Fresh farm products brought straight from our fields to your table.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {produce.map(({ title, icon: Icon, image }) => (
            <div
              key={title}
              className="bg-[#f8fdf6] rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col "
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title + Icon */}
              <div className="p-4 text-center flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="font-semibold text-black ">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
