import React from "react";
import Image from "next/image";
import Link from "next/link";

function Products() {
  const products = [
    {
      id: 1,
      logo: "/images/alienx.png",
      name: "AlienX",
      description:
        "AlienX is a powerful VS Code snippet extension that generates AlienUI components for both react and react native mobile app in your vscode environment.",
      link: "/",
    },
  ];
  return (
    <section className="mb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-brown-800 sm:text-4xl text-center mb-2">
          Other Products
        </h1>
        <p className="mt-4 text-lg text-gray-800 mb-8 text-center mx-4">
          Discover our range of subsidiary products that enhance our offerings.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.link}>
              <div className=" border border-gray-200 rounded-md shadow flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="py-6"
                />
                <div className="bg-brown-100 p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-center">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
