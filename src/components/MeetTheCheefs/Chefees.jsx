import { CardsCheefs } from "../Cards/CardsCheefs/CardsCheefs"
import ChefeKenji from "../../assets/Img/chefe1.png"
import ChefeAkari from "../../assets/Img/chefe2.png"
import ChefeHiro from "../../assets/Img/chefe3.png"


export const Chefees = () => {
  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Meet the Chefs</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <CardsCheefs
          img={ChefeKenji}
          title="Chefe Kenji"
          des="Specializes in Sushi"
        />

        <CardsCheefs
          img={ChefeAkari}
          title="Chefe Akari"
          des="Specializes in Ramen"
        />

        <CardsCheefs
          img={ChefeHiro}
          title="Chefe Hiro"
          des="Specializes in Temaki"
        />
      </div>
    </div>
  );
};
