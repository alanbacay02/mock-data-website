import React from 'react';
import Laptop from '../assets/laptop.jpg';

const analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop.jpg" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti magnam excepturi adipisci itaque vitae quidem animi at expedita in, porro delectus sapiente? Cum ratione laudantium cupiditate libero cumque. Dolore!</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default analytics;