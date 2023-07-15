import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 lg:my-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="w-[200px] hover:brightness-90 rounded-md font-medium my-6 ml-4 px-6 py-3 bg-[#00df9a] text-black">Notify Me</button>
          </div>
          <p className="text-center sm:text-left">We care about the protection of your data. Read our <span className="text-[#00df9a] hover:underline hover:cursor-pointer">Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;