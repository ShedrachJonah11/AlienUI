import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-brown-100">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 lg:py-28 flex flex-col items-center md:justify-between">
        {/* Left Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-brown-800 sm:text-5xl mb-2">
            AlienUI
          </h1>
          <p className="text-brown-800 text-xl text-center font-semibold">
            Free open-source UI components for React native{" "}
          </p>
          <p className="mt-4 text-lg text-gray-800 text-center font-medium lg:w-[1000px]">
            AlienUI is an open-source UI component library built on Nativewind
            for React Native apps. It leverages native tags for seamless
            integration and maintains zero to minimal dependencies, enabling
            high-performance, and stunning interfaces with ease.
          </p>
          <div className="flex items-center gap-3 justify-center mt-6 mb-4">
            <p> ✅ No npm installation</p>
            <p>✅ No configuration</p>
            <p>✅ No setup</p>
          </div>
          <p>
            Say no to dependency issue and complex setup. Just copy and paste
            components to build your next mobile app
          </p>
          <div className="mt-6 flex-row flex items-center gap-2 justify-center">
            <Link href="/comp" prefetch>
              <button className="px-6 py-3 bg-transparent border border-brown-600 text-black hover:text-white font-medium rounded-lg shadow-md  hover:bg-brown-600 transition duration-300 cursor-pointer">
                {" "}
                Get Started
              </button>
            </Link>
            <Link href="https://github.com/khaymanii/AlienUI" prefetch>
              <button className="px-6 py-3 bg-brown-600 hover:bg-transparent text-white hover:text-black font-medium rounded-lg shadow-md border hover:border-brown-800 transition duration-300 cursor-pointer">
                {" "}
                Start Contributing
              </button>{" "}
            </Link>
          </div>
        </div>

        {/* Right Image */}
      </div>
    </section>
  );
}

export default Hero;
