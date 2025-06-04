import Photo1 from "../../assets/Img/photo1.png";
import Photo2 from "../../assets/Img/photo2.png";
import Photo3 from "../../assets/Img/photo3.png";
import Photo4 from "../../assets/Img/photo4.png";
import { CardsDishes } from "../Cards/Cards Popular Dishes/CardsDishes";

export const PopularDishes = () => {
  return (
    <div className="px-10 py-16">
      <h1 className="text-left mb-8 text-2xl font-semibold">Popular Dishes</h1>

      {/* Grid de pratos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <CardsDishes
          img={Photo1}
          title="Combo Tokyo"
          des="A delightful combination of sushi and sashimi"
          preco="$15.99"
        />
        <CardsDishes
          img={Photo2}
          title="Ramen Tonkotsu"
          des="Creamy pork bone broth ramen with tender pork"
          preco="$12.99"
        />
        <CardsDishes
          img={Photo3}
          title="Temaki Salmon Cream Cheese"
          des="Salmon and cream cheese hand roll"
          preco="$6.99"
        />
        <CardsDishes
          img={Photo4}
          title="Chicken Gyoza"
          des="Pan-fried dumplings filled with savory chicken"
          preco="$7.99"
        />
      </div>

      
      <div className="flex justify-center items-center gap-10 mt-12">
        <button className="bg-[#F25924] text-white rounded-2xl px-16 py-2">
          Add to Cart
        </button>
        <button className="bg-[#F5EBE8] text-black rounded-2xl px-16 py-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
