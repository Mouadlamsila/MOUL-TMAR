import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  
  const [Action, setAction] = useState(true);
  const Location = useLocation();
  const check = useSelector(state => state.check)
  return (
    <div className="fixed px-3 bg-[#f7efe6] py-3 text-[#4b2d1f] w-full top-0 left-0 mb-[0px]">
      <div className="flex  justify-between  items-center ">

        <div className="font-bold" style={{fontFamily:"Reem Kufi"}}> &#127796; تمر طاجز </div>

        <div className="hidden sm:flex space-x-4">
          <Link className={`${Location.pathname==="/Home" ? "font-bold" :""}`} to="/Home">Home</Link>
          <Link className={`${Location.pathname=== "/About" ? "font-bold" : ""}`} to="/About"  >About</Link>
          <Link className={`${Location.pathname=== "/Service" ? "font-bold" : ""}`} to="/Service">Service</Link>
        </div>

        <button className="flex sm:hidden" onClick={()=>setAction(!Action) }>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>

        <div className="hidden sm:flex space-x-4">

          { Object.keys(check).length === 0 ?<button className="bg-[#3a8e3a] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[2px] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out "> <Link to="/login" >Login</Link> </button>: (
            <button className="bg-[#f39c12] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[2px] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out ">
              <Link to={`/View/${check.id}`} >Profile</Link>
            </button>
          ) }
          
          
        </div>

      </div>
      
      <div className={`${Action ? "hidden" : "" } mt-[2em] sm:hidden space-y-4 h-screen text-center`}>
        <ul className="  space-y-4 ">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
        <ul className=" space-y-4 ">
          
          <li>
          { Object.keys(check).length === 0 ? <button> <Link to="/login">Login</Link> </button>:<button><Link to={`/View/${check.id}`} >Profile</Link></button>}
          </li>
        </ul>
      </div>
    </div>
  );
}
