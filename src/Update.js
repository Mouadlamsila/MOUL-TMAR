import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";


export default function Update() {
  const { id } = useParams()
  const formData = new FormData();

  const navigate = useNavigate();
  const [view, setView] = useState();
  const [message, setMessage] = useState();

  function edit() {
    if(!view.newPassword){
      formData.append('newPassword' , view.password)
    }
    for (const [key, value] of Object.entries(view)) {
      formData.append(key, value);
    }
    axios.post('http://localhost/my-app/public/PHP/users/update.php', formData)
    .then((res) => {
      if (res.data.status === 'success') {
        navigate(`/View/${id}`)
      }else{
        setMessage(res.data.message)
      }
    })
    
  }
  console.log(view)

  useEffect(() => {
    axios.post('http://localhost/my-app/public/PHP/users/profile.php', { id })
      .then((res) => {
        if (res.data.status === 'success') {
          setView(res.data.user)
        }
      })
  }, [])


  return (
    <div className="flex h-screen bg-gray-100 pt-16 sm:pt-0 text-center w-full justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-5 text-gray-800">تفاصيل المستخدم</h1>
        <input
          type="text"
          defaultValue={view?.firstName}
          className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="الاسم"
          onChange={(e) => setView({ ...view, firstName: e.target.value })}
        />
        <input
          type="text"
          defaultValue={view?.lastName}
          className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="الاسم الأول"
          onChange={(e) => setView({ ...view, lastName: e.target.value })}
        />
        <input
          type="text"
          defaultValue={view?.userName}
          className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="الاسم الأول"
          onChange={(e) => setView({ ...view, userName: e.target.value })}
        />
        <input
          type="number"
          defaultValue={view?.phone}
          className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="رقم الهاتف"
          onChange={(e) => setView({ ...view, phone: Number(e.target.value) })}
        />
        <input
          type="email"
          defaultValue={view?.email}
          className="w-full text-end p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="البريد الإلكتروني"
          onChange={(e) => setView({ ...view, email: e.target.value })}
        />
        <input
          type="password"
          
          className="w-full text-end p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="كلمة السر الخاص بك"
          onChange={(e) => setView({ ...view, password: e.target.value })}
        />
        <input
          type="password"
          
          className="w-full text-end p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="كلمة السر جديدة"
          onChange={(e) => setView({ ...view, newPassword: e.target.value })} 
        />
        <button
          onClick={edit}
          className="w-full bg-[#3a8e3a] text-white py-3 font-bold font-[Almarai] rounded-lg hover:bg-[#6BBF59] transition duration-300"
        >
          تعديل
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}