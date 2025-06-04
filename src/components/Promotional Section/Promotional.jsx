import { Promo } from "../Cards/CardsPromo/Promo"
import FotoP from "../../assets/Img/Frame.png"

export const Promotional = () => {
  return (
    <div>
      <h1 className="text-left mb-8 text-2xl font-semibold">Promotional Section</h1>

      <div className="flex items-center space-x-8 justify-center">
        <img
          src={FotoP}
          alt="Prato"
          className="rounded-lg "
        />

        <div>
          <h2 className="text-xl font-bold">Harmony in Every Bite</h2>
          <p className="text-sm text-[#9C5E4A]">
            Enjoy a free Japanese drink with your order!
          </p>
        </div>
      </div>
    </div>
  );
};
