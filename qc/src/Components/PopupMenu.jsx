import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const PopupMenu = ({ cartItems, setIsPopupVisible }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => setIsPopupVisible(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          <div className="inline-block max-w-md p-6 my-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <span
            className="absolute top-2 right-4 text-2xl text-gray-500 cursor-pointer"
            onClick={() => setIsPopupVisible(false)}
          >
            &times;
        </span>
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              Cart Summary
            </Dialog.Title>
            <div className="mt-2">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.sort((a, b)=>a.id-b.id).map(item => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.title}</td>
                      <td className="border px-4 py-2">{item.price} {item.currency}</td>
                      <td className="border px-4 py-2">{item.quantity}</td>
                      <td className="border px-4 py-2">{item.quantity * item.price} {item.currency}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="border px-4 py-2" colSpan="3">Net Amount  :</td>
                    <td className="border px-4 py-2">{totalPrice} $</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PopupMenu;
