import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-primary">Your Store</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Discover the best products with unbeatable prices. Shop now and
              enjoy fast delivery, premium quality, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn btn-primary btn-lg">Shop Now</button>
              <button className="btn btn-outline btn-secondary btn-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://i.ibb.co.com/V0gyxXW5/boxing.jpg"
              alt="Hero Image"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
