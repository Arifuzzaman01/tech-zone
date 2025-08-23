import dbConnect, { collectionsNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPages = async () => {
  const productCollection = dbConnect(collectionsNameObj.productsCollection);
  const data = await productCollection.find({}).toArray();
  // console.log(data);
  const newData = data.reverse()
  const sliceData = newData.slice(0, 12);
  console.log(sliceData);
  return (
    <div className="my-10 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-5">All Products</h1>
      <div className="md: grid grid-cols-4 gap-5">
        {sliceData.map((singleData) => (
          <div
            key={singleData._id}
            className="card bg-base-100 rounded-2xl shadow-sm flex flex-col justify-between "
          >
            <figure>
              <Image
                className="rounded-t-2xl object-cover"
                src="https://i.ibb.co.com/V0gyxXW5/boxing.jpg"
                width={400}
                height={350}
                alt={singleData.name}
              />
            </figure>
            <div className="">
              <div className="card-body ">
                <h2 className="card-title">{singleData.name}</h2>
                <div className="flex  ">
                  <p className="flex-1">Category : {singleData.category}</p>
                  <p className="text-end flex-1">
                    Price :{" "}
                    <span className="font-bold">${singleData.price}</span>
                  </p>
                </div>
              </div>
              
            </div>
            <div className="card-actions ">
                <Link
                  href={`productDetails/${singleData._id}`}
                  className="btn btn-primary btn-block rounded-b-2xl"
                >
                  Product Details
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPages;
