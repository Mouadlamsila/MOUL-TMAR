import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [action, setAction] = useState(true);
  const check = useSelector((state) => state.check);
  const locate = useLocation();
  function logout() {
    setAction(!action);
    dispatch({
      type: "logout",
    });
  }

  return (
    <div className="fixed px-3 bg-[#f7efe6] py-3 text-[#4b2d1f] w-full top-0 left-0 mb-[0px] z-50">
      <div className="flex justify-between items-center">
        {/* Desktop Header */}
        <div className="hidden sm:flex space-x-4">
          {/* Login/Account Button */}
          {Object.keys(check).length === 0 ? (
            <button className="bg-[#3a8e3a] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out">
              <Link to="/login" className="font-[Almarai]">تسجيل الدخول </Link>
            </button>
          ) : (
            <button className="bg-[#f39c12] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out">
              <Link to={`/View/${check.id}`} className="font-[Almarai]">الحساب</Link>
            </button>
          )}

          {/* Logout Button */}
          {Object.keys(check).length > 0 && (
            <button
              onClick={logout}
              className="bg-[#f7efe6] text-[#4b2d1f] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#4b2d1f] hover:bg-[#4b2d1f] hover:border-[#f7efe6] hover:text-[#f7efe6] transition duration-[0.6s] ease-in-out"
            >
              <Link to="/login" className="font-[Almarai]">تسجيل الخروج</Link>
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex space-x-4">
          <div
            className={`bg-[#f7efe6] flex px-4 py-3 sm:flex hidden focus-within:border-black-500 overflow-hidden max-w-md mx-auto font-[sans-serif]`}
          >
            <div className="flex items-center justify-between gap-[30px]">

              {locate.pathname === "/" ?
                <p className="text-[25px] font-bold text-[#f7efe6] font-[Almarai]">القائمة الرئيسية</p>
                :
                <Link to="/"><p className="text-[25px] font-bold  font-[Almarai]">القائمة الرئيسية</p></Link>

              }

            </div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="flex sm:hidden" onClick={() => setAction(!action)}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>





        {/* Brand Name */}
        <div className="font-bold text-[30px] cursor-pointer" style={{ fontFamily: "Reem Kufi" }}>
          <Link to="/">
            &#127796;  مـُـول الـتّــمـر
          </Link>
        </div>

      </div>












      {/* Mobile Navigation Menu */}
      <div
        className={`${action ? "hidden" : ""
          } mt-[2em] sm:hidden space-y-4 h-screen text-center`}
      >

        <ul className="space-y-4">
          <li onClick={() => setAction(!action)}><Link to="/"><p className="text-[19px] font-[Almarai] font-bold">القائمة الرئيسية</p></Link></li>

        </ul>
        <ul className="space-y-4">
          <li>
            {Object.keys(check).length === 0 ? (
              <button onClick={() => setAction(!action)} className="bg-[#3a8e3a] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out">
                <Link to="/login" className="font-[Almarai]">تسجيل الدخول </Link>
              </button>
            ) : (
              <button onClick={() => setAction(!action)} className="bg-[#f39c12] text-[#f7efe6] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#f7efe6] hover:bg-[#f7efe6] hover:border-[#3a8e3a] hover:text-[#3a8e3a] transition duration-[0.6s] ease-in-out">
                <Link to={`/View/${check.id}`} className="font-[Almarai]">الحساب</Link>
              </button>
            )}
          </li>
          <li>
            {Object.keys(check).length > 0 && (
              <button onClick={logout} className="bg-[#f7efe6] text-[#4b2d1f] font-bold px-[20px] py-[8px] rounded border-[2px] border-[#4b2d1f] hover:bg-[#4b2d1f] hover:border-[#f7efe6] hover:text-[#f7efe6] transition duration-[0.6s] ease-in-out">
                <Link to="/login" className="font-[Almarai]">تسجيل الخروج</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
