import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [action, setAction] = useState(true);
  const [search, setSearch] = useState(false);
  const check = useSelector((state) => state.check);

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
            className={`bg-[#f7efe6] flex px-4 py-3 ${search ? `border-b border-[#333]` : ""} sm:flex hidden focus-within:border-black-500 overflow-hidden max-w-md mx-auto font-[sans-serif]`}
          >
            <div className="flex items-center justify-between gap-[30px]">
              {/* Search Icon */}
              {search ? "" :<svg
                onClick={() => setSearch(!search)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="25px" 
                className="fill-gray-600 mr-3"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>}

              {/* Title */}
              {search ? "" : <Link to="/"><p className="text-[19px] font-[Almarai]">القائمة الرئيسية</p></Link>}

                {/* Close Search Icon */}
              {search && (
                <svg
                  onClick={() => setSearch(!search)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}

              {/* Toggle Search Input */}
              {search && (
                <input
                  type="search"
                  placeholder="..."
                  className="w-full bg-[#f7efe6] outline-none text-sm text-end"
                />
              )}

              
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

       {/*tili search */}
          <div
            className={`bg-[#f7efe6] flex px-4 py-3 ${search ? `border-b border-[#333]` : ""} flex sm:hidden focus-within:border-black-500 overflow-hidden max-w-md mx-auto font-[sans-serif]`}
          >
            <div className="flex items-center justify-between gap-[10px]">
              {/* Search Icon */}
              {search ? "" :<svg
                onClick={() => setSearch(!search)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="18px" 
                className="fill-gray-600 mr-3"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>}

              {/* Title */}
              {search ? "" : <Link to="/"><p className="text-[19px] font-[Almarai]">القائمة الرئيسية</p></Link>}

                {/* Close Search Icon */}
              {search && (
                <svg
                  onClick={() => setSearch(!search)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}

              {/* Toggle Search Input */}
              {search && (
                <input
                  type="search"
                  placeholder="..."
                  className="w-[80px] bg-[#f7efe6] outline-none text-sm text-end"
                />
              )}

              
            </div>
          </div>
        


        {/* Brand Name */}
        <div className="font-bold text-[30px]" style={{ fontFamily: "Reem Kufi" }}>
          &#127796; تمر طاجز
        </div>
        
      </div>
      <div>
        
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          action ? "hidden" : ""
        } mt-[2em] sm:hidden space-y-4 h-screen text-center`}
      >
        
        <ul className="space-y-4">
          <li onClick={() => setAction(!action)}><Link to="/"><p className="text-[19px] font-[Almarai]">القائمة الرئيسية</p></Link></li>
    
        </ul>
        <ul className="space-y-4">
          <li>
            {Object.keys(check).length === 0 ? (
              <button onClick={() => setAction(!action)}>
                <Link to="/login" className="font-[Almarai]">تسجيل الدخول </Link>
              </button>
            ) : (
              <button onClick={() => setAction(!action)}>
                <Link to={`/View/${check.id}`} className="font-[Almarai]">الحساب</Link>
              </button>
            )}
          </li>
          <li>
            {Object.keys(check).length > 0 && (
              <button onClick={logout}>
                <Link to="/login" className="font-[Almarai]">تسجيل الخروج</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
