import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#fdfaf6] text-[#b8735c] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        
        <div className="flex justify-between w-full max-w-md text-sm font-medium mb-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>

        
        <div className="flex space-x-6 text-xl mb-4">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
        </div>

        
        <div className="text-sm">
          ©2024 Anderson. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
