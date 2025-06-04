export const Pratos = ({ img, title, des }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
};
