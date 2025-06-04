import { FiSearch, FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#fdf8f3] shadow-sm">
      {/* Logo e Links */}
      <div className="flex items-center space-x-10">
        <h1 className="text-xl font-semibold">Zenith Eats</h1>
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-[#F25924] cursor-pointer">Home</li>
          <li className="hover:text-[#F25924] cursor-pointer">Menu</li>
          <li className="hover:text-[#F25924] cursor-pointer">About Us</li>
          <li className="hover:text-[#F25924] cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Search e Carrinho */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#f6ece6] px-4 py-2 rounded-full space-x-2">
          <FiSearch className="text-[#a14c3d]" />
          <span className="text-[#a14c3d] text-sm">Search</span>
        </div>
        <button className="bg-[#f6ece6] p-2 rounded-full">
          <FiShoppingCart className="text-black" />
        </button>
      </div>
    </nav>
  );
};
