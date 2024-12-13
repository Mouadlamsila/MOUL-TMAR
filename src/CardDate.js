import React from 'react';
import { FaBasketShopping } from "react-icons/fa6";


export default function CardDate({ date }) {
        
    return (
        <div className="w-auto text-center justify-center mb-9 bg-white rounded-2xl py-[2em] shadow-black shadow-md lg:hover:scale-110 transition-transform duration-300 ">
            <div className="w-full flex justify-center">
                <img src={`/PHP/${date.ImagePath}`} alt={date.Name} className='w-[200px] h-[160px]' />
            </div>

            <p>{date.Name}</p>
            <p>{date.Origin}</p>
            <p>{date.Price} DH</p>
            <button className='w-full flex mt-4 items-center justify-center text-center hover:scale-110 transition-transform duration-300 font-bold font-[Almarai]'>
                <FaBasketShopping /> &nbsp; أضف إلى السلة
            </button>
        </div>
    );
}
