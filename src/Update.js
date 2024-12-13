import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Update() {
    const selection = useSelector((state) => state.check);
    const navigate = useNavigate();
    const id = useSelector(state => state.idx);
    const [newData, setnewData] = useState({
      Nom: selection.Nom,
      Prenom: selection.Prenom,
      Numero: selection.Numero,
      Email: selection.Email,
      Password: selection.Password,
    });
    const dispatch = useDispatch();
  
    function edit() {
      dispatch({
        type: "edit",
        payload: {
          userUpdate: newData,
        },
      });
      navigate(`/View/${id}`)
    }
  useEffect(()=>{
    if(selection === ""){
      navigate("/login")
    }
  })
    return (
      <div className="flex h-screen bg-gray-100 text-center w-full justify-center items-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
          <h1 className="text-3xl font-extrabold mb-5 text-gray-800">تفاصيل المستخدم</h1>
          <input
            type="text"
            value={newData.Nom}
            className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="الاسم"
            onChange={(e) => setnewData({ ...newData, Nom: e.target.value })}
          />
          <input
            type="text"
            value={newData.Prenom}
            className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="الاسم الأول"
            onChange={(e) => setnewData({ ...newData, Prenom: e.target.value })}
          />
          <input
            type="number"
            value={newData.Numero}
            className="w-full p-3 mb-4 text-end border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="رقم الهاتف"
            onChange={(e) => setnewData({ ...newData, Numero: Number(e.target.value) })}
          />
          <input
            type=""
            value={newData.Email}
            className="w-full text-end p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="البريد الإلكتروني"
            onChange={(e) => setnewData({ ...newData, Email: e.target.value })}
          />
          <button
            onClick={edit}
            className="w-full bg-[#3a8e3a] text-white py-3 font-bold font-[Almarai] rounded-lg hover:bg-[#6BBF59] transition duration-300"
          >
            تعديل
          </button>
        </div>
      </div>
    );
}