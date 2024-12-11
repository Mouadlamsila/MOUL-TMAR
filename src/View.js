import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function View() {
  const data = useSelector((state) => state.UserRegister);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // Recherche de l'utilisateur correspondant
  const view = data.find((e) => e.id === parseInt(id));
  function Modifier(){
    dispatch({
        type:"update",
        payload: {id : parseInt(id)}
    })
    navigate(`/Update/${id}`)
  }

  // Si l'utilisateur n'existe pas
  if (!view) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#f7efe6]">
        <p className="text-2xl text-red-600 font-semibold">⚠️ Utilisateur non trouvé</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#f7efe6] to-[#e0d7c3]">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-[#4b2d1f] mb-6 border-b-2 border-[#4b2d1f] pb-3">
          Détails de l'utilisateur
        </h1>
        <div className="space-y-4">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-[#3a8e3a]">Nom:</span> {view.Nom}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-[#3a8e3a]">Prénom:</span> {view.Prenom}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-[#3a8e3a]">Numéro:</span> {view.Numero}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-[#3a8e3a]">Email:</span> {view.Email}
          </p>
        </div>
        <button
          className="mt-6 bg-[#4b2d1f] text-[#f7efe6] font-bold px-6 py-2 rounded-full hover:bg-[#3a8e3a] hover:text-white transition-all duration-300 ease-in-out mr-2"
          onClick={() => window.history.back()}
        >
          Retour
        </button>
        <button
          onClick={Modifier}
          className="mt-4 bg-[#f39c12] text-white font-bold px-4 py-2 rounded hover:bg-[#d35400] transition duration-300"
        >
          Update
        </button>
      </div>
    </div>
  );
}