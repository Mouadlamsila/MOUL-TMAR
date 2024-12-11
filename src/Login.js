import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login(){
    
    const [action , setaction] = useState(false)
    const[login , setLogin] = useState({ UserName:"" , Password:""  })
    const[Register , setRegister] = useState({Nom : "" , Prenom : "" , Numero :0 , Email : "" , Password : "" } )
    const user = useSelector(state => state.UserRegister)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg ,setmsg]=useState("")

    function Login(){
        if(login.UserName && login.Password){
            const finded = user.find((e)=> e.Nom === login.UserName && e.Password === login.Password)
            if(finded){
                dispatch({
                    type:"login",
                    payload : {finded},
                })
                navigate("/Home")
            }else{
                setmsg("⚠️ Utilisateur non trouvé")
            }

        }else{
            setmsg("⚠️ remplire les champs")
        }
    }

    function register(){
        dispatch(
            {
                type:"register",
                payload:{Register},
            }
        )
        setaction(!action);
        navigate("/login")
    }
    return(
        <div className="flex h-screen  bg-[#4b2d1f]  text-center text-[#f7efe6]  w-full justify-center items-center ">
            <div className=" bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-[#4b2d1f] ">
                <div className={`${action ? "hidden" : ""} `}>
                    <h1 className="text-2xl font-bold mb-6 text-[#4b2d1f]">Login</h1>
                    <input type="text" className="  w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="UserName"  onChange={(e)=>setLogin({...login, UserName:e.target.value})} /><br/>
                    <input type="password" className=" w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="Password" onChange={(e)=>setLogin({...login , Password:e.target.value})}/><br/>
                    <div className="">
                    <button onClick={Login} className="w-full bg-[#4b2d1f] text-[#f7efe6] py-2 rounded hover:bg-[#3a2318] transition duration-300" >Login</button><br/>
                    {msg && <p>{msg}</p>}
                    <label className="mt-4 text-sm text-gray-600">Je n'ai pas de compte ?  </label><button className="text-[#4b2d1f] underline hover:text-[#3a2318] transition duration-300" onClick={()=> setaction(!action)} > <Link to="/siginup">Register</Link></button><br/>
                    </div>
                    
                </div>
                <div className={`${action ? "" : "hidden"}`}>
                <h1 className="text-2xl  font-bold mb-3 text-[#4b2d1f]">Register</h1>
                    <input type="text" className=" p-1 w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="Nom"  onChange={(e)=> setRegister({...Register , Nom :e.target.value}) }/><br/>
                    <input type="text" className=" p-1 w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]"  placeholder="Prenom"  onChange={(e)=> setRegister({...Register , Prenom : e.target.value})}/><br/>
                    <input type="number" className=" p-1 w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="Numero Téléphonne" onChange={(e)=> setRegister({...Register , Numero :Number(e.target.value)})}/><br/>
                    <input type="email" className=" p-1 w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="Email" onChange={(e)=> setRegister({...Register , Email :e.target.value})}/><br/>
                    <input type="password" className=" p-1 w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4b2d1f]" placeholder="Password" onChange={(e)=> setRegister({...Register , Password :e.target.value})}/><br/>
                    <div className=" text-[#f7efe6] e">
                    <button onClick={register} className="w-full bg-[#4b2d1f] text-[#f7efe6] py-2 rounded hover:bg-[#3a2318] transition duration-300">Register</button><br/>
                    <label  className="mt-4  mr-1 text-sm text-gray-600">J'ai déjà un compte ?  </label>  <button className="text-[#4b2d1f] underline hover:text-[#3a2318] transition duration-300"  onClick={()=> setaction(!action)}> <Link to="/login">Login</Link></button><br/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
} 