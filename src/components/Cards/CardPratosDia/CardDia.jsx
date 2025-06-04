export const CardDia = ({img, title, des, btn})=>{
return(
    <div>
        <img src={img} alt="" />
        <h2 className="mb-3">{title}</h2>
        <p className="mb-3">{des}</p>
        <button className="border-2 bg-[#F5EBE8] p-1 w-30 rounded-2xl">{btn}</button>
    </div>
)
}