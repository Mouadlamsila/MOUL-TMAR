import React from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Flag from 'react-world-flags';



export default function CardDate(props) {

    const CountryFlag = ({ country }) => {
        const countryCodes = {
          المغرب: 'MA',
          السعودية: 'SA',
          العراق: 'IQ',
          الجزائر: 'DZ',
          إيران: 'IR',
          الإمارات: 'AE',
          اليمن: 'YE',
          عُمان: 'OM',
        };
      
        const code = countryCodes[country];
      
        return code ? (
          <div className='flex justify-center items-center'>
            <Flag code={code}  style={{ width: '32px', height: '20px', marginRight:"10px" }} />
            <span>{country}</span>
          </div>
        ) : (
          <span>{country}</span>
        );
      };
    
        
    return (
        <div className="w-auto text-center justify-center mb-9 bg-white rounded-2xl py-[2em] shadow-black shadow-md lg:hover:scale-110 transition-transform duration-300 ">
            <div className="w-full flex justify-center">
                <img src={`/PHP/${props.date.ImagePath}`} alt={props.date.Name} className='w-[200px] h-[160px]' />
            </div>

            <p className=' text-[30px] mb-2 font-bold font-[Almarai]'>{props.date.Name}</p>
            <p><CountryFlag country={props.date.Origin} /></p>
            <p>{props.date.Price} DH</p>
            <button onClick={()=>props.pn(props.date.ID)} className='w-full flex mt-4 items-center justify-center text-center hover:scale-110 transition-transform duration-300 font-bold font-[Almarai]'>
                <FaBasketShopping /> &nbsp; أضف إلى السلة
            </button>
        </div>
    );
}
