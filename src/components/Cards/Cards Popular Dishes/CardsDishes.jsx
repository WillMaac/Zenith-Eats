export const CardsDishes = ({ img, title, des, preco }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2 className="text-black font-bol text-xl">{title}</h2>
      <p className="text-[#9C5E4A]">{des}</p>
      <p className="text-[#9C5E4A]">{preco}</p>
    </div>
  );
};
