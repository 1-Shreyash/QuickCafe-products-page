import React from 'react'
import { ProductCard } from './ProductCard'


export const Dashboard = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-fit min-h-screen py-10 pb-20 px-28 grid grid-cols-4 gap-8 max-md:grid-cols-2 max-[400px]:grid-cols-1 max-lg:px-10 max-md:px-4' >
        <ProductCard id="100" title="Product 1" price={20} currency="$" />
        <ProductCard id="101" title="Product 2" price={25} currency="$" />
        <ProductCard id="102" title="Product 3" price={15} currency="$" />
        <ProductCard id="103" title="Product 4" price={30} currency="$" />
        <ProductCard id="104" title="Product 5" price={18} currency="$" />
        <ProductCard id="105" title="Product 6" price={22} currency="$" />
        <ProductCard id="106" title="Product 7" price={27} currency="$" />
        <ProductCard id="107" title="Product 8" price={35} currency="$" />
        <ProductCard id="108" title="Product 9" price={40} currency="$" />
        <ProductCard id="109" title="Product 10" price={45} currency="$" />
      </div>
    </div>
  )
}
