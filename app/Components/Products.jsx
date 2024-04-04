// app/components/Products.jsx
import React from 'react';
import ProductCard from './ProductCard';  

const Products = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
//take in any object or array of objects
export default Products;
