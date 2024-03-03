import React, { useState, useContext } from 'react';
import cartContext from '../Contexts/Cart/cartContext';

export const ProductCard = ({ id, title, price, currency }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart } = useContext(cartContext);
  
  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart({ id, title, price, currency}); // Pass the product details to addToCart
  };

  const handleSubtract = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      removeFromCart(id); // Pass the productId to removeFromCart
    }
  };

  return (
    <div className="h-40 w-auto flex flex-col justify-center items-start max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{`${currency} ${price}`}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <button
          onClick={handleSubtract} // Pass the function reference
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          -
        </button>
        <span className="px-4 py-2">{quantity}</span>
        <button
          onClick={handleAdd} // Pass the function reference
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          +
        </button>
      </div>
    </div>
  );
}
