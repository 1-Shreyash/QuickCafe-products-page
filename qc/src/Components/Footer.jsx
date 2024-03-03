import React, { useState, useContext, useEffect } from 'react';
import cartContext from '../Contexts/Cart/cartContext';
import PopupMenu from './PopupMenu'; // Import the PopupMenu component

export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { cartItems } = useContext(cartContext);

    useEffect(() => {
        // Update isDisabled state when cartItems change
        if (cartItems.length === 0) {
            setIsDisabled(true); // Disable the button if cart is empty
        } else {
            setIsDisabled(false); // Enable the button if cart has items
        }
    }, [cartItems]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        console.log('Button clicked');
        handleCheckout(); // Call handleCheckout here
    };

    const handleCheckout = () => {
        // Logic to show cart summary in popup
        console.log('Cart Summary:', cartItems);
        setIsPopupVisible(true);
    };

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='shadow-lg fixed bottom-0 flex justify-between items-center h-16 mx-auto px-20 text-white bg-[#172337] rounded-xl w-[99%] m-2 text-l max-md:px-10 max-sm:px-5 '>
                <div>&copy; ISO-2000 Certified Company</div>
                <div>
                    <button
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        disabled={isDisabled}
                    >
                        {isHovered ? 'Checkout' : 'Checkout'}
                    </button>
                </div>
            </div>
            {isPopupVisible && <PopupMenu cartItems={cartItems} setIsPopupVisible={setIsPopupVisible} />}
 {/* Render PopupMenu conditionally */}
        </div>
    );
}
