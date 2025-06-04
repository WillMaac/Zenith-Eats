import Fundo3 from "../../assets/Img/wal.png";

export const Home = () => {
  return (
    <div className="relative w-screen h-[40rem]">
      <img
        src={Fundo3}
        className="  w-full mx-auto h-full"
        alt="Prato Japonês"
      />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="uppercase text-white text-4xl font-bold mb-4">
          The best flavors of Japan
        </h1>
        <button className="bg-[#F25924] rounded-xl p-2 text-white w-40">
          Explore the Menu
        </button>
      </div>
    </div>
  );
};
