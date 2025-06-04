import ImgSushiOp1 from "../../assets/Img/prato5.png"
import ImgSushiOp2 from "../../assets/Img/prato6.png"
import ImgSushiOp3 from "../../assets/Img/prato7.png"
import { CardDia } from "../Cards/CardPratosDia/CardDia"

export const PratosDia = () =>{
    return(
        <div>
            <h1 className="text-left m-30 text-2xl">Dish of the Day</h1>
            
            <h2 className="text-center m-10 text-2xl">Today is Sushi Day!</h2>
            <div className="flex justify-center gap-20 text-center">
                <CardDia
                img={ImgSushiOp1}
                title='Sushi Option 1'
                des={'Description of Sushi Option 1'}
                btn={'Order Now'}
                />
                <CardDia
                img={ImgSushiOp2}
                title='Sushi Option 2'
                des={'Description of Sushi Option 2'}
                btn={'Order Now'}
                />
                <CardDia
                img={ImgSushiOp3}
                title='Sushi Option 3'
                des={'Description of Sushi Option 3'}
                btn={'Order Now'}
                />
            </div>
        </div>
    )
} 