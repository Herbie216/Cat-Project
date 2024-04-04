// app/components/ProductCard.jsx
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4">
      {/* Render the image */}
      <div className="mb-2">
        {/* If the image is provided in the item object, render it */}
        {/* {item.image && (
          <Image 
            src={item.image} 
            alt={item.description}
            width={300} 
            height={200} 
          />
        )} */}
        {/* If the image is not provided, render a placeholder */}
        {!item.image && (
          <div className="placeholder-image"></div>
        )}
      </div>
      <h2 className="text-xl font-semibold">{item.description}</h2>
      <p className="text-gray-700">${item.value}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};
// has to take in id: x and repeat to make as many cards dynamically
export default ProductCard;

