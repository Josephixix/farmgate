import {
  Utensils,
  Hotel,
  ShoppingBasket,
  School,
  ChefHat,
} from "lucide-react";

const brands = [
  {
    name: "GreenLeaf Restaurant",
    icon: Utensils,
  },
  {
    name: "Sunrise Hotel",
    icon: Hotel,
  },
  {
    name: "FreshMart",
    icon: ShoppingBasket,
  },
  {
    name: "Campus Kitchen",
    icon: School,
  },
  {
    name: "Mama Gold Catering",
    icon: ChefHat,
  },
];

export default function Trust() {
  return (
    <section className="py-10 bg-[#f8fdf6]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold mb-6 text-gray-700 tracking-wide">
          TRUSTED BY LOCAL BUSINESSES
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {brands.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="
                h-20 flex flex-col items-center justify-center gap-2
                bg-white rounded-xl shadow-sm
                text-gray-700
                hover:shadow-md transition
              "
            >
              <Icon className="w-6 h-6 text-green-600" />
              <span className="text-xs font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
