import ImgYakisoba from "../../assets/Img/prato4.png"
export const Yakisoba = () =>{
    return(
        <div>
            <h1 className="text-left m-30 text-2xl">Quality Highlight</h1>
            
                <div className="flex justify-center items-center">
                <img
                src={ImgYakisoba}
                alt="Prato Yakisoba"/>
                <h2 className="font-bold ml-10 mb-60 text-2xl">Yakiaoba</h2>
                <div className="ml-0">
                <p className="font-bold mr-0 mb-20">Our Yakisoba is made with the freshest ingredients, prepared by specialized chefs, and served with a welcoming smile.</p>
                </div>
            </div>
        </div>
    )
}