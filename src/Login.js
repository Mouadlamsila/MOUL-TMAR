import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
    
    
    const[login , setLogin] = useState({ UserName:"" , Password:""  })
    const user = useSelector(state => state.UserRegister)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg ,setmsg]=useState("")

    function Login(){
        if(login.UserName && login.Password){
            const finded = user.find((e)=> e.UserName === login.UserName && e.Password === login.Password)
            if(finded){
                dispatch({
                    type:"login",
                    payload : {finded},
                })
                if(finded.Role === "admin"){
                    navigate("/Table")
                }else{
                    navigate("/")
                }
                
            }else{
                setmsg("⚠️كلمة المرور أو اسم المستخدم غير صحيح")
            }

        }else{
            setmsg( `⚠️يجب ملء جميع الحقول ` )
        }
    }

    
    return(
        <div className="flex h-screen  bg-[#4b2d1f]  text-center text-[#f7efe6]  w-full justify-center items-center ">
            <div className=" bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-[#4b2d1f]  ">
                
                    <h1 className="text-2xl font-bold mb-6 text-[#4b2d1f]">تسجيل الدخول</h1>
                    <input type="text" className=" text-end  w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="اسم المستخدم"  onChange={(e)=>setLogin({...login, UserName:e.target.value})} /><br/>
                    <input type="password" className="text-end w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="كلمة المرور" onChange={(e)=>setLogin({...login , Password:e.target.value})}/><br/>
                    <div className="">
                    <button onClick={Login} className="text-center w-full bg-[#4b2d1f] text-[#f7efe6] py-2 rounded hover:bg-[#3a2318] transition duration-300 font-[Almarai]" >تسجيل الدخول</button><br/>
                    <button className="text-[#4b2d1f] underline hover:text-[#3a2318] transition duration-300 mt-3"  > <Link to="/ForgetPass" className="font-[Almarai]">  نسيت كلمة السر ؟  </Link></button><br/>
                    <button className="text-[#4b2d1f] underline hover:text-[#3a2318] transition duration-300 mt-3"  > <Link to="/siginup" className="font-[Almarai]">  إنشاء حساب</Link></button><label className="mt-4 text-sm text-gray-600"> ليس لدي حساب ؟  </label><br/>
                    {msg && <p  className='text-red-500 mt-2'>{msg}</p>}
                    </div>
                    
                
            </div>
        </div>
    )
}