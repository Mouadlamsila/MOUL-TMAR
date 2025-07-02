// import React, { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";


// export default function Pass() {

//     const [Username, setUsername] = useState("");
//     const [tel, setTel] = useState(null);
//     const [newPass, setNewPass] = useState("");

//     const check = users.find((user) => user.UserName === Username);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [message, setMessage] = useState('');

//     function Changer() {
//         if (check) {
//             if (newPass.trim()) {
//                 dispatch({
//                     type: "updatePass",
//                     payload: {
//                         idPass: check.id,
//                         newPass: newPass
//                     }
//                 });
//                 navigate("/login");
//             } else {
//                 setMessage("يرجى إدخال كلمة مرور جديدة");
//             }
//         } 
//     }


//     return (
//         <div className="flex h-screen  bg-[#4b2d1f]  text-center text-[#f7efe6]  w-full justify-center items-center ">
//             <div className=" bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-[#4b2d1f]  ">

//                 <h1 className="text-2xl font-bold mb-6 text-[#4b2d1f]">تغيير كلمة السر</h1>

//                 <input type="text" className=" text-end  w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="اسم المستخدم" onChange={(e) => setUsername(e.target.value)} /><br />

//                 {check ?
//                     <div>
//                         <input type="number" className="text-end w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="رقم الهاتف" onChange={(e) => setTel(Number(e.target.value))} /><br />

//                         {check.Numero === tel ?
//                             <div>
//                                 <input type="password" className="text-end w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="كلمة السر جديدة" onChange={(e) => setNewPass(e.target.value)} /><br />
//                                 <button onClick={Changer} className="w-full bg-[#4b2d1f] text-[#f7efe6] py-2 rounded hover:bg-[#3a2318] transition duration-300 font-bold font-[Almarai]" >تغيير</button>
//                                 {message && <p className="font-[Almarai] text-red-500 font-bold mt-3">{message}</p>}

//                             </div>
//                             : <p className="font-[Almarai] text-red-500 font-bold">رقم الهاتف غير متوافق</p>}

//                     </div>

//                     : <p className="font-[Almarai] text-red-500 font-bold">اسم المستخدم غير موجود</p>}




//             </div>
//         </div>
//     )
// }