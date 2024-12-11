import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Update() {
    const selection = useSelector((state) => state.check);
    const navigate = useNavigate();
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
      navigate("/Home");
    }
  
    return (
      <div className="flex h-screen bg-gray-100 text-center w-full justify-center items-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
          <h1 className="text-3xl font-extrabold mb-5 text-gray-800">Modifier Profil</h1>
          <input
            type="text"
            value={newData.Nom}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nom"
            onChange={(e) => setnewData({ ...newData, Nom: e.target.value })}
          />
          <input
            type="text"
            value={newData.Prenom}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Prénom"
            onChange={(e) => setnewData({ ...newData, Prenom: e.target.value })}
          />
          <input
            type="number"
            value={newData.Numero}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Numéro Téléphone"
            onChange={(e) => setnewData({ ...newData, Numero: Number(e.target.value) })}
          />
          <input
            type="email"
            value={newData.Email}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={(e) => setnewData({ ...newData, Email: e.target.value })}
          />
          <button
            onClick={edit}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Modifier
          </button>
        </div>
      </div>
    );
  }
  