import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function View() {

  const { id } = useParams();

  const navigate = useNavigate();
  const [view , setView]= useState();
 
 useEffect(()=>{
  axios.post('http://localhost/my-app/public/PHP/users/profile.php' , {id} )
  .then((res)=>{
    if(res.data.status === 'success'){
      setView(res.data.user)

    }
  })
 },[])


 function Modifier(){
  navigate(`/Update/${id}`)
 }

  // Si l'utilisateur n'existe pas
  if (!view) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f7efe6]">
        <p className="text-2xl text-red-600 font-semibold">⚠ Utilisateur non trouvé</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#f7efe6] to-[#e0d7c3]">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg text-end">
        <h1 className="text-3xl font-extrabold text-[#4b2d1f] mb-6 border-b-2 border-[#4b2d1f] pb-3">
          تفاصيل المستخدم
        </h1>
        <div className="space-y-4 w-full font-[Almarai] flex flex-col justify-center items-center">
          <p className="text-lg w-[90%] sm:w-[80%] flex justify-between font-medium text-gray-800">
            <span>{view.firstName}</span>
            <span className="font-bold text-[#3a8e3a]">: الإسم</span>
          </p>
          <p className="text-lg w-[90%] sm:w-[80%] flex justify-between font-medium text-gray-800">
            <span>{view.lastName}</span>
            <span className="font-bold text-[#3a8e3a]">: اللقب</span>
          </p>
          <p className="text-lg w-[90%] sm:w-[80%] flex justify-between font-medium text-gray-800">
            <span>{view.userName}</span>
            <span className="font-bold text-[#3a8e3a]">: اسم المستخدم</span>
          </p>
          <p className="text-lg w-[90%] sm:w-[80%] flex justify-between font-medium text-gray-800">
            <span>{view.phone}</span>
            <span className="font-bold text-[#3a8e3a]">: الرقم الهاتف</span>
          </p>
          <p className="text-lg w-[90%] sm:w-[80%] flex justify-between font-medium text-gray-800">
            <span>{view.email}</span>
            <span className="font-bold text-[#3a8e3a]">: البريد الإلكتروني</span>
          </p>
        </div>

        <div className="flex justify-center w-full mt-[3em]">
          <button
            className="bg-[#4b2d1f] text-[#f7efe6] font-bold px-6 py-2 rounded-full hover:bg-[#3a8e3a] hover:text-white transition-all duration-300 ease-in-out mr-2"
            onClick={() => navigate("/")}
          >
            عودة
          </button>
          <button
          onClick={Modifier} 
            className="bg-[#f39c12] text-white font-bold px-4 py-2 rounded-full hover:bg-[#d35400] transition duration-300"
          >
            تحديث
          </button>
        </div>
      </div>
    </div>
  );
}