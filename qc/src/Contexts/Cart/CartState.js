import cartContext from "./cartContext";
import { useState } from "react";
export const CartState = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
  
    const addToCart = (product) => {
        // console.log(product);
      const existingItem = cartItems.find(item => item.id === product.id);
      if (existingItem) {
        const updatedCartItems = cartItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1}]);
      }
      setTotal(total + product.price);
    };
  
    const removeFromCart = (productId) => {
      const removedItem = cartItems.find(item => item.id === productId);
      if (removedItem.quantity === 1) {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = cartItems.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCartItems(updatedCartItems);
      }
      setTotal(total - removedItem.price);
    };
  
    return (
      <cartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
        {children}
      </cartContext.Provider>
    );
  };
  