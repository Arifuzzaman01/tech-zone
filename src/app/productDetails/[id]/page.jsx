import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const productCollection = dbConnect(collectionsNameObj.productsCollection);
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }
  // console.log(product);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product.image || "https://i.ibb.co.com/V0gyxXW5/boxing.jpg"}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <div className="grid grid-cols-2">
              <p className="text-xl font-bold">Seller : {product.seller}</p>
              <p className="text-gray-600 text-lg mb-3">
                Category:{" "}
                <span className="font-semibold">{product.category}</span>
              </p>
              <p className="text-gray-700 mb-5 leading-relaxed">
               InStock : {product.stock}
              </p>
              <p className="text-2xl font-bold text-primary">
               Price: ${product.price}
              </p>
              <p className="text-xl">Rating: ⭐{product?.ratings}</p>
              <p className="text-xl">Shipping : {product?.shipping} </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary btn-lg flex-1">Buy Now</button>
            <button className="btn btn-outline btn-secondary btn-lg flex-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
