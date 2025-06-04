export const CardsCheefs = ({img, title, des}) =>{
    return(
        <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p className="text-[#9C5E4A]">{des}</p>
        </div>
    )
}