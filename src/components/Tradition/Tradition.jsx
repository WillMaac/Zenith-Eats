import { Pratos } from "../Cards/Pratos"
import Prato1 from "../../assets/Img/prato1.png"
import Prato2 from "../../assets/Img/prato2.png"
import Prato3 from "../../assets/Img/prato3.png"

export const Tradition = () =>{
return(
    <div>
        <h1 className="text-left m-5 text-2xl">Tradition</h1>
        <div className="flex text-center justify-around items-center">
        <Pratos
        img={Prato1}
        title={'Sushi'}
        des={'Delicate slices of fresh fish on seasoned rice'}
        />
        <Pratos
        img={Prato2}
        title={'Ramen'}
        des={'Hearty noodle soup with rich broth and toppings'}
        />
        <Pratos
        img={Prato3}
        title={'Temaki'}
        des={'Hand-rolled cones filled with rice and various ingredients'}
        />
        </div>

    </div>
)
}