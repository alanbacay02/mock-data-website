import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row justify-between items-center h-24 mx-auto px-6 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] select-none">ALCHEMY.</h1>
      <ul className="hidden md:flex">
        <li className="p-1 m-3 hover:cursor-pointer hover:scale-125 transition duration-200">Home</li>
        <li className="p-1 m-3 hover:cursor-pointer hover:scale-125 transition duration-200">Company</li>
        <li className="p-1 m-3 hover:cursor-pointer hover:scale-125 transition duration-200">Resources</li>
        <li className="p-1 m-3 hover:cursor-pointer hover:scale-125 transition duration-200">About</li>
        <li className="p-1 m-3 hover:cursor-pointer hover:scale-125 transition duration-200">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl m-4 font-bold text-[#00df9a] select-none">REACT.</h1>
        <ul className="uppercase p-4">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;