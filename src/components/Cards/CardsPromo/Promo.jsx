export const Promo = ({title, des, img}) => {
    return(
        <div>
            
           <h2 className="text-black font-bol text-xl">{title}</h2>
           <p>{des}</p>
           <img src={img} alt="" />
        </div>
    )
}