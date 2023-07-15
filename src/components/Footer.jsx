import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] select-none">REACT.</h1>
        <p className="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, accusantium?</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="hover:cursor-pointer" />
          <FaInstagram size={30} className="hover:cursor-pointer" />
          <FaTwitterSquare size={30} className="hover:cursor-pointer" />
          <FaGithubSquare size={30} className="hover:cursor-pointer" />
          <FaDribbbleSquare size={30} className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Analytics</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Marketing</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Commerce</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Pricing</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Documentation</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Guides</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">About</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Blog</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Jobs</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Claim</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Policy</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Terms</li>
            <li className="py-2 text-sm hover:cursor-pointer hover:underline">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
